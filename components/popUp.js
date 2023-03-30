import React from "react";
import Image from "next/image";

function PopUp(props) {
  return (
    <div
      className="w-full h-full bg-opacity-60 bg-black flex flex-col justify-center items-center fixeds"
      onClick={() => props.close()}
    >
      <div className="sm:w-1/2 h-1/2 w-full bg-black">
        <Image src={props.content} layout="responsive" />
      </div>
    </div>
  );
}

export default PopUp;
