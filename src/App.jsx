import { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Hero,
  Ability,
  Stats,
  Project,
  Education,
  Contacts,
  Footer,
} from "./components";
import Feedback from "./components/Feedback";
import "./lights.css";

const App = () => {
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY === 0) {
        navbarContainerRef.current.classList.remove(
          "navbar-glass",
          "navbar-ease-out"
        );
      }
      if (scrollY > 0) {
        navbarContainerRef.current.classList.add(
          "navbar-glass",
          "navbar-ease-in"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-poppins bg-primary">
      <div ref={navbarContainerRef} className={`sticky top-0 z-50 px-[106px]`}>
        <Navbar />
      </div>
      <div className="px-[106px] xl:max-w-[1280px] xl:m-auto w-full">
        <Hero />
        <Stats />
        <Ability />
        <Project />
        <Education />
        <Feedback />
        <Contacts />
        <Footer />
        <div className="light1" />
        <div className="light2" />
        <div className="light3" />
        <div className="light4" />
      </div>
    </div>
  );
};

export default App;
