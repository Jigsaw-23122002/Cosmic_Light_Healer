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
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
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
