"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginSection from "./components/login-section";

const Home = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/timeline");
    }
  }, [status, router]);

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-5 md:px-0">
      <LoginSection />
    </main>
  );
};

export default Home;
