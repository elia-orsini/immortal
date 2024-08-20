export default function convertTitleToSlug(title: string) {
  const formatted = title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ /g, "-")
    .toLowerCase();

  return formatted;
}
