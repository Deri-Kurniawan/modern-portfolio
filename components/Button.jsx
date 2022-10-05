import Image from "next/image";
import React from "react";
import { arrowRight } from "../assets";

const Button = ({
  title = "",
  showIcon = true,
  style = "mt-[30px]",
  clickHandle = () => null,
}) => (
  <button
    className={`relative ${style} text-black h-[54px] w-[190px] lg:h-[64px] lg:w-[200px] bg-blue-gradient font-medium text-[15px] lg:text-[18px] rounded-[10px]`}
    type="button"
    onClick={clickHandle}
  >
    <div className="flex flex-row justify-center items-center">
      <span>{title}</span>
      {showIcon == true && (
        <Image
          className="object-contain"
          src={arrowRight}
          alt="arrow_right"
          width={24}
          height={24}
        />
      )}
    </div>
  </button>
);

export default Button;
