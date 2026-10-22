import "server-only";

import { cache } from "react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { merge } from "@/lib/merge";
import { fromSanity } from "@/lib/cms/spec";
import { dataset, projectId } from "@/sanity/env";
import { pageRegistry, posts as fallbackPosts, settingsDoc, type PageData, type PageId } from "@/lib/data/registry";
import type { SiteSettings } from "@/lib/data/site";
import type { Post } from "@/lib/data/posts";

/*
 * Content for every page: the built-in copy (lib/data) with whatever is
 * published in Sanity merged over it. A field left empty in /cms keeps the
 * built-in value, so the site never shows a blank.
 */

const doc = cache(async (id: string) => {
  const raw = await sanityFetch<unknown>(`*[_id == $id][0]`, { id }, [id]);
  return raw ? fromSanity(raw, projectId, dataset) : null;
});

export async function getSettings(): Promise<SiteSettings> {
  return merge(settingsDoc.data, await doc(settingsDoc.id)) as SiteSettings;
}

export async function getPage<K extends PageId>(id: K): Promise<PageData<K>> {
  return merge(pageRegistry[id].data, await doc(id)) as PageData<K>;
}

export const getPosts = cache(async (): Promise<Post[]> => {
  const raw = await sanityFetch<unknown[]>(`*[_type == "post" && defined(slug)] | order(date desc)`, {}, ["post"]);
  if (!raw?.length) return fallbackPosts;
  // Only documents shaped like this site's posts (a guard against a wrong project ID).
  const cmsPosts = raw.map((r) => fromSanity(r, projectId, dataset) as Partial<Post>).filter((p) => typeof p.slug === "string" && typeof p.category === "string");
  if (!cmsPosts.length) return fallbackPosts;
  return cmsPosts.map((cms) => {
    const base = fallbackPosts.find((p) => p.slug === cms.slug) ?? fallbackPosts[0];
    return merge(base, cms) as Post;
  });
});
