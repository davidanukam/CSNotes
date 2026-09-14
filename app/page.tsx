import { TopBar } from "@/components/TopBar";
import { YearCardGrid } from "@/components/LinkCards";
import { getYears } from "@/lib/content";

export default function HomePage() {
  const years = getYears().filter((year) => !year.comingSoon);

  return (
    <>
      <TopBar />
      <main className="shell">
        <h1 className="home-title">CSNotes</h1>
        <p className="home-sub">
          All Notes to help you ACE Computer Science at Western University
        </p>
        <YearCardGrid years={years} />
      </main>
    </>
  );
}
