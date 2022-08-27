import React from "react";
import { quote } from "../assets";
import { feedbacks } from "../constants";

const Feedback = () => (
  <section id="feedback" className="py-[140px]">
    <div className="flex flex-row">
      <div className="flex flex-1">
        <h2 className="font-poppins font-semibold text-[48px] text-white">
          What People Are Saying About Us
        </h2>
      </div>
      <div className="flex flex-1 items-center">
        <p className="font-poppins text-dimWhite">
          Everything you need to build awesome design, mobile app, and web app,
          Rest API and more. I’ll do my best for it!
        </p>
      </div>
    </div>
    <div className="flex flex-row mt-6">
      {feedbacks.map(({ avatar, name, position, review }, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col p-[40px] rounded-[20px] hover-gradient-card"
        >
          <img className="w-[44px] h-[26px]" src={quote} alt="quote_mark" />
          <p className="py-10 font-poppins text-white">{review}</p>
          <div className="flex flex-row justify-start items-center">
            <img
              className="w-[46px] h-[46px]"
              src={avatar}
              alt={`${name}_avatar`}
            />
            <div className="flex flex-col ml-3">
              <h4 className="font-poppins text-white">{name}</h4>
              <p className="font-poppins text-dimWhite text-sm">{position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Feedback;
