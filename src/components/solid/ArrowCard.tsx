import { formatDate } from "@lib/utils";
import type { CollectionEntry } from "astro:content";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projects">;
  pill?: boolean;
};

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a
      href={`/${entry.collection}/${entry.slug}`}
      className="group relative p-6 flex items-center gap-4 rounded-xl bg-white dark:bg-purple-950/10 border border-purple-100 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
    >
      <div className="w-full group-hover:translate-x-1 transition-transform duration-300">
        <div className="flex flex-wrap items-center gap-2">
          {pill && (
            <div className="text-sm capitalize px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
              {entry.collection === "blog" ? "post" : "project"}
            </div>
          )}
          <div className="text-sm text-purple-600 dark:text-purple-400">
            {formatDate(entry.data.date)}
          </div>
        </div>
        <h3 className="font-semibold mt-3 text-purple-900 dark:text-purple-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
          {entry.data.title}
        </h3>

        <p className="text-sm text-purple-800/80 dark:text-purple-200/80 line-clamp-2 mt-1">
          {entry.data.summary}
        </p>
        <ul className="flex flex-wrap mt-3 gap-2">
          {entry.data.tags.map(
            (
              tag: string // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
            ) => (
              <li className="text-xs uppercase py-1 px-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400">
                {tag}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Arrow icon with animation */}
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-purple-400 dark:text-purple-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all duration-300"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>

      {/* Hover gradient effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-transparent dark:from-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </a>
  );
}
