import { MdMoreHoriz } from "react-icons/md";
import { BiUser } from "react-icons/bi";

function Profile() {
  return (
    <div className="hidden sm:flex items-center justify-between space-x-3 hover:rounded-full hover:bg-gray-100 dark:hover:bg-gray-900  cursor-pointer px-4 py-2">
      <div className="flex items-center ">
        <BiUser className="text-5xl" />
        <div className="flex flex-col">
          <h4 className="font-bold  text-black/80 dark:text-white ">
            Faruq Ismael
          </h4>
          <p className="text-sm text-gray-700 dark:text-white/80">
            @farusmith5
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
