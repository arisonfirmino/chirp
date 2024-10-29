"use server";

import { db } from "../lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateNewCommentProps {
  postId: string;
  name: string;
  email: string;
  image?: string;
  text: string;
}

export const createNewComment = async ({
  postId,
  name,
  email,
  image,
  text,
}: CreateNewCommentProps) => {
  if (!postId) {
    throw new Error("Falha na solicitação.");
  }

  const post = await db.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error("Publicação não encontrada.");
  }

  if (!name || !email || !text) {
    throw new Error("Campos não preenchidos.");
  }

  await db.comment.create({
    data: {
      postId: post.id,
      name,
      email,
      image,
      text,
    },
  });

  revalidatePath("/");
};

export const deleteComment = async ({ id }: { id: string }) => {
  if (!id) {
    throw new Error("Falha na solicitação.");
  }

  const comment = await db.comment.findUnique({
    where: {
      id,
    },
  });

  if (!comment) {
    throw new Error("Comentário não encontrado.");
  }

  await db.comment.delete({
    where: {
      id: comment.id,
    },
  });

  revalidatePath("/");
};
