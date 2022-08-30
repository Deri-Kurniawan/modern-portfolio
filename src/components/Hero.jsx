import React from "react";
import { person } from "../assets";

const Hero = () => (
  <section
    id="home"
    className="pt-[90px] pb-[80px] ss:pt-[100px] ss:pb-[90px] lg:pt-[150px] lg:pb-[140px]"
  >
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1">
        <h1 className="font-semibold text-[32px] ss:text-[42px] sm:text-[52px] md:text-[57px] lg:text-[62px]">
          I’m <span className="text-gradient">Deri Kurniawan</span>
          <br />
          A Passionate
          <br />
          <span className="text-gradient">Full Stack Developer</span>
        </h1>
      </div>
      <div className="flex justify-center lg:items-end lg:justify-end">
        <img
          className="pt-[45px] lg:pt-0 w-[219px] h-[222] ss:w-[271px] ss:h-[276px] sm:w-[379px] sm:h-[382px] lg:w-[421px] lg:h-[426px] z-[1] object-contain"
          src={person}
          alt="person_hero"
        />
      </div>
    </div>
  </section>
);

export default Hero;
