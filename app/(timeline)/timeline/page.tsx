import { db } from "@/app/lib/prisma";
import Search from "../components/search";
import PostsList from "../components/posts-list";
import Form from "@/app/components/form/form";
import { createNewPost } from "@/app/actions/post";

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
        <Form
          placeholder="O que está pensando?"
          handleSubmitForm={createNewPost}
        />
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
