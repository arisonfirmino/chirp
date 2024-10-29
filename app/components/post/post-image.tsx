import { ImageIcon } from "lucide-react";
import Image from "next/image";

const PostImage = ({ image, name }: { image: string; name: string }) => {
  return (
    <div>
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
          <ImageIcon size={16} />
        </div>
      )}
    </div>
  );
};

export default PostImage;
