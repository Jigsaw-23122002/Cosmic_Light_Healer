import React from "react";

function PopUp(props) {
  return (
    <div className="w-full h-full bg-opacity-60 bg-black flex flex-row justify-center items-center fixeds">
      <button onClick={() => props.close()}>close</button>
      <div className="w-1/2 h-1/2 bg-black"></div>
    </div>
  );
}

export default PopUp;
