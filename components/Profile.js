import { MdMoreHoriz } from "react-icons/md";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Profile({ className }) {
  const { data: session } = useSession();

  return (
    <div
      className={`${className} hidden sm:flex items-center justify-between space-x-5 hover:rounded-full hover:bg-gray-100 dark:hover:bg-gray-900  cursor-pointer px-4 py-2`}
    >
      <div className="flex items-center space-x-3">
        <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          // layout="fill"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col ">
          <h4 className="font-bold  text-black/80 dark:text-white ">
            {session?.user?.name}
          </h4>
          <p className="text-sm  text-gray-700 dark:text-white/80">
            @{session?.user?.name}
          </p>
        </div>
      </div>
      <div>
        <MdMoreHoriz />
      </div>
    </div>
  );
}

export default Profile;
