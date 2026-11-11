import { notFound } from "next/navigation";
import { MarkdownBody } from "@/components/MarkdownBody";
import { OnThisPage } from "@/components/OnThisPage";
import { TopBar } from "@/components/TopBar";
import { CourseCardGrid, EntryCardGrid } from "@/components/LinkCards";
import {
  decodeParam,
  getCourse,
  getYear,
  getYears,
  hrefFor,
  resolveCourseEntry,
  type DirEntry,
} from "@/lib/content";
import { extractHeadings, rewriteMarkdown } from "@/lib/markdown";

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  const params: Params[] = [];

  for (const year of getYears()) {
    params.push({ slug: [year.slug] });
    for (const course of year.courses) {
      params.push({ slug: [year.slug, course.folder] });
      collectParams([year.slug, course.folder], course.entries, params);
    }
  }

  return params;
}

function collectParams(parts: string[], entries: DirEntry[], params: Params[]) {
  for (const entry of entries) {
    const next = [...parts, entry.slug];
    params.push({ slug: next });
    if (entry.kind === "folder") collectParams(next, entry.entries, params);
  }
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
  const location = resolveCourseEntry(parts[0], parts[1], parts.slice(2));
  if (location?.kind === "folder") return { title: location.title };
  return { title: location?.kind === "note" ? location.meta.title : "Note" };
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const parts = slug.map(decodeParam);

  if (parts.length === 1) return <YearPage yearSlug={parts[0]} />;
  if (parts.length === 2) return <CoursePage yearSlug={parts[0]} courseCode={parts[1]} />;
  if (parts.length >= 3) return <NestedPage yearSlug={parts[0]} courseCode={parts[1]} segments={parts.slice(2)} />;

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
          <CourseCardGrid yearSlug={year.slug} courses={year.courses} />
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
          <EntryCardGrid
            yearSlug={yearSlug}
            courseFolder={course.folder}
            segments={[]}
            entries={course.entries}
          />
        )}
      </main>
    </>
  );
}

function NestedPage({
  yearSlug,
  courseCode,
  segments,
}: {
  yearSlug: string;
  courseCode: string;
  segments: string[];
}) {
  const location = resolveCourseEntry(yearSlug, courseCode, segments);
  if (!location) notFound();
  if (location.kind === "folder") {
    return (
      <FolderPage
        yearSlug={yearSlug}
        courseFolder={location.course.folder}
        code={location.course.code}
        title={location.title}
        backHref={location.parentHref}
        segments={location.segments}
        entries={location.entries}
      />
    );
  }
  return <NotePage note={location} />;
}

function FolderPage({
  yearSlug,
  courseFolder,
  code,
  title,
  backHref,
  segments,
  entries,
}: {
  yearSlug: string;
  courseFolder: string;
  code: string;
  title: string;
  backHref: string;
  segments: string[];
  entries: DirEntry[];
}) {
  return (
    <>
      <TopBar backHref={backHref} />
      <main className="shell">
        <div className="page-heading">
          <span className="code">{code}</span>
          <h1>{title}</h1>
        </div>
        <EntryCardGrid
          yearSlug={yearSlug}
          courseFolder={courseFolder}
          segments={segments}
          entries={entries}
        />
      </main>
    </>
  );
}

function NotePage({
  note,
}: {
  note: Extract<ReturnType<typeof resolveCourseEntry>, { kind: "note" }>;
}) {
  const markdown = rewriteMarkdown(note.markdown, note.relDir);
  const headings = extractHeadings(note.markdown);

  return (
    <>
      <TopBar backHref={note.parentHref} markdown={note.markdown} />
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
