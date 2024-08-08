export default function convertSlugToPath(slug: string) {
  const path = slug.toLowerCase().split(" ").join("-");

  return path;
}
