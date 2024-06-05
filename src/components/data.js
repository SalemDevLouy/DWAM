import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";

const benefitOne = {
  title: "What will you study and learn ",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Web development And CMS",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Mobile Applications",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Desktop Application",
      desc: "This template is powered by latest technologies and tools.",
      icon: <ComputerDesktopIcon />,
    },
    
  ],
};


export {benefitOne};
