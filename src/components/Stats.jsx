import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section id="stats" className="py-[140px]">
    <div className="flex flex-row justify-between items-center">
      {stats.map(({ label, value }, index) => (
        <div key={index} className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <h4 className="font-poppins font-semibold text-[40px] text-white">
              {value}
            </h4>
            <p className="font-poppins font-normal text-[20px] text-gradient mx-[50px] uppercase">
              {label}
            </p>
          </div>
          {index !== stats.length - 1 && (
            <div className="text-dimWhite font-poppins">|</div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
