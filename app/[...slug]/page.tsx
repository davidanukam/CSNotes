import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/MarkdownBody";
import { OnThisPage } from "@/components/OnThisPage";
import { TopBar } from "@/components/TopBar";
import { decodeParam, getCourse, getNoteFile, getYear, getYears, hrefFor } from "@/lib/content";
import { extractHeadings, rewriteMarkdown } from "@/lib/markdown";

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  const params: Params[] = [];

  for (const year of getYears()) {
    params.push({ slug: [year.slug] });
    for (const course of year.courses) {
      params.push({ slug: [year.slug, course.folder] });
      for (const note of course.notes) {
        params.push({ slug: [year.slug, course.folder, note.slug] });
      }
    }
  }

  return params;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const parts = slug.map(decodeParam);
  if (parts.length === 1) {
    const year = getYear(parts[0]);
    return { title: year?.label ?? "Year" };
  }
  if (parts.length === 2) {
    const course = getCourse(parts[0], parts[1]);
    return { title: course ? `${course.code} - ${course.title}` : "Course" };
  }
  const note = getNoteFile(parts[0], parts[1], parts.slice(2).join("/"));
  return { title: note?.meta.title ?? "Note" };
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const parts = slug.map(decodeParam);

  if (parts.length === 1) return <YearPage yearSlug={parts[0]} />;
  if (parts.length === 2) return <CoursePage yearSlug={parts[0]} courseCode={parts[1]} />;
  if (parts.length >= 3) {
    return (
      <NotePage yearSlug={parts[0]} courseCode={parts[1]} noteSlug={parts.slice(2).join("/")} />
    );
  }

  notFound();
}

function YearPage({ yearSlug }: { yearSlug: string }) {
  const year = getYear(yearSlug);
  if (!year) notFound();

  return (
    <>
      <TopBar backHref="/" />
      <main className="shell">
        <div className="page-heading">
          <h1>{year.label}</h1>
        </div>
        {year.comingSoon ? (
          <p className="muted">Coming Soon</p>
        ) : (
          <ul className="item-list">
            {year.courses.map((course) => (
              <li key={course.folder}>
                <a href={hrefFor(year.slug, course.folder)} className={course.comingSoon ? "muted" : undefined}>
                  {course.comingSoon
                    ? `${course.code} — Coming Soon`
                    : `${course.code} - ${course.title}`}
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

function CoursePage({ yearSlug, courseCode }: { yearSlug: string; courseCode: string }) {
  const course = getCourse(yearSlug, courseCode);
  if (!course) notFound();

  return (
    <>
      <TopBar backHref={hrefFor(yearSlug)} />
      <main className="shell">
        <div className="page-heading">
          <span className="code">{course.code}</span>
          <h1>{course.comingSoon ? "Coming Soon" : course.title}</h1>
        </div>
        {course.comingSoon ? (
          <p className="muted">Notes for this course have not been added yet.</p>
        ) : (
          <ul className="item-list">
            {course.notes.map((note) => (
              <li key={note.slug}>
                <a href={hrefFor(yearSlug, course.folder, note.slug)}>{note.title}</a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

function NotePage({
  yearSlug,
  courseCode,
  noteSlug,
}: {
  yearSlug: string;
  courseCode: string;
  noteSlug: string;
}) {
  const note = getNoteFile(yearSlug, courseCode, noteSlug);
  if (!note) notFound();

  const markdown = rewriteMarkdown(note.markdown, note.relDir);
  const headings = extractHeadings(note.markdown);

  return (
    <>
      <TopBar backHref={hrefFor(yearSlug, note.course.folder)} markdown={note.markdown} />
      <main className="note-layout">
        <article>
          <div className="toc-mobile">
            <OnThisPage headings={headings} />
          </div>
          <MarkdownBody markdown={markdown} />
        </article>
        <OnThisPage headings={headings} />
      </main>
    </>
  );
}
