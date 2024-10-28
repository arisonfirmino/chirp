import { db } from "@/app/lib/prisma";
import Form from "../components/form";
import Search from "../components/search";
import PostsList from "../components/post/posts-list";

const fetch = async () => {
  const getPosts = await db.post.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  const [posts] = await Promise.all([getPosts]);

  return { posts };
};

const Timeline = async () => {
  const { posts } = await fetch();

  return (
    <>
      <div className="px-5 pt-5">
        <Search />
      </div>

      <div className="px-5 pt-5">
        <Form />
      </div>

      <div className="flex items-center gap-2.5 px-5 pt-5 text-sm text-gray-400">
        Publicações
        <hr className="w-full" />
      </div>

      <div className="space-y-5 px-5 py-5">
        <PostsList posts={posts} />
      </div>
    </>
  );
};

export default Timeline;
