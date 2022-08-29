import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section id="stats" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-row flex-wrap justify-between items-start lg:items-center">
      {stats.map(({ label, value }, index) => (
        <div
          key={index}
          className="flex flex-1 flex-row flex-wrap justify-start lg:justify-center items-center"
        >
          <div className="flex flex-row justify-between lg:items-center">
            <h4 className="font-semibold text-[20px] lg:text-[40px]">
              {value}
            </h4>
            <p className="font-normal text-[15px] lg:text-[20px] text-gradient mx-[25px] lg:mx-[50px] uppercase">
              {label}
            </p>
          </div>
          {index !== stats.length - 1 && (
            <div className="text-dimWhite hidden lg:block">|</div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
