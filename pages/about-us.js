import React from "react";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/benefits";
import { benefitOne, benefitTwo } from "../components/data";

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

function AboutUs() {
  return (
    <div>
      <FadeInSection>
        <SectionTitle pretitle="Aim" title="Vajra Tatwa">
          School of yogic healing
        </SectionTitle>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify xl:ml-16 xl:mr-16 lg:ml-10 lg:mr-10 ml-5 mr-5">
          Vajra tatwa is the holistic system which provide sacred methods for
          nourishing life on all dimensions. The techniques offered at this
          platform are the essence of wisdom collected while travelling and
          experiencing masters (Guru). The offerings of this platform are purely
          the grace of divine. The platform provides, Empowerment Coaching, The
          Flowing Meditation, Cosmic Healing, Yoga Nidra (subconscious realm),
          Spiritual Mastery Process, Shakti Chalan kriya, Seven Steps of Glory,
          Zen Mindfulness and Workshops/Retreat to establish the connection to
          the true essence of being.
        </p>
      </FadeInSection>
      <FadeInSection>
        <SectionTitle title="Sacred Space"></SectionTitle>
        <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify xl:ml-16 xl:mr-16 lg:ml-10 lg:mr-10 ml-5 mr-5 mb-10">
          Sacred space is an energy dimension created by the coach by fully
          opening the heart center. It activates the divine energy field to hold
          the session with unconditional compassion, acceptance and
          non-judgment. The sacred space allows the session to flow naturally
          and opens new realms to explore for the client.
        </p>
      </FadeInSection>
      <FadeInSection>
        <SectionTitle pretitle="Founders of Cosmic Light Healer"></SectionTitle>
      </FadeInSection>
      <FadeInSection>
        <Benefits data={benefitOne} />
      </FadeInSection>
      <FadeInSection>
        <Benefits imgPos="right" data={benefitTwo} />
      </FadeInSection>
    </div>
  );
}

export default AboutUs;
