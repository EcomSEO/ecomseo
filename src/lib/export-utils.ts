// =============================================================================
// export-utils.ts — Export utilities for CSV, JSON, clipboard, and text
// =============================================================================

/**
 * Export an array of objects as a CSV file download.
 */
export function exportToCSV(
  data: Record<string, any>[],
  filename: string
): void {
  if (!data.length) return;

  const headers = Object.keys(data[0]);
  const csvRows: string[] = [headers.map(escapeCSV).join(",")];

  for (const row of data) {
    csvRows.push(headers.map((h) => escapeCSV(String(row[h] ?? ""))).join(","));
  }

  const csvString = csvRows.join("\n");
  downloadBlob(csvString, filename.endsWith(".csv") ? filename : `${filename}.csv`, "text/csv;charset=utf-8;");
}

/**
 * Copy text to the clipboard. Returns true on success.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for non-secure contexts
    return fallbackCopyToClipboard(text);
  } catch {
    return fallbackCopyToClipboard(text);
  }
}

/**
 * Download a JSON file.
 */
export function downloadAsJSON(data: any, filename: string): void {
  const json = JSON.stringify(data, null, 2);
  downloadBlob(json, filename.endsWith(".json") ? filename : `${filename}.json`, "application/json");
}

/**
 * Format results as a plain-text report string.
 */
export function exportResultsAsText(
  title: string,
  data: Record<string, any>[]
): string {
  if (!data.length) return `${title}\n\nNo results.`;

  const headers = Object.keys(data[0]);
  const lines: string[] = [
    title,
    "=".repeat(title.length),
    "",
  ];

  for (let i = 0; i < data.length; i++) {
    lines.push(`--- Entry ${i + 1} ---`);
    for (const key of headers) {
      const value = data[i][key];
      const display = value === null || value === undefined ? "N/A" : String(value);
      lines.push(`  ${key}: ${display}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

/**
 * Export results as a styled PDF report via browser print dialog.
 * Opens a new window with formatted HTML and triggers the print dialog,
 * which allows "Save as PDF" across all browsers — zero dependencies.
 */
export function exportToPDF(options: {
  title: string;
  subtitle?: string;
  score?: number;
  grade?: string;
  data: Record<string, any>[];
  columns?: string[];
  url?: string;
}): void {
  const { title, subtitle, score, grade, data, columns, url } = options;

  if (!data.length) return;

  const headers = columns ?? Object.keys(data[0]);
  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Score section (optional)
  let scoreHtml = "";
  if (score !== undefined || grade) {
    const scoreColor = score !== undefined
      ? score >= 80 ? "#22c55e" : score >= 50 ? "#eab308" : "#ef4444"
      : "#a78bfa";
    scoreHtml = `
      <div style="display:flex;align-items:center;gap:24px;margin-bottom:28px;padding:20px;background:#1a1a2e;border:1px solid #2d2d44;border-radius:12px;">
        ${score !== undefined ? `
          <div style="text-align:center;">
            <div style="font-size:42px;font-weight:700;color:${scoreColor};line-height:1;">${score}</div>
            <div style="font-size:11px;color:#94a3b8;margin-top:4px;">/100</div>
          </div>
        ` : ""}
        ${grade ? `
          <div style="text-align:center;">
            <div style="font-size:36px;font-weight:700;color:${scoreColor};line-height:1;">${grade}</div>
            <div style="font-size:11px;color:#94a3b8;margin-top:4px;">Grade</div>
          </div>
        ` : ""}
        ${url ? `
          <div style="flex:1;min-width:0;">
            <div style="font-size:11px;color:#94a3b8;">Analyzed URL</div>
            <div style="font-size:13px;color:#e2e8f0;word-break:break-all;margin-top:2px;">${escapeHtml(url)}</div>
          </div>
        ` : ""}
      </div>
    `;
  }

  // Build table rows
  const tableHeaders = headers
    .map((h) => `<th style="text-align:left;padding:10px 14px;font-size:11px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #2d2d44;white-space:nowrap;">${escapeHtml(formatHeader(h))}</th>`)
    .join("");

  const tableRows = data
    .map((row, i) => {
      const bg = i % 2 === 0 ? "#0f0f1a" : "#13132a";
      const cells = headers
        .map((h) => {
          const val = row[h];
          const display = val === null || val === undefined ? "N/A" : String(val);
          return `<td style="padding:10px 14px;font-size:12px;color:#e2e8f0;border-bottom:1px solid #1e1e35;word-break:break-word;max-width:300px;">${escapeHtml(display)}</td>`;
        })
        .join("");
      return `<tr style="background:${bg};">${cells}</tr>`;
    })
    .join("");

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>${escapeHtml(title)} - EcomSEO Report</title>
  <style>
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      @page { margin: 0.5in; size: landscape; }
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0b0b14; color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; }
    table { width: 100%; border-collapse: collapse; }
  </style>
</head>
<body>
  <!-- Header -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;padding-bottom:20px;border-bottom:1px solid #2d2d44;">
    <div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
        <div style="width:28px;height:28px;background:linear-gradient(135deg,#a78bfa,#7c3aed);border-radius:6px;display:flex;align-items:center;justify-content:center;">
          <span style="color:white;font-weight:700;font-size:14px;">E</span>
        </div>
        <span style="font-size:16px;font-weight:600;color:#a78bfa;">EcomSEO</span>
      </div>
      <h1 style="font-size:22px;font-weight:700;color:#f1f5f9;margin-top:8px;">${escapeHtml(title)}</h1>
      ${subtitle ? `<p style="font-size:13px;color:#94a3b8;margin-top:4px;">${escapeHtml(subtitle)}</p>` : ""}
    </div>
    <div style="text-align:right;">
      <div style="font-size:12px;color:#94a3b8;">${dateStr}</div>
      ${url && !scoreHtml ? `<div style="font-size:11px;color:#64748b;margin-top:4px;max-width:280px;word-break:break-all;">${escapeHtml(url)}</div>` : ""}
      <div style="font-size:11px;color:#64748b;margin-top:4px;">${data.length} entries</div>
    </div>
  </div>

  ${scoreHtml}

  <!-- Results Table -->
  <div style="border:1px solid #2d2d44;border-radius:12px;overflow:hidden;">
    <table>
      <thead>
        <tr style="background:#13132a;">${tableHeaders}</tr>
      </thead>
      <tbody>${tableRows}</tbody>
    </table>
  </div>

  <!-- Footer -->
  <div style="margin-top:32px;padding-top:16px;border-top:1px solid #2d2d44;display:flex;align-items:center;justify-content:space-between;">
    <span style="font-size:11px;color:#64748b;">Generated by EcomSEO &mdash; ecomseo.co</span>
    <span style="font-size:11px;color:#64748b;">${dateStr}</span>
  </div>

  <script>window.onload=function(){setTimeout(function(){window.print();},400);}<\/script>
</body>
</html>`;

  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
  }
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatHeader(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/^\s/, "")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

function downloadBlob(content: string, filename: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function fallbackCopyToClipboard(text: string): boolean {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}
