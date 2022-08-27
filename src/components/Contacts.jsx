import React from "react";
import { contacts } from "../constants";
import Button from "./Button";

const Contacts = () => (
  <section id="contacts" className="py-[140px]">
    <div className="flex flex-row">
      <div className="flex flex-1 flex-col">
        <div className="pr-12">
          {contacts.map(({ label, icon, description }, index) => (
            <div
              key={index}
              className="flex flex-row items-center hover:bg-gradient p-5 hover-gradient-card rounded-[20px]"
            >
              <div className="mr-[20px]">
                <div className="flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue">
                  <img
                    className="w-[42px] h-[42px]"
                    src={icon}
                    alt={`${label}_icon`}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end font-poppins">
                <h4 className="text-white">{label}</h4>
                <p className="text-dimWhite mt-2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins font-semibold text-[48px] text-white">
          Contact Us
        </h2>
        <p className="font-poppins text-dimWhite mt-6">
          While we're good with smoke signals, there are simpler ways for us to
          get in touch and answer your question.
        </p>
      </div>
    </div>
  </section>
);

export default Contacts;
