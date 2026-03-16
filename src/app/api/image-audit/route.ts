import { NextResponse } from "next/server";

/* ── Types ────────────────────────────────────────────────────────────── */

interface ImageResult {
  src: string;
  alt: string | null;
  width: string | null;
  height: string | null;
  loading: string | null;
  srcset: string | null;
  sizes: string | null;
  fileExtension: string;
  isModernFormat: boolean;
  estimatedSize: string | null;
  estimatedSizeBytes: number | null;
  isCDN: boolean;
  cdnProvider: string | null;
  issues: { message: string; severity: "critical" | "warning" | "info" }[];
}

interface ImageAuditResult {
  url: string;
  images: ImageResult[];
  stats: {
    total: number;
    missingAlt: number;
    emptyAlt: number;
    missingLazyLoad: number;
    oldFormat: number;
    missingDimensions: number;
    onCDN: number;
    withSrcset: number;
    genericAlt: number;
    longAlt: number;
    nonSeoFilename: number;
    oversized: number;
  };
  score: number;
}

/* ── Helpers ──────────────────────────────────────────────────────────── */

const CDN_PATTERNS: { pattern: RegExp; name: string }[] = [
  { pattern: /cloudflare/i, name: "Cloudflare" },
  { pattern: /cdn\.shopify\.com/i, name: "Shopify CDN" },
  { pattern: /cloudfront\.net/i, name: "CloudFront" },
  { pattern: /akamai/i, name: "Akamai" },
  { pattern: /fastly/i, name: "Fastly" },
  { pattern: /imgix/i, name: "imgix" },
  { pattern: /cloudinary/i, name: "Cloudinary" },
  { pattern: /bunny\.net|b-cdn\.net/i, name: "BunnyCDN" },
  { pattern: /jsdelivr/i, name: "jsDelivr" },
  { pattern: /twimg\.com/i, name: "Twitter CDN" },
  { pattern: /fbcdn\.net/i, name: "Facebook CDN" },
  { pattern: /googleusercontent\.com/i, name: "Google CDN" },
  { pattern: /wp\.com|i[0-3]\.wp\.com/i, name: "WordPress CDN" },
  { pattern: /images\.unsplash\.com/i, name: "Unsplash" },
  { pattern: /res\.cloudinary\.com/i, name: "Cloudinary" },
  { pattern: /cdn\./i, name: "CDN" },
];

const GENERIC_ALT_PATTERNS = [
  /^image$/i,
  /^photo$/i,
  /^picture$/i,
  /^img$/i,
  /^banner$/i,
  /^icon$/i,
  /^logo$/i,
  /^thumbnail$/i,
  /^placeholder$/i,
  /^untitled$/i,
  /^default$/i,
  /^DSC[_\-]?\d+/i,
  /^IMG[_\-]?\d+/i,
  /^Screenshot/i,
  /^image\s*\d+$/i,
  /^photo\s*\d+$/i,
  /^\d+$/,
];

function getExtension(src: string): string {
  try {
    const pathname = new URL(src, "https://placeholder.com").pathname.toLowerCase();
    const lastSegment = pathname.split("/").pop() ?? "";
    const dotIndex = lastSegment.lastIndexOf(".");
    if (dotIndex === -1) return "unknown";
    const ext = lastSegment.slice(dotIndex + 1).split("?")[0];
    if (["webp", "avif", "svg", "png", "gif", "jpg", "jpeg", "bmp", "ico", "tiff", "tif", "heic"].includes(ext)) return ext;
    return "unknown";
  } catch {
    return "unknown";
  }
}

function isModernFormat(ext: string): boolean {
  return ["webp", "avif"].includes(ext);
}

function isLegacyFormat(ext: string): boolean {
  return ["jpg", "jpeg", "png", "gif", "bmp", "tiff", "tif"].includes(ext);
}

function detectCDN(src: string): { isCDN: boolean; cdnProvider: string | null } {
  for (const { pattern, name } of CDN_PATTERNS) {
    if (pattern.test(src)) {
      return { isCDN: true, cdnProvider: name };
    }
  }
  return { isCDN: false, cdnProvider: null };
}

function isSeoFriendlyFilename(src: string): boolean {
  try {
    const pathname = new URL(src, "https://placeholder.com").pathname;
    const filename = pathname.split("/").pop() ?? "";
    const name = filename.split(".")[0];
    if (!name) return true;
    // Filenames with hashes, UUIDs, or random strings
    if (/^[a-f0-9]{16,}$/i.test(name)) return false;
    if (/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(name)) return false;
    // Filenames like IMG_1234, DSC_5678
    if (/^(IMG|DSC|DSCN|DCIM|Screenshot|Screen Shot|Capture)[_\-\s]?\d+/i.test(name)) return false;
    // Filenames that are just numbers
    if (/^\d+$/.test(name)) return false;
    // Base64-like long filenames
    if (name.length > 50 && /[A-Za-z0-9+/=]{50,}/.test(name)) return false;
    return true;
  } catch {
    return true;
  }
}

