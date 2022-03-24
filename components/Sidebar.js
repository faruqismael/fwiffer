import { useTheme } from "next-themes";

import { BiHomeCircle, BiUser } from "react-icons/bi";
import { RiHashtag } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { ImQuill } from "react-icons/im";
import {
  MdOutlineMailOutline,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { FiBookmark, FiSearch } from "react-icons/fi";
import { CgMoreVerticalO } from "react-icons/cg";

import { useState, useEffect } from "react";
import MenuLink from "./MenuLink";
import Button from "./Button";
import Profile from "./Profile";
import { signIn, signOut } from "next-auth/react";

function Sidebar() {
  const menus = [
    {
      title: "Home",
      icon: BiHomeCircle,
      mobile: true,
    },
    { title: "Explore", icon: RiHashtag },
    { title: "Notifications", icon: MdOutlineNotificationsNone },
    { title: "Search", icon: FiSearch, onlyMobile: true, mobile: true },
    { title: "Messages", icon: MdOutlineMailOutline, mobile: true },
    { title: "Bookmarks", icon: FiBookmark },
    // { title: "Lists", icon: IoMdListBox },
    { title: "Profile", icon: BiUser, mobile: true },
    { title: "More", icon: CgMoreVerticalO },
  ];

  const { theme, setTheme, resolvedTheme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLight = currentTheme == "light";

  useEffect(() => setMounted(true), []);

  // lovely name and nice country
  // i am us soldier working as united nations peacekeeping troops in syria on war against terrorism, my dear wath is your occupation

  return (
    <div className=" fixed sm:static bottom-0 border-t dark:bg-black/90 bg-white/90 z-50 sm:border-none  flex flex-col justify-between  items-start py-3">
      {mounted && (
        <div className="flex flex-col">
          <div className=" flex sm:flex-col  sm:w-auto w-screen hover:overflow-y-scroll max-h-[60vh] scroll-m-0 justify-around overflow-hidden gap-2 my-3  ">
            {menus.map((menu) => (
              <>
                <MenuLink
                  key={menu.title}
                  Icon={menu.icon}
                  title={menu.title}
                  mobile={menu.mobile}
                />
              </>
            ))}
            <div className="" onClick={signOut}>
              {" "}
              <MenuLink key={"logout"} Icon={BiUser} title={"Log Out"} />
            </div>
          </div>

          <div
            onClick={signIn}
            className=" sm:flex fixed sm:static bottom-28 right-3"
          >
            <Button title="Tweet" Icon={ImQuill} />
          </div>
        </div>
      )}
      <Profile className="absolute bottom-3" />
    </div>
  );
}

export default Sidebar;
