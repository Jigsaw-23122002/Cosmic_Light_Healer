import React from "react";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import { benefitOne, benefitTwo } from "../components/data";

function AboutUs() {
  return (
    <div>
      <SectionTitle pretitle="Aim" title="Vajra Tatwa">
        School of yogic healing
      </SectionTitle>
      <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify xl:ml-16 xl:mr-16 lg:ml-10 lg:mr-10 ml-5 mr-5">
        Vajra tatwa the holistic system which provide sacred methods for
        nourishing life on all dimensions. The techniques offered at this
        platform are the essence of wisdom collected while travelling through
        different masters. The offerings of this platform are purely the grace
        of divine mother and masters. The platform provides cosmic light
        healing, empowerment coaching, spiritual wisdom, meditations, Yoga,
        Martial arts and Thai Chi, Spiritual mastery process, Zen mindfulness,
        Breathwork, yoga nidra (subconscious realm) and Workshops to establish
        the connection to the true essence of being once again.{" "}
      </p>
      <SectionTitle pretitle="Founders" title=""></SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
    </div>
  );
}

export default AboutUs;
