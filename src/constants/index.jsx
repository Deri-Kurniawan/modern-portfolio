import {
  call,
  email,
  projectsImages,
  react,
  reviewer1,
  reviewer2,
  reviewer3,
  send,
  tailwindCSS,
} from "../assets";

import { FiInstagram, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";

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
    description: "I've been made over 20 apps using React JS.",
  },
  {
    name: "React Native",
    icon: react,
    description: "I've been made over 10 apps using React Native.",
  },
  {
    name: "Tailwindcss",
    icon: tailwindCSS,
    description: "I've been made over 5 apps using Tailwindcss.",
  },
];

export const projects = [
  {
    name: "Windows 11 OS Clone Web",
    image: projectsImages.project1,
    description: (
      <>
        Windows 11 OS clone as website using React JS checkout this live site on{" "}
        <a
          className="text-secondary"
          href="https://deri-kurniawan.vercel.app"
          rel="noreferrer noopener"
        >
          vercel
        </a>
      </>
    ),
  },
  {
    name: "Other Example Projects",
    image: projectsImages.project1,
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
];

export const educations = [
  {
    title: "Public Elementary School 1 of Cimapag",
    description: (
      <ul className="list-disc ml-5">
        <li>
          <a
            className="hover:text-secondary"
            href="https://www.google.com/search?q=pramuka"
            target="_blank"
            rel="noreferrer noopener"
          >
            Praja Muda Karana (Scouting)
          </a>
        </li>
      </ul>
    ),
    timeRange: "2007 - 2013",
    url: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/203e7f0f-2cf5-e011-8cdd-479651f9753d",
  },
  {
    title: "Public Junior School 1 of Cireunghas",
    description: (
      <ul className="list-disc ml-5">
        <li>
          <a
            className="hover:text-secondary"
            href="https://www.google.com/search?q=palang+merah+remaja"
            target="_blank"
            rel="noreferrer noopener"
          >
            Palang Merah Remaja (Medical Extracurricular)
          </a>
        </li>
      </ul>
    ),
    timeRange: "2013 - 2016",
    url: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/709329fd-3202-e211-ba24-8d6c1ba56eba",
  },
  {
    title: "Public Senior High School 4 of Sukabumi",
    description: (
      <ul className="list-disc ml-5">
        <li>
          <a
            className="hover:text-secondary"
            href="https://www.google.com/search?q=organisasi+siswa"
            target="_blank"
            rel="noreferrer noopener"
          >
            Organisasi Siswa - IT Division (Student Organization)
          </a>
        </li>
        <li>IT Club (Tech Extracurricular)</li>
        <li>Delta Music (Music Extracurricular)</li>
      </ul>
    ),
    timeRange: "2016 - 2019",
    url: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/9fbbd74e-dbd5-43b2-9d82-d40d727dd64c",
  },
  {
    title: "Muhammadiyah University of Sukabumi",
    description: (
      <ul className="list-disc ml-5">
        <li>
          <a
            className="hover:text-secondary"
            href="http://drive.google.com/uc?export=view&id=1q0ERTFZFvh0cVuczbXmRhNrrBHMNVt7v"
            target="_blank"
            rel="noreferrer noopener"
          >
            Studi Independen Kampus Merdeka Batch 1 <br /> (23 Aug 2021 - 19 Jan
            2022)
          </a>
        </li>
      </ul>
    ),
    timeRange: "2019 - Now",
    url: "https://pddikti.kemdikbud.go.id/data_pt/NTFCMjg4QzItQTE2Mi00MTkwLUI1NjYtNDUwODlEQThCMUUy",
  },
  {
    timeRange: "Future",
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
