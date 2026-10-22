import { getCollection, type CollectionEntry } from "astro:content";
import categoriesJson from "../content/categories.json";

export type Category = { slug: string; title: string; blurb?: string; parent?: string };
export const categories: Category[] = categoriesJson as Category[];
export const topCategories = categories.filter((c) => !c.parent);
export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);

const live = (e: { data: { status: string } }) => import.meta.env.PROD ? e.data.status === "published" : true;

export async function allArticles(): Promise<CollectionEntry<"articles">[]> {
  const items = (await getCollection("articles")).filter(live);
  return items.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}
export async function articlesIn(category: string) {
  return (await allArticles()).filter((a) => a.data.category === category);
}
export async function allPages(): Promise<CollectionEntry<"pages">[]> {
  return (await getCollection("pages")).filter(live);
}
export const fmt = (d?: Date) => d ? d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "";
