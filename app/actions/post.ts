"use server";

import { db } from "../lib/prisma";
import { revalidatePath } from "next/cache";

interface CreateNewPostProps {
  name: string;
  email: string;
  text: string;
  image?: string;
}

export const createNewPost = async ({
  name,
  email,
  text,
  image,
}: CreateNewPostProps) => {
  if (!name || !email || !text) {
    throw new Error("Campos não preenchidos.");
  }

  await db.post.create({
    data: {
      name,
      email,
      text,
      image,
    },
  });

  revalidatePath("/");
};
