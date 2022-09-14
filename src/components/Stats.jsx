import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section id="stats" className="py-[50px] lg:py-[140px]">
    <div className="flex flex-row flex-wrap justify-between items-center">
      {stats.map(({ label, value }, index) => (
        <div
          key={index}
          className="flex flex-row flex-wrap items-center justify-start sm:justify-center"
        >
          <div className="flex flex-row justify-between items-center">
            <span className="font-semibold text-[20px] ss:text-[25px] lg:text-[40px]">
              {value}
            </span>
            {/* px-[25px] lg:px-[50px] */}
            <h2
              className={`font-normal text-[15px] ss:[17px] lg:text-[20px] text-gradient px-[25px] lg:pl-[50px] ${
                index !== stats.length - 1 && "md:pr-[100px]"
              } uppercase`}
            >
              {label}
            </h2>
            {index !== stats.length - 1 && (
              <div className="text-dimWhite hidden md:block">|</div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
