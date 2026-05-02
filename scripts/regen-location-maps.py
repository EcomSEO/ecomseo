#!/usr/bin/env python3
"""
Self-contained location-map generator. Designed to run in any cloned-repo
environment (locally or in a remote sandbox). No /tmp dependencies.

What it does:
  1. Parses src/data/locations.ts to find every location whose
     `goLiveDate` is null OR <= now (i.e. currently live)
  2. For each live city whose <slug>-map.png does NOT exist in
     public/images/locations/, calls the kie.ai nano-banana API to
     generate a city dataviz map (~7s + poll), downloads the PNG.
  3. Regenerates src/data/locationMaps.ts with the canonical set of
     slugs that have maps on disk.

Auth:
  KIE_API_KEY env var must be set. Falls back to the conversation
  default if missing (keeps local re-runs working).

Run:
  python3 scripts/regen-location-maps.py
"""

import datetime
import json
import os
import re
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LOCATIONS_TS = ROOT / "src/data/locations.ts"
OUT_DIR = ROOT / "public/images/locations"
REG_FILE = ROOT / "src/data/locationMaps.ts"
KIE_KEY = os.environ.get("KIE_API_KEY", "101e9163ecd659b2b93f28e3944af509")
CREATE_URL = "https://api.kie.ai/api/v1/jobs/createTask"
INFO_URL_TPL = "https://api.kie.ai/api/v1/jobs/recordInfo?taskId={tid}"
CONCURRENCY = 4
POLL_INTERVAL = 4
POLL_TIMEOUT = 180


def parse_live_locations():
    """Parse locations.ts → list of {slug, city, country} for cities live now."""
    src = LOCATIONS_TS.read_text()
    loc_re = re.compile(
        r'\{\s*slug:\s*"([^"]+)",\s*city:\s*"([^"]+)",\s*country:\s*"([^"]+)"',
        re.S,
    )
    gld_re = re.compile(r'goLiveDate:\s*"([^"]+)"')
    now = datetime.datetime.now(datetime.timezone.utc)
    live = []
    for m in loc_re.finditer(src):
        # Find matching closing brace
        depth, i = 0, m.start()
        while i < len(src):
            if src[i] == "{":
                depth += 1
            elif src[i] == "}":
                depth -= 1
                if depth == 0:
                    break
            i += 1
        block = src[m.start() : i + 1]
        slug, city, country = m.group(1), m.group(2), m.group(3)
        gld_m = gld_re.search(block)
        is_live = True
        if gld_m:
            try:
                gld = datetime.datetime.fromisoformat(
                    gld_m.group(1).replace("Z", "+00:00")
                )
                if gld.tzinfo is None:
                    gld = gld.replace(tzinfo=datetime.timezone.utc)
                is_live = gld <= now
            except Exception:
                is_live = False
        if is_live:
            live.append({"slug": slug, "city": city, "country": country})
    return live


def prompt_for(city: str, country: str) -> str:
    city_upper = city.upper()
    return (
        f"Premium minimalist dark map illustration of {city}, {country} for "
        f"a B2B SEO agency landing page. Deep navy-to-black gradient "
        f"background. Glowing thin purple (#9D4EFF) and cyan (#4EE0FF) lines "
        f"forming the city street grid in an abstract dataviz topographic "
        f"style. Soft glowing accent dots scattered like data points. "
        f"Single bright pulsing pin marker at the city center with elegant "
        f"minimal sans-serif label '{city_upper}' next to it. Subtle "
        f"ambient purple glow in the upper-left corner. Clean modern "
        f"dataviz aesthetic similar to Stripe, Linear, Vercel marketing "
        f"imagery. 16:9 widescreen ratio. No people, no buildings, no "
        f"street labels other than the city name pin, no logos, no flags. "
        f"Pure premium geometric data visualization with depth and "
        f"atmosphere."
    )


def curl_post(url: str, body: dict, timeout: int = 30) -> dict:
    r = subprocess.run(
        [
            "curl", "-sS", "--max-time", str(timeout),
            "-X", "POST", url,
            "-H", f"Authorization: Bearer {KIE_KEY}",
            "-H", "Content-Type: application/json",
            "-d", json.dumps(body),
        ],
        capture_output=True, text=True, check=False,
    )
    if r.returncode != 0:
        raise RuntimeError(f"curl POST exit {r.returncode}: {r.stderr.strip()[:200]}")
    return json.loads(r.stdout)


