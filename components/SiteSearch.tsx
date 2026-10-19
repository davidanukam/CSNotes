"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  filterSearchEntries,
  highlightParts,
  type SearchEntry,
  type SearchOptions,
} from "@/lib/search";

const CASE_KEY = "csnotes-search-case";
const WORD_KEY = "csnotes-search-word";

function readFlag(key: string): boolean {
  try {
    return localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeFlag(key: string, value: boolean) {
  try {
    localStorage.setItem(key, value ? "1" : "0");
  } catch {
    /* ignore quota / private mode */
  }
}

function subscribe() {
  return () => {};
}

function macSnapshot() {
  return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
}

function macServerSnapshot() {
  return false;
}

function Highlight({
  text,
  query,
  options,
}: {
  text: string;
  query: string;
  options: SearchOptions;
}) {
  const parts = highlightParts(text, query, options);
  return parts.map((part, index) =>
    part.match ? (
      <mark key={index} className="search-mark">
        {part.text}
      </mark>
    ) : (
      <span key={index}>{part.text}</span>
    ),
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.5 7.2A1.7 1.7 0 0 1 5.2 5.5h4.1l1.7 1.8h7.8a1.7 1.7 0 0 1 1.7 1.7v8.3a1.7 1.7 0 0 1-1.7 1.7H5.2a1.7 1.7 0 0 1-1.7-1.7V7.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3.5h6.2L18.5 8.8V19a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M13 3.8V9h5.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15 15.2 19.2 19.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function SiteSearch({ entries }: { entries: SearchEntry[] }) {
  const router = useRouter();
  const listId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const isMac = useSyncExternalStore(subscribe, macSnapshot, macServerSnapshot);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [matchCase, setMatchCase] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [active, setActive] = useState(0);
  const options = useMemo<SearchOptions>(
    () => ({ matchCase, wholeWord }),
    [matchCase, wholeWord],
  );
  const results = useMemo(
    () => filterSearchEntries(entries, query, options),
    [entries, query, options],
  );
  const filterKey = `${matchCase ? 1 : 0}|${wholeWord ? 1 : 0}|${query}`;
  const [prevFilter, setPrevFilter] = useState(filterKey);
  if (filterKey !== prevFilter) {
    setPrevFilter(filterKey);
    setActive(0);
  }
  const resetSelection = filterKey !== prevFilter;
  const selected =
    results.length === 0 ? -1 : Math.min(resetSelection ? 0 : active, results.length - 1);

  useEffect(() => {
    setMatchCase(readFlag(CASE_KEY));
    setWholeWord(readFlag(WORD_KEY));
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open || selected < 0) return;
    document.getElementById(`${listId}-opt-${selected}`)?.scrollIntoView({ block: "nearest" });
  }, [open, selected, listId, results]);

  function dismiss() {
    setOpen(false);
    setQuery("");
    setActive(0);
    inputRef.current?.blur();
  }

  function toggleCase() {
    setMatchCase((value) => {
      const next = !value;
      writeFlag(CASE_KEY, next);
      return next;
    });
  }

  function toggleWord() {
    setWholeWord((value) => {
      const next = !value;
      writeFlag(WORD_KEY, next);
      return next;
    });
  }

  function holdFocus(event: React.MouseEvent) {
    event.preventDefault();
  }

  const keyboard = useRef({
    open,
    results,
    selected,
    dismiss,
    toggleCase,
    toggleWord,
    push: router.push.bind(router),
  });
  keyboard.current = {
    open,
    results,
    selected,
    dismiss,
    toggleCase,
    toggleWord,
    push: router.push.bind(router),
  };

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.isComposing) return;
      const state = keyboard.current;
      const meta = event.metaKey || event.ctrlKey;

      if (meta && !event.altKey && !event.shiftKey && event.code === "KeyK") {
        event.preventDefault();
        if (state.open) state.dismiss();
        else {
          setOpen(true);
          requestAnimationFrame(() => inputRef.current?.focus());
        }
        return;
      }

      if (!state.open) return;

      if (event.altKey && !meta && !event.shiftKey && !event.repeat) {
        if (event.code === "KeyC") {
          event.preventDefault();
          state.toggleCase();
          return;
        }
        if (event.code === "KeyW") {
          event.preventDefault();
          state.toggleWord();
          return;
        }
      }

      if (event.key === "Escape") {
        event.preventDefault();
        state.dismiss();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((index) => Math.min(index + 1, Math.max(state.results.length - 1, 0)));
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((index) => Math.max(index - 1, 0));
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        setActive(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        setActive(Math.max(state.results.length - 1, 0));
        return;
      }

      if (event.key === "Enter" && event.target === inputRef.current && state.selected >= 0) {
        const href = state.results[state.selected]?.href;
        if (!href) return;
        event.preventDefault();
        state.dismiss();
        state.push(href);
      }
    }

    function onPointerDown(event: MouseEvent) {
      const state = keyboard.current;
      if (!state.open) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (inputRef.current?.closest(".nav-search")?.contains(target)) return;
      const element = target instanceof Element ? target : target.parentElement;
      if (element?.closest(".search-dialog")) return;
      state.dismiss();
    }

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  const shortcut = isMac ? "⌘K" : "Ctrl K";
  const popup =
    open && typeof document !== "undefined"
      ? createPortal(
          <>
            <div className="search-backdrop" onMouseDown={dismiss} />
            <div className="search-dialog" role="presentation">
              <ul id={listId} className="search-list" role="listbox" aria-label="Folders and pages">
                {results.length === 0 ? (
                  <li className="search-empty" role="presentation">
                    No results
                  </li>
                ) : (
                  results.map((entry, index) => (
                    <li key={entry.href} role="presentation">
                      <Link
                        id={`${listId}-opt-${index}`}
                        href={entry.href}
                        role="option"
                        aria-selected={index === selected}
                        className="search-hit"
                        prefetch={false}
                        onMouseMove={(event) => {
                          if (pointer.current.x === event.clientX && pointer.current.y === event.clientY) {
                            return;
                          }
                          pointer.current = { x: event.clientX, y: event.clientY };
                          setActive(index);
                        }}
                        onClick={dismiss}
                      >
                        <span className="search-hit-icon">
                          {entry.kind === "folder" ? <FolderIcon /> : <PageIcon />}
                        </span>
                        <span className="search-hit-path">
                          <Highlight text={entry.path} query={query} options={options} />
                        </span>
                        {entry.label ? (
                          <span className="search-hit-label">
                            <Highlight text={entry.label} query={query} options={options} />
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
              <div className="search-footer">
                <span>
                  {results.length === 1 ? "1 result" : `${results.length} results`}
                </span>
                <span className="search-hints">
                  <kbd>↑</kbd>
                  <kbd>↓</kbd>
                  <span>navigate</span>
                  <kbd>↵</kbd>
                  <span>open</span>
                  <kbd>esc</kbd>
                  <span>close</span>
                </span>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <div className={`nav-search${open ? " is-open" : ""}`}>
      <input
        ref={inputRef}
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open && selected >= 0 ? `${listId}-opt-${selected}` : undefined}
        aria-autocomplete="list"
        aria-label="Search notes"
        placeholder="Search notes"
        value={query}
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        autoComplete="off"
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
      />
      {query.length === 0 ? (
        <kbd className="search-kbd" aria-hidden="true">
          {shortcut}
        </kbd>
      ) : null}
      <span className="search-divider" aria-hidden="true" />
      <button
        type="button"
        className="search-toggle"
        aria-pressed={matchCase}
        aria-label="Match Case"
        title="Match Case (Alt+C)"
        onMouseDown={holdFocus}
        onClick={toggleCase}
      >
        Aa
      </button>
      <button
        type="button"
        className="search-toggle search-toggle-word"
        aria-pressed={wholeWord}
        aria-label="Match Whole Word"
        title="Match Whole Word (Alt+W)"
        onMouseDown={holdFocus}
        onClick={toggleWord}
      >
        ab
      </button>
      <button
        type="button"
        className="search-glass"
        aria-label="Search"
        onMouseDown={holdFocus}
        onClick={() => {
          setOpen(true);
          inputRef.current?.focus();
        }}
      >
        <SearchIcon />
      </button>
      <div className="sr-only" aria-live="polite">
        {open ? (results.length === 0 ? "No results" : `${results.length} results`) : ""}
      </div>
      {popup}
    </div>
  );
}
