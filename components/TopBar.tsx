import Link from "next/link";
import { BackButton } from "./BackButton";
import { CopyMarkdownButton } from "./CopyMarkdownButton";

export function TopBar({
  backHref,
  markdown,
}: {
  backHref?: string;
  markdown?: string;
}) {
  return (
    <header className="topbar">
      <div className="topbar-left">{backHref ? <BackButton href={backHref} /> : null}</div>
      <Link className="brand" href="/">
        CSNotes
      </Link>
      <div className="topbar-right">
        {markdown ? <CopyMarkdownButton markdown={markdown} /> : null}
      </div>
    </header>
  );
}
