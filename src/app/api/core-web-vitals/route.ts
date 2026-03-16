import { NextResponse } from "next/server";

type CWVRating = "good" | "needs-improvement" | "poor" | "n/a";

interface MetricResult {
  value: number | null;
  unit: string;
  rating: CWVRating;
  displayValue: string;
}

interface FieldMetric {
  p75: number | null;
  rating: CWVRating;
  displayValue: string;
  distributions: { min: number; max: number; proportion: number }[];
}

interface Opportunity {
  title: string;
  description: string;
  savings: string;
}

interface Diagnostic {
  title: string;
  description: string;
}

interface LcpBreakdown {
  element: string | null;
  elementType: string | null;
  url: string | null;
  loadTime: number | null;
  renderDelay: number | null;
  resourceLoadDelay: number | null;
  ttfb: number | null;
}

interface ClsElement {
  node: string;
  score: number;
}

interface ResourceBreakdown {
  totalBytes: number;
  totalRequests: number;
  jsBytes: number;
  cssBytes: number;
  imageBytes: number;
  fontBytes: number;
  otherBytes: number;
  thirdPartyBytes: number;
}

interface ActionItem {
  severity: "critical" | "warning" | "info";
  title: string;
  description: string;
  metric: string;
  currentValue: string;
  targetValue: string;
}

interface CWVResult {
  url: string;
  strategy: "mobile" | "desktop";
  performanceScore: number | null;
  accessibilityScore: number | null;
  seoScore: number | null;
  lcp: MetricResult;
  fid: MetricResult;
  cls: MetricResult;
  fcp: MetricResult;
  ttfb: MetricResult;
  si: MetricResult;
  tbt: MetricResult;
  fieldData: {
    lcp: FieldMetric | null;
    inp: FieldMetric | null;
    cls: FieldMetric | null;
    fcp: FieldMetric | null;
    ttfb: FieldMetric | null;
  } | null;
  lcpBreakdown: LcpBreakdown | null;
  clsElements: ClsElement[];
  resourceBreakdown: ResourceBreakdown | null;
  opportunities: Opportunity[];
  diagnostics: Diagnostic[];
  actionItems: ActionItem[];
  passesCWV: boolean;
  error?: string;
}

function rateLcp(ms: number): CWVRating {
  if (ms <= 2500) return "good";
  if (ms <= 4000) return "needs-improvement";
  return "poor";
}

function rateCls(val: number): CWVRating {
  if (val <= 0.1) return "good";
  if (val <= 0.25) return "needs-improvement";
  return "poor";
}

function rateInp(ms: number): CWVRating {
  if (ms <= 200) return "good";
  if (ms <= 500) return "needs-improvement";
  return "poor";
}

function rateFcp(ms: number): CWVRating {
  if (ms <= 1800) return "good";
  if (ms <= 3000) return "needs-improvement";
  return "poor";
}

function rateTtfb(ms: number): CWVRating {
  if (ms <= 800) return "good";
  if (ms <= 1800) return "needs-improvement";
  return "poor";
}

function rateSi(ms: number): CWVRating {
  if (ms <= 3400) return "good";
  if (ms <= 5800) return "needs-improvement";
  return "poor";
}

function rateTbt(ms: number): CWVRating {
  if (ms <= 200) return "good";
  if (ms <= 600) return "needs-improvement";
  return "poor";
}

function formatMs(ms: number): string {
  if (ms >= 1000) return `${(ms / 1000).toFixed(1)} s`;
  return `${Math.round(ms)} ms`;
}

