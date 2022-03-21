import { useTheme } from "next-themes";

import { BiHomeCircle, BiUser } from "react-icons/bi";
import { RiHashtag } from "react-icons/ri";
import { IoMdListBox } from "react-icons/io";
import { ImQuill } from "react-icons/im";
import {
  MdOutlineMailOutline,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { FiBookmark } from "react-icons/fi";
import { CgMoreVerticalO } from "react-icons/cg";

import { useState, useEffect } from "react";
import MenuLink from "./MenuLink";
import Button from "./Button";
import Profile from "./Profile";

function Sidebar() {
  const menus = [
    {
      title: "Home",
      icon: BiHomeCircle,
      mobile: true,
    },
    { title: "Explore", icon: RiHashtag },
    { title: "Notifications", icon: MdOutlineNotificationsNone },
    { title: "Messages", icon: MdOutlineMailOutline, mobile: true },
    { title: "Bookmarks", icon: FiBookmark },
    { title: "Lists", icon: IoMdListBox },
    { title: "Profile", icon: BiUser, mobile: true },
    { title: "More", icon: CgMoreVerticalO, mobile: true },
  ];

  const { theme, setTheme, resolvedTheme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLight = currentTheme == "light";

  useEffect(() => setMounted(true), []);

  return (
    <div className=" fixed  sm:static bottom-0 border-t sm:border-none flex flex-col justify-between  items-start py-3">
      {mounted && (
        <div className="flex flex-col">
          <div className=" flex sm:flex-col sm:w-auto w-screen justify-around overflow-hidden space-y-0 my-3 ">
            {menus.map((menu) => (
              <MenuLink
                key={menu.title}
                Icon={menu.icon}
                title={menu.title}
                mobile={menu.mobile}
              />
            ))}
          </div>

          <div className=" sm:flex fixed sm:static bottom-28 right-3">
            <Button title="Tweet" Icon={ImQuill} />
          </div>
        </div>
      )}
      <Profile className="absolute bottom-3" />
    </div>
  );
}

export default Sidebar;
