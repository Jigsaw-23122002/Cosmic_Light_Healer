import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Cta from "../components/cta";
import Faq from "../components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle
        pretitle="Watch  video"
        title="Learn how we work"
      >
        demo video about cosmic light healer
      </SectionTitle>
      <Video />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
    </>
  );
}
