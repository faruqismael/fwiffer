import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="py-3 sticky top-0  z-40 pl-4  flex items-center justify-start bg-gray-100 dark:bg-gray-800 rounded-full ">
      <FiSearch className="opacity-60 !text-md font-extralight" />
      <input
        placeholder="Search Twitter"
        className="focus:outline-none placeholder:opacity-100 bg-transparent ml-4 text-sm"
      />
    </div>
  );
}

export default Search;
