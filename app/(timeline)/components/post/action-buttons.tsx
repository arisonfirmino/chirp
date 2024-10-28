import { MessageCircleMoreIcon, Share2Icon, ThumbsUpIcon } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-2.5 text-gray-600">
      <button>
        <ThumbsUpIcon size={16} />
      </button>
      <button>
        <MessageCircleMoreIcon size={16} />
      </button>
      <button>
        <Share2Icon size={16} />
      </button>
    </div>
  );
};

export default ActionButtons;
