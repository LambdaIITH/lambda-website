import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal } from "solid-js";
import Fuse from "fuse.js";
import ArrowCard from "@components/solid/ArrowCard";

type Props = {
  data: CollectionEntry<"blog">[];
};

export default function Search({ data }: Props) {
  const [query, setQuery] = createSignal("");
  const [results, setResults] = createSignal<CollectionEntry<"blog">[]>([]);

  const fuse = new Fuse(data, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.4,
  });

  createEffect(() => {
    if (query().length < 2) {
      setResults([]);
    } else {
      const searchResults = fuse.search(query());
      setResults(searchResults.map((result) => result.item));
    }
  });

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="relative max-w-2xl mx-auto">
        <input
          name="search"
          type="text"
          value={query()}
          onInput={(e) => {
            const target = e.currentTarget as HTMLInputElement;
            setQuery(target.value);
          }}
          autoComplete="off"
          spellCheck={false}
          placeholder="Search posts..."
          className="w-full px-4 py-3 pl-12 rounded-xl text-purple-900 dark:text-purple-100 bg-white dark:bg-purple-950/10 border border-purple-100 dark:border-purple-800 focus:border-purple-400 dark:focus:border-purple-500 focus:ring-2 focus:ring-purple-400/20 dark:focus:ring-purple-500/20 transition-all duration-200 placeholder:text-purple-400/60 dark:placeholder:text-purple-500/60"
        />
        <svg
          className="absolute w-6 h-6 left-3 top-1/2 -translate-y-1/2 text-purple-400 dark:text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Search Results */}
      {query().length >= 2 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-purple-900 dark:text-purple-100">
              {results().length > 0 ? (
                <>
                  Found {results().length} result
                  {results().length === 1 ? "" : "s"} for{" "}
                  <span className="font-semibold">"{query()}"</span>
                </>
              ) : (
                <>
                  No results found for{" "}
                  <span className="font-semibold">"{query()}"</span>
                </>
              )}
            </h2>
          </div>

          {/* Results Grid */}
          {results().length > 0 && (
            <div className="space-y-4">
              {results().map((result) => (
                <ArrowCard entry={result} pill={true} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {results().length === 0 && (
            <div className="text-center py-12 bg-white dark:bg-purple-950/10 rounded-xl border border-purple-100 dark:border-purple-800">
              <p className="text-purple-600 dark:text-purple-400">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
