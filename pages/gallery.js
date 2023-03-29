import React from "react";
import Image from "next/image";
import Img1 from "../public/img/cosmic_healing.jpg";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";

function Gallery() {
  return (
    <div className="">
      <SectionTitle
        pretitle="Images"
        title="Images of Cosmic Light Healer"
      ></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src={Img1}
            alt=""
            layout="responsive"
          />
        </div>
      </div>
      <SectionTitle
        pretitle="Videos"
        title="Videos of Cosmic Light Healer"
      ></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        <div>
          <Video />
        </div>
        <div>
          <Video />
        </div>
        <div>
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
