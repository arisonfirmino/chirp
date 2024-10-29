"use client";

import { usePathname } from "next/navigation";
import { MessageCircleMoreIcon } from "lucide-react";
import Link from "next/link";

const CommentsButton = ({ id }: { id: string }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === `/comments/${id}` ? (
        <div className="">
          <MessageCircleMoreIcon size={16} />
        </div>
      ) : (
        <Link
          href={`/comments/${id}`}
          prefetch
          className="active:text-blue-700"
        >
          <MessageCircleMoreIcon size={16} />
        </Link>
      )}
    </>
  );
};

export default CommentsButton;
