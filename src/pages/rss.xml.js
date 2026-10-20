import rss from "@astrojs/rss";
import { getEmDashCollection } from "emdash";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const { entries: posts, error } = await getEmDashCollection("posts", {
    orderBy: { published_at: "desc" },
  });
  if (error) return new Response("Unable to load posts", { status: 500 });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt ?? post.data.createdAt,
      link: `/blog/${post.id}/`,
    })),
  });
}
