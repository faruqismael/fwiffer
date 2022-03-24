import { BsTwitter } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Logo({ className }) {
  const { theme, setTheme, resolvedTheme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isLight = currentTheme == "light";

  useEffect(() => setMounted(true), []);
  return (
    <>
      {mounted && (
        <BsTwitter
          color={isLight ? "#1d9bf0 " : "white"}
          className={`${className}  ${
            isLight && "hover:bg-gray-200 hover:rounded-full"
          } text-[4rem] p-3 cursor-pointer`}
        />
      )}
    </>
  );
}

export default Logo;
