import Image from "next/image";
import {
  AiOutlinePicture,
  AiOutlineSmile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { RiFileGifLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { MdLeaderboard, MdOutlineLocationOn } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";

function PostButton({ Icon }) {
  return (
    <button className="rounded-full hover:bg-gray-100 p-2 dark:hover:bg-gray-900 ">
      <Icon className="text-xl" />
    </button>
  );
}

function Post() {
  const [showWorldIcon, setShowWorldIcon] = useState(false);
  return (
    <div className="flex px-[2rem] py-[1rem] gap-4 flex-col border-b dark:border-white/20   ">
      <div className="flex items-center space-x-3">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUjU3DlyoO6bnbe7eYmtBMvZHjCopEieKuA&usqp=CAU"
          alt="profile"
          height={50}
          width={50}
          className="rounded-full"
        />
        <div className="items-center flex">
          <input
            onClick={() => setShowWorldIcon(true)}
            placeholder="What's happening ? "
            className={`bg-transparent text-xl focus:outline-none ${
              setShowWorldIcon && "absolute"
            }`}
          />
          {showWorldIcon && (
            <div className="relative top-5 flex items-center mt-4 space-x-2 text-md font-bold rounded-full hover:bg-gray-100 text-blue-400 dark:hover:bg-gray-800 cursor-pointer px-1">
              <BiWorld />
              <p>Everyone can reply</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-around">
        <div className="text-blue-400">
          <PostButton Icon={AiOutlinePicture} />
          <PostButton Icon={RiFileGifLine} />
          <PostButton Icon={MdLeaderboard} />
          <PostButton Icon={AiOutlineSmile} />
          <PostButton Icon={AiOutlineCalendar} />
          <PostButton Icon={MdOutlineLocationOn} />
        </div>
        <Button title="Tweet" size="sm" />
      </div>
    </div>
  );
}

export default Post;
