import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";

function FeedCard() {
  return (
    <div className="flex flex-col justify-center gap-0 leading-tight hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer p-4">
      <div className="flex justify-between items-center">
        <p className="text-xs opacity-75 font-semibold">
          {" "}
          Trending in Ethiopia
        </p>
        <FiMoreHorizontal />
      </div>
      <h3 className="text-[1rem] font-[700] opacity-90">Ethiopia</h3>
      <h3 className="text-xs  opacity-90">152.3K Tweets</h3>
    </div>
  );
}

function Trends({ sticky }) {
  return (
    <div
      className={`${
        sticky && "sticky top-16"
      } bg-gray-100 dark:bg-gray-800 rounded-xl py-2`}
    >
      <h3 className="font-[750] opacity-80 text-lg px-4">Trends for you</h3>
      <div className="flex flex-col ">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        {!sticky && (
          <>
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </>
        )}
      </div>
    </div>
  );
}

export default Trends;
