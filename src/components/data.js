import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";

const benefitOne = {
  title: "What will you study and learn ",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Web development And CMS",
      desc: "Html/css javascript and cms like wordpress ",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Mobile Applications Android/IOS",
      desc: "Native mobile application with Java for android and swift for IOS",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Desktop Application and Asp.net",
      desc: "You will learn C#",
      icon: <ComputerDesktopIcon />,
    },
    
  ],
};


export {benefitOne};