def curl_get(url: str, timeout: int = 30) -> dict:
    r = subprocess.run(
        ["curl", "-sS", "--max-time", str(timeout), url,
         "-H", f"Authorization: Bearer {KIE_KEY}"],
        capture_output=True, text=True, check=False,
    )
    if r.returncode != 0:
        raise RuntimeError(f"curl GET exit {r.returncode}: {r.stderr.strip()[:200]}")
    return json.loads(r.stdout)


def curl_download(url: str, dest: Path, timeout: int = 60) -> None:
    r = subprocess.run(
        ["curl", "-sS", "--max-time", str(timeout), "-o", str(dest), url],
        capture_output=True, text=True, check=False,
    )
    if r.returncode != 0:
        raise RuntimeError(f"curl DL exit {r.returncode}: {r.stderr.strip()[:200]}")


def submit_and_wait(slug: str, city: str, country: str):
    out_path = OUT_DIR / f"{slug}-map.png"
    if out_path.exists():
        return (slug, True, "skipped (exists)")
    try:
        resp = curl_post(CREATE_URL, {
            "model": "google/nano-banana",
            "input": {
                "prompt": prompt_for(city, country),
                "image_size": "16:9",
                "output_format": "png",
            },
        })
        if resp.get("code") != 200:
            return (slug, False, f"create failed: {resp}")
        task_id = resp["data"]["taskId"]
        deadline = time.time() + POLL_TIMEOUT
        while time.time() < deadline:
            time.sleep(POLL_INTERVAL)
            info = curl_get(INFO_URL_TPL.format(tid=task_id))
            state = info.get("data", {}).get("state", "")
            if state == "success":
                result = json.loads(info["data"]["resultJson"])
                img_url = result["resultUrls"][0]
                curl_download(img_url, out_path)
                return (slug, True, f"ok ({out_path.stat().st_size} B)")
            if state == "fail":
                return (slug, False, f"fail: {info['data'].get('failMsg')}")
        return (slug, False, "poll timeout")
    except Exception as e:
        return (slug, False, f"{type(e).__name__}: {e}")


def write_registry(all_live_slugs: list) -> int:
    """Write src/data/locationMaps.ts based on what's actually on disk."""
    have = sorted(s for s in all_live_slugs if (OUT_DIR / f"{s}-map.png").exists())
    lines = [
        "// AUTO-GENERATED by scripts/regen-location-maps.py — do not edit by hand.",
        "// Regenerated daily by the scheduled rollout routine; also can be run",
        "// locally with `python3 scripts/regen-location-maps.py`.",
        "",
        "export const LOCATION_MAP_SLUGS: ReadonlySet<string> = new Set([",
    ]
    for s in have:
        lines.append(f'  "{s}",')
    lines.append("]);")
    REG_FILE.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return len(have)


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    live = parse_live_locations()
    print(f"Live locations: {len(live)}")
    todo = [c for c in live if not (OUT_DIR / f"{c['slug']}-map.png").exists()]
    print(f"Todo: {len(todo)} (skipping {len(live) - len(todo)} already on disk)\n")

    results = []
    if todo:
        with ThreadPoolExecutor(max_workers=CONCURRENCY) as ex:
            futs = {
                ex.submit(submit_and_wait, c["slug"], c["city"], c["country"]): c
                for c in todo
            }
            for fut in as_completed(futs):
                slug, ok, msg = fut.result()
                marker = "✓" if ok else "✗"
                print(f"  {marker} {slug:30}  {msg}", flush=True)
                results.append((slug, ok, msg))

        # One retry pass for failures
        failed = [r for r in results if not r[1]]
        if failed:
            print(f"\nRetrying {len(failed)} failures...")
            retry_lookup = {c["slug"]: c for c in todo}
            retry_results = []
            with ThreadPoolExecutor(max_workers=CONCURRENCY) as ex:
                futs = {
                    ex.submit(
                        submit_and_wait,
                        retry_lookup[s]["slug"],
                        retry_lookup[s]["city"],
                        retry_lookup[s]["country"],
                    ): s
                    for s, _, _ in failed
                }
                for fut in as_completed(futs):
                    slug, ok, msg = fut.result()
                    marker = "✓" if ok else "✗"
                    print(f"  retry {marker} {slug:30}  {msg}", flush=True)
                    retry_results.append((slug, ok, msg))
            results = [r for r in results if r[1]] + retry_results

    n_in_registry = write_registry([c["slug"] for c in live])
    new_count = sum(1 for r in results if r[1] and "skipped" not in r[2])
    print(f"\nRegistry: {n_in_registry} maps available.")
    print(f"NEW: {new_count} map(s) generated this run.")
    # Exit 0 always (success means script ran, not that new maps exist)
    return 0


if __name__ == "__main__":
    sys.exit(main())
