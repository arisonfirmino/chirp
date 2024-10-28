import { UserHighlightProps } from "@/app/types";
import { ImageIcon } from "lucide-react";
import Image from "next/image";

const UserHighlight = ({ image, name, length }: UserHighlightProps) => {
  return (
    <>
      {image ? (
        <Image
          src={image}
          alt={name}
          height={1024}
          width={1024}
          className="h-10 w-10 rounded-full"
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400">
          <ImageIcon size={20} />
        </div>
      )}

      <div>
        <h3 className="truncate font-semibold">{name}</h3>
        <p className="text-xs text-gray-400">
          {length} {length > 1 ? "publicações" : "publicação"}
        </p>
      </div>
    </>
  );
};

export default UserHighlight;
