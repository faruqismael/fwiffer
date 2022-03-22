import React from "react";

function Button({ title, Icon, className, iconClassName, size = "md" }) {
  return (
    <div
      className={`bg-[#1d9bf0] text-white flex flex-col justify-center items-center rounded-[50%] md:rounded-full ${
        size == "md"
          ? "md:w-[8rem] px-[0.1rem] py-[0.5rem]"
          : "md:w-[6rem] px-[0.05rem] py-[0.3rem]"
      }  hover:bg-[#1d90dd] cursor-pointer font-semibold text-lg`}
    >
      <div>
        <p className="hidden md:inline">{title}</p>
      </div>
      {Icon && <Icon className={`${iconClassName} md:hidden text-[2rem] `} />}
    </div>
  );
}

export default Button;
