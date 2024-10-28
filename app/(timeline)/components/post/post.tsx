"use client";

import { useSession } from "next-auth/react";
import { PostProps } from "@/app/types";
import PostImage from "./post-image";
import { formatDate } from "@/app/helpers/formatDate";
import ActionButtons from "./action-buttons";
import DeleteButton from "./delete-button";

const Post = ({ post }: PostProps) => {
  const { data: session } = useSession();

  return (
    <div className="space-y-1.5 rounded-xl border border-solid border-gray-200 bg-white p-2.5 shadow">
      <div className="flex items-center gap-2.5">
        <PostImage image={post.image ?? ""} name={post.name} />
        <div>
          <h3 className="text-lg font-semibold">{post.name}</h3>
          <p className="text-xs text-gray-400">
            {formatDate(new Date(post.created_at))}
          </p>
        </div>
      </div>

      <p>{post.text}</p>

      <hr />

      <div className="flex items-center justify-between p-1.5">
        <ActionButtons />
        {session?.user?.email === post.email && <DeleteButton id={post.id} />}
      </div>
    </div>
  );
};

export default Post;
