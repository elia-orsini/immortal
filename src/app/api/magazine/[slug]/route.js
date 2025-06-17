export async function GET(request, { params }) {
  const data = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/table/${process.env.NOTION_DB}`,
    {
      next: { revalidate: 518400 },
    }
  ).then((res) => (res.ok ? res.json() : {}));

  const mag = data.find((mag) => mag.id === params.slug);

  return Response.json(mag);
}
