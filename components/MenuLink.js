import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function MenuLink({ title, Icon, mobile }) {
  const { theme, setTheme, resolvedTheme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLight = currentTheme == "light";

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && (
        <div
          className={`${
            !mobile ? "hidden md:flex" : "sm:flex "
          }  justify-start space-x-2 items-center py-2 px-2  rounded-full cursor-pointer  ${
            isLight ? "hover:bg-gray-100" : "dark:hover:bg-gray-900 "
          }`}
        >
          <Icon className=" text-[2.2rem]" />
          <h4 className=" text-xl hidden md:inline">{title}</h4>
        </div>
      )}
    </>
  );
}

export default MenuLink;
