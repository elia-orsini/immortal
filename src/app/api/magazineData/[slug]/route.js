export async function GET(request, { params }) {
  const data = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/page/${params.slug}`,
    {
      next: { revalidate: 518400 },
    }
  ).then((res) => (res.ok ? res.json() : {}));

  return Response.json(data);
}
