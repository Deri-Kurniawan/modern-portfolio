import {
  call,
  email,
  facebook,
  instagram,
  linkedin,
  react,
  reviewer1,
  reviewer2,
  reviewer3,
  send,
  twitter,
} from "../assets";

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
      },
      {
        label: "Ability",
        url: "/#ability",
      },
      {
        label: "Projects",
        url: "/#projects",
      },
      {
        educations: "Education",
        url: "/#education",
      },
      {
        label: "Contact",
        url: "/#contact",
      },
    ],
  },
  {
    label: "Social Media",
    urls: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/deri-kurniawan/",
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/deri561/",
      },
      {
        label: "Twitter",
        url: "https://twitter.com/derii561",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/raniku2014",
      },
      {
        label: "Dev",
        url: "https://dev.to/deri_kurniawan",
      },
    ],
  },
  {
    label: "Support Us",
    urls: [
      {
        label: "Buy Me A Coffee",
        url: "https://www.buymeacoffee.com/derikurniawan",
      },
      {
        label: "PayPal",
        url: "https://www.paypal.com/paypalme/my/profile",
      },
    ],
  },
];

export const socialMedia = [
  {
    label: "Instagram",
    icon: instagram,
    url: "https://www.instagram.com/deri561/",
  },
  {
    label: "Facebook",
    icon: facebook,
    url: "https://www.facebook.com/raniku2014",
  },
  {
    label: "Twitter",
    icon: twitter,
    url: "https://twitter.com/derii561",
  },
  {
    label: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/deri-kurniawan/",
  },
];
