import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal } from "solid-js";
import ArrowCard from "@components/solid/ArrowCard";
import { cn } from "@lib/utils";

type Props = {
  tags: string[];
  data: CollectionEntry<"blog">[];
};

export default function Blog({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>());
  const [posts, setPosts] = createSignal<CollectionEntry<"blog">[]>(data);

  createEffect(() => {
    const currentFilter = filter();
    if (currentFilter.size === 0) {
      setPosts(data);
      return;
    }

    setPosts(
      data.filter((entry) =>
        Array.from(currentFilter).every((value) =>
          entry.data.tags.some(
            (tag: string) => tag.toLowerCase() === value.toLowerCase()
          )
        )
      )
    );
  });

  function toggleTag(tag: string) {
    setFilter(
      (prev) =>
        new Set(
          prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag]
        )
    );
  }

  return (
    <div className="space-y-8">
      {/* Tags Section */}
      <div className="bg-white dark:bg-purple-950/10 rounded-xl border border-purple-100 dark:border-purple-800 p-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              onClick={() => toggleTag(tag)}
              key={tag}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                filter().has(tag)
                  ? "bg-purple-900 dark:bg-purple-100 text-white dark:text-purple-900"
                  : "bg-purple-100/80 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/40"
              )}
            >
              {tag}
              {filter().has(tag) && <span className="ml-2 text-xs">×</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-purple-900 dark:text-purple-100">
            SHOWING {posts().length} OF {data.length} POSTS
          </h2>
          {filter().size > 0 && (
            <button
              onClick={() => setFilter(new Set())}
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Posts Grid */}
        <div className="space-y-4">
          {posts().map((post) => (
            <ArrowCard entry={post} key={post.slug} />
          ))}
        </div>

        {/* Empty State */}
        {posts().length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-purple-950/10 rounded-xl border border-purple-100 dark:border-purple-800">
            <p className="text-purple-600 dark:text-purple-400">
              No posts found with the selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
