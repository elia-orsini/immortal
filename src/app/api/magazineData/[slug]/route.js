import { getMagazinePageData } from "@/lib/notion";

export async function GET(request, { params }) {
  const data = await getMagazinePageData(params.slug);

  return Response.json(data);
}
