import React from "react";
import Image from "next/image";
import Img2 from "../public/img/Home_01.jpg";

function Carousels() {
  return (
    <div>
      <div className="w-full bg-gray-200 flex justify-center items-center">
        <div className="bg-gray-400 w-full relative z-0">
          <Image src={Img2} layout="responsive" />
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <div className="lg:mb-20 xl:mb-20 mb-10">
              <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                Cosmic Light Healer
              </h1>
              <p className="text-gray-800 text-center">
                The websites for Yogas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
