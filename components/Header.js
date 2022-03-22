import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "./Logo";

function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme, resolvedTheme: currentTheme } = useTheme();
  const isLight = currentTheme == "light";

  useEffect(() => setMounted(true), []);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="flex justify-start sm:justify-between items-center text-xl h-16 sticky top-0 z-50 bg-white">
      <Logo className="sm:hidden" />
      <div className="flex justify-between w-full px-5">
        <h4 className="text-2xl font-semibold">Home</h4>
        {mounted && (
          <div
            className={`bg-gray-600 flex items-center px-0.5 rounded-full h-8 w-14 cursor-pointer flex-shrink-0 relative ${
              isLight ? "justify-start" : "justify-end"
            }`}
            onClick={() => setTheme(isLight ? "dark" : "light")}
          >
            <span className="absolute left-0">🌜</span>
            <motion.div
              className="w-6 h-6 bg-white rounded-full z-40"
              layout
              transition={spring}
            />

            <span className="absolute right-0.5">🌞</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
