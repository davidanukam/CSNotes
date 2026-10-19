import Link from "next/link";
import { getSearchIndex } from "@/lib/content";
import { BackButton } from "./BackButton";
import { CopyMarkdownButton } from "./CopyMarkdownButton";
import { SiteSearch } from "./SiteSearch";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar({
  backHref,
  markdown,
}: {
  backHref?: string;
  markdown?: string;
}) {
  const entries = getSearchIndex();

  return (
    <header className="topbar">
      <div className="topbar-left">{backHref ? <BackButton href={backHref} /> : null}</div>
      <div className="nav-pill">
        <Link className="brand" href="/" aria-label="CSNotes">
          <img
            className="brand-logo"
            src="/CSNotesLogo.png"
            alt=""
            width={40}
            height={40}
            draggable={false}
          />
        </Link>
        <SiteSearch entries={entries} />
      </div>
      <div className="topbar-right">
        {markdown ? <CopyMarkdownButton markdown={markdown} /> : null}
        <ThemeToggle />
      </div>
    </header>
  );
}
