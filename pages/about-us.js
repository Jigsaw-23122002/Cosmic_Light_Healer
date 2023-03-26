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
      <div className="px-5">
      <Benefits imgPos="right" data={benefitTwo} />
      </div>
    </div>
  );
}

export default AboutUs;
