import { getMagazines } from "@/lib/notion";

export async function GET() {
  const data = await getMagazines();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
