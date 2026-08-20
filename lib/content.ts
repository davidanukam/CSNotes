import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SKIP = new Set([
  "app",
  "components",
  "lib",
  "node_modules",
  "out",
  "public",
  "scripts",
  ".git",
  ".github",
  ".next",
]);

export type Heading = {
  depth: number;
  text: string;
  id: string;
};

export type NoteMeta = {
  title: string;
  slug: string;
  fileName: string;
};

export type CourseMeta = {
  year: string;
  folder: string;
  code: string;
  title: string;
  notes: NoteMeta[];
  comingSoon: boolean;
};

export type YearMeta = {
  slug: string;
  label: string;
  comingSoon: boolean;
  courses: CourseMeta[];
};

function yearFolders(): string[] {
  return readdirSync(ROOT)
    .filter((name) => /^Year\d+$/i.test(name))
    .filter((name) => statSync(join(ROOT, name)).isDirectory())
    .sort((a, b) => Number(a.replace(/\D/g, "")) - Number(b.replace(/\D/g, "")));
}

function parseCourseTitle(markdown: string, fallbackCode: string): { code: string; title: string } {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? fallbackCode;
  const split = heading.match(/^(\d+)\s*[-–—]\s*(.+)$/);
  if (split) return { code: split[1], title: split[2].trim() };
  return { code: fallbackCode, title: heading };
}

function parseNoteLinks(markdown: string): NoteMeta[] {
  const notes: NoteMeta[] = [];
  const re = /\[([^\]]+)\]\(([^)]+\.md)\)/gi;
  for (const match of markdown.matchAll(re)) {
    const title = match[1].trim();
    const fileName = decodeURIComponent(match[2].split("/").pop() ?? match[2]);
    const slug = fileName.replace(/\.md$/i, "");
    notes.push({ title, slug, fileName });
  }
  return notes;
}

function mergeNotes(listed: NoteMeta[], onDisk: NoteMeta[]): NoteMeta[] {
  const seen = new Set(listed.map((note) => note.slug.toLowerCase()));
  const extras = onDisk.filter((note) => !seen.has(note.slug.toLowerCase()));
  return [...listed, ...extras];
}

function notesFromFolder(courseDir: string): NoteMeta[] {
  return readdirSync(courseDir)
    .filter((name) => name.endsWith(".md") && name.toLowerCase() !== "readme.md")
    .sort((a, b) => a.localeCompare(b))
    .map((fileName) => ({
      title: fileName.replace(/\.md$/i, ""),
      slug: fileName.replace(/\.md$/i, ""),
      fileName,
    }));
}

export function getYears(): YearMeta[] {
  return yearFolders().map((slug) => {
    const yearDir = join(ROOT, slug);
    const courses: CourseMeta[] = [];

    for (const entry of readdirSync(yearDir).sort()) {
      if (SKIP.has(entry) || entry.startsWith(".") || entry === "assets") continue;
      const courseDir = join(yearDir, entry);
      if (!statSync(courseDir).isDirectory()) continue;
      if (!/^\d+$/.test(entry)) continue;

      const readmePath = join(courseDir, "README.md");
      const readme = existsSync(readmePath) ? readFileSync(readmePath, "utf8") : "";
      const { code, title } = readme
        ? parseCourseTitle(readme, entry)
        : { code: entry, title: "Coming Soon" };
      const listed = readme ? parseNoteLinks(readme) : [];
      const onDisk = notesFromFolder(courseDir);
      const notes = mergeNotes(listed, onDisk);

      courses.push({
        year: slug,
        folder: entry,
        code,
        title: notes.length === 0 && !readme ? "Coming Soon" : title,
        notes,
        comingSoon: notes.length === 0,
      });
    }

    return {
      slug,
      label: slug.replace(/Year(\d+)/i, "Year $1"),
      comingSoon: courses.length === 0,
      courses,
    };
  });
}

export function decodeParam(value: string): string {
  let current = value.replace(/\+/g, " ");
  for (let i = 0; i < 4; i++) {
    try {
      const next = decodeURIComponent(current);
      if (next === current) break;
      current = next;
    } catch {
      break;
    }
  }
  return current.trim();
}

function sameName(a: string, b: string): boolean {
  return decodeParam(a).toLowerCase() === decodeParam(b).toLowerCase();
}

export function getYear(slug: string): YearMeta | undefined {
  const decoded = decodeParam(slug);
  return getYears().find((year) => sameName(year.slug, decoded));
}

export function getCourse(yearSlug: string, courseCode: string): CourseMeta | undefined {
  const year = getYear(yearSlug);
  const decoded = decodeParam(courseCode);
  return year?.courses.find(
    (course) => sameName(course.code, decoded) || sameName(course.folder, decoded),
  );
}

export function getNoteFile(
  yearSlug: string,
  courseCode: string,
  noteSlug: string,
): { meta: NoteMeta; course: CourseMeta; markdown: string; relDir: string } | undefined {
  const course = getCourse(yearSlug, courseCode);
  if (!course) return undefined;

  const want = decodeParam(noteSlug).replace(/\.md$/i, "");
  const meta =
    course.notes.find((note) => sameName(note.slug, want) || sameName(note.fileName, want)) ??
    notesFromFolder(join(ROOT, decodeParam(yearSlug), course.folder)).find(
      (note) => sameName(note.slug, want) || sameName(note.fileName, want),
    );
  if (!meta) return undefined;

  const filePath = join(ROOT, decodeParam(yearSlug), course.folder, meta.fileName);
  if (!existsSync(filePath)) return undefined;

  return {
    meta,
    course,
    markdown: readFileSync(filePath, "utf8"),
    relDir: `/${decodeParam(yearSlug)}/${course.folder}`,
  };
}

export function hrefFor(...parts: string[]): string {
  return "/" + parts.map((part) => encodeURIComponent(decodeParam(part))).join("/");
}
