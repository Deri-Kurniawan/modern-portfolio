import React from "react";
import { person } from "../assets";

const Hero = () => (
  <section id="home" className="py-[140px]">
    <div className="flex flex-row justify-between items-center">
      <h1 className="font-poppins font-semibold text-[62px] text-white">
        I’m <span className="text-gradient">Deri Kurniawan</span>
        <br />
        A Passionate
        <br />
        <span className="text-gradient">Full Stack Developer</span>
      </h1>
      <img className="z-[1]" src={person} alt="person_hero" />
    </div>
  </section>
);

export default Hero;
