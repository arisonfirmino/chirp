"use client";

import { useState } from "react";
import { deletePost } from "@/app/actions/post";
import { LoaderCircleIcon, Trash2Icon } from "lucide-react";

const DeleteButton = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    setLoading(true);

    try {
      await deletePost({ id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      disabled={loading}
      className={`flex items-center gap-2.5 text-red-600 active:text-gray-400 ${loading ? "cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <LoaderCircleIcon size={16} className="animate-spin" />
      ) : (
        <Trash2Icon size={16} />
      )}
    </button>
  );
};

export default DeleteButton;
