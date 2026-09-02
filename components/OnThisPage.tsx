"use client";

import { useEffect, useState, type MouseEvent } from "react";
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

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    event.preventDefault();
    const hash = `#${id}`;
    if (window.location.hash !== hash) {
      history.pushState(null, "", hash);
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
              onClick={(event) => handleClick(event, heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
