import { LoaderCircleIcon, SendHorizontalIcon } from "lucide-react";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton = ({ loading }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`text-blue-700 ${loading ? "cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <LoaderCircleIcon size={16} className="animate-spin" />
      ) : (
        <SendHorizontalIcon size={20} />
      )}
    </button>
  );
};

export default SubmitButton;
