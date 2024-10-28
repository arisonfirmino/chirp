import { Trash2Icon } from "lucide-react";

const DeleteButton = () => {
  return (
    <button className="flex items-center gap-2.5 text-red-600 active:text-gray-400">
      <Trash2Icon size={16} />
    </button>
  );
};

export default DeleteButton;
