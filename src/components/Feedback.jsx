import React from "react";
import { quote } from "../assets";
import { feedbacks } from "../constants";

const Feedback = () => (
  <section id="feedback" className="py-[80px] lg:py-[140px]">
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1">
        <h2 className="font-semibold text-[28px] lg:text-[48px]">
          What People Are Saying About Us
        </h2>
      </div>
      <div className="flex flex-1 lg:items-center pt-[30px] lg:pt-0">
        <p className="text-[18px] text-dimWhite">
          Everything you need to build awesome design, mobile app, and web app,
          Rest API and more. I’ll do my best for it!
        </p>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row mt-[30px] lg:mt-6">
      {feedbacks.map(({ avatar, name, position, review }, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col p-[40px] rounded-[20px] hover-gradient-card"
        >
          <img className="w-[44px] h-[26px]" src={quote} alt="quote_mark" />
          <p className="py-10">{review}</p>
          <div className="flex flex-row justify-start items-center">
            <img
              className="w-[46px] h-[46px]"
              src={avatar}
              alt={`${name}_avatar`}
            />
            <div className="flex flex-col ml-3">
              <h4 className="text-[15px]">{name}</h4>
              <p className="text-dimWhite text-sm">{position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Feedback;
