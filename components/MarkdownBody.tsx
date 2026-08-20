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

const components: Components = {
  img({ alt, src }) {
    const parsed = parseObsidianAlt(alt);
    return (
      <img
        alt={parsed.alt || ""}
        src={typeof src === "string" ? src : ""}
        style={parsed.width ? { maxWidth: `min(100%, ${parsed.width}px)` } : undefined}
      />
    );
  },
};

export function MarkdownBody({ markdown }: { markdown: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeSlug, rehypeKatex]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
