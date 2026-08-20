import { TopBar } from "@/components/TopBar";
import { getYears, hrefFor } from "@/lib/content";

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
            <h2>
              <a href={hrefFor(year.slug)}>{year.label}</a>
            </h2>
            {year.comingSoon ? (
              <p className="muted">Coming Soon</p>
            ) : (
              <ol className="item-list">
                {year.courses.map((course) => (
                  <li key={course.code}>
                    <a href={hrefFor(year.slug, course.code)}>
                      {course.code} - {course.title}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}
      </main>
    </>
  );
}
