"use client";

import { usePathname } from "next/navigation";
import { HighlightsFeedProps } from "@/app/types";
import CommunityHighlights from "./community-highlights";
import TrendingTopics from "./trending-topics";

const HighlightsFeed = ({ topUsers }: HighlightsFeedProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed right-0 top-0 h-full w-96 flex-col items-center justify-between bg-gray-100 p-5 ${pathname === "/" ? "hidden" : "hidden xl:flex"}`}
    >
      <TrendingTopics />
      <CommunityHighlights topUsers={topUsers} />
      <p className="text-xs text-gray-400">
        © 2024 Arison. All Rights Reserved
      </p>
    </div>
  );
};

export default HighlightsFeed;
