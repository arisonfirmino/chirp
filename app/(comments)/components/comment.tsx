"use client";

import PostImage from "@/app/components/post/post-image";
import { formatDate } from "@/app/helpers/formatDate";
import { Comment as CommentType } from "@prisma/client";
import DeleteComment from "./delete-comment";
import { useSession } from "next-auth/react";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const { data: session } = useSession();

  return (
    <div className="relative space-y-1.5 rounded-xl border border-solid border-gray-200 bg-white p-2.5 shadow">
      <div className="flex items-center gap-2.5">
        <PostImage image={comment.image ?? ""} name={comment.name} />
        <div>
          <h3 className="text-lg font-semibold">{comment.name}</h3>
          <p className="text-xs text-gray-400">
            {formatDate(new Date(comment.created_at))}
          </p>
        </div>
      </div>
      <p>{comment.text}</p>
      {comment.email === session?.user?.email && (
        <DeleteComment id={comment.id} />
      )}
    </div>
  );
};

export default Comment;
