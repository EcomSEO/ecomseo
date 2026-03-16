/**
 * Canvas-based pixel width measurement for SERP title/description
 * Uses the same font rendering as Google SERPs for accuracy
 */

const TITLE_FONT = '20px arial, sans-serif';
const TITLE_FONT_MOBILE = '18px arial, sans-serif';
const DESC_FONT = '14px arial, sans-serif';

// Title thresholds (desktop)
export const TITLE_GREEN_MAX = 500;
export const TITLE_YELLOW_MAX = 580;

// Description thresholds (desktop)
export const DESC_GREEN_MAX = 920;
export const DESC_YELLOW_MAX = 1050;

// Mobile thresholds
export const MOBILE_TITLE_GREEN_MAX = 400;
export const MOBILE_TITLE_YELLOW_MAX = 480;
export const MOBILE_DESC_GREEN_MAX = 680;
export const MOBILE_DESC_YELLOW_MAX = 780;

let _canvas: HTMLCanvasElement | null = null;

function getCanvas(): CanvasRenderingContext2D | null {
  if (typeof document === 'undefined') return null;
  if (!_canvas) _canvas = document.createElement('canvas');
  return _canvas.getContext('2d');
}

export function measurePixelWidth(
  text: string,
  font: string = TITLE_FONT
): number {
  const ctx = getCanvas();
  if (!ctx) return 0;
  ctx.font = font;
  return Math.round(ctx.measureText(text).width);
}

export function measureTitleWidth(text: string, mobile = false): number {
  return measurePixelWidth(text, mobile ? TITLE_FONT_MOBILE : TITLE_FONT);
}

export function measureDescWidth(text: string): number {
  return measurePixelWidth(text, DESC_FONT);
}

export function truncateByPixels(
  text: string,
  pixelLimit: number,
  font: string
): string {
  const ctx = getCanvas();
  if (!ctx) return text;
  ctx.font = font;
  if (ctx.measureText(text).width <= pixelLimit) return text;
  let truncated = text;
  while (ctx.measureText(truncated + '...').width > pixelLimit && truncated.length > 0) {
    truncated = truncated.slice(0, -1);
  }
  return truncated.trimEnd() + '...';
}

export type PixelStatus = 'green' | 'yellow' | 'red';

export function getTitleStatus(px: number, mobile = false): PixelStatus {
  const greenMax = mobile ? MOBILE_TITLE_GREEN_MAX : TITLE_GREEN_MAX;
  const yellowMax = mobile ? MOBILE_TITLE_YELLOW_MAX : TITLE_YELLOW_MAX;
  if (px <= greenMax) return 'green';
  if (px <= yellowMax) return 'yellow';
  return 'red';
}

export function getDescStatus(px: number, mobile = false): PixelStatus {
  const greenMax = mobile ? MOBILE_DESC_GREEN_MAX : DESC_GREEN_MAX;
  const yellowMax = mobile ? MOBILE_DESC_YELLOW_MAX : DESC_YELLOW_MAX;
  if (px <= greenMax) return 'green';
  if (px <= yellowMax) return 'yellow';
  return 'red';
}

export function getTitleLimit(mobile = false): number {
  return mobile ? MOBILE_TITLE_YELLOW_MAX : TITLE_YELLOW_MAX;
}

export function getDescLimit(mobile = false): number {
  return mobile ? MOBILE_DESC_YELLOW_MAX : DESC_YELLOW_MAX;
}
