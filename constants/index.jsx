const NewTabLink = ({ title, url, hover = true }) => (
  <a
    className={hover ? "hover:text-secondary" : "text-secondary"}
    href={url}
    target="_blank"
    rel="noreferrer noopener"
  >
    {title}
  </a>
);

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
    icon: "https://img.icons8.com/plasticine/344/react.png",
    description: "I've been made over 20 apps using React JS.",
  },
  {
    name: "React Native",
    icon: "https://img.icons8.com/plasticine/344/react.png",
    description: "I've been made over 10 apps using React Native.",
  },
  {
    name: "Tailwindcss",
    icon: "https://img.icons8.com/color/344/tailwindcss.png",
    description: "I've been made over 5 apps using Tailwindcss.",
  },
  {
    name: "Bootstrap 5",
    icon: "https://img.icons8.com/color/344/bootstrap.png",
    description: "",
  },
  {
    name: "Express JS",
    icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NC45MTQyNSwxMzQuNTloNC4yMjgzM2MzLjAxLDAgNS44NDQ0MiwtMS40MDQ2NyA3LjY2NDc1LC0zLjgwMTkybDI2LjgyMTI1LC0zNS4yODUwOGwyNi44MjEyNSwzNS4yODUwOGMxLjgyMDMzLDIuMzkzNjcgNC42NTQ3NSwzLjgwMTkyIDcuNjY0NzUsMy44MDE5Mmg0LjIyODMzbC0zNC4yMTcyNSwtNDUuMDA2NjdsMzIuNjgzNTgsLTQzaC00LjIyODMzYy0zLjAxLDAgLTUuODQ0NDIsMS40MDQ2NyAtNy42NjQ3NSwzLjgwMTkybC0yNS4yOTExNywzMy4yNzQ4M2wtMjUuMjk0NzUsLTMzLjI3ODQyYy0xLjgyMDMzLC0yLjM5MzY3IC00LjY1NDc1LC0zLjc5ODMzIC03LjY2NDc1LC0zLjc5ODMzaC00LjIyODMzbDMyLjY4MzU4LDQzeiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5My4xNjY2N3YtMTAuNzVjMCwtMjMuOTE4NzUgLTIxLjMwMjkyLC00Mi44NjAyNSAtNDUuOTcwNTgsLTM4Ljg4NjMzYy0xOS4yMDMwOCwzLjA5MjQyIC0zMi44NjI3NSwyMC40NTcyNSAtMzIuODYyNzUsMzkuOTA0djIuNTY1Njd2Ny4xNjY2N3YwLjUwODgzYzAsMjMuNDgxNTggMTcuMTE3NTgsNDIuMjMzMTcgMzguOTQzNjcsNDIuNDkxMTdjMTguMjQ2MzMsMC4yMTUgMzMuNjQzOTIsLTExLjk4MjY3IDM4LjM2Njc1LC0yOC42NjMwOGgtMy42ODM2N2MtMi4yMjE2NywwIC00LjIzNTUsMS4yNzIwOCAtNS4xOTk0MiwzLjI3MTU4Yy02LjIzMTQyLDEyLjg4MjA4IC0yMC43NDM5MiwyMS4wMDU1IC0zNi42NTAzMywxNy4zNTA1Yy0xNC42NjMsLTMuMzcxOTIgLTI0LjYxMDMzLC0xNy4xMTA0MiAtMjQuNjEwMzMsLTMyLjE1MzI1di0yLjgwNTc1ek0xNC4zMzMzMyw4NC45NjA4M2MwLC0xNi44NzAzMyAxMC4wNDc2NywtMzAuNjYyNTggMjQuODExLC0zMy45NjI4M2MyMS4wNDg1LC00LjcwMTMzIDM5LjY4OSwxMS4xOCAzOS42ODksMzEuNDE4Njd2My41ODMzM2gtNjQuNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
    description: "",
  },
  {
    name: "Next JS",
    icon: "https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png",
    description: "",
    inverted: true,
  },
  {
    name: "CodeIgniter 4",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png",
    description: "",
  },
  {
    name: "Laravel 8",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-laravel-is-a-free-open-source-php-web-framework-logo-shadow-tal-revivo.png",
    description: "",
  },
  {
    name: "PHP 8",
    icon: "https://img.icons8.com/external-those-icons-lineal-color-those-icons/344/external-PHP-programming-and-development-those-icons-lineal-color-those-icons.png",
    description: "",
  },
  {
    name: "Node JS",
    icon: "https://img.icons8.com/fluency/344/node-js.png",
    description: "",
  },
  {
    name: "HTML 5",
    icon: "https://img.icons8.com/color/344/html-5--v1.png",
    description: "",
  },
  {
    name: "CSS 3",
    icon: "https://img.icons8.com/color/344/css3.png",
    description: "",
  },
  {
    name: "Javascript",
    icon: "https://img.icons8.com/color/344/javascript--v1.png",
    description: "",
  },
  {
    name: "MySQL",
    icon: "https://img.icons8.com/color/344/mysql-logo.png",
    description: "",
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/color/344/google-firebase-console.png",
    description: "",
  },
  {
    name: "Figma",
    icon: "https://img.icons8.com/fluency/344/figma.png",
    description: "My Favorite Design Tool",
  },
  {
    name: "VS Code",
    icon: "https://img.icons8.com/color/344/visual-studio-code-2019.png",
    description: "My Favorite Code Editor",
  },
  {
    name: "Git Kraken",
    icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMxYWJjOWMiPjxwYXRoIGQ9Ik0xMTMuNTE1MzgsMjYuODg1NWMtMS4xMTQ2NCwtMC4xMDQzMSAtMi4yNDMzOSwwLjQ4NjI3IC0yLjc3MTQ4LDEuNTc0NzFjLTAuNjU1NzUsMS4zNTQ1IC0wLjE0MDM0LDMuMDAxNDMgMS4xNDQyOCwzLjcxNjMxYzE2LjQ3NDM3LDkuMjQ1IDI3LjYzMDg2LDI3LjA1MTU0IDI3LjYzMDg2LDQ3LjUxNDE2YzAsMjIuOTQ1ODggLTE0LjA1MzE5LDQyLjU3MjM1IC0zMy45MTkxOSw1MC41MTY2di0yMi42NzU3OGMzLjQ0NTM3LC0xLjEwNzI1IDYuMDQ2ODgsLTQuMzU0ODQgNi4wNDY4OCwtOC4yNDA5N2MwLC0zLjIxOTYyIC0xLjY1MTQ3LC02LjAwMTEgLTQuMTk5MjIsLTcuNTA2MWMyLjAxNTYzLC0xOS41NTQyNSAxMC43OTE5OSwtMTQuNDA0NDEgMTAuNzkxOTksLTIwLjYyODY2di0zLjYyMTgzYzAsLTkuMzQ3MTMgLTIxLjMyNDA1LC0zOS43OTE5NiAtMzEuMjk0NjgsLTQwLjUwMTQ2Yy0wLjYwNzM3LC0wLjA0ODM4IC0xLjIxODc4LC0wLjA0ODM4IC0xLjg0NzY2LDBjLTkuOTk3NSwwLjczNjM3IC0zMS4zMTU2NywzMS4xNTk3MSAtMzEuMzE1NjcsNDAuNTAxNDZ2My42NDI4M2MwLDYuMjI0MjQgOC44MTM3NCwxLjA1MjkxIDEwLjgwMjQ5LDIwLjYyODY2Yy0yLjU2OTI1LDEuNDk5NjIgLTQuMTk5MjIsNC4yODExIC00LjE5OTIyLDcuNTA2MWMwLDMuODg2MTMgMi41NzAwMSw3LjEzMzcyIDYuMDE1MzgsOC4yNDA5N3YyMi42NzU3OGMtMTkuODcxMzgsLTcuOTE3MzcgLTMzLjkxOTE5LC0yNy41NDM4NSAtMzMuOTE5MTksLTUwLjUxNjZjMCwtMjAuNDM1NzUgMTEuMTU2NDgsLTM4LjI0MjI4IDI3LjYzMDg2LC00Ny41MTQxNmMxLjMxMTUsLTAuNzM2MzggMS44MDAwMywtMi4zNjE4MSAxLjE0NDI4LC0zLjcxNjMxYy0wLjcwNDEyLC0xLjQ1MTI1IC0yLjQ1NTAzLC0yLjAxMzAyIC0zLjg2MzI4LC0xLjIyODI3Yy0xOC4xOTQzNywxMC4yMTI1IC0zMC41MTc4MiwyOS44NzgzNiAtMzAuNTE3ODIsNTIuNDU4NzRjMCwyOC4yMDggMTkuMjEzNjEsNTEuODUyMjkgNDUuMDk5NjEsNTguMjQzMTd2LTI1LjU4Mzc0YzEuODQzNjMsMC42MTI3NSAzLjY3MTQ2LDEuMTM0OTYgNS41ODQ5NiwxLjUzMjcxdjMwLjQyMzM0Yy0zMS40OTIxMywtNC4xNzYzNyAtNTUuODYwMTEsLTMxLjUxMDg1IC01NS44NjAxMSwtNjQuNjE1NDhjMCwtOC4wNjc4OCAxLjQ2MDI0LC0xNS44MDU2MSA0LjEwNDc0LC0yMi45MzgyM2MwLjUzMjEzLC0xLjQyNDM4IC0wLjE0MDg0LC0yLjk5OTA4IC0xLjUyMjIyLC0zLjU5MDMzYy0xLjQ1NjYzLC0wLjYzOTYyIC0zLjE1NzMxLDAuMDkwMiAtMy43MTYzMSwxLjYxNjdjLTIuODY0ODgsNy43NDUzOCAtNC40NDA2NywxNi4xMjkxMiAtNC40NDA2NywyNC45MTE4N2MwLDM4LjE0NjM4IDI5Ljc0ODc4LDY5LjI2MTgzIDY3LjA0MDUzLDcwLjc4ODMzdi0zNS44ODIzMmMxLjY1MDEzLDAuMDk2NzUgMy42MzE4MiwwLjEyMzYyIDUuNjY4OTUsMHYzNS44NTA4M2MzNy4yOTE3NSwtMS40OTk2MyA2Ny4wNDA1MywtMzIuNjEwNDYgNjcuMDQwNTMsLTcwLjc1Njg0YzAsLTguNzgyNzUgLTEuNTc1OCwtMTcuMTYwNjEgLTQuNDQwNjcsLTI0LjkzMjg2Yy0wLjU1OSwtMS40OTk2MiAtMi4yNTk2OCwtMi4yNjY4MiAtMy43MTYzMSwtMS42MjcyYy0xLjM4MTM4LDAuNTkxMjUgLTIuMDU5NzIsMi4xODc0NiAtMS41MjIyMiwzLjU5MDMzYzIuNjQ0NSw3LjEzMjYyIDQuMTA0NzQsMTQuODgwODUgNC4xMDQ3NCwyMi45NDg3M2MwLDMzLjEwNDYzIC0yNC4zNDExMSw2MC40MzM3MyAtNTUuODYwMTEsNjQuNjE1NDh2LTMwLjQyMzM0YzEuOTE4ODgsLTAuMzcwODcgMy43NjgyMSwtMC44OTMwOSA1LjU4NDk2LC0xLjUzMjcxdjI1LjU4Mzc0YzI1Ljg4NiwtNi4zNjkzOCA0NS4wOTk2MSwtMzAuMDI5NzkgNDUuMDk5NjEsLTU4LjI0MzE2YzAsLTIyLjU4MDM4IC0xMi4zMjM0NSwtNDIuMjUxNjIgLTMwLjUxNzgyLC01Mi40NTg3NGMtMC4zNDUzNCwtMC4xOTYxOSAtMC43MjAyNSwtMC4zMTE2NyAtMS4wOTE4LC0wLjM0NjQ0ek02OS4wNDU2NSw5My40NzQ2MWMzLjE3NjYzLDAgNS43NDI0MywyLjYwNjc5IDUuNzQyNDMsNS44MjY0MWMwLDMuMTkyNzUgLTIuNTM4OTMsNS44MjY0MiAtNS43NDI0Myw1LjgyNjQyYy0zLjIwMzUsMCAtNS43NTI5MywtMi42MzM2NyAtNS43NTI5MywtNS44MjY0MmMwLC0zLjE5Mjc1IDIuNTQ5NDMsLTUuODI2NDEgNS43NTI5MywtNS44MjY0MXpNMTAyLjk1NDM1LDkzLjQ4NTExYzMuMTU1MTIsMCA1Ljc1MjkzLDIuNTc5OTIgNS43NTI5Myw1LjgyNjQxYzAsMy4yMTk2MyAtMi41NzA5Myw1LjgyNjQyIC01Ljc1MjkzLDUuODI2NDJjLTMuMTU1MTIsMCAtNS43NDI0MywtMi41Nzk5MSAtNS43NDI0MywtNS44MjY0MmMwLC0zLjIxOTYyIDIuNTY1OCwtNS44MjY0MSA1Ljc0MjQzLC01LjgyNjQxeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+",
    description: "",
  },
];

