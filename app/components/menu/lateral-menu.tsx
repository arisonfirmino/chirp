"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Header from "./header";
import { LoaderCircleIcon } from "lucide-react";
import Menu from "./menu";
import SignOutButton from "./signout-button";
import { usePathname } from "next/navigation";

const LateralMenu = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div
      className={`top-0 z-10 flex h-20 w-full items-center justify-between border-b border-solid border-gray-400 bg-gray-100 px-5 text-white md:h-full md:w-20 md:flex-col md:justify-start md:bg-transparent md:p-0 xl:w-48 ${pathname === "/" ? "hidden" : "fixed"}`}
    >
      <div className="hidden pt-5 md:block">
        <Header />
      </div>

      <div className="hidden md:block md:pt-10">
        {session ? (
          <div className="flex flex-col items-center gap-2.5">
            <Image
              src={session?.user?.image ?? ""}
              alt={session?.user?.name ?? ""}
              height={1024}
              width={1024}
              className="h-10 w-10 rounded-full xl:h-20 xl:w-20"
            />
            <h3 className="hidden text-lg font-semibold xl:block">
              {session.user?.name}
            </h3>
          </div>
        ) : (
          <>
            <LoaderCircleIcon className="animate-spin" />
          </>
        )}
      </div>

      <div className="md:pt-20 xl:w-full xl:px-5">
        <Menu />
      </div>

      <div className="bottom-2.5 md:absolute xl:w-full xl:px-5">
        <SignOutButton />
      </div>
    </div>
  );
};

export default LateralMenu;
