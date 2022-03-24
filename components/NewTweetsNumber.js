import React from "react";

function NewTweetsNumber() {
  const tweets = Math.floor(Math.random() * (Math.random() * 100));
  return (
    <div className="flex text-primary cursor-pointer border-b dark:border-white/20 justify-center items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-900">
      Show {tweets} Tweets
    </div>
  );
}

export default NewTweetsNumber;
