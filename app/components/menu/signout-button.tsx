"use client";

import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";

const SignOutButton = () => {
  const handleLogOutClick = () => signOut();

  return (
    <button
      onClick={handleLogOutClick}
      className="flex h-10 w-10 items-center justify-center rounded-xl border-solid border-white text-red-600 active:bg-gray-200 md:h-auto md:w-full md:rounded-none md:border-t md:p-2.5 md:text-white md:active:bg-white md:active:bg-opacity-10 xl:h-auto xl:w-full xl:justify-between"
    >
      <span className="hidden xl:block">Sair</span>
      <LogOutIcon size={16} />
    </button>
  );
};

export default SignOutButton;
