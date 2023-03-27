import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border text-white bg-pink-600 outline-none rounded-l-full rounded-r-full capitalize">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
