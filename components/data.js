import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.jpg";
import benefitTwoImg from "../public/img/benefit-two.jpg";

const benefitOne = {
  title: "Soni Sandhu",
  desc: "I am Soni Sandhu. I am a certified empowerment and a spiritual coach.Since Childhood I was always intrigued by this vast creation. I have always wondered What is the purpose of existence and what is the essence of life. I eventually became a seeker. My seeking showed me the essence of our very existence is compassion, we are here to love and be loved. The unlimited power is packed in each of us within our heart chakra. My presence is to guide souls into the sacred remembrance of their own inner power. I am the mirror where they see and discover their own unlimited inner potential. This opens up the channels for them to manifest the life of their wildest dreams while releasing blockages and limiting beliefs. This powerful transformational work happens within the sacred space of divine energy.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Business Partner",
  desc: "Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Mauris ultrices eros in cursus turpis. Donec massa sapien faucibus et molestie ac feugiat. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Amet purus gravida quis blandit turpis cursus in. Ac orci phasellus egestas tellus rutrum tellus. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Accumsan in nisl nisi scelerisque eu ultrices. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Sed arcu non odio euismod lacinia at quis. Commodo quis imperdiet massa tincidunt nunc. Iaculis eu non diam phasellus vestibulum. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Velit sed ullamcorper morbi tincidunt ornare. Nunc non blandit massa enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
