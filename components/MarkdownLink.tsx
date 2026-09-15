"use client";

import { useEffect, type ComponentPropsWithoutRef, type MouseEvent } from "react";
import { headingIdFromFragment } from "@/lib/markdown";

function normalizeHref(href?: string): string | undefined {
  if (!href?.startsWith("#")) return href;
  return `#${headingIdFromFragment(href)}`;
}

export function MarkdownHashScroll() {
  useEffect(() => {
    const raw = window.location.hash;
    if (!raw) return;
    const id = headingIdFromFragment(raw);
    if (`#${id}` !== raw) {
      window.history.replaceState(null, "", `#${id}`);
    }
    document.getElementById(id)?.scrollIntoView({ block: "start" });
  }, []);

  return null;
}

export function MarkdownLink({ href, onClick, ...props }: ComponentPropsWithoutRef<"a">) {
  const nextHref = normalizeHref(href);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (!nextHref?.startsWith("#")) return;
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const el = document.getElementById(nextHref.slice(1));
    if (!el) return;

    event.preventDefault();
    if (window.location.hash !== nextHref) {
      window.history.pushState(null, "", nextHref);
    }
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return <a href={nextHref} onClick={handleClick} {...props} />;
}
