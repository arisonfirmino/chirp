"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Timeline = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Carregando...</p>;
  }

  const handleSignOutClick = () => signOut();

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div className="space-y-2.5 rounded-xl border border-solid border-gray-200 bg-white p-5 shadow-md">
        <div className="flex items-center gap-2.5">
          <Image
            src={session?.user?.image ?? ""}
            alt={session?.user?.name ?? ""}
            height={1024}
            width={1024}
            className="h-10 w-10 rounded-full"
          />
          <h1 className="text-xl font-bold text-slate-600">
            {session?.user?.name}
          </h1>
        </div>
        <p className="text-gray-400">{session?.user?.email}</p>
        <button
          onClick={handleSignOutClick}
          className="w-full rounded-xl bg-red-600 p-2.5 text-white active:bg-gray-400"
        >
          Sair
        </button>
      </div>
    </main>
  );
};

export default Timeline;
