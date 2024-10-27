"use client";

import { usePathname } from "next/navigation";

const MainView = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center bg-gray-100 ${pathname === "/" ? "" : "pt-20 md:ml-20 md:w-[calc(100%-5rem)] md:rounded-l-2xl md:p-0 xl:ml-48 xl:w-[calc(100%-12rem)]"}`}
    >
      {children}
    </div>
  );
};

export default MainView;
