import type { CourseMeta, DirEntry, YearMeta } from "@/lib/content";
import { hrefFor } from "@/lib/content";
import { EntryKindIcon } from "@/components/KindIcon";

export function YearCardGrid({ years }: { years: YearMeta[] }) {
  return (
    <ul className="card-grid">
      {years.map((year) => (
        <li key={year.slug}>
          <a
            href={hrefFor(year.slug)}
            className={`entry-card year-card${year.comingSoon ? " muted" : ""}`}
          >
            <EntryKindIcon kind="folder" />
            <span className="entry-card-title">{year.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function CourseCardGrid({
  yearSlug,
  courses,
}: {
  yearSlug: string;
  courses: CourseMeta[];
}) {
  return (
    <ul className="card-grid">
      {courses.map((course) => (
        <li key={course.folder}>
          <a
            href={hrefFor(yearSlug, course.folder)}
            className={`entry-card${course.comingSoon ? " muted" : ""}`}
          >
            <EntryKindIcon kind="folder" />
            <span className="entry-card-code">{course.code}</span>
            <span className="entry-card-title">
              {course.comingSoon ? "Coming Soon" : course.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function EntryCardGrid({
  yearSlug,
  courseFolder,
  segments,
  entries,
}: {
  yearSlug: string;
  courseFolder: string;
  segments: string[];
  entries: DirEntry[];
}) {
  return (
    <ul className="card-grid">
      {entries.map((entry) => (
        <li key={`${entry.kind}:${entry.slug}`}>
          <a
            href={hrefFor(yearSlug, courseFolder, ...segments, entry.slug)}
            className="entry-card lecture-card"
          >
            <EntryKindIcon kind={entry.kind === "folder" ? "folder" : "page"} />
            <span className="entry-card-title">{entry.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
