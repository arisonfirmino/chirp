import Card from "./card";
import { HighlightsFeedProps } from "@/app/types";
import UserHighlight from "./user-highlight";

const CommunityHighlights = ({ topUsers }: HighlightsFeedProps) => {
  return (
    <Card>
      <h2 className="font-semibold text-blue-700">Destaques da Comunidade</h2>

      {Object.entries(topUsers).map(([email, posts]) => (
        <ul key={email}>
          <li className="flex items-center gap-2.5 border-b border-solid border-gray-400 p-2.5">
            <UserHighlight
              name={posts[0]?.name}
              image={posts[0]?.image ?? ""}
              length={posts.length}
            />
          </li>
        </ul>
      ))}
    </Card>
  );
};

export default CommunityHighlights;
