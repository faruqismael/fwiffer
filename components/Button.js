import React from "react";

function Button({ title, Icon, className }) {
  return (
    <div className="bg-[#1d9bf0] text-white flex flex-col justify-center items-center rounded-[50%] md:rounded-full md:w-[10rem] px-2 py-3 hover:bg-[#1d90dd] cursor-pointer font-semibold text-lg">
      <div>
        <p className="hidden md:inline">{title}</p>
      </div>
      <Icon className="md:hidden text-[2rem] " />
    </div>
  );
}

export default Button;
