import Image from "next/image";
import { useEffect, useState } from "react";
import { brand, close, hamburger } from "../assets";

const Navbar = ({ data }: { data: NavLinksProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sectionIsInViewId, setSectionIsInViewId] = useState("home");

  useEffect(() => {
    // Scroll Spy
    const handleScrollSpy = (sections: any) => {
      sections.forEach((section: any) => {
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

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => handleScrollSpy(sections));

    return () =>
      window.removeEventListener("scroll", () => handleScrollSpy(sections));
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
            <Image
              className="w-[48px] h-[48px] lg:w-[74px] lg:h-[74px] z-[0] object-contain"
              src={brand}
              alt="brand_logo"
              width={74}
              height={74}
              priority={true}
            />
          </h1>
        </button>
        <ul className="flex-row items-center justify-end hidden list-none sm:flex">
          {data.map((nav, index: any) => (
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
          className="block sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <Image
              className="object-contain"
              src={close}
              alt="close_menu"
              width={25}
              height={25}
            />
          ) : (
            <Image
              className="object-contain"
              src={hamburger}
              alt="toggle_button"
              width={40}
              height={18}
            />
          )}
        </button>

        <div
          className={`${
            isOpen ? "flex justify-center items-center" : "hidden"
          } absolute sm:hidden py-4 bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col items-center justify-center list-none">
            {data.map((nav, index) => (
              <li
                key={index}
                className={`${
                  nav.id === sectionIsInViewId
                    ? "text-secondary"
                    : "hover:text-secondary"
                } ${
                  data.length - 1 !== index && "pb-4"
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
