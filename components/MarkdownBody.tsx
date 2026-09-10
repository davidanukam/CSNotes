import type { Components, Options } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { MarkdownImage } from "./MarkdownImage";
import "highlight.js/styles/github-dark.css";

const remarkPlugins: Options["remarkPlugins"] = [remarkGfm, remarkMath];
const rehypePlugins: Options["rehypePlugins"] = [
  rehypeSlug,
  rehypeKatex,
  [rehypeHighlight, { ignoreMissing: true }],
];

const components: Components = {
  img: MarkdownImage,
};

export function MarkdownBody({ markdown }: { markdown: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
