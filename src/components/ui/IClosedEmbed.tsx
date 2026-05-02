"use client";

import { useEffect } from "react";

interface IClosedEmbedProps {
  dataUrl?: string;
  title?: string;
  minHeight?: number;
}

const SCRIPT_SRC = "https://app.iclosed.io/assets/widget.js";
const DEFAULT_URL =
  "https://app.iclosed.io/e/fabian/seo-fit-call";

export default function IClosedEmbed({
  dataUrl = DEFAULT_URL,
  title = "EcomSEO | Free 30-min SEO Fit Call",
  minHeight = 620,
}: IClosedEmbedProps) {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="iclosed-widget w-full"
      data-url={dataUrl}
      title={title}
      style={{ minWidth: 320, minHeight }}
    />
  );
}
