import { db } from "../lib/prisma";

export const fetchPostById = async ({ id }: { id: string }) => {
  const post = await db.post.findUnique({
    where: {
      id,
    },
    include: {
      comments: {
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  return post;
};
