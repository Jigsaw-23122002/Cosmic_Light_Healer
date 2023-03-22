import React from "react";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import { benefitOne, benefitTwo } from "../components/data";

function AboutUs() {
  return (
    <div>
      <SectionTitle
        pretitle="Founder and business partner"
        title=""
      ></SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
    </div>
  );
}

export default AboutUs;
