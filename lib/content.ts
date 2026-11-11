import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";
import type { SearchEntry } from "@/lib/search";

const SKIP = new Set(["assets"]);
const YEAR_SLUGS = ["Year1", "Year2", "Year3", "Year4"] as const;
type YearSlug = (typeof YEAR_SLUGS)[number];

export type Heading = {
  depth: number;
  text: string;
  id: string;
};

export type NoteMeta = {
  kind: "note";
  title: string;
  slug: string;
  fileName: string;
};

export type FolderMeta = {
  kind: "folder";
  title: string;
  slug: string;
  entries: DirEntry[];
};

export type DirEntry = NoteMeta | FolderMeta;

export type CourseMeta = {
  year: string;
  folder: string;
  code: string;
  title: string;
  entries: DirEntry[];
  comingSoon: boolean;
};

export type YearMeta = {
  slug: string;
  label: string;
  comingSoon: boolean;
  courses: CourseMeta[];
};

function yearRoot(slug: YearSlug): string {
  switch (slug) {
    case "Year1":
      return join(process.cwd(), "Year1");
    case "Year2":
      return join(process.cwd(), "Year2");
    case "Year3":
      return join(process.cwd(), "Year3");
    case "Year4":
      return join(process.cwd(), "Year4");
  }
}

function matchYearSlug(value: string): YearSlug | undefined {
  const decoded = decodeParam(value);
  return YEAR_SLUGS.find((slug) => sameName(slug, decoded));
}

function yearFolders(): YearSlug[] {
  return YEAR_SLUGS.filter((slug) => {
    const dir = yearRoot(slug);
    return existsSync(dir) && statSync(dir).isDirectory();
  });
}

function parseCourseTitle(markdown: string, fallbackCode: string): { code: string; title: string } {
  const heading =
    markdown
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => /^#\s+/.test(line))
      ?.replace(/^#\s+/, "")
      .trim() ?? fallbackCode;
  const split = heading.match(/^(\d+)\s*[-–—]\s*(.+)$/);
  if (split) return { code: split[1], title: split[2].trim() };
  return { code: fallbackCode, title: heading };
}

function fileSlug(fileName: string): string {
  return fileName.replace(/\.md$/i, "");
}

function noteRelPath(raw: string): string | undefined {
  const trimmed = raw.trim().split(/[?#]/)[0]?.replace(/\\/g, "/") ?? "";
  if (!trimmed || /^(https?:|mailto:|data:)/i.test(trimmed) || trimmed.startsWith("/")) return undefined;
  let decoded = trimmed;
  try {
    decoded = decodeURIComponent(trimmed);
  } catch {
    decoded = trimmed;
  }
  decoded = decoded.replace(/^\.\//, "");
  if (!decoded || decoded.split("/").includes("..") || !decoded.toLowerCase().endsWith(".md")) return undefined;
  return decoded.replace(/\.md$/i, "");
}

function parseNoteLinks(markdown: string): Array<{ title: string; relPath: string }> {
  const notes: Array<{ title: string; relPath: string }> = [];
  const re = /\[([^\]]+)\]\(([^)]+\.md)\)/gi;
  for (const match of markdown.matchAll(re)) {
    const relPath = noteRelPath(match[2]);
    if (!relPath) continue;
    notes.push({ title: match[1].trim(), relPath });
  }
  return notes;
}

function childTitles(titles: Map<string, string>, folderName: string): Map<string, string> {
  const prefix = `${folderName.toLowerCase()}/`;
  const next = new Map<string, string>();
  for (const [key, title] of titles) {
    if (key.startsWith(prefix)) next.set(key.slice(prefix.length), title);
  }
  return next;
}

function containsNote(entries: DirEntry[]): boolean {
  return entries.some((entry) => entry.kind === "note" || containsNote(entry.entries));
}

function readEntries(dir: string, inherited: Map<string, string>): DirEntry[] {
  const readmePath = join(dir, "README.md");
  const readme = existsSync(readmePath) ? readFileSync(readmePath, "utf8") : "";
  const titles = new Map(inherited);
  const listed: string[] = [];
  for (const link of parseNoteLinks(readme)) {
    const key = link.relPath.toLowerCase();
    titles.set(key, link.title);
    if (!key.includes("/")) listed.push(key);
  }

  const fileBySlug = new Map<string, string>();
  const folderNames: string[] = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (SKIP.has(name)) continue;
      folderNames.push(name);
      continue;
    }
    if (name.toLowerCase().endsWith(".md") && name.toLowerCase() !== "readme.md") {
      fileBySlug.set(fileSlug(name).toLowerCase(), name);
    }
  }

  const notes: NoteMeta[] = [];
  const seen = new Set<string>();
  const take = (key: string) => {
    const fileName = fileBySlug.get(key);
    if (!fileName || seen.has(key)) return;
    seen.add(key);
    const slug = fileSlug(fileName);
    notes.push({
      kind: "note",
      title: titles.get(key) ?? slug,
      slug,
      fileName,
    });
  };

  for (const key of listed) take(key);
  for (const key of inherited.keys()) {
    if (!key.includes("/")) take(key);
  }
  for (const fileName of [...fileBySlug.values()].sort((a, b) => a.localeCompare(b))) {
    take(fileSlug(fileName).toLowerCase());
  }

  const folders: FolderMeta[] = [];
  for (const name of folderNames.sort((a, b) => a.localeCompare(b))) {
    const entries = readEntries(join(dir, name), childTitles(titles, name));
    if (!containsNote(entries)) continue;
    folders.push({ kind: "folder", title: name, slug: name, entries });
  }

  return [...notes, ...folders];
}

