"use client";

import { useState } from "react";

interface ExportButtonsProps {
  onExportCSV?: () => void;
  onCopyClipboard?: () => void;
  onExportJSON?: () => void;
  onExportPDF?: () => void;
  disabled?: boolean;
}

export default function ExportButtons({
  onExportCSV,
  onCopyClipboard,
  onExportJSON,
  onExportPDF,
  disabled = false,
}: ExportButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!onCopyClipboard) return;
    onCopyClipboard();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnBase =
    "inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 " +
    "border border-border hover:border-border-strong " +
    "bg-bg-input text-body-strong hover:text-heading " +
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border disabled:hover:text-body-strong";

  return (
    <div className="flex flex-wrap items-center gap-2">
      {onExportCSV && (
        <button
          type="button"
          className={btnBase}
          disabled={disabled}
          onClick={onExportCSV}
          title="Export as CSV"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12V4a1 1 0 011-1h4l4 4v5a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
            <path d="M9 3v4h4" />
          </svg>
          CSV
        </button>
      )}

      {onExportJSON && (
        <button
          type="button"
          className={btnBase}
          disabled={disabled}
          onClick={onExportJSON}
          title="Export as JSON"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 3H4a1 1 0 00-1 1v2c0 1-1 1-1 1s1 0 1 1v2a1 1 0 001 1h1" />
            <path d="M11 3h1a1 1 0 011 1v2c0 1 1 1 1 1s-1 0-1 1v2a1 1 0 01-1 1h-1" />
          </svg>
          JSON
        </button>
      )}

      {onExportPDF && (
        <button
          type="button"
          className={btnBase}
          disabled={disabled}
          onClick={onExportPDF}
          title="Export as PDF"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12V4a1 1 0 011-1h4l4 4v5a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
            <path d="M9 3v4h4" />
            <path d="M7 10v2M9 9v3M11 10v2" />
          </svg>
          PDF
        </button>
      )}

      {onCopyClipboard && (
        <button
          type="button"
          className={btnBase}
          disabled={disabled}
          onClick={handleCopy}
          title="Copy to clipboard"
        >
          {copied ? (
            <svg
              className="w-4 h-4 text-emerald-400"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8.5l3.5 3.5 6.5-8" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="5" width="8" height="8" rx="1" />
              <path d="M3 11V3a1 1 0 011-1h8" />
            </svg>
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </div>
  );
}