function extractMetric(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  audits: Record<string, any>,
  key: string,
  rateFn: (v: number) => CWVRating,
  isCls = false
): MetricResult {
  const audit = audits[key];
  const raw = audit?.numericValue ?? null;
  if (raw === null) {
    return { value: null, unit: "", rating: "n/a", displayValue: "N/A" };
  }
  return {
    value: raw,
    unit: isCls ? "" : "ms",
    rating: rateFn(raw),
    displayValue: isCls ? raw.toFixed(3) : formatMs(raw),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractFieldData(data: any) {
  const crux = data?.loadingExperience?.metrics;
  if (!crux) return null;

  const extractField = (
    key: string,
    rateFn: (v: number) => CWVRating,
    isCls = false
  ): FieldMetric | null => {
    const metric = crux[key];
    if (!metric) return null;
    const p75 = metric.percentile ?? null;
    if (p75 === null) return null;

    const distributions = (metric.distributions ?? []).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (d: any) => ({
        min: d.min ?? 0,
        max: d.max ?? 0,
        proportion: d.proportion ?? 0,
      })
    );

    const numericP75 = isCls ? p75 / 100 : p75;
    const rating = rateFn(numericP75);
    const displayValue = isCls ? numericP75.toFixed(3) : formatMs(p75);

    return { p75, rating, displayValue, distributions };
  };

  const lcp = extractField("LARGEST_CONTENTFUL_PAINT_MS", rateLcp);
  const inp = extractField("INTERACTION_TO_NEXT_PAINT", rateInp);
  const cls = extractField("CUMULATIVE_LAYOUT_SHIFT_SCORE", rateCls, true);
  const fcp = extractField("FIRST_CONTENTFUL_PAINT_MS", rateFcp);
  const ttfb = extractField("EXPERIMENTAL_TIME_TO_FIRST_BYTE", rateTtfb);

  if (!lcp && !inp && !cls && !fcp && !ttfb) return null;

  return { lcp, inp, cls, fcp, ttfb };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractLcpBreakdown(audits: Record<string, any>): LcpBreakdown | null {
  const lcpAudit = audits["largest-contentful-paint-element"];
  const lcpItems = lcpAudit?.details?.items;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const firstItem = lcpItems?.[0] as any;

  let element: string | null = null;
  let elementType: string | null = null;
  let url: string | null = null;

  if (firstItem) {
    element = firstItem.node?.snippet ?? firstItem.node?.nodeLabel ?? null;
    elementType = firstItem.node?.type ?? null;
    url = firstItem.node?.path ?? null;
  }

  if (!element && audits["largest-contentful-paint"]?.details?.items?.[0]) {
    const item = audits["largest-contentful-paint"].details.items[0];
    element = item.node?.snippet ?? item.node?.nodeLabel ?? null;
  }

  const lcpValue = audits["largest-contentful-paint"]?.numericValue ?? null;
  const ttfbValue = audits["server-response-time"]?.numericValue ?? null;

  if (!element && !lcpValue) return null;

  return {
    element,
    elementType,
    url,
    loadTime: lcpValue,
    renderDelay: null,
    resourceLoadDelay: null,
    ttfb: ttfbValue,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractClsElements(audits: Record<string, any>): ClsElement[] {
  const clsAudit = audits["layout-shift-elements"];
  if (!clsAudit?.details?.items) return [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return clsAudit.details.items.slice(0, 5).map((item: any) => ({
    node: item.node?.snippet ?? item.node?.nodeLabel ?? "Unknown element",
    score: item.score ?? 0,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractResourceBreakdown(audits: Record<string, any>): ResourceBreakdown | null {
  const resourceSummary = audits["resource-summary"];
  if (!resourceSummary?.details?.items) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const items = resourceSummary.details.items as any[];
  const find = (type: string) =>
    items.find((i) => i.resourceType === type);

  const total = find("total");
  const script = find("script");
  const stylesheet = find("stylesheet");
  const image = find("image");
  const font = find("font");
  const thirdParty = find("third-party");

  const totalBytes = total?.transferSize ?? 0;

  return {
    totalBytes,
    totalRequests: total?.requestCount ?? 0,
    jsBytes: script?.transferSize ?? 0,
    cssBytes: stylesheet?.transferSize ?? 0,
    imageBytes: image?.transferSize ?? 0,
    fontBytes: font?.transferSize ?? 0,
    otherBytes: Math.max(
      0,
      totalBytes -
        (script?.transferSize ?? 0) -
        (stylesheet?.transferSize ?? 0) -
        (image?.transferSize ?? 0) -
        (font?.transferSize ?? 0)
    ),
    thirdPartyBytes: thirdParty?.transferSize ?? 0,
  };
}

/* ── Generate priority action items based on actual metrics ── */
function generateActionItems(result: Omit<CWVResult, "actionItems" | "passesCWV">): ActionItem[] {
  const items: ActionItem[] = [];

  // LCP
  if (result.lcp.value !== null && result.lcp.value > 2500) {
    const severity = result.lcp.value > 4000 ? "critical" : "warning";
    const lcpSec = (result.lcp.value / 1000).toFixed(1);
    items.push({
      severity,
      title: result.lcp.value > 4000
        ? "Critical: Largest Contentful Paint is extremely slow"
        : "Improve Largest Contentful Paint (LCP)",
      description: result.lcpBreakdown?.element
        ? `Your LCP element (${result.lcpBreakdown.element.substring(0, 80)}) takes ${lcpSec}s to render. Optimize it by using next-gen formats (WebP/AVIF), adding explicit width/height, and preloading the resource with <link rel="preload">.`
        : `Your page takes ${lcpSec}s to show its main content. Preload hero images, inline critical CSS, and reduce server response time.`,
      metric: "LCP",
      currentValue: `${lcpSec}s`,
      targetValue: "< 2.5s",
    });
  }

  // CLS
  if (result.cls.value !== null && result.cls.value > 0.1) {
    const severity = result.cls.value > 0.25 ? "critical" : "warning";
    items.push({
      severity,
      title: "Fix Layout Shift Issues (CLS)",
      description: result.clsElements.length > 0
        ? `${result.clsElements.length} element(s) are causing layout shifts. Add explicit width and height attributes to images, embeds, and dynamically injected content. Reserve space for ads and lazy-loaded elements.`
        : "Elements are moving after page load. Add width/height to images and embeds, use CSS aspect-ratio, and avoid inserting content above existing content.",
      metric: "CLS",
      currentValue: result.cls.value.toFixed(3),
      targetValue: "< 0.1",
    });
  }

  // TBT / INP (interactivity)
  if (result.tbt.value !== null && result.tbt.value > 200) {
    const severity = result.tbt.value > 600 ? "critical" : "warning";
    items.push({
      severity,
      title: "Reduce JavaScript Blocking Time",
      description: `Total Blocking Time is ${formatMs(result.tbt.value)}. Split large JavaScript bundles, defer non-critical scripts, and remove unused code. ${
        result.resourceBreakdown && result.resourceBreakdown.thirdPartyBytes > 100000
          ? `Third-party scripts account for ${(result.resourceBreakdown.thirdPartyBytes / 1024).toFixed(0)} KB -- audit and remove unnecessary ones.`
          : ""
      }`,
      metric: "TBT",
      currentValue: formatMs(result.tbt.value),
      targetValue: "< 200 ms",
    });
  }

  // TTFB
  if (result.ttfb.value !== null && result.ttfb.value > 800) {
    const severity = result.ttfb.value > 1800 ? "critical" : "warning";
    items.push({
      severity,
      title: "Improve Server Response Time (TTFB)",
      description: `Server takes ${formatMs(result.ttfb.value)} to respond. Use a CDN, enable server-side caching, optimize database queries, and consider upgrading to faster hosting. For Shopify: ensure you're not using excessive app scripts that slow down server processing.`,
      metric: "TTFB",
      currentValue: formatMs(result.ttfb.value),
      targetValue: "< 800 ms",
    });
  }

  // FCP
  if (result.fcp.value !== null && result.fcp.value > 1800) {
    items.push({
      severity: result.fcp.value > 3000 ? "critical" : "warning",
      title: "Speed Up First Contentful Paint",
      description: "Users see blank screen for too long. Eliminate render-blocking resources, inline critical CSS, and preconnect to required origins.",
      metric: "FCP",
      currentValue: formatMs(result.fcp.value),
      targetValue: "< 1.8s",
    });
  }

  // Large JS bundle
  if (result.resourceBreakdown && result.resourceBreakdown.jsBytes > 500 * 1024) {
    items.push({
      severity: result.resourceBreakdown.jsBytes > 1024 * 1024 ? "critical" : "warning",
      title: "Reduce JavaScript Bundle Size",
      description: `${(result.resourceBreakdown.jsBytes / 1024).toFixed(0)} KB of JavaScript shipped. Use code splitting, tree-shaking, and remove unused dependencies. For ecommerce: audit apps/plugins adding JS bloat.`,
      metric: "JS Size",
      currentValue: `${(result.resourceBreakdown.jsBytes / 1024).toFixed(0)} KB`,
      targetValue: "< 300 KB",
    });
  }

  // Large images
  if (result.resourceBreakdown && result.resourceBreakdown.imageBytes > 1024 * 1024) {
    items.push({
      severity: "warning",
      title: "Optimize Image Sizes",
      description: `${(result.resourceBreakdown.imageBytes / (1024 * 1024)).toFixed(1)} MB of images. Convert to WebP/AVIF, implement responsive images with srcset, and lazy-load below-fold images.`,
      metric: "Images",
      currentValue: `${(result.resourceBreakdown.imageBytes / (1024 * 1024)).toFixed(1)} MB`,
      targetValue: "< 500 KB",
    });
  }

  // Low performance score
  if (result.performanceScore !== null && result.performanceScore < 50 && items.length === 0) {
    items.push({
      severity: "critical",
      title: "Critical Performance Issues Detected",
      description: "Your performance score is below 50. This significantly impacts user experience and search rankings. Focus on the opportunities listed below to improve.",
      metric: "Score",
      currentValue: String(result.performanceScore),
      targetValue: "> 90",
    });
  }

  // Sort: critical first, then warning, then info
  const severityOrder = { critical: 0, warning: 1, info: 2 };
  items.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return items.slice(0, 6);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseResult(data: any, url: string, strategy: "mobile" | "desktop"): CWVResult {
  const lhr = data?.lighthouseResult;
  const audits = lhr?.audits ?? {};
  const categories = lhr?.categories ?? {};

  const performanceScore =
    categories.performance?.score != null
      ? Math.round(categories.performance.score * 100)
      : null;

  const accessibilityScore =
    categories.accessibility?.score != null
      ? Math.round(categories.accessibility.score * 100)
      : null;

  const seoScore =
    categories.seo?.score != null
      ? Math.round(categories.seo.score * 100)
      : null;

  const lcp = extractMetric(audits, "largest-contentful-paint", rateLcp);
  const fid = extractMetric(
    audits,
    "interaction-to-next-paint",
    rateInp
  );
  if (fid.value === null) {
    const fallback = extractMetric(audits, "max-potential-fid", rateInp);
    if (fallback.value !== null) {
      fid.value = fallback.value;
      fid.rating = fallback.rating;
      fid.displayValue = fallback.displayValue;
      fid.unit = fallback.unit;
    }
  }

  const cls = extractMetric(audits, "cumulative-layout-shift", rateCls, true);
  const fcp = extractMetric(audits, "first-contentful-paint", rateFcp);
  const ttfb = extractMetric(audits, "server-response-time", rateTtfb);
  const si = extractMetric(audits, "speed-index", rateSi);
  const tbt = extractMetric(audits, "total-blocking-time", rateTbt);

  const fieldData = extractFieldData(data);
  const lcpBreakdown = extractLcpBreakdown(audits);
  const clsElements = extractClsElements(audits);
  const resourceBreakdown = extractResourceBreakdown(audits);

  // Extract opportunities
  const opportunities: Opportunity[] = [];
  const oppRefs = categories.performance?.auditRefs?.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ref: any) => ref.group === "load-opportunities"
  ) ?? [];
  for (const ref of oppRefs) {
    const audit = audits[ref.id];
    if (audit && audit.score !== null && audit.score < 1 && audit.details?.overallSavingsMs) {
      opportunities.push({
        title: audit.title ?? ref.id,
        description: audit.description ?? "",
        savings: formatMs(audit.details.overallSavingsMs) + " potential savings",
      });
    }
  }
  opportunities.sort((a, b) => {
    const aNum = parseFloat(a.savings);
    const bNum = parseFloat(b.savings);
    return bNum - aNum;
  });

  // Extract diagnostics
  const diagnostics: Diagnostic[] = [];
  const diagRefs = categories.performance?.auditRefs?.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ref: any) => ref.group === "diagnostics"
  ) ?? [];
  for (const ref of diagRefs) {
    const audit = audits[ref.id];
    if (audit && audit.score !== null && audit.score < 1) {
      diagnostics.push({
        title: audit.title ?? ref.id,
        description: audit.description ?? "",
      });
    }
  }

  // Build partial result for action item generation
  const partial = {
    url,
    strategy,
    performanceScore,
    accessibilityScore,
    seoScore,
    lcp,
    fid,
    cls,
    fcp,
    ttfb,
    si,
    tbt,
    fieldData,
    lcpBreakdown,
    clsElements,
    resourceBreakdown,
    opportunities,
    diagnostics,
    error: undefined,
  };

  const actionItems = generateActionItems(partial);

  // Core Web Vitals pass/fail: LCP, CLS, and INP/TBT must all be "good"
  const lcpPass = lcp.rating === "good";
  const clsPass = cls.rating === "good";
  const inpPass = fid.rating === "good" || (tbt.value !== null && tbt.value <= 200);
  const passesCWV = lcpPass && clsPass && inpPass;

  return {
    ...partial,
    actionItems,
    passesCWV,
  };
}

/* ── Fetch PSI with retry + backoff for 429 errors ── */

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchPSI(url: string, strategy: "mobile" | "desktop"): Promise<Record<string, unknown>> {
  const apiKey = process.env.GOOGLE_PSI_API_KEY || "";
  const keyParam = apiKey ? `&key=${apiKey}` : "";
  const categories = "&category=performance&category=accessibility&category=seo";
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}${categories}${keyParam}`;

  const maxRetries = 3;
  const baseDelay = 3000;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);

    try {
      const res = await fetch(apiUrl, { signal: controller.signal });
      clearTimeout(timeout);

      if (res.status === 429) {
        if (attempt < maxRetries) {
          const waitMs = baseDelay * Math.pow(2, attempt);
          await delay(waitMs);
          continue;
        }
        throw new Error("Rate limited by Google PageSpeed API. Please wait a moment and try again.");
      }

      if (!res.ok) {
        const errorText = await res.text().catch(() => "");
        throw new Error(`PSI API returned ${res.status}${errorText ? `: ${errorText.substring(0, 100)}` : ""}`);
      }

      return await res.json();
    } catch (e) {
      clearTimeout(timeout);
      if (e instanceof Error && e.name === "AbortError") {
        throw new Error("PageSpeed analysis timed out. The target site may be slow or unreachable.");
      }
      if (attempt < maxRetries && e instanceof Error && e.message.includes("429")) {
        await delay(baseDelay * Math.pow(2, attempt));
        continue;
      }
      throw e;
    }
  }

  throw new Error("Failed after retries");
}

const emptyMetric = (unit: string): MetricResult => ({
  value: null,
  unit,
  rating: "n/a",
  displayValue: "N/A",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { urls, strategy, psiData } = body;

    if (!Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
    }
    if (urls.length > 5) {
      return NextResponse.json({ error: "Maximum 5 URLs at a time" }, { status: 400 });
    }

    const strat: "mobile" | "desktop" = strategy === "desktop" ? "desktop" : "mobile";

    // If client sent pre-fetched PSI data, just parse it (no server-side fetch needed)
    const hasPsiData = Array.isArray(psiData) && psiData.length === urls.length;

    const results: CWVResult[] = [];
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i] as string;
      try {
        const data = hasPsiData ? psiData[i] : await fetchPSI(url, strat);
        results.push(parseResult(data, url, strat));
      } catch (e) {
        results.push({
          url,
          strategy: strat,
          performanceScore: null,
          accessibilityScore: null,
          seoScore: null,
          lcp: emptyMetric("ms"),
          fid: emptyMetric("ms"),
          cls: emptyMetric(""),
          fcp: emptyMetric("ms"),
          ttfb: emptyMetric("ms"),
          si: emptyMetric("ms"),
          tbt: emptyMetric("ms"),
          fieldData: null,
          lcpBreakdown: null,
          clsElements: [],
          resourceBreakdown: null,
          opportunities: [],
          diagnostics: [],
          actionItems: [],
          passesCWV: false,
          error: e instanceof Error ? e.message : String(e),
        });
      }
      // Add delay between server-side requests to avoid rate limiting
      if (!hasPsiData && i < urls.length - 1) {
        await delay(1500);
      }
    }

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
