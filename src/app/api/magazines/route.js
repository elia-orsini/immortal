export async function GET() {
  const data = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/table/${process.env.NOTION_DB}`,
    { next: { revalidate: 10 } }
  ).then((res) => res.json());

  return Response.json(data);
}
