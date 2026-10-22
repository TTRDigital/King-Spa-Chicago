import { notFound } from "next/navigation";
import { getPage, getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { PostView } from "@/components/pages/Post";

/** Blog posts at /<category>/<slug>/, the old WordPress permalink shape (/uncategorized/the-authentic-korean-spa-experience/). */
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ category: p.category, slug: p.slug }));
}

async function find(params: Promise<{ category: string; slug: string }>) {
  const { category, slug } = await params;
  return (await getPosts()).find((p) => p.category === category && p.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const post = await find(params);
  if (!post) return {};
  return pageMetadata(post.seo, `/${post.category}/${post.slug}/`, post.image);
}

export default async function Page({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const post = await find(params);
  if (!post) notFound();
  const [blog, posts] = await Promise.all([getPage("blogPage"), getPosts()]);
  const path = `/${post.category}/${post.slug}/`;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: post.title, path }])} />
      <PostView post={post} blog={blog} posts={posts} />
    </>
  );
}
