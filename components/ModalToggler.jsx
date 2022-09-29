import Image from "next/image";
import React from "react";
import { arrowRight } from "../assets";

const ModalToggler = ({ id, title = "Show More" }) => {
  return (
    <label
      htmlFor={id}
      className="relative flex justify-center mt-[30px] text-black h-[54px] w-[190px] lg:h-[64px] lg:w-[200px] bg-blue-gradient font-medium text-[15px] lg:text-[18px] rounded-[10px] hover:cursor-pointer"
    >
      <div className="flex flex-row justify-center items-center">
        <span>{title}</span>
        <Image
          className="object-contain"
          src={arrowRight}
          alt="arrow_right"
          width={24}
          height={24}
        />
      </div>
    </label>
  );
};

export default ModalToggler;
