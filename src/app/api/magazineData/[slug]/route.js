export async function GET(request, { params }) {
  const data = await fetch(
    `${process.env.CLOUDFLARE_WORKER}/v1/page/${params.slug}`,
    {
      next: { revalidate: parseInt(process.env.REVALIDATE_TIME) },
    }
  ).then((res) => res.json());

  return Response.json(data);
}
