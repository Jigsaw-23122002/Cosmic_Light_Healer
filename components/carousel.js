import React from "react";
import Image from "next/image";
import Img2 from "../public/img/Home_01.jpg";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Carousels() {
  return (
    <div>
      <div className="w-full bg-gray-200 flex justify-center items-center">
        <div className="bg-gray-400 w-full relative z-0">
          <Image src={Img2} layout="responsive" />
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <FadeInSection>
              <div className="lg:mb-96 xl:mb-96 mb-20">
                <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-center">
                  Cosmic Light Healer
                </h1>
                <p className="text-gray-800 text-center xl:text-3xl lg:text-3xl">
                  Journey through the river of Happiness
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
