import React from "react";
import { abilities } from "../constants";
import ModalBox from "./ModalBox";
import ModalToggler from "./ModalToggler";

const Ability = () => (
  <section id="ability" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1 flex-col">
        <h2 className="font-semibold text-[28px] lg:text-[48px]">
          The Abilities I have and The Most Often Tools I Use
        </h2>
        <p className="text-[18px] text-dimWhite mt-6">
          With my abilities that I have. I believe that I can give my best for
          what I can do
        </p>
        <div className="hidden lg:block">
          <ModalToggler id="abilitiesModal" title="Show More" />
        </div>
      </div>
      <div className="flex flex-1 flex-col pt-[30px] lg:pt-0 lg:pl-[60px]">
        <div>
          {abilities.slice(0, 3).map(({ name, icon, description }, index) => (
            <div
              key={index}
              className="flex flex-row items-center hover:bg-gradient p-5 hover-gradient-card rounded-[20px]"
            >
              <div className="mr-[20px]">
                <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                  <img
                    className="w-[42px] h-[42px] object-contain"
                    src={icon}
                    alt={`${name}_icon`}
                    width="42px"
                    height="42px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-[15px] lg:text-[18px]">{name}</h3>
                <p className="text-[13px] lg:text-[16px] text-dimWhite mt-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
          <div className="block lg:hidden">
            <ModalToggler id="abilitiesModal" title="Show More" />
          </div>
        </div>
      </div>
    </div>

    {/* Modal */}
    <ModalBox
      id="abilitiesModal"
      width="w-11/12"
      styles="overflow-x-hidden md:scrollbar"
    >
      <h3 className="text-center text-2xl md:text-4xl font-bold">
        Language & Tools
      </h3>
      <p className="text-center mt-2 ss:mt-3 md:5 lg:mt-6">
        My Abilities Including The Most Often Language and Tools I Use
      </p>
      <div className="mt-4 ss:mt-6 md:8 lg:mt-10 text-center">
        <div className="grid grid-cols-2 ss:grid-cols-3 md:grid-cols-4 grid-flow-row gap-2 md:gap-3 lg:md:gap-4">
          {abilities.map(({ name, icon, description, inverted }, index) => (
            <div
              key={index}
              className="grid col-span-1 hover-gradient-card p-3 md:p-4 lg:p-5 rounded-[20px]"
              title={description}
            >
              <div className="flex flex-col justify-start items-center">
                <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                  <img
                    className={`w-[42px] h-[42px] object-contain ${
                      inverted ? `invert` : "invert-0"
                    } `}
                    src={icon}
                    alt={`${name}_icon`}
                  />
                </div>
                <div className="flex flex-col mt-3">
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalBox>
  </section>
);

export default Ability;
