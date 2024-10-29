import { Share2Icon, ThumbsUpIcon } from "lucide-react";
import CommentsButton from "./comments-button";

const ActionButtons = ({ id }: { id: string }) => {
  return (
    <div className="flex items-center gap-2.5 text-gray-600">
      <button>
        <ThumbsUpIcon size={16} />
      </button>
      <CommentsButton id={id} />
      <button>
        <Share2Icon size={16} />
      </button>
    </div>
  );
};

export default ActionButtons;
