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

  const onInput = (e: InputEvent & { currentTarget: HTMLInputElement }) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
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
          placeholder="What are you looking for?"
          className="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"
        />
        <svg
          className="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current"
          aria-hidden="true"
        >
          <use href={`/ui.svg#search`} />
        </svg>
      </div>
      {query().length >= 2 && results().length > 0 && (
        <div className="mt-12">
          <div className="text-sm uppercase mb-2">
            Found {results().length} results for {`'${query()}'`}
          </div>
          <ul className="flex flex-col gap-3">
            {results().map((result) => (
              <li key={result.slug}>
                <ArrowCard entry={result} pill={true} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

