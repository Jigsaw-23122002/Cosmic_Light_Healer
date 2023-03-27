import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import Video from "../components/video";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Carousels from "../components/carousel";

export default function Home() {
  return (
    <>
      <Carousels />
      <SectionTitle pretitle="Overview" title="Essence of Yoga"></SectionTitle>
      <p className="py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify xl:ml-16 xl:mr-16 lg:ml-10 lg:mr-10 ml-5 mr-5">
        Welcome to Cosmic Light Healer, your online destination for all things
        yoga. Whether you're a seasoned yogi or just starting out, our website
        offers a wealth of resources and information to help you deepen your
        practice and achieve your goals.
      </p>
      <Video />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
    </>
  );
}
