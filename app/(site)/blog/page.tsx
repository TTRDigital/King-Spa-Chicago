import { getPage, getPosts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/JsonLd";
import { BlogView } from "@/components/pages/Blog";

const PATH = "/blog/";
const crumbs = [{ name: "Blog", path: PATH }];

export async function generateMetadata() {
  const page = await getPage("blogPage");
  return pageMetadata(page.seo, PATH);
}

export default async function Page() {
  const [page, posts] = await Promise.all([getPage("blogPage"), getPosts()]);
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])} />
      <BlogView data={page} posts={posts} />
    </>
  );
}
