import React from "react";
import SectionTitle from "../components/sectionTitle";
import Testimonials from "../components/testimonials";

function Services() {
  return (
    <div>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
    </div>
  );
}

export default Services;
