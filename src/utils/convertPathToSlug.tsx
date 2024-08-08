export default function convertPathToSlug(slug: string) {
  const path = slug.toLowerCase().split("-").join(" ");

  return path;
}
