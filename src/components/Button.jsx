import React from "react";
import { arrowRight } from "../assets";

const Button = ({
  title = "",
  showIcon = true,
  style = "mt-[30px]",
  clickHandle = () => null,
}) => (
  <button
    className={`relative ${style} text-black h-[64px] w-[180px] bg-blue-gradient font-medium text-[16px] rounded-[10px]`}
    type="button"
    onClick={clickHandle}
  >
    <div className="flex flex-row justify-center items-center">
      <span>{title}</span>
      {showIcon == true && (
        <img className="w-[24px] h-[24px]" src={arrowRight} alt="arrow_right" />
      )}
    </div>
  </button>
);

export default Button;
