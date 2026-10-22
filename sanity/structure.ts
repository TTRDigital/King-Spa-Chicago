import type { StructureResolver } from "sanity/structure";
import { Cog, FileText, Layers, Newspaper } from "lucide-react";
import { pageRegistry, settingsDoc } from "../lib/data/registry";

const singleton = (S: Parameters<StructureResolver>[0], id: string, title: string, icon: React.ComponentType) =>
  S.listItem().title(title).id(id).icon(icon).child(S.document().schemaType(id).documentId(id).title(title));

/** Sidebar: Site settings, Pages (one per page, in menu order), Blog posts. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("King Spa Chicago")
    .items([
      singleton(S, settingsDoc.id, settingsDoc.title, Cog),
      S.listItem()
        .title("Pages")
        .icon(Layers)
        .child(
          S.list()
            .title("Pages")
            .items(Object.entries(pageRegistry).map(([id, p]) => singleton(S, id, `${p.title}  ${p.path}`, FileText))),
        ),
      S.divider(),
      S.listItem().title("Blog posts").icon(Newspaper).child(S.documentTypeList("post").title("Blog posts").defaultOrdering([{ field: "date", direction: "desc" }])),
    ]);