function isGenericAlt(alt: string): boolean {
  const trimmed = alt.trim();
  return GENERIC_ALT_PATTERNS.some((p) => p.test(trimmed));
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getAttr(tag: string, attr: string): string | null {
  // Handles both single and double quotes, and unquoted values
  const regex = new RegExp(`\\b${attr}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|(\\S+))`, "i");
  const m = tag.match(regex);
  if (!m) return null;
  return m[1] ?? m[2] ?? m[3] ?? null;
}

function hasAttr(tag: string, attr: string): boolean {
  return new RegExp(`\\b${attr}\\s*=`, "i").test(tag);
}

/* ── Image extraction ─────────────────────────────────────────────────── */

function parseImages(html: string, pageUrl: string): Omit<ImageResult, "estimatedSize" | "estimatedSizeBytes" | "issues">[] {
  const images: Omit<ImageResult, "estimatedSize" | "estimatedSizeBytes" | "issues">[] = [];
  const imgRegex = /<img\s[^>]*?>/gi;
  let match: RegExpExecArray | null;

  while ((match = imgRegex.exec(html)) !== null) {
    const tag = match[0];

    const rawSrc = getAttr(tag, "src");
    if (!rawSrc || rawSrc.startsWith("data:")) continue;

    let resolvedSrc = rawSrc;
    try {
      resolvedSrc = new URL(rawSrc, pageUrl).href;
    } catch {
      resolvedSrc = rawSrc;
    }

    const altValue = hasAttr(tag, "alt") ? (getAttr(tag, "alt") ?? "") : null;
    const width = getAttr(tag, "width");
    const height = getAttr(tag, "height");
    const loading = getAttr(tag, "loading");
    const srcset = getAttr(tag, "srcset");
    const sizes = getAttr(tag, "sizes");
    const fileExtension = getExtension(resolvedSrc);
    const { isCDN, cdnProvider } = detectCDN(resolvedSrc);

    images.push({
      src: resolvedSrc,
      alt: altValue,
      width,
      height,
      loading,
      srcset: srcset ? srcset.slice(0, 200) : null,
      sizes: sizes ? sizes.slice(0, 200) : null,
      fileExtension,
      isModernFormat: isModernFormat(fileExtension),
      isCDN,
      cdnProvider,
    });
  }

  return images;
}

/* ── File size via HEAD ──────────────────────────────────────────────── */

async function getFileSize(url: string): Promise<number | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Image Auditor/2.0)",
      },
    });
    clearTimeout(timeout);
    const cl = res.headers.get("content-length");
    return cl ? parseInt(cl, 10) : null;
  } catch {
    return null;
  }
}

/* ── Issue detection ──────────────────────────────────────────────────── */

function detectIssues(
  img: Omit<ImageResult, "issues">,
  index: number,
): { message: string; severity: "critical" | "warning" | "info" }[] {
  const issues: { message: string; severity: "critical" | "warning" | "info" }[] = [];

  // Alt text issues
  if (img.alt === null) {
    issues.push({ message: "Missing alt attribute", severity: "critical" });
  } else if (img.alt.length === 0) {
    issues.push({ message: "Empty alt text (OK only for decorative images)", severity: "warning" });
  } else {
    if (img.alt.length > 125) {
      issues.push({ message: `Alt text too long (${img.alt.length} chars, recommended max 125)`, severity: "warning" });
    }
    if (isGenericAlt(img.alt)) {
      issues.push({ message: `Generic alt text "${img.alt}" - use descriptive text`, severity: "warning" });
    }
  }

  // Filename
  if (!isSeoFriendlyFilename(img.src)) {
    issues.push({ message: "Non-SEO-friendly filename (use descriptive, hyphenated names)", severity: "warning" });
  }

  // Format
  if (isLegacyFormat(img.fileExtension)) {
    issues.push({ message: `Using ${img.fileExtension.toUpperCase()} instead of WebP/AVIF`, severity: "info" });
  }

  // Lazy loading - first 2 images should NOT be lazy (above fold), rest should
  if (index < 2) {
    if (img.loading === "lazy") {
      issues.push({ message: "Above-fold image should not use loading=\"lazy\"", severity: "info" });
    }
  } else {
    if (img.loading !== "lazy") {
      issues.push({ message: "Missing loading=\"lazy\" for below-fold image", severity: "warning" });
    }
  }

  // Dimensions
  if (!img.width || !img.height) {
    issues.push({ message: "Missing width/height attributes (CLS risk)", severity: "warning" });
  }

  // Responsive
  if (!img.srcset) {
    issues.push({ message: "Missing srcset for responsive images", severity: "info" });
  }

  // CDN
  if (!img.isCDN) {
    issues.push({ message: "Not served from a CDN", severity: "info" });
  }

  // File size
  if (img.estimatedSizeBytes !== undefined && img.estimatedSizeBytes !== null && img.estimatedSizeBytes > 200 * 1024) {
    issues.push({ message: `Large file size (${formatBytes(img.estimatedSizeBytes)}) - consider compressing`, severity: "warning" });
  }

  return issues;
}

