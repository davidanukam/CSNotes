import type { CourseMeta, DirEntry, NoteMeta, YearMeta } from "@/lib/content";
import { hrefFor } from "@/lib/content";
import { EntryKindIcon, FolderIcon, PageIcon } from "@/components/KindIcon";
import { NotePreview } from "@/components/NotePreview";
import { rewriteMarkdown } from "@/lib/markdown";

function firstNote(entries: DirEntry[]): NoteMeta | undefined {
  for (const entry of entries) {
    if (entry.kind === "note") return entry;
    const nested = firstNote(entry.entries);
    if (nested) return nested;
  }
  return undefined;
}

function PreviewCard({
  href,
  kind,
  title,
  note,
}: {
  href: string;
  kind: "folder" | "page";
  title: string;
  note?: NoteMeta;
}) {
  const preview = note?.preview ? rewriteMarkdown(note.preview, note.dir) : "";
  return (
    <a href={href} className={`entry-card preview-card${kind === "folder" ? " folder-preview" : ""}`}>
      <span className="preview-body">
        {kind === "folder" ? <span className="preview-back" aria-hidden="true" /> : null}
        <span className="preview-front">
          <NotePreview markdown={preview} />
        </span>
      </span>
      <span className="preview-footer">
        <span className="preview-kind" aria-hidden="true">
          {kind === "folder" ? <FolderIcon /> : <PageIcon />}
        </span>
        <span className="entry-card-title">{title}</span>
      </span>
    </a>
  );
}

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
          <PreviewCard
            href={hrefFor(yearSlug, courseFolder, ...segments, entry.slug)}
            kind={entry.kind === "folder" ? "folder" : "page"}
            title={entry.title}
            note={entry.kind === "note" ? entry : firstNote(entry.entries)}
          />
        </li>
      ))}
    </ul>
  );
}
