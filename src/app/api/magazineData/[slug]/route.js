export async function GET(request, { params }) {
  const data = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/page/${params.slug}`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  return Response.json(data);
}
