import { fetchOptions } from "@/app/constants/fetchOptions";
import Magazine from "@/types/IMagazine";

function workerBase() {
  const base = process.env.CLOUDFLARE_WORKER;
  const db = process.env.NOTION_DB;
  if (!base || !db) {
    throw new Error("Missing CLOUDFLARE_WORKER or NOTION_DB");
  }
  return { base, db };
}

export async function getMagazines(): Promise<Magazine[]> {
  const { base, db } = workerBase();
  const res = await fetch(`${base}/v1/table/${db}`, fetchOptions);
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function getMagazineById(
  id: string
): Promise<Magazine | undefined> {
  const magazines = await getMagazines();
  return magazines.find((mag) => mag.id === id);
}

export async function getMagazinePageData(id: string): Promise<object> {
  const { base } = workerBase();
  const res = await fetch(`${base}/v1/page/${id}`, fetchOptions);
  if (!res.ok) return {};
  return res.json();
}
