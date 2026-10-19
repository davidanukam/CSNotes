export type SearchKind = "folder" | "page";

export type SearchEntry = {
  kind: SearchKind;
  href: string;
  path: string;
  label: string;
  /** Names that belong to this folder or page (title, course code, year). */
  names: string[];
  /** Ancestor year/course codes. Matches here rank below a hit on `names`. */
  context: string;
};

export type SearchOptions = {
  matchCase: boolean;
  wholeWord: boolean;
};

export type HighlightPart = {
  text: string;
  match: boolean;
};

const WORD = /[\p{L}\p{N}_]/u;

function fold(text: string, matchCase: boolean): string {
  return matchCase ? text : text.toLowerCase();
}

function isWordChar(char: string | undefined): boolean {
  return Boolean(char && WORD.test(char));
}

export function findMatchRanges(
  text: string,
  rawQuery: string,
  options: SearchOptions,
): Array<{ start: number; end: number }> | null {
  const query = rawQuery.trim();
  if (!query || !text) return [];

  const hay = fold(text, options.matchCase);
  const needle = fold(query, options.matchCase);
  if (hay.length !== text.length || needle.length !== query.trim().length) {
    return hay.includes(needle) ? null : [];
  }

  const ranges: Array<{ start: number; end: number }> = [];
  let from = 0;
  while (from <= hay.length - needle.length) {
    const start = hay.indexOf(needle, from);
    if (start < 0) break;
    const end = start + needle.length;
    const bounded = !isWordChar(hay[start - 1]) && !isWordChar(hay[end]);
    if (!options.wholeWord || bounded) ranges.push({ start, end });
    from = end;
  }
  return ranges;
}

function rankRanges(
  text: string,
  query: string,
  ranges: Array<{ start: number; end: number }>,
  options: SearchOptions,
): number {
  const hay = fold(text, options.matchCase);
  const needle = fold(query.trim(), options.matchCase);
  if (hay === needle) return 0;
  let best = 3;
  for (const range of ranges) {
    if (range.start === 0) return 1;
    if (!isWordChar(hay[range.start - 1])) best = Math.min(best, 2);
  }
  return best;
}

function fieldRank(text: string, query: string, options: SearchOptions): number | null {
  const ranges = findMatchRanges(text, query, options);
  if (ranges === null) return text && fold(text, options.matchCase).includes(fold(query.trim(), options.matchCase)) ? 3 : null;
  if (ranges.length === 0) return null;
  return rankRanges(text, query, ranges, options);
}

export function filterSearchEntries(
  entries: SearchEntry[],
  rawQuery: string,
  options: SearchOptions,
): SearchEntry[] {
  const query = rawQuery.trim();
  if (!query) return entries;

  const ranked: Array<{ entry: SearchEntry; score: number; index: number }> = [];
  for (let index = 0; index < entries.length; index++) {
    const entry = entries[index];
    let best: number | null = null;

    for (const name of entry.names) {
      const rank = fieldRank(name, query, options);
      if (rank === null) continue;
      best = best === null ? rank : Math.min(best, rank);
    }

    if (entry.context) {
      const rank = fieldRank(entry.context, query, options);
      if (rank !== null) {
        const score = 4 + rank;
        best = best === null ? score : Math.min(best, score);
      }
    }

    if (best !== null) ranked.push({ entry, score: best, index });
  }

  ranked.sort((a, b) => a.score - b.score || a.index - b.index);
  return ranked.map((item) => item.entry);
}

export function highlightParts(
  text: string,
  rawQuery: string,
  options: SearchOptions,
): HighlightPart[] {
  const ranges = findMatchRanges(text, rawQuery, options);
  if (!ranges || ranges.length === 0) return [{ text, match: false }];

  const parts: HighlightPart[] = [];
  let last = 0;
  for (const range of ranges) {
    if (range.start > last) parts.push({ text: text.slice(last, range.start), match: false });
    parts.push({ text: text.slice(range.start, range.end), match: true });
    last = range.end;
  }
  if (last < text.length) parts.push({ text: text.slice(last), match: false });
  return parts;
}
