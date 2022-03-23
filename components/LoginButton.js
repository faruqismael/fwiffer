import React from "react";

function LoginButton({ className, onClick = () => {}, name, Icon, color }) {
  return (
    <div className="md:w-[70%]">
      <div
        onClick={onClick}
        className={`${className} rounded-full border p-2 flex space-x-3 items-center justify-center hover:bg-gray-100 dark:bg-gray-800 cursor-pointer`}
      >
        {Icon && <Icon className={color} />}
        <h4 className="">Sign in with {name} </h4>
      </div>
    </div>
  );
}

export default LoginButton;
