import { getMagazineById } from "@/lib/notion";

export async function GET(request, { params }) {
  const mag = await getMagazineById(params.slug);

  if (!mag) {
    return Response.json(null, { status: 404 });
  }

  return Response.json(mag);
}
