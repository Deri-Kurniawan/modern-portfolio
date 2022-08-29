import React from "react";
import { abilities } from "../constants";
import Button from "./Button";

const Ability = () => (
  <section id="ability" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1 flex-col">
        <h2 className="font-semibold text-[28px] lg:text-[48px]">
          The Abilities I have and The Most Tools I Use
        </h2>
        <p className="text-[18px] text-dimWhite mt-6">
          With my abilities that I have, I believe that I can give the best to
          what you need
        </p>
        <div className="hidden lg:block">
          <Button title="Show More" />
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-[30px] lg:pt-0 lg:pl-[60px]">
        <div>
          {abilities.map(({ name, icon, description }, index) => (
            <div
              key={index}
              className="flex flex-row items-center hover:bg-gradient p-5 hover-gradient-card rounded-[20px]"
            >
              <div className="mr-[20px]">
                <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                  <img
                    className="w-[42px] h-[42px]"
                    src={icon}
                    alt={`${name}_icon`}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <h4 className="text-[15px] lg:text-[18px]">{name}</h4>
                <p className="text-[13px] lg:text-[16px] text-dimWhite mt-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
          <div className="block lg:hidden">
            <Button title="Show More" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Ability;
