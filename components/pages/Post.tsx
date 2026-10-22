import type { blogPage } from "@/lib/data/pages/blog";
import type { Post } from "@/lib/data/posts";

/** Blog post template. */
export function PostView({ post }: { post: Post; blog: typeof blogPage; posts: Post[] }) {
  return <h1 className="p-10">{post.title}</h1>;
}
