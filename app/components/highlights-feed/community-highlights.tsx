import { ImageIcon } from "lucide-react";
import Card from "./card";

const CommunityHighlights = () => {
  return (
    <Card>
      <h2 className="font-semibold text-blue-700">Destaques da Comunidade</h2>

      <ul>
        <li className="flex items-center gap-2.5 border-b border-solid border-gray-400 p-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200 text-gray-400">
            <ImageIcon size={20} />
          </div>
          <div>
            <h3 className="truncate font-semibold">Lucas Oliveira</h3>
            <small className="text-gray-400">71 publicações</small>
          </div>
        </li>

        <li className="flex items-center gap-2.5 border-b border-solid border-gray-400 p-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200 text-gray-400">
            <ImageIcon size={20} />
          </div>
          <div>
            <h3 className="truncate font-semibold">Gabriel Santos</h3>
            <small className="text-gray-400">43 publicações</small>
          </div>
        </li>

        <li className="flex items-center gap-2.5 border-b border-solid border-gray-400 p-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200 text-gray-400">
            <ImageIcon size={20} />
          </div>
          <div>
            <h3 className="truncate font-semibold">Mariana Costa</h3>
            <small className="text-gray-400">37 publicações</small>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default CommunityHighlights;
