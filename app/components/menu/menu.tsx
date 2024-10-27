"use client";

import { usePathname } from "next/navigation";
import { HomeIcon, PlusCircleIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  const pathname = usePathname();

  const menu_items = [
    { pageName: "Timeline", icon: <HomeIcon size={16} />, href: "/timeline" },
    { pageName: "Explorar", icon: <SearchIcon size={16} />, href: "/explorer" },
    {
      pageName: "Publicar",
      icon: <PlusCircleIcon size={16} />,
      href: "/publish",
    },
    { pageName: "Perfil", icon: <UserIcon size={16} />, href: "/profile" },
  ];

  return (
    <nav className="flex gap-5 md:flex-col md:gap-2.5">
      {menu_items.map((item) => (
        <Link
          key={item.pageName}
          href={item.href}
          prefetch
          className={`flex h-10 w-10 items-center justify-center gap-2.5 rounded-xl xl:h-auto xl:w-auto xl:justify-normal xl:px-2.5 xl:py-1 ${pathname === item.href ? "bg-blue-500 text-white shadow" : "text-gray-400 md:text-gray-300"}`}
        >
          {item.icon} <span className="hidden xl:block">{item.pageName}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