export const getYears = cache(function getYears(): YearMeta[] {
  return yearFolders().map((slug) => {
    const yearDir = yearRoot(slug);
    const courses: CourseMeta[] = [];

    for (const entry of readdirSync(yearDir).sort()) {
      if (SKIP.has(entry) || entry.startsWith(".")) continue;
      const courseDir = join(yearDir, entry);
      if (!statSync(courseDir).isDirectory()) continue;
      if (!/^\d+$/.test(entry)) continue;

      const readmePath = join(courseDir, "README.md");
      const readme = existsSync(readmePath) ? readFileSync(readmePath, "utf8") : "";
      const { code, title } = readme
        ? parseCourseTitle(readme, entry)
        : { code: entry, title: "Coming Soon" };
      const entries = readEntries(courseDir, new Map());
      const hasNotes = containsNote(entries);

      courses.push({
        year: slug,
        folder: entry,
        code,
        title: !hasNotes && !readme ? "Coming Soon" : title,
        entries,
        comingSoon: !hasNotes,
      });
    }

    return {
      slug,
      label: slug.replace(/Year(\d+)/i, "Year $1"),
      comingSoon: courses.length === 0,
      courses,
    };
  });
});

export const getSearchIndex = cache(function getSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [
    {
      kind: "folder",
      href: "/",
      path: "/",
      label: "CSNotes",
      names: ["/", "CSNotes"],
      context: "",
    },
  ];

  for (const year of getYears()) {
    entries.push({
      kind: "folder",
      href: hrefFor(year.slug),
      path: `/${year.slug}`,
      label: year.label,
      names: [year.slug, year.label],
      context: "",
    });

    for (const course of year.courses) {
      const coursePath = `/${year.slug}/${course.folder}`;
      entries.push({
        kind: "folder",
        href: hrefFor(year.slug, course.folder),
        path: coursePath,
        label: course.title,
        names: [course.folder, course.code, course.title],
        context: `${year.slug} ${year.label}`,
      });

      addSearchTree(
        course.entries,
        [year.slug, course.folder],
        [year.slug, course.folder],
        `${year.slug} ${year.label} ${course.folder} ${course.code}`,
        entries,
      );
    }
  }

  return entries;
});

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

export type CourseLocation =
  | {
      kind: "folder";
      course: CourseMeta;
      title: string;
      entries: DirEntry[];
      parentHref: string;
      segments: string[];
    }
  | {
      kind: "note";
      course: CourseMeta;
      meta: NoteMeta;
      markdown: string;
      relDir: string;
      parentHref: string;
    };

function addSearchTree(
  items: DirEntry[],
  hrefParts: string[],
  pathParts: string[],
  context: string,
  out: SearchEntry[],
) {
  for (const item of items) {
    const nextHref = [...hrefParts, item.slug];
    const nextPath = [...pathParts, item.title];
    const path = `/${nextPath.join("/")}`;
    if (item.kind === "folder") {
      out.push({
        kind: "folder",
        href: hrefFor(...nextHref),
        path,
        label: "",
        names: [item.title],
        context,
      });
      addSearchTree(item.entries, nextHref, nextPath, `${context} ${item.title}`, out);
      continue;
    }
    out.push({
      kind: "page",
      href: hrefFor(...nextHref),
      path,
      label: "",
      names: [item.title],
      context,
    });
  }
}

export function resolveCourseEntry(
  yearSlug: string,
  courseCode: string,
  segments: string[],
): CourseLocation | undefined {
  const course = getCourse(yearSlug, courseCode);
  const year = matchYearSlug(yearSlug);
  if (!course || !year || segments.length === 0) return undefined;

  let items = course.entries;
  const folderSlugs: string[] = [];

  for (let index = 0; index < segments.length; index++) {
    const want = segments[index];
    const entry = items.find(
      (item) => sameName(item.slug, want) || (item.kind === "note" && sameName(item.fileName, want)),
    );
    if (!entry) return undefined;

    const parentHref = hrefFor(year, course.folder, ...folderSlugs);
    if (entry.kind === "folder") {
      if (index === segments.length - 1) {
        return {
          kind: "folder",
          course,
          title: entry.title,
          entries: entry.entries,
          parentHref,
          segments: [...folderSlugs, entry.slug],
        };
      }
      folderSlugs.push(entry.slug);
      items = entry.entries;
      continue;
    }

    if (index !== segments.length - 1) return undefined;
    const filePath = join(yearRoot(year), course.folder, ...folderSlugs, entry.fileName);
    if (!existsSync(filePath)) return undefined;
    return {
      kind: "note",
      course,
      meta: entry,
      markdown: readFileSync(filePath, "utf8"),
      relDir: `/${[year, course.folder, ...folderSlugs].join("/")}`,
      parentHref,
    };
  }

  return undefined;
}

export function hrefFor(...parts: string[]): string {
  return "/" + parts.map((part) => encodeURIComponent(decodeParam(part))).join("/");
}
