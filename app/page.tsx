import { TopBar } from "@/components/TopBar";
import { CourseCardGrid } from "@/components/LinkCards";
import { getYears } from "@/lib/content";

export default function HomePage() {
  const years = getYears();

  return (
    <>
      <TopBar />
      <main className="shell">
        <h1 className="home-title">CSNotes</h1>
        <p className="home-sub">
          All Notes to help you ACE Computer Science at Western University
        </p>

        {years.map((year) => (
          <section className="year-block" key={year.slug}>
            <h2>{year.label}</h2>
            {year.comingSoon ? (
              <p className="muted">Coming Soon</p>
            ) : (
              <CourseCardGrid yearSlug={year.slug} courses={year.courses} />
            )}
          </section>
        ))}
      </main>
    </>
  );
}
