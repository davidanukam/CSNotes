import Link from "next/link";
import { TopBar } from "@/components/TopBar";

export default function NotFound() {
  return (
    <>
      <TopBar backHref="/" />
      <main className="shell">
        <h1 className="home-title">Page not found</h1>
        <p className="muted">
          That note does not exist yet. <Link href="/">Back to CSNotes</Link>
        </p>
      </main>
    </>
  );
}
