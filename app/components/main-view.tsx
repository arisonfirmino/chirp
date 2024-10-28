"use client";

import { usePathname } from "next/navigation";

const MainView = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className={`min-h-screen w-full bg-gray-100 ${pathname === "/" ? "" : "pt-20 md:ml-20 md:w-[calc(100%-5rem)] md:rounded-l-2xl md:p-0 xl:ml-48 xl:mr-96 xl:w-[calc(100%-12rem-24rem)]"}`}
    >
      {children}
    </div>
  );
};

export default MainView;
