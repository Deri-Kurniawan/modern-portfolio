import React, { useEffect, useState } from "react";
import { brand } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [sectionIsInViewId, setSectionIsInViewId] = useState("home");

  useEffect(() => {
    // Scroll Spy
    const sections = document.querySelectorAll("section");
    const handleScrollSpy = (e, sections) => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const isInView = scrollY >= sectionTop && scrollY <= sectionBottom;

        if (isInView) {
          setSectionIsInViewId(section.id);
          section.classList.add("in-view");
        } else {
          section.classList.remove("in-view");
        }
      });
    };

    window.addEventListener("scroll", (e) => handleScrollSpy(e, sections));

    return () =>
      window.removeEventListener("scroll", (e) => handleScrollSpy(e, sections));
  }, []);

  return (
    <nav>
      <div className="flex flex-row justify-between items-center">
        <img className="z-[0]" src={brand} alt="brand_logo" />
        <ul className="flex flex-row justify-end items-center list-none">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`${
                nav.id === sectionIsInViewId
                  ? "text-secondary"
                  : "text-white hover:text-secondary"
              } transition-all ease-linear duration-200 ml-[60px]`}
            >
              <a href={nav.url}>{nav.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
