import type { blogPage } from "@/lib/data/pages/blog";
import type { Post } from "@/lib/data/posts";

/** Category and author archives. */
export function ArchiveView({ title }: { title: string; posts: Post[]; blog: typeof blogPage }) {
  return <h1 className="p-10">{title}</h1>;
}
