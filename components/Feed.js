import Image from "next/image";
import {
  AiOutlineMore,
  AiOutlineRetweet,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiUpload } from "react-icons/bi";

function Feed({ tweet }) {
  return (
    <div className="flex items-start w-full space-x-4 px-5 py-2  border-b dark:border-white/20">
      <div className="w-14 h-14 relative rounded-full">
        <Image
          src={tweet.owner.picture}
          // src="https://media-exp1.licdn.com/dms/image/C4E03AQGxfRDDJOYk5Q/profile-displayphoto-shrink_400_400/0/1637779121014?e=1653523200&v=beta&t=lSpDvWDJVPGSWxlzgkLQkB837eqY_N2wsaipJDozDB8"
          alt="Ebbisaa"
          layout="fill"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between items-center">
          <div className="flex">
            <h3 className=" font-semibold">
              {tweet.owner.firstName + " " + tweet.owner.lastName}
            </h3>{" "}
            <span className=" opacity-75">
              @
              {tweet.owner.firstName +
                tweet.owner.lastName.split(" ").join("").toLowerCase()}
            </span>
          </div>
          <div>
            <AiOutlineMore className="!font-bold" />
          </div>
        </div>
        <div>
          <p>{tweet.text}</p>
        </div>

        {tweet.image && (
          <div className="relative  object-fill min:h-60 h-96 max:w-full">
            <Image
              src={tweet.image}
              alt={"post of " + tweet.name}
              layout="fill"
              className="rounded-lg"
            />
          </div>
        )}
        <div className="flex justify-between mt-5 md:pr-20">
          <div className="flex items-center space-x-3 opacity-60">
            <FaRegComment />
            <span className="">236</span>
          </div>

          <div className="flex items-center space-x-3 opacity-60">
            <AiOutlineRetweet />
            <span className="">26</span>
          </div>

          <div className="flex items-center space-x-3 opacity-60">
            <AiOutlineHeart />
            <span className="">{tweet.likes}</span>
          </div>

          <div className="flex items-center space-x-3 opacity-60">
            <BiUpload />
            <span className="">236</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
