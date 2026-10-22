/**
 * Studio schema, built from the site's built-in content (lib/data) by
 * lib/cms/spec.ts: one singleton per page plus Site settings, and a Blog
 * posts list. Adding a field to a page's content adds it here too.
 */
import { defineArrayMember, defineField, defineType, type FieldDefinition } from "sanity";
import { infer, titleFor, type Spec } from "../../lib/cms/spec";
import { pageRegistry, postSample, settingsDoc } from "../../lib/data/registry";

const altImage = defineType({
  name: "altImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [defineField({ name: "alt", title: "Alt text", type: "string", description: "Describe the photo for screen readers and search engines." })],
});

const HELP: Record<string, string> = {
  seo: "Page title and meta description shown in search results.",
  href: "A page on this site (/pricing/) or a full link (https://...).",
};

function field(name: string, spec: Spec): FieldDefinition {
  const base = { name, title: titleFor(name), description: HELP[name] };
  switch (spec.kind) {
    case "string":
      return defineField({ ...base, type: spec.long ? "text" : "string", ...(spec.long ? { rows: 4 } : {}) });
    case "number":
      return defineField({ ...base, type: "number" });
    case "boolean":
      return defineField({ ...base, type: "boolean" });
    case "image":
      return defineField({ ...base, type: "altImage" });
    case "object":
      return defineField({ ...base, type: "object", options: { collapsible: true, collapsed: name !== "seo" }, fields: fields(spec.fields) });
    case "array":
      return defineField({ ...base, type: "array", of: [member(spec.of)] });
  }
}

function member(spec: Spec) {
  if (spec.kind === "image") return defineArrayMember({ type: "altImage" });
  if (spec.kind === "object") {
    const first = Object.entries(spec.fields).find(([, s]) => s.kind === "string")?.[0];
    const media = Object.entries(spec.fields).find(([, s]) => s.kind === "image")?.[0];
    return defineArrayMember({
      type: "object",
      name: "item",
      title: "Item",
      fields: fields(spec.fields),
      preview: { select: { title: first ?? "", media: media ?? "" } },
    });
  }
  if (spec.kind === "number") return defineArrayMember({ type: "number" });
  // Lists of lists are not used in the content; anything else is a text box.
  return defineArrayMember({ type: spec.kind === "string" && !spec.long ? "string" : "text" });
}

const fields = (f: Record<string, Spec>) => Object.entries(f).map(([k, s]) => field(k, s));

function documentFrom(name: string, title: string, sample: unknown) {
  const spec = infer(sample);
  if (spec.kind !== "object") throw new Error(`${name}: content must be an object`);
  return defineType({ name, title, type: "document", fields: fields(spec.fields), preview: { prepare: () => ({ title }) } });
}

const pageTypes = Object.entries(pageRegistry).map(([id, p]) => documentFrom(id, p.title, p.data));
const settingsType = documentFrom(settingsDoc.id, settingsDoc.title, settingsDoc.data);

const postSpec = infer(postSample);
const postType = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: postSpec.kind === "object" ? fields(postSpec.fields) : [],
  preview: { select: { title: "title", subtitle: "date", media: "image" } },
});

export const schemaTypes = [altImage, settingsType, ...pageTypes, postType];

/** Pages and settings are single documents: their ID is their type name. */
export const singletonTypes = new Set<string>([settingsDoc.id, ...Object.keys(pageRegistry)]);
