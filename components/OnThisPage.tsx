"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content";

const TOP_OFFSET = 96;

export function OnThisPage({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (headings.length === 0) return;

    function headingNodes() {
      return headings.flatMap((heading) => {
        const el = document.getElementById(heading.id);
        return el ? [{ id: heading.id, el }] : [];
      });
    }

    function computeActive() {
      const items = headingNodes();
      if (items.length === 0) return;

      const last = items[items.length - 1];
      const lastTop = last.el.getBoundingClientRect().top;
      const scrolledToEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 24;
      const lastVisible = lastTop < window.innerHeight && last.el.getBoundingClientRect().bottom > 0;

      if (scrolledToEnd && lastVisible) {
        setActiveId(last.id);
        return;
      }

      let current = items[0].id;
      for (const item of items) {
        if (item.el.getBoundingClientRect().top <= TOP_OFFSET) current = item.id;
      }
      setActiveId(current);
    }

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("hashchange", computeActive);
    window.addEventListener("resize", computeActive);
    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("hashchange", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="toc" aria-label="On this page">
      <h2>On this page</h2>
      <ol>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              className={`depth-${heading.depth}${activeId === heading.id ? " active" : ""}`}
              href={`#${heading.id}`}
              onClick={() => setActiveId(heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
