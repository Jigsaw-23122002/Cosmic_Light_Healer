import React from "react";
import Image from "next/image";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import FadeInSection from "../components/fadeInSection";
import PopUp from "../components/popUp";
import { useState } from "react";
import Img1 from "../public/img/1.jpg";
import Img2 from "../public/img/2.jpg";
import Img3 from "../public/img/3.jpg";
import Img4 from "../public/img/4.jpg";
import Img5 from "../public/img/5.jpg";
import Img6 from "../public/img/6.jpg";
import Img7 from "../public/img/7.jpg";
import Img8 from "../public/img/8.jpg";
import Img9 from "../public/img/9.jpg";

function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [image, setImage] = useState(null);
  const arr = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];
  return (
    <div className={`overflow-hidden`}>
      <FadeInSection>
        <SectionTitle
          pretitle="Images"
          title="Images of Cosmic Light Healer"
        ></SectionTitle>
      </FadeInSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        {arr.map((img) => {
          return (
            <FadeInSection>
              <div
                onClick={() => {
                  setIsOpen(true);
                  setImage(img);
                }}
              >
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={img}
                  alt=""
                  layout="responsive"
                />
              </div>
            </FadeInSection>
          );
        })}
      </div>
      <SectionTitle
        pretitle="Videos"
        title="Videos of Cosmic Light Healer"
      ></SectionTitle>
      <div className="grid grid-cols-1">
        <FadeInSection>
          <div>
            <Video />
          </div>
        </FadeInSection>
      </div>
      {isOpen && <PopUp close={closeModal} content={image} />}
    </div>
  );
}

export default Gallery;
