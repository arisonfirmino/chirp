import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="text.ly logo"
        height={259}
        width={259}
        className="h-5 w-5"
      />
      <h1 className="hidden font-bold xl:block">text.ly</h1>
    </header>
  );
};

export default Header;
