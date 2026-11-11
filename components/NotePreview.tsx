import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const components: Components = {
  a: ({ children }) => <span>{children}</span>,
  img: ({ src, alt }) => <img src={typeof src === "string" ? src : ""} alt={alt ?? ""} />,
};

export function NotePreview({ markdown }: { markdown: string }) {
  if (!markdown) return null;
  return (
    <div className="note-preview markdown" aria-hidden="true">
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
