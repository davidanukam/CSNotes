import { readFileSync } from "node:fs";
import GithubSlugger from "github-slugger";

function extractHeadings(markdown) {
  const slugger = new GithubSlugger();
  const headings = [];
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

for (const file of [
  "Year3/3307/Lecture 1.md",
  "Year2/2212/Software Engineering.md",
  "Year3/3307/C++ Syntax.md",
]) {
  const markdown = readFileSync(file, "utf8");
  const headings = extractHeadings(markdown);
  console.log("\n==", file, "==", headings.length, "headings, first bytes", JSON.stringify(markdown.slice(0, 40)));
  console.log(headings.map((h) => `${h.depth} ${h.id} ${h.text}`).join("\n"));
}
