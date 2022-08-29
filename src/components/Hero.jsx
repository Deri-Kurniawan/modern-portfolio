import React from "react";
import { person } from "../assets";

const Hero = () => (
  <section id="home" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <h1 className="font-semibold text-[32px] lg:text-[62px]">
        I’m <span className="text-gradient">Deri Kurniawan</span>
        <br />
        A Passionate
        <br />
        <span className="text-gradient">Full Stack Developer</span>
      </h1>
      <img
        className="pt-[45px] lg:pt-0 w-[219px] h-[222] lg:w-[421px] lg:h-[426px] z-[1]"
        src={person}
        alt="person_hero"
      />
    </div>
  </section>
);

export default Hero;
