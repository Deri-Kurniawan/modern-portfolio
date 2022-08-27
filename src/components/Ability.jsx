import React from "react";
import { abilities } from "../constants";
import Button from "./Button";

const Ability = () => (
  <section id="ability" className="py-[140px]">
    <div className="flex flex-row">
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins font-semibold text-[48px] text-white">
          The Abilities I have and The Most Tools I Use
        </h2>
        <p className="font-poppins text-dimWhite mt-6">
          With my abilities that I have, I believe that I can give the best to
          what you need
        </p>
        <Button title="Show More" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="pl-12">
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
              <div className="flex flex-col justify-end font-poppins">
                <h4 className="text-white">{name}</h4>
                <p className="text-dimWhite mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Ability;
