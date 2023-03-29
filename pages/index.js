import React from "react";
import ReactDOM from "react-dom";
import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Carousels from "../components/carousel";
import Testimonials from "../components/testimonials";

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

export default function Home() {
  return (
    <>
      <Carousels />
      <FadeInSection>
        <SectionTitle
          pretitle="Overview"
          title="Essence of Yoga"
        ></SectionTitle>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify xl:ml-16 xl:mr-16 lg:ml-10 lg:mr-10 ml-5 mr-5">
          Welcome to Cosmic Light Healer, your online destination for all things
          yoga. Whether you're a seasoned yogi or just starting out, our website
          offers a wealth of resources and information to help you deepen your
          practice and achieve your goals.
        </p>
      </FadeInSection>
      <FadeInSection>
        <Video />
      </FadeInSection>
      <FadeInSection>
        <SectionTitle pretitle="FAQs" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
      </FadeInSection>
      <FadeInSection>
        <Faq />
      </FadeInSection>
      <FadeInSection>
        <SectionTitle
          pretitle="Testimonials"
          title="Experiences of Individuals with Cosmic Light healer"
        ></SectionTitle>
      </FadeInSection>
      <Testimonials />
    </>
  );
}
