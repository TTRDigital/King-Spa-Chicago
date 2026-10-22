import { notFound } from "next/navigation";
import { getPage, getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { ArchiveView } from "@/components/pages/Archive";

/** Category archives (/category/uncategorized/), as WordPress had them. */
export const dynamicParams = false;

export async function generateStaticParams() {
  return [...new Set((await getPosts()).map((p) => p.category))].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getPosts()).find((p) => p.category === slug);
  return post ? pageMetadata({ title: `${post.categoryName} – King Spa Chicago`, description: "" }, `/category/${slug}/`) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [blog, all] = await Promise.all([getPage("blogPage"), getPosts()]);
  const posts = all.filter((p) => p.category === slug);
  if (!posts.length) notFound();
  const title = `Category: ${posts[0].categoryName}`;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: posts[0].categoryName, path: `/category/${slug}/` }])} />
      <ArchiveView title={title} posts={posts} blog={blog} />
    </>
  );
}
