import GithubSlugger from "github-slugger";
import type { Heading } from "./content";

export function extractHeadings(markdown: string): Heading[] {
  const slugger = new GithubSlugger();
  const headings: Heading[] = [];
  let inCode = false;

  for (const line of markdown.split("\n")) {
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
    if (/^(https?:|mailto:|data:|#)/i.test(trimmed)) return full;

    const decoded = decodeURIComponent(trimmed);
    if (bang === "!" && !decoded.startsWith("/")) {
      const next = `${noteDirUrl}/${decoded}`.replace(/\\/g, "/");
      return full.replace(url, encodePath(next));
    }

    if (decoded.toLowerCase().endsWith(".md")) {
      const file = decoded.split("/").pop() ?? decoded;
      const slug = file.replace(/\.md$/i, "");
      return full.replace(url, `${noteDirUrl}/${encodeURIComponent(slug)}`);
    }

    return full;
  });
}

function encodePath(path: string): string {
  return path
    .split("/")
    .map((segment, index) => (index === 0 && segment === "" ? "" : encodeURIComponent(segment)))
    .join("/");
}
