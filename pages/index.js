import React from "react";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Carousels from "../components/carousel";
import Testimonials from "../components/testimonials";
import FadeInSection from "../components/fadeInSection";

export default function Home() {
  return (
    <>
      <Carousels />
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
