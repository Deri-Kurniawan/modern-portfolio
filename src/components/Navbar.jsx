import React, { useEffect, useState } from "react";
import { brand, close, hamburger } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sectionIsInViewId, setSectionIsInViewId] = useState("home");

  useEffect(() => {
    // Scroll Spy
    const sections = document.querySelectorAll("section");
    const handleScrollSpy = (e, sections) => {
      sections.forEach((section) => {
        const offsetY = 200;
        const sectionTop = section.offsetTop - offsetY;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight - offsetY;
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
    <nav className="px-[30px] ss:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[106px]">
      <div className="h-[74px] flex flex-row justify-between items-center">
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
        >
          <h1 aria-label="Deri Kurniawan Brand Logo">
            <img
              className="w-[48px] h-[48px] lg:w-[74px] lg:h-[74px] z-[0] object-contain"
              src={brand}
              alt="brand_logo"
            />
          </h1>
        </button>
        <ul className="hidden sm:flex flex-row justify-end items-center list-none">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`${
                nav.id === sectionIsInViewId
                  ? "text-secondary"
                  : "hover:text-secondary"
              } transition-all ease-linear duration-200 ml-[60px] sm:ml-[50px]`}
            >
              <a href={nav.url}>{nav.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="sm:hidden block"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <img
              className="w-[25px] h-[25px] object-contain"
              src={close}
              alt="close_menu"
            />
          ) : (
            <img
              className="w-[40px] h-[18px] object-contain"
              src={hamburger}
              alt="toggle_button"
            />
          )}
        </button>

        <div
          className={`${
            isOpen ? "flex justify-center items-center" : "hidden"
          } absolute sm:hidden py-4 bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col justify-center items-center list-none">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`${
                  nav.id === sectionIsInViewId
                    ? "text-secondary"
                    : "hover:text-secondary"
                } ${
                  navLinks.length - 1 !== index && "pb-4"
                } transition-all ease-linear duration-200`}
              >
                <a href={nav.url}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
