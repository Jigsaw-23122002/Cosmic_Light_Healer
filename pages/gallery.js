import React from "react";
import Image from "next/image";
import Img1 from "../public/img/cosmic_healing.jpg";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import FadeInSection from "../components/fadeInSection";

function Gallery() {
  return (
    <div className="">
      <FadeInSection>
        <SectionTitle
          pretitle="Images"
          title="Images of Cosmic Light Healer"
        ></SectionTitle>
      </FadeInSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src={Img1}
              alt=""
              layout="responsive"
            />
          </div>
        </FadeInSection>
      </div>
      <SectionTitle
        pretitle="Videos"
        title="Videos of Cosmic Light Healer"
      ></SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-5">
        <FadeInSection>
          <div>
            <Video />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Video />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div>
            <Video />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Gallery;
