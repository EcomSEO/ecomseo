#!/usr/bin/env node
/**
 * Patch each tool page's ToolPreviewSection imgWidth/imgHeight props
 * to match the actual screenshot dimensions on disk.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const TOOLS_DIR = "/Users/dimitargeorgiev/local/ecomseo/src/app/[locale]/tools";
const IMG_DIR = "/Users/dimitargeorgiev/local/ecomseo/public/images/tools";

function getDims(file) {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight "${file}"`, { encoding: "utf8" });
    const w = out.match(/pixelWidth:\s*(\d+)/)?.[1];
    const h = out.match(/pixelHeight:\s*(\d+)/)?.[1];
    return w && h ? { w: parseInt(w, 10), h: parseInt(h, 10) } : null;
  } catch {
    return null;
  }
}

const slugs = fs
  .readdirSync(TOOLS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let updated = 0;
const missing = [];

for (const slug of slugs) {
  const pageFile = path.join(TOOLS_DIR, slug, "page.tsx");
  const imgFile = path.join(IMG_DIR, `${slug}-preview.png`);

  if (!fs.existsSync(pageFile)) continue;
  if (!fs.existsSync(imgFile)) {
    missing.push(slug);
    continue;
  }
  const dims = getDims(imgFile);
  if (!dims) {
    missing.push(slug);
    continue;
  }

  let src = fs.readFileSync(pageFile, "utf8");

  // Match the ToolPreviewSection block and patch imgWidth/imgHeight for THIS slug.
  // We only patch the occurrence whose src path matches the current slug.
  const srcPath = `/images/tools/${slug}-preview.png`;
  if (!src.includes(srcPath)) {
    missing.push(`${slug} (no ToolPreviewSection with matching src)`);
    continue;
  }

  // Find the block from src=... up to its closing />, then replace dims inside.
  const regex = new RegExp(
    String.raw`(src="${srcPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\s\S]*?imgWidth=\{)(\d+)(\}[\s\S]*?imgHeight=\{)(\d+)(\})`,
    "m"
  );
  const after = src.replace(regex, (_m, p1, _w, p3, _h, p5) => `${p1}${dims.w}${p3}${dims.h}${p5}`);

  if (after !== src) {
    fs.writeFileSync(pageFile, after);
    updated++;
    console.log(`✓ ${slug}  ${dims.w}×${dims.h}`);
  }
}

console.log(`\nDone. Updated: ${updated}`);
if (missing.length) {
  console.log(`Missing screenshots or failed: ${missing.length}`);
  missing.forEach((s) => console.log(`  - ${s}`));
}
