"use client";

import { useState } from "react";
import { deleteComment } from "@/app/actions/comment";
import { LoaderCircleIcon, Trash2Icon } from "lucide-react";

const DeleteComment = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    setLoading(true);

    try {
      await deleteComment({ id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      disabled={loading}
      className={`absolute right-2.5 top-1.5 text-red-600 ${loading ? "cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <LoaderCircleIcon size={14} className="animate-spin" />
      ) : (
        <Trash2Icon size={14} />
      )}
    </button>
  );
};

export default DeleteComment;