export const projects = [
  {
    name: "Windows 11 OS Clone Web",
    image:
      "https://res.cloudinary.com/deri-kurniawan/image/upload/v1663606820/Deri%20Kurniawan%20Portfolio%20Web%20App/projects/Project-1_iynwb0.png",
    description:
      "Windows 11 OS clone as website using React JS + Tailwindcss. Checkout this live site on https://deri-kurniawan.vercel.app/",
  },
  {
    name: "Other Example Projects",
    image:
      "https://res.cloudinary.com/deri-kurniawan/image/upload/v1663606820/Deri%20Kurniawan%20Portfolio%20Web%20App/projects/Project-1_iynwb0.png",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  },
];

export const educations = [
  {
    title: "Public Elementary School 1 of Cimapag",
    description: (
      <NewTabLink
        title="- Praja Muda Karana (Scouting)"
        url="https://www.google.com/search?q=pramuka"
      />
    ),
    timeRange: "2007 - 2013",
    url: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/203e7f0f-2cf5-e011-8cdd-479651f9753d",
  },
  {
    title: "Public Junior School 1 of Cireunghas",
    description: (
      <NewTabLink
        title="- Palang Merah Remaja (Medical Extracurricular)"
        url="https://www.google.com/search?q=palang+merah+remaja"
      />
    ),
    timeRange: "2013 - 2016",
    url: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/709329fd-3202-e211-ba24-8d6c1ba56eba",
  },
  {
    title: "Public Senior High School 4 of Sukabumi",
    description: (
      <>
        <NewTabLink
          title="- Organisasi Siswa - IT Division (Student Organization)"
          url="https://www.google.com/search?q=organisasi+siswa"
        />
        <br />
        - Delta Music (Music Extracurricular)
        <br />- IT Club (Tech Extracurricular)
      </>
    ),
    timeRange: "2016 - 2019",
    url: "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/9fbbd74e-dbd5-43b2-9d82-d40d727dd64c",
  },
  {
    title: "Muhammadiyah University of Sukabumi",
    description: (
      <NewTabLink
        title="- Studi Independen Kampus Merdeka Batch 1 (23 Aug 2021 - 19 Jan
        2022)"
        url="http://drive.google.com/uc?export=view&id=1q0ERTFZFvh0cVuczbXmRhNrrBHMNVt7v"
      />
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
    name: "Alex Peterson",
    position: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    review:
      "Deri Kurniawan is a very competent person in the field of multiplatform applications.",
  },
  {
    name: "Vanessa Angela",
    position: "Backend Developer",
    avatar:
      "https://images.unsplash.com/photo-1662927204499-cbe4b5879f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    review:
      "Deri Kurniawan is a very professional person and has helped me complete a project owned by the company.",
  },
  {
    name: "Kenn Gallanger",
    position: "CEO & Founder",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80 687w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80 774w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80 987w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80 1287w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80 1374w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80 1587w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80 1887w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80 1974w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80 2187w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80 2487w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80 2574w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80 2787w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80 3087w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80 3174w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80 3387w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3687&q=80 3687w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3774&q=80 3774w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3987&q=80 3987w, https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80 4000w",
    review:
      "There can be no doubt about this Deri's ability. I am very happy to be able to use his services.",
  },
];

