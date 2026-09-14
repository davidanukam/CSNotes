"use client";

import { useEffect, useState } from "react";
import type { Components } from "react-markdown";

function parseObsidianAlt(alt?: string): { alt: string; width?: number } {
  if (!alt) return { alt: "" };
  const match = alt.match(/^(.*?)\|+(\d+)\s*$/);
  if (!match) return { alt };
  return { alt: match[1].replace(/\|+$/, "").trim(), width: Number(match[2]) };
}

export const MarkdownImage: NonNullable<Components["img"]> = ({ alt, src }) => {
  const [preview, setPreview] = useState(false);
  const parsed = parseObsidianAlt(typeof alt === "string" ? alt : undefined);
  const imageSrc = typeof src === "string" ? src : "";

  useEffect(() => {
    if (!preview) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setPreview(false);
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

  return (
    <>
      <button type="button" className="md-image-btn" onClick={() => setPreview(true)}>
        <img
          alt={parsed.alt || ""}
          src={imageSrc}
          style={parsed.width ? { maxWidth: `min(100%, ${parsed.width}px)` } : undefined}
        />
      </button>
      {preview ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setPreview(false)}
        >
          <img src={imageSrc} alt={parsed.alt} onClick={(event) => event.stopPropagation()} />
        </div>
      ) : null}
    </>
  );
}
