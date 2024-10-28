import { db } from "@/app/lib/prisma";
import { Post } from "@prisma/client";
import HighlightsFeed from "./highlights-feed";

const fetch = async () => {
  const getPosts = await db.post.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  const [posts] = await Promise.all([getPosts]);

  return { posts };
};

const HighlightsFeedWrapper = async () => {
  const { posts } = await fetch();

  const users = posts.reduce<Record<string, Post[]>>((acc, post) => {
    if (!acc[post.email]) {
      acc[post.email] = [];
    }
    acc[post.email].push(post);
    return acc;
  }, {});

  const topUsers = Object.entries(users)
    .sort(([, postsA], [, postsB]) => postsB.length - postsA.length)
    .slice(0, 3)
    .reduce<Record<string, Post[]>>((acc, [email, posts]) => {
      acc[email] = posts;
      return acc;
    }, {});

  return (
    <>
      <HighlightsFeed topUsers={topUsers} />
    </>
  );
};

export default HighlightsFeedWrapper;
