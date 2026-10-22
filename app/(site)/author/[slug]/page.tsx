import { notFound } from "next/navigation";
import { getPage, getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { ArchiveView } from "@/components/pages/Archive";

/** Author archives (/author/ttr/ and the two authors without posts), as WordPress had them. */
export const dynamicParams = false;

export async function generateStaticParams() {
  const blog = await getPage("blogPage");
  return blog.authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = (await getPage("blogPage")).authors.find((a) => a.slug === slug);
  return author ? pageMetadata({ title: `${author.name} – King Spa Chicago`, description: "" }, `/author/${slug}/`) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [blog, all] = await Promise.all([getPage("blogPage"), getPosts()]);
  const author = blog.authors.find((a) => a.slug === slug);
  if (!author) notFound();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }, { name: author.name, path: `/author/${slug}/` }])} />
      <ArchiveView title={`Author: ${author.name}`} posts={all.filter((p) => p.authorSlug === slug)} blog={blog} />
    </>
  );
}
