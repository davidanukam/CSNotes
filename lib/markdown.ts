import GithubSlugger, { slug as githubSlug } from "github-slugger";
import type { Heading } from "./content";

export function headingIdFromFragment(fragment: string): string {
  const raw = fragment.startsWith("#") ? fragment.slice(1) : fragment;
  let text = raw;
  try {
    text = decodeURIComponent(raw.replace(/\+/g, " "));
  } catch {
    /* keep the raw fragment */
  }
  return githubSlug(text);
}

export function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inCode = false;

  for (const line of markdown.split(/\r?\n/)) {
    if (line.trimStart().startsWith("```")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) continue;

    const text = match[2]
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .trim();

    headings.push({
      depth: match[1].length,
      text,
      id: slugger.slug(text),
    });
  }

  return headings;
}

export function rewriteMarkdown(markdown: string, noteDirUrl: string): string {
  return markdown.replace(/(!?)\[[^\]]*\]\(([^)]+)\)/g, (full, bang, url) => {
    const trimmed = url.trim();
    if (/^(https?:|mailto:|data:)/i.test(trimmed)) return full;

    if (trimmed.startsWith("#")) {
      return full.replace(url, `#${headingIdFromFragment(trimmed)}`);
    }

    let decoded = trimmed;
    try {
      decoded = decodeURIComponent(trimmed);
    } catch {
      decoded = trimmed;
    }

    if (
      bang !== "!" &&
      !decoded.includes("/") &&
      !decoded.toLowerCase().endsWith(".md") &&
      /%[0-9A-Fa-f]{2}/.test(trimmed)
    ) {
      return full.replace(url, `#${headingIdFromFragment(trimmed)}`);
    }

    const { path, suffix } = splitSuffix(decoded.replace(/\\/g, "/"));
    if (path.startsWith("/")) return full;

    if (bang === "!") return full.replace(url, joinUrl(noteDirUrl, path) + suffix);

    if (path.toLowerCase().endsWith(".md")) {
      return full.replace(url, joinUrl(noteDirUrl, path.replace(/\.md$/i, "")) + suffix);
    }

    return full;
  });
}

function splitSuffix(value: string): { path: string; suffix: string } {
  const hash = value.indexOf("#");
  const query = value.indexOf("?");
  const cut = hash < 0 ? query : query < 0 ? hash : Math.min(hash, query);
  if (cut < 0) return { path: value, suffix: "" };
  return { path: value.slice(0, cut), suffix: value.slice(cut) };
}

function joinUrl(base: string, relative: string): string {
  const parts = base.split("/").filter(Boolean);
  for (const segment of relative.split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") {
      parts.pop();
      continue;
    }
    parts.push(segment);
  }
  return `/${parts.map((segment) => encodeURIComponent(segment)).join("/")}`;
}