export const contacts = [
  {
    label: "Email",
    icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMGY2ZmYiPjxwYXRoIGQ9Ik0zNy42MjUsMjguNjY2NjdjLTEyLjc5OTQ0LDAgLTIzLjI5MTY3LDEwLjQ5MjIyIC0yMy4yOTE2NywyMy4yOTE2N3Y2OC4wODMzM2MwLDEyLjc5OTQ0IDEwLjQ5MjIyLDIzLjI5MTY3IDIzLjI5MTY3LDIzLjI5MTY3aDk2Ljc1YzEyLjc5OTQ0LDAgMjMuMjkxNjcsLTEwLjQ5MjIyIDIzLjI5MTY3LC0yMy4yOTE2N3YtNjguMDgzMzNjMCwtMTIuNzk5NDQgLTEwLjQ5MjIyLC0yMy4yOTE2NyAtMjMuMjkxNjcsLTIzLjI5MTY3ek0zNy42MjUsMzkuNDE2NjdoOTYuNzVjNi45ODc3MiwwIDEyLjU0MTY3LDUuNTUzOTQgMTIuNTQxNjcsMTIuNTQxNjd2My45NjEyNmwtNjAuOTE2NjcsMzIuOTI4ODdsLTYwLjkxNjY3LC0zMi45Mjg4N3YtMy45NjEyNmMwLC02Ljk4NzcyIDUuNTUzOTQsLTEyLjU0MTY3IDEyLjU0MTY3LC0xMi41NDE2N3pNMjUuMDgzMzMsNjguMTM5MzJsNTguMzYyMTQsMzEuNTUwMTNjMS41OTQxOSwwLjg2MTAxIDMuNTE0ODYsMC44NjEwMSA1LjEwOTA1LDBsNTguMzYyMTQsLTMxLjU1MDEzdjUxLjkwMjM0YzAsNi45ODc3MiAtNS41NTM5NCwxMi41NDE2NyAtMTIuNTQxNjcsMTIuNTQxNjdoLTk2Ljc1Yy02Ljk4NzcyLDAgLTEyLjU0MTY3LC01LjU1Mzk0IC0xMi41NDE2NywtMTIuNTQxNjd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
    description: "deri.netuchi@gmail.com",
    url: "mailto: deri.netuchi@gmail.com",
  },
  {
    label: "WhatsApp",
    icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMGY2ZmYiPjxwYXRoIGQ9Ik04Niw2Ljg4Yy00My42NTUyLDAgLTc5LjEyLDM1LjQ2NDggLTc5LjEyLDc5LjEyYzAsMTQuMDMyMDkgMy44NDgyOSwyNy4xMjc0MyAxMC4yNjYyNSwzOC41NTg5bC0xMC4xMzg1OSwzNi4xOTM5MWMtMC4zMjk2MSwxLjE3ODYyIC0wLjAwODI4LDIuNDQzNjEgMC44NDM4NywzLjMyMjA0YzAuODUyMTUsMC44Nzg0MyAyLjEwNjgsMS4yMzgwMyAzLjI5NDg4LDAuOTQ0MzZsMzcuNzM5MjIsLTkuMzUyNWMxMS4wODk1LDUuOTIwMTYgMjMuNjcyODksOS40NTMyOCAzNy4xMTQzNyw5LjQ1MzI4YzQzLjY1NTIsMCA3OS4xMiwtMzUuNDY0OCA3OS4xMiwtNzkuMTJjMCwtNDMuNjU1MiAtMzUuNDY0OCwtNzkuMTIgLTc5LjEyLC03OS4xMnpNODYsMTMuNzZjMzkuOTM2OCwwIDcyLjI0LDMyLjMwMzIgNzIuMjQsNzIuMjRjMCwzOS45MzY4IC0zMi4zMDMyLDcyLjI0IC03Mi4yNCw3Mi4yNGMtMTIuODAzNTksMCAtMjQuNzk1MSwtMy4zMzgwNiAtMzUuMjE5NjksLTkuMTcxMWMtMC43NjI0NCwtMC40MjYwMyAtMS42NTgzNywtMC41NDYxMyAtMi41MDYxLC0wLjMzNTk0bC0zMy4wNDk1Myw4LjE5MDE2bDguODYyMDMsLTMxLjYxODQ0YzAuMjU2MjQsLTAuOTAyOTIgMC4xMzI0NiwtMS44NzEzNCAtMC4zNDI2NiwtMi42ODA3OGMtNi4zMzUzLC0xMC43NDI3NSAtOS45ODQwNiwtMjMuMjQxOTQgLTkuOTg0MDYsLTM2LjYyMzljMCwtMzkuOTM2OCAzMi4zMDMyLC03Mi4yNCA3Mi4yNCwtNzIuMjR6TTU3LjI1MDQ3LDQ0LjcyYy0yLjIwNTE3LDAgLTUuMzU0NDcsMC44MjA0MSAtNy45NDE1NiwzLjYwNzk3Yy0xLjU1MzksMS42NzQzMiAtOC4wMjg5LDcuOTgzMTUgLTguMDI4OSwxOS4wNzQ1M2MwLDExLjU2MzYzIDguMDE5OTksMjEuNTQxNjIgOC45ODk2OSwyMi44MjM2aDAuMDA2NzJ2MC4wMDY3MmMtMC4wOTE5OSwtMC4xMjA4OCAxLjIzMDgyLDEuNzk0NzIgMi45OTY1Niw0LjA5MTcyYzEuNzY1NzUsMi4yOTY5OSA0LjIzNDksNS4zMTM4MyA3LjMzNjg4LDguNTc5ODRjNi4yMDM5NCw2LjUzMjAzIDE0LjkyNjY1LDE0LjA4MTE1IDI1Ljc1Mjk3LDE4LjY5ODI4YzQuOTg1NjYsMi4xMjMwNiA4LjkxODkyLDMuNDA0OTQgMTEuODk4OSw0LjM0MDMxYzUuNTIyNTUsMS43MzQxIDEwLjU1MjYxLDEuNDcwNSAxNC4zMzExLDAuOTEzNzVjMi44MjgyMywtMC40MTY1IDUuOTM4ODUsLTEuNzc0NDkgOS4wMTY1NiwtMy43MjIxOWMzLjA3NzcyLC0xLjk0NzcgNi4wOTQwNiwtNC4zNjk0OSA3LjQyNDIyLC04LjA0OTA2YzAuOTUyOSwtMi42Mzc5MSAxLjQzNzMyLC01LjA3NTY1IDEuNjEyNSwtNy4wODE1NmMwLjA4NzU4LC0xLjAwMjk2IDAuMDk4NzEsLTEuODg4MTUgMC4wMzM1OSwtMi43MDc2NWMtMC4wNjUyNiwtMC44MTk1IDAuMDA0NDcsLTEuNDQ3MjUgLTAuNzU5MjIsLTIuNzAwOTRjLTEuNjAxNTYsLTIuNjI5NTkgLTMuNDE1MzIsLTIuNjk4MjIgLTUuMzA3ODEsLTMuNjM0ODVjLTEuMDUxNSwtMC41MjA0MSAtNC4wNDUyNiwtMS45ODIzIC03LjA0Nzk3LC0zLjQxMzEyYy0yLjk5OTMzLC0xLjQyOTIyIC01LjU5NjQsLTIuNjk1MDMgLTcuMTk1NzgsLTMuMjY1MzFjLTEuMDEwNDgsLTAuMzYzNTUgLTIuMjQ0MzUsLTAuODg2OSAtNC4wMjQ1MywtMC42ODUzMWMtMS43ODAxOCwwLjIwMTU4IC0zLjUzODM5LDEuNDg2MDEgLTQuNTYyMDMsMy4wMDMyOGMtMC45NzAyNywxLjQzODE2IC00Ljg3NjIxLDYuMDQ4NzIgLTYuMDY3MDMsNy40MDQwNmMtMC4wMTU4MiwtMC4wMDk2MyAwLjA4NzUxLDAuMDM3OTcgLTAuMzgyOTcsLTAuMTk0ODVjLTEuNDcyNzcsLTAuNzI4ODkgLTMuMjczOTYsLTEuMzQ4NjYgLTUuOTM5MzgsLTIuNzU0NjljLTIuNjY1NDEsLTEuNDA2MDMgLTUuOTk5NjEsLTMuNDgyMjcgLTkuNjQ4MTIsLTYuNjk4NnYtMC4wMDY3MmMtNS40MzA0MywtNC43ODA3NSAtOS4yMzQyMywtMTAuNzgzMDEgLTEwLjQzNDIyLC0xMi43OTkyMmMwLjA4MDg0LC0wLjA5NjE4IC0wLjAwOTYxLDAuMDIwMyAwLjE2MTI1LC0wLjE0NzgxbDAuMDA2NzIsLTAuMDA2NzJjMS4yMjY0MSwtMS4yMDc5NyAyLjMxMzMxLC0yLjY1MDcyIDMuMjMxNzIsLTMuNzA4NzVjMS4zMDIxNywtMS41MDAxNCAxLjg3NjgzLC0yLjgyMjU4IDIuNDk5MzcsLTQuMDU4MTJjMS4yNDA3MiwtMi40NjI0NCAwLjU0OTg4LC01LjE3MjEyIC0wLjE2Nzk3LC02LjU5Nzgxdi0wLjAwNjcyYzAuMDQ5NTcsMC4wOTg2MiAtMC4zODgzMSwtMC44Njc1MiAtMC44NiwtMS45ODIwM2MtMC40NzMwMywtMS4xMTc2OSAtMS4wNzYsLTIuNTY2NyAtMS43MiwtNC4xMTE4OGMtMS4yODgsLTMuMDkwMzUgLTIuNzI1OTUsLTYuNTU2NDYgLTMuNTgxMDksLTguNTg2NTZ2LTAuMDA2NzJjLTEuMDA3MzksLTIuMzkxMjQgLTIuMzcwMzEsLTQuMTEzOTEgLTQuMTUyMTksLTQuOTQ1Yy0xLjc4MTg4LC0wLjgzMTA5IC0zLjM1NjE2LC0wLjU5NDgxIC0zLjQxOTg0LC0wLjU5Nzk3aC0wLjAwNjcyYy0xLjI3MTU4LC0wLjA1ODY2IC0yLjY2Njk0LC0wLjA3MzkgLTQuMDUxNCwtMC4wNzM5ek01Ny4yNTA0Nyw1MS42YzEuMzI2MjYsMCAyLjYzMzc5LDAuMDE2MTcgMy43Mjg5LDAuMDY3MTljMS4xMjY1OCwwLjA1NjE0IDEuMDU2NTEsMC4wNjA3NSAwLjgzOTg1LC0wLjA0MDMxYy0wLjIyMDEzLC0wLjEwMjY1IDAuMDc4NTQsLTAuMTM1OTggMC43MTg5MSwxLjM4NDA2YzAuODM3MzMsMS45ODc4MiAyLjI4MjM4LDUuNDY2NDggMy41NzQzNyw4LjU2NjQxYzAuNjQ2LDEuNTQ5OTYgMS4yNTA1OCwzLjAwNDU4IDEuNzMzNDQsNC4xNDU0N2MwLjQ4Mjg2LDEuMTQwODkgMC43NDQ0OSwxLjc3Nzg4IDEuMDQ4MTMsMi4zODUxNXYwLjAwNjcybDAuMDA2NzIsMC4wMDY3MmMwLjI5NzcsMC41ODczOCAwLjI3MTM3LDAuMjExMzIgMC4xNjc5NywwLjQxNjU2Yy0wLjcyNTk0LDEuNDQwNzcgLTAuODI0NDQsMS43OTQ1MyAtMS41NTg3NSwyLjY0MDQ3Yy0xLjExODA3LDEuMjg4MDUgLTIuMjU4NTIsMi43MjQ0NyAtMi44NjIxOSwzLjMxOTA2Yy0wLjUyODE0LDAuNTE4ODIgLTEuNDgxMDksMS4zMjcwOSAtMi4wNzYxLDIuOTA5MjJjLTAuNTk1OTIsMS41ODQ1NSAtMC4zMTc3OSwzLjc1ODYgMC42MzgyOCw1LjM4MTcyYzEuMjcyOTEsMi4xNjA5OSA1LjQ2NzU2LDguOTg4MzggMTEuOTg2MjUsMTQuNzI3NWM0LjEwNTI0LDMuNjE4OTYgNy45Mjk4NSw2LjAxNDA3IDEwLjk4NTE1LDcuNjI1NzhjMy4wNTUzMSwxLjYxMTcxIDUuNTQzNzksMi41NTMwMSA2LjEwMDYzLDIuODI4NmMxLjMyMjI2LDAuNjU0NCAyLjc2NzQyLDEuMTYyNTUgNC40NDc4MSwwLjk2MDc4YzEuNjgwMzksLTAuMjAxNzYgMy4xMjkxNiwtMS4yMjEzMyA0LjA1MTQsLTIuMjY0MjJsMC4wMDY3MiwtMC4wMDY3MmMxLjIyNzQsLTEuMzkxNTIgNC44NzQ1NSwtNS41NTYwNSA2LjYyNDY5LC04LjEyMjk3YzAuMDc0MTcsMC4wMjYxNCAwLjA0OTg4LDAuMDA1ODUgMC42MzE1NiwwLjIxNXYwLjAwNjcyaDAuMDA2NzJjMC4yNjU1NywwLjA5NDU3IDMuNTkxODEsMS41ODMzNyA2LjU1NzUsMi45OTY1NmMyLjk2NTY5LDEuNDEzMTkgNS45NzU4MSwyLjg4MjAyIDYuOTUzOTEsMy4zNjYxYzEuNDExNTUsMC42OTg2IDIuMDc4NTIsMS4xNTMzOSAyLjI1MDc4LDEuMTU1NjJjMC4wMTE2NCwwLjMwMjY3IDAuMDIzNDEsMC42MzA2NSAtMC4wMjAxNiwxLjEyODc1Yy0wLjEyMDY0LDEuMzgxNjMgLTAuNDg5OTUsMy4yOTQwNCAtMS4yMjk1Myw1LjM0MTQxYy0wLjM2MjMxLDEuMDAyMjYgLTIuMjQ5MzcsMy4wNjk0MSAtNC42MjkyMiw0LjU3NTQ3Yy0yLjM3OTg0LDEuNTA2MDYgLTUuMjc2NSwyLjU2OTgzIC02LjM0OTIyLDIuNzI3ODFjLTMuMjI1MzYsMC40NzUyNSAtNy4wNTQ4NSwwLjY0ODc1IC0xMS4yNjA2MywtMC42NzE4OGMtMi45MTYxOCwtMC45MTUzNSAtNi41NTIzNiwtMi4xMDAyMiAtMTEuMjYwNjIsLTQuMTA1MTVjLTkuNTQ4OCwtNC4wNzIzMSAtMTcuNjY0NTIsLTExLjAwMTk5IC0yMy40NjE4OCwtMTcuMTA1OTRjLTIuODk4NjcsLTMuMDUxOTcgLTUuMjIxMDYsLTUuODkzMDMgLTYuODczMjgsLTguMDQyMzRjLTEuNjQ5MTQsLTIuMTQ1MyAtMi4zNjkyNiwtMy4yNjE2OSAtMi45Njk2OSwtNC4wNTE0MWwtMC4wMDY3MiwtMC4wMDY3MmMtMS4wNjU4MSwtMS40MDk0NiAtNy41OTIxOSwtMTAuNDg3NDYgLTcuNTkyMTksLTE4LjY2NDY5YzAsLTguNjU0MjIgNC4wMTk2MywtMTIuMDQ3OTYgNi4xOTQ2OSwtMTQuMzkxNTZjMS4xNDE4NywtMS4yMzAzNSAyLjM5MDI0LC0xLjQxMDk0IDIuODk1NzgsLTEuNDEwOTR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
    description: "+62-857-2095-9031",
    url: "https://wa.me/6285720959031",
  },
  {
    label: "Telegram",
    icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMGY2ZmYiPjxwYXRoIGQ9Ik0xNTIuNjU2NzIsMjAuNTkyOTdjLTEuNjc1NDUsMC4wNzM1IC0zLjMwNjMxLDAuNTM5ODEgLTQuNzc3MDMsMS4xMjg3NWMtMS40NTU3LDAuNTg1IC05LjgzNjMzLDQuMTYyMDEgLTIyLjIxMjE5LDkuNDUzMjhjLTEyLjM3NTg2LDUuMjkxMjcgLTI4LjQ2MzU1LDEyLjE4MTYyIC00NC40MTA5NCwxOS4wMTQwNmMtMzEuODk0NzgsMTMuNjY0ODkgLTYzLjIzNjg4LDI3LjExMDE1IC02My4yMzY4OCwyNy4xMTAxNWwwLjIyODQ0LC0wLjA4NzM1YzAsMCAtMS44OTE2NiwwLjYzMjMxIC0zLjgwOTUzLDEuOTY4NmMtMC45NTg5NCwwLjY2ODE0IC0xLjk5MDYsMS41MzA3MiAtMi44MzUzMSwyLjc4ODI4Yy0wLjg0NDcxLDEuMjU3NTYgLTEuNDYyMjUsMy4wMzk4IC0xLjIyOTUzLDQuOTI0ODVjMC44MTc0Miw2LjYyMTEyIDcuNjc5NTMsOC40OTkyMiA3LjY3OTUzLDguNDk5MjJsMC4wMjY4OCwwLjAxMzQ0bDMwLjYyNDA2LDEwLjQ4MTI1YzAuNzgwNzksMi42MDQ3MSA5LjI4ODQsMzEuMDAwMTYgMTEuMTU5ODUsMzcuMDEzNmMxLjAzMzU2LDMuMzI0NjUgMi4wMDA5NCw1LjI0MjQ5IDMuMDEsNi41NTA3OGMwLjUwNDk1LDAuNjU0NyAxLjAzNDEzLDEuMTYxMzUgMS42MTkyMiwxLjUzMTg4YzAuMjMyNDgsMC4xNDcyIDAuNDc2OTcsMC4yNTc2NiAwLjcxODksMC4zNTYxYzAuMDA1MTYsMC4wMDIyOSAwLjAwODI4LC0wLjAwMjI3IDAuMDEzNDQsMGMwLjAyOTczLDAuMDEzMTEgMC4wNTc2OSwwLjAxNDI5IDAuMDg3MzQsMC4wMjY4N2wtMC4wODA2MiwtMC4wMjAxNWMwLjA1NjIxLDAuMDIyNyAwLjExMTY5LDAuMDYwOTEgMC4xNjc5NywwLjA4MDYyYzAuMTA5MTgsMC4wMzgyNyAwLjE3NjA4LDAuMDM2OTQgMC4zMTU3OCwwLjA2NzE5YzMuNTA3MjMsMS4yMjQ1NyA2LjQwOTY5LC0xLjA0ODEyIDYuNDA5NjksLTEuMDQ4MTJsMC4xMjA5NCwtMC4wOTQwNmwxOC44MTI1LC0xNy40NDg1OWwzMC41MywyMy44MDQ1M2wwLjM4Mjk3LDAuMTc0NjljNS4zNDM4OCwyLjM3MjczIDEwLjE3NjYxLDEuMDQ4OTcgMTIuODUyOTcsLTEuMTI4NzVjMi42NzYzNiwtMi4xNzc3MyAzLjcyODkxLC00Ljk4NTMxIDMuNzI4OTEsLTQuOTg1MzFsMC4xMTQyMiwtMC4yOTU2MmwyMi40MzM5LC0xMTYuOTI2NDFjMC41NzQwNCwtMi42MTU5IDAuNjU1NiwtNC44NzcwNiAwLjExNDIyLC02LjkyMDMxYy0wLjU0MTM4LC0yLjA0MzI1IC0xLjg1NjcxLC0zLjgxOTQzIC0zLjUwNzE5LC00LjgwMzkxYy0xLjY1MDQ3LC0wLjk4NDQ4IC0zLjM3NzA1LC0xLjMwMzA0IC01LjA1MjUsLTEuMjI5NTN6TTE1Mi44MzgxMywyNy41ODcxOWMwLjY4MDQ0LC0wLjAzMTUxIDEuMTg0NzgsMC4wNDYyNyAxLjM0Mzc1LDAuMTQxMDljMC4xNTg5NywwLjA5NDgyIDAuMjMwMzQsMC4wODIzNCAwLjM4Mjk3LDAuNjU4NDRjMC4xNTI2MywwLjU3NjEgMC4yMzUyOCwxLjc4OTUxIC0wLjE4MTQxLDMuNjg4NTlsLTAuMDEzNDQsMC4wNDAzMWwtMjIuMzA2MjUsMTE2LjI0NzgxYy0wLjA1MjgsMC4xMTcwMyAtMC41MTc2MywxLjE5MjM5IC0xLjU3ODksMi4wNTU5NGMtMS4wODI2NiwwLjg4MDk1IC0yLjI4NjgsMS41Njg2MSAtNS40ODI1LDAuMjI4NDRsLTMzLjM4NTQ3LC0yNi4wMzUxNmwtMC45NDA2MiwtMC43MzkwNmwtMC4wMjAxNSwwLjAyMDE1bC05Ljk4NDA2LC03LjQ5MTRsNTYuMTA4MjgsLTY2LjAxMTcyYzAuODgwNzUsLTEuMDMzNTQgMS4wNzExNywtMi40ODg0NSAwLjQ4NjA2LC0zLjcxMzg0Yy0wLjU4NTExLC0xLjIyNTM5IC0xLjgzNjI2LC0xLjk5MTk3IC0zLjE5MzcyLC0xLjk1Njc5Yy0wLjY0OTMsMC4wMTY4NyAtMS4yODA1NywwLjIxNzE5IC0xLjgyMDc4LDAuNTc3ODFsLTgxLjE4OTM3LDU0LjEyNjI1bC0zMC42NzEwOSwtMTAuNTAxNDFjMCwwIC0zLjA0NTYzLC0xLjY5NDgzIC0zLjE5MTQxLC0yLjg3NTYyYy0wLjAwODA4LC0wLjA2NTQzIC0wLjA0NDA1LC0wLjAwNjIgMC4xMTQyMiwtMC4yNDE4OGMwLjE1ODI2LC0wLjIzNTYxIDAuNTU2MDgsLTAuNjMzNDIgMS4wNTQ4NCwtMC45ODA5NGMwLjk5NzUyLC0wLjY5NTAzIDIuMTM2NTYsLTEuMTE1MzEgMi4xMzY1NiwtMS4xMTUzMWwwLjExNDIyLC0wLjA0MDMxbDAuMTE0MjIsLTAuMDQ3MDNjMCwwIDMxLjM0MzczLC0xMy40NDU5NyA2My4yMzY4NywtMjcuMTEwMTZjMTUuOTQ2NTcsLTYuODMyMDkgMzIuMDMxNDMsLTEzLjcxNzM5IDQ0LjQwNDIyLC0xOS4wMDczNGMxMi4zNjk2MSwtNS4yODg2IDIxLjMwNzU3LC05LjA5NTI5IDIyLjA2NDM4LC05LjM5OTUzYzAuODYxNiwtMC4zNDUwMiAxLjcxODE1LC0wLjQ4NTgzIDIuMzk4NiwtMC41MTczNHpNMTE1LjYyOTY5LDY0LjY0NzgxbC00Mi41NDk4NCw1MC4wNjE0bC0wLjAyMDE2LDAuMDIwMTVjLTAuMDY2NDMsMC4wNzk5OCAtMC4xMjkyLDAuMTYyOTMgLTAuMTg4MTIsMC4yNDg2Yy0wLjA2NzUsMC4wOTMxIC0wLjEzMDI5LDAuMTg5NTIgLTAuMTg4MTMsMC4yODg5Yy0wLjIzOTA2LDAuNDA1NzQgLTAuMzkyMjcsMC44NTYyNCAtMC40NTAxNSwxLjMyMzZjLTAuMDAwMDMsMC4wMDg5NiAtMC4wMDAwMywwLjAxNzkyIDAsMC4wMjY4OGwtNS41NDI5NywyNC45MjY1NmMtMC4wOTIxNSwtMC4yNjkzMSAtMC4xNTY2OCwtMC4zNjc4NCAtMC4yNTUzMSwtMC42ODUzMXYtMC4wMDY3MmMtMS43NjA1NSwtNS42NTY5NSAtOS43ODcyNywtMzIuNDM2NDkgLTEwLjg5NzgxLC0zNi4xNDAxNXpNNzcuODgzNzUsMTIyLjkxMjgxbDcuNjQ1OTQsNS43Mzc4MWwtMTEuMjMzNzUsMTAuNDE0MDZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
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
    username: "@deri561",
    icon: "https://img.icons8.com/color/344/instagram-new--v1.png",
    url: "https://www.instagram.com/deri561/",
  },
  {
    label: "Twitter",
    username: "@derii561",
    icon: "https://img.icons8.com/color/344/twitter--v1.png",
    url: "https://twitter.com/derii561",
  },
  {
    label: "LinkedIn",
    username: "deri-kurniawan",
    icon: "https://img.icons8.com/fluency/344/linkedin.png",
    url: "https://www.linkedin.com/in/deri-kurniawan/",
  },
  {
    label: "Github",
    username: "deri-kurniawan",
    icon: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04NiwxNy4yYy0zNy45OTQ4LDAgLTY4LjgsMzAuODA1MiAtNjguOCw2OC44YzAsMzIuMjM4NTMgMjIuMTk5NDcsNTkuMjEzODcgNTIuMTI3NDcsNjYuNjc4NjdjLTAuMzIxMDcsLTAuOTI4OCAtMC41Mjc0NywtMi4wMDY2NyAtMC41Mjc0NywtMy4zNDI1M3YtMTEuNzU5MDdjLTIuNzkyMTMsMCAtNy40NzA1MywwIC04LjY0NTg3LDBjLTQuNzA3MDcsMCAtOC44OTI0LC0yLjAyMzg3IC0xMC45MjIsLTUuNzg0OTNjLTIuMjUzMiwtNC4xNzk2IC0yLjY0MzA3LC0xMC41NzIyNyAtOC4yMjczMywtMTQuNDgyNGMtMS42NTY5MywtMS4zMDE0NyAtMC4zOTU2LC0yLjc4NjQgMS41MTM2LC0yLjU4NTczYzMuNTI2LDAuOTk3NiA2LjQ1LDMuNDE3MDcgOS4yMDIsNy4wMDYxM2MyLjc0MDUzLDMuNTk0OCA0LjAzMDUzLDQuNDA4OTMgOS4xNTA0LDQuNDA4OTNjMi40ODI1MywwIDYuMTk3NzMsLTAuMTQzMzMgOS42OTUwNywtMC42OTM3M2MxLjg4MDUzLC00Ljc3NTg3IDUuMTMxMzMsLTkuMTczMzMgOS4xMDQ1MywtMTEuMjQ4OGMtMjIuOTEwNCwtMi4zNTY0IC0zMy44NDM4NywtMTMuNzU0MjcgLTMzLjg0Mzg3LC0yOS4yMjg1M2MwLC02LjY2MjEzIDIuODM4LC0xMy4xMDY0IDcuNjU5NzMsLTE4LjUzNTg3Yy0xLjU4MjQsLTUuMzg5MzMgLTMuNTcxODcsLTE2LjM4MDEzIDAuNjA3NzMsLTIwLjU2NTQ3YzEwLjMwODUzLDAgMTYuNTQwNjcsNi42ODUwNyAxOC4wMzcwNyw4LjQ5MTA3YzUuMTM3MDcsLTEuNzYwMTMgMTAuNzc4NjcsLTIuNzU3NzMgMTYuNzA2OTMsLTIuNzU3NzNjNS45Mzk3MywwIDExLjYwNDI3LDAuOTk3NiAxNi43NTI4LDIuNzY5MmMxLjQ3OTIsLTEuNzk0NTMgNy43MTcwNywtOC41MDI1MyAxOC4wNDg1MywtOC41MDI1M2M0LjE5NjgsNC4xOTEwNyAyLjE4NDQsMTUuMjI3NzMgMC41ODQ4LDIwLjYwNTZjNC43OTMwNyw1LjQxOCA3LjYxMzg3LDExLjg0NTA3IDcuNjEzODcsMTguNDk1NzNjMCwxNS40NjI4IC0xMC45MTYyNywyNi44NTQ5MyAtMzMuNzkyMjcsMjkuMjIyOGM2LjI5NTIsMy4yODUyIDEwLjg4NzYsMTIuNTE1ODcgMTAuODg3NiwxOS40NzA0djE1LjY3NDkzYzAsMC41OTYyNyAtMC4xMzE4NywxLjAyNjI3IC0wLjIwMDY3LDEuNTM2NTNjMjYuODA5MDcsLTkuMzk2OTMgNDYuMDY3MzMsLTM0Ljg1MjkzIDQ2LjA2NzMzLC02NC44NzI2N2MwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+",
    url: "https://github.com/deri-kurniawan/",
  },
  {
    label: "Credits",
    icon: "https://img.icons8.com/color/344/document--v2.png",
    url: "https://github.com/Deri-Kurniawan/portfolio/blob/master/CREDITS.md",
  },
];
