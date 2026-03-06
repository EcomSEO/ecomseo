import { NextResponse } from "next/server";

interface ImageInfo {
  src: string;
  alt: string | null;
  hasAlt: boolean;
  hasDimensions: boolean;
  isLazy: boolean;
  fileSize: number | null;
  format: string;
}

interface PageResult {
  url: string;
  totalImages: number;
  issues: {
    missingAlt: number;
    emptyAlt: number;
    longAlt: number;
    missingDimensions: number;
    oversized: number;
    legacyFormat: number;
  };
  images: ImageInfo[];
}

function getFormat(src: string): string {
  try {
    const pathname = new URL(src, "https://placeholder.com").pathname.toLowerCase();
    if (pathname.endsWith(".webp")) return "webp";
    if (pathname.endsWith(".avif")) return "avif";
    if (pathname.endsWith(".svg")) return "svg";
    if (pathname.endsWith(".png")) return "png";
    if (pathname.endsWith(".gif")) return "gif";
    if (pathname.endsWith(".jpg") || pathname.endsWith(".jpeg")) return "jpg";
    if (pathname.endsWith(".bmp")) return "bmp";
    if (pathname.endsWith(".ico")) return "ico";
    return "unknown";
  } catch {
    return "unknown";
  }
}

function isLegacyFormat(format: string): boolean {
  return ["jpg", "png", "gif", "bmp"].includes(format);
}

function isModernFormat(format: string): boolean {
  return ["webp", "avif"].includes(format);
}

function parseImages(html: string, pageUrl: string): ImageInfo[] {
  const images: ImageInfo[] = [];
  const imgRegex = /<img\s[^>]*?>/gi;
  let match: RegExpExecArray | null;

  while ((match = imgRegex.exec(html)) !== null) {
    const tag = match[0];

    const srcMatch = tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
    const altMatch = tag.match(/\balt\s*=\s*["']([^"']*)["']/i);
    const widthMatch = tag.match(/\bwidth\s*=\s*["']?(\d+)["']?/i);
    const heightMatch = tag.match(/\bheight\s*=\s*["']?(\d+)["']?/i);
    const loadingMatch = tag.match(/\bloading\s*=\s*["']([^"']+)["']/i);

    const rawSrc = srcMatch?.[1] ?? "";
    if (!rawSrc || rawSrc.startsWith("data:")) continue;

    let resolvedSrc = rawSrc;
    try {
      resolvedSrc = new URL(rawSrc, pageUrl).href;
    } catch {
      resolvedSrc = rawSrc;
    }

    const hasAltAttr = /\balt\s*=/i.test(tag);
    const altValue = altMatch?.[1] ?? null;
    const hasDimensions = !!widthMatch && !!heightMatch;
    const isLazy = loadingMatch?.[1]?.toLowerCase() === "lazy";
    const format = getFormat(resolvedSrc);

    images.push({
      src: resolvedSrc,
      alt: hasAltAttr ? (altValue ?? "") : null,
      hasAlt: hasAltAttr && altValue !== null && altValue.length > 0,
      hasDimensions,
      isLazy,
      fileSize: null,
      format,
    });
  }

  return images;
}

async function getFileSize(url: string): Promise<number | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Image Auditor/1.0)",
      },
    });
    clearTimeout(timeout);
    const cl = res.headers.get("content-length");
    return cl ? parseInt(cl, 10) : null;
  } catch {
    return null;
  }
}

async function auditPage(pageUrl: string): Promise<PageResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  let html: string;
  try {
    const res = await fetch(pageUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; EcomSEO Image Auditor/1.0)",
      },
    });
    html = await res.text();
  } finally {
    clearTimeout(timeout);
  }

  const images = parseImages(html, pageUrl);

  // HEAD request for file size on up to 10 images
  const toCheck = images.slice(0, 10);
  const sizes = await Promise.all(toCheck.map((img) => getFileSize(img.src)));
  toCheck.forEach((img, i) => {
    img.fileSize = sizes[i];
  });

  // Classify issues
  const issues = {
    missingAlt: 0,
    emptyAlt: 0,
    longAlt: 0,
    missingDimensions: 0,
    oversized: 0,
    legacyFormat: 0,
  };

  for (const img of images) {
    if (img.alt === null) {
      issues.missingAlt++;
    } else if (img.alt.length === 0) {
      issues.emptyAlt++;
    } else if (img.alt.length > 125) {
      issues.longAlt++;
    }
    if (!img.hasDimensions) issues.missingDimensions++;
    if (img.fileSize !== null && img.fileSize > 200 * 1024) issues.oversized++;
    if (isLegacyFormat(img.format) && !isModernFormat(img.format)) issues.legacyFormat++;
  }

  return {
    url: pageUrl,
    totalImages: images.length,
    issues,
    images,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length > 20) {
      return NextResponse.json({ error: "Too many URLs" }, { status: 400 });
    }

    const results: PageResult[] = await Promise.all(
      urls.map((url: string) => auditPage(url).catch(() => ({
        url,
        totalImages: 0,
        issues: { missingAlt: 0, emptyAlt: 0, longAlt: 0, missingDimensions: 0, oversized: 0, legacyFormat: 0 },
        images: [],
      })))
    );

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
