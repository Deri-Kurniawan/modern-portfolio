import {
  call,
  email,
  facebook,
  github,
  instagram,
  linkedin,
  projectsImages,
  react,
  reviewer1,
  reviewer2,
  reviewer3,
  send,
  twitter,
} from "../assets";

import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiGithub,
} from "react-icons/fi";

export const navLinks = [
  {
    id: "home",
    label: "Home",
    url: "/#home",
  },
  {
    id: "ability",
    label: "Ability",
    url: "/#ability",
  },
  {
    id: "projects",
    label: "Projects",
    url: "/#projects",
  },
  {
    id: "education",
    label: "Education",
    url: "/#education",
  },
  {
    id: "contacts",
    label: "Contacts",
    url: "/#contacts",
  },
];

export const stats = [
  {
    label: "Projects",
    value: 50,
  },
  {
    label: "Trusted By Client",
    value: 15,
  },
  {
    label: "Total Client",
    value: 20,
  },
];

export const abilities = [
  {
    name: "React JS",
    icon: react,
    description: "I've been made over 20 apps using React JS library",
  },
  {
    name: "React Native",
    icon: react,
    description: "I've been made over 10 apps using React Native",
  },
  {
    name: "React Native",
    icon: send,
    description:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const projects = [
  {
    name: "Windows 11 OS Clone Web",
    image: projectsImages.project1,
    description: (
      <>
        Windows 11 OS clone as website using React JS checkout this live site on{" "}
        <a className="text-secondary" href="https://deri-kurniawan.vercel.app">
          vercel
        </a>
      </>
    ),
  },
  {
    name: "Other Example Projects",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    description: (
      <>
        lorem ipsum dolor sit amet{" "}
        <a className="text-secondary" href="https://deri-kurniawan.vercel.app">
          vercel
        </a>{" "}
        2
      </>
    ),
  },
];

export const educations = [
  {
    title: "State Elementary School 1 of Cimapag",
    description: "Lorem ipsum dolor sit amet consecture",
    yearRange: "2007 - 2013",
  },
  {
    title: "State High School 1 of Cireunghas",
    description: "Lorem ipsum dolor sit amet consecture",
    yearRange: "2013 - 2016",
  },
  {
    title: "State High School 4 of Sukabumi",
    description: "Lorem ipsum dolor sit amet consecture",
    yearRange: "2016 - 2019",
  },
  {
    title: "Muhammadiyah University of Sukabumi",
    description: "Lorem ipsum dolor sit amet consecture",
    yearRange: "2019 - Now",
  },
  {
    yearRange: "Future",
  },
];

export const feedbacks = [
  {
    name: "John Doe",
    position: "Project Manager",
    avatar: reviewer1,
    review:
      "Deri Kurniawan is a very competent person in the field of multiplatform applications.",
  },
  {
    name: "Vanessa Angela",
    position: "Backend Developer",
    avatar: reviewer2,
    review:
      "Deri Kurniawan is a very professional person and has helped me complete a project owned by the company.",
  },
  {
    name: "Kenn Gallanger",
    position: "CEO & Founder",
    avatar: reviewer3,
    review:
      "There can be no doubt about this Deri's ability. I am very happy to be able to use his services.",
  },
];

export const contacts = [
  {
    label: "Email",
    icon: email,
    description: "deri.netuchi@gmail.com",
    url: "mailto: deri.netuchi@gmail.com",
  },
  {
    label: "WhatsApp",
    icon: call,
    description: "+62-857-2095-9031",
    url: "https://wa.me/6285720959031",
  },
  {
    label: "Telegram",
    icon: send,
    description: "@Deri_Kurniawan",
    url: "https://t.me/Deri_Kurniawan",
  },
];

export const footer = [
  {
    label: "Pages",
    urls: [
      {
        label: "Home",
        url: "/#home",
        blank: false,
      },
      {
        label: "Stats",
        url: "/#stats",
        blank: false,
      },
      {
        label: "Ability",
        url: "/#ability",
        blank: false,
      },
      {
        label: "Projects",
        url: "/#projects",
        blank: false,
      },
      {
        label: "Education",
        url: "/#education",
        blank: false,
      },
      {
        label: "Feedback",
        url: "/#feedback",
        blank: false,
      },
      {
        label: "Contacts",
        url: "/#contacts",
        blank: false,
      },
    ],
  },
  {
    label: "Blogs & Social",
    urls: [
      {
        label: "Stack Overflow",
        url: "https://stackoverflow.com/users/19716588/deri-kurniawan",
        blank: true,
      },
      {
        label: "Github",
        url: "https://github.com/deri-kurniawan/",
        blank: true,
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/deri-kurniawan/",
        blank: true,
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/deri561/",
        blank: true,
      },
      {
        label: "Twitter",
        url: "https://twitter.com/derii561",
        blank: true,
      },
      {
        label: "Medium",
        url: "https://deri-kurniawan.medium.com",
        blank: true,
      },
      {
        label: "DEV",
        url: "https://dev.to/deri_kurniawan",
        blank: true,
      },
    ],
  },
  {
    label: "Support Us",
    urls: [
      {
        label: "Buy Me A Coffee",
        url: "https://www.buymeacoffee.com/derikurniawan",
        blank: true,
      },
      {
        label: "PayPal",
        url: "https://paypal.me/derikurniawan5?country.x=ID&locale.x=en_US",
        blank: true,
      },
      {
        label: "Ko-fi",
        url: "https://ko-fi.com/derikurniawan",
        blank: true,
      },
    ],
  },
];

export const socialMedia = [
  {
    label: "Instagram",
    icon: <FiInstagram />,
    url: "https://www.instagram.com/deri561/",
  },
  {
    label: "Twitter",
    icon: <FiTwitter />,
    url: "https://twitter.com/derii561",
  },
  {
    label: "LinkedIn",
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/deri-kurniawan/",
  },
  {
    label: "Github",
    icon: <FiGithub />,
    url: "https://github.com/deri-kurniawan/",
  },
];
