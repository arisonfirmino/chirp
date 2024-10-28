import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <form className="flex items-center gap-2.5 rounded-xl border border-solid border-gray-200 bg-white p-2.5 shadow">
      <SearchIcon size={16} className="text-gray-400" />
      <input
        type="search"
        placeholder="Pesquisar"
        className="w-full outline-none"
      />
    </form>
  );
};

export default Search;
