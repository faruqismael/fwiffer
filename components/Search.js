import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="sticky top-0  z-40  bg-white dark:bg-black py-2 backdrop-blur-sm">
      <div className="py-3  pl-4  flex items-center bg-gray-100 dark:bg-gray-800 justify-start rounded-full ">
        <FiSearch className="opacity-60 !text-md font-extralight" />
        <input
          placeholder="Search Twitter"
          className="focus:outline-none dark:placeholder:text-white/40 placeholder:text-black/80  bg-transparent ml-4 text-base"
        />
      </div>
    </div>
  );
}

export default Search;
