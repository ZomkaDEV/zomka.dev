import frontMatter from "front-matter";

const rawPosts = import.meta.glob("/src/posts/*.md", {
  as: "raw",
  eager: true,
});

const toSlug = (path) => path.split("/").pop().replace(/\.md$/, "");

const formatDate = (value) => {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "";
  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const normalizePost = ([path, raw]) => {
  const { attributes, body } = frontMatter(raw);
  const slug = toSlug(path);
  const title = attributes?.title || slug;
  const summary = attributes?.summary || "";
  const date = attributes?.date || "";
  const revised = attributes?.revised || "";
  const sortDate = date ? Date.parse(date) : 0;

  return {
    slug,
    title,
    summary,
    date,
    revised,
    displayDate: formatDate(date),
    displayRevised: formatDate(revised),
    sortDate,
    content: body,
  };
};

export const posts = Object.entries(rawPosts)
  .map(normalizePost)
  .sort((a, b) => b.sortDate - a.sortDate);
