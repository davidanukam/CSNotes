"use client";

import { useEffect, useState } from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

function parseObsidianAlt(alt?: string): { alt: string; width?: number } {
  if (!alt) return { alt: "" };
  const match = alt.match(/^(.*?)\|+(\d+)\s*$/);
  if (!match) return { alt };
  return { alt: match[1].replace(/\|+$/, "").trim(), width: Number(match[2]) };
}

export function MarkdownBody({ markdown }: { markdown: string }) {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!preview) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setPreview(null);
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

  const components: Components = {
    img({ alt, src }) {
      const parsed = parseObsidianAlt(alt);
      const imageSrc = typeof src === "string" ? src : "";
      return (
        <button
          type="button"
          className="md-image-btn"
          onClick={() => setPreview({ src: imageSrc, alt: parsed.alt })}
        >
          <img
            alt={parsed.alt || ""}
            src={imageSrc}
            style={parsed.width ? { maxWidth: `min(100%, ${parsed.width}px)` } : undefined}
          />
        </button>
      );
    },
  };

  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeSlug, rehypeKatex]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
      {preview ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview.src}
            alt={preview.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}