/* ── Score calculation ────────────────────────────────────────────────── */

function calculateScore(images: ImageResult[]): number {
  if (images.length === 0) return 100;

  let totalDeductions = 0;

  for (const img of images) {
    for (const issue of img.issues) {
      switch (issue.severity) {
        case "critical":
          totalDeductions += 15;
          break;
        case "warning":
          totalDeductions += 5;
          break;
        case "info":
          totalDeductions += 1;
          break;
      }
    }
  }

  // Normalize: max deduction proportional to image count
  const maxPossible = images.length * 25;
  const deductionRatio = Math.min(totalDeductions / maxPossible, 1);
  return Math.max(0, Math.round(100 - deductionRatio * 100));
}

/* ── Main audit ──────────────────────────────────────────────────────── */

async function auditPage(pageUrl: string): Promise<ImageAuditResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  let html: string;
  try {
    const res = await fetch(pageUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Image Auditor/2.0)",
      },
    });
    html = await res.text();
  } finally {
    clearTimeout(timeout);
  }

  const rawImages = parseImages(html, pageUrl);

  // HEAD request for file size on up to 20 images
  const sizes = await Promise.all(
    rawImages.slice(0, 20).map((img) => getFileSize(img.src))
  );

  // Build full ImageResult with issues
  const images: ImageResult[] = rawImages.map((img, i) => {
    const sizeBytes = i < 20 ? sizes[i] : null;
    const withSize = {
      ...img,
      estimatedSize: sizeBytes !== null ? formatBytes(sizeBytes) : null,
      estimatedSizeBytes: sizeBytes,
    };
    const issues = detectIssues(withSize as ImageResult, i);
    return { ...withSize, issues };
  });

  // Compute stats
  const stats = {
    total: images.length,
    missingAlt: images.filter((i) => i.alt === null).length,
    emptyAlt: images.filter((i) => i.alt !== null && i.alt.length === 0).length,
    missingLazyLoad: images.filter((i, idx) => idx >= 2 && i.loading !== "lazy").length,
    oldFormat: images.filter((i) => isLegacyFormat(i.fileExtension)).length,
    missingDimensions: images.filter((i) => !i.width || !i.height).length,
    onCDN: images.filter((i) => i.isCDN).length,
    withSrcset: images.filter((i) => !!i.srcset).length,
    genericAlt: images.filter((i) => i.alt !== null && i.alt.length > 0 && isGenericAlt(i.alt)).length,
    longAlt: images.filter((i) => i.alt !== null && i.alt.length > 125).length,
    nonSeoFilename: images.filter((i) => !isSeoFriendlyFilename(i.src)).length,
    oversized: images.filter((i) => i.estimatedSizeBytes !== null && i.estimatedSizeBytes > 200 * 1024).length,
  };

  const score = calculateScore(images);

  return { url: pageUrl, images, stats, score };
}

/* ── Route handler ───────────────────────────────────────────────────── */

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length > 10) {
      return NextResponse.json({ error: "Maximum 10 URLs at a time" }, { status: 400 });
    }

    const results: ImageAuditResult[] = await Promise.all(
      urls.map((url: string) =>
        auditPage(url).catch(
          (): ImageAuditResult => ({
            url,
            images: [],
            stats: {
              total: 0,
              missingAlt: 0,
              emptyAlt: 0,
              missingLazyLoad: 0,
              oldFormat: 0,
              missingDimensions: 0,
              onCDN: 0,
              withSrcset: 0,
              genericAlt: 0,
              longAlt: 0,
              nonSeoFilename: 0,
              oversized: 0,
            },
            score: 0,
          })
        )
      )
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
