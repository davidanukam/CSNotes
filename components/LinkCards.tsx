import type { CourseMeta, NoteMeta, YearMeta } from "@/lib/content";
import { hrefFor } from "@/lib/content";

export function YearCardGrid({ years }: { years: YearMeta[] }) {
  return (
    <ul className="card-grid">
      {years.map((year) => (
        <li key={year.slug}>
          <a
            href={hrefFor(year.slug)}
            className={`entry-card lecture-card${year.comingSoon ? " muted" : ""}`}
          >
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

export function LectureCardGrid({
  yearSlug,
  courseFolder,
  notes,
}: {
  yearSlug: string;
  courseFolder: string;
  notes: NoteMeta[];
}) {
  return (
    <ul className="card-grid">
      {notes.map((note) => (
        <li key={note.slug}>
          <a href={hrefFor(yearSlug, courseFolder, note.slug)} className="entry-card lecture-card">
            <span className="entry-card-title">{note.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
