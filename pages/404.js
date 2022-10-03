import Image from "next/image";
import React from "react";
import { blurGradientEllipse, normalGradientEllipse } from "../assets";
import Button from "../components/Button";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative text-white bg-primary font-poppins w-screen h-screen overflow-x-hidden">
      <div className="flex flex-col items-center my-[15vh] lg:my-0 lg:h-full lg:w-full z-50">
        <div className="relative flex flex-row justify-center items-center">
          <h1 className="text-[180px] lg:text-[256px] font-extrabold m-auto -translate-x-14 lg:-translate-x-16 z-30">
            4
          </h1>
          <div className="absolute z-20 w-[148px] h-[148px] lg:w-[206px] lg:h-[206px]">
            <Image
              src={normalGradientEllipse}
              alt="0"
              width="206"
              height="206"
            />
          </div>
          <h1 className="text-[180px] lg:text-[256px] font-extrabold m-auto translate-x-14 lg:translate-x-16 z-10">
            4
          </h1>
        </div>
        <h1 className="text-[43px] lg:text-[56px] text-gradient font-bold -translate-y-16 z-50">
          Page Not Found
        </h1>
        <p className="text-[18px] lg:text-[23px] text-center -translate-y-12 z-50">
          Sorry! the page doesn&apos;t exist or has been
          <br />
          temporarily moved or deleted
        </p>
        <div className="-translate-y-12 z-50">
          <Button
            showIcon={false}
            title="Go Back Home"
            clickHandle={() => router.push("/")}
          />
        </div>
      </div>

      <div className="absolute left-[300px] lg:left-[432px] top-[97px] animate-pulse fof__particle1">
        <Image src={blurGradientEllipse} alt="" width="44px" height="44px" />
      </div>
      <div className="absolute left-[20px] lg:left-[1034px] top-[400px] lg:top-[306px] fof__particle2">
        <Image src={normalGradientEllipse} alt="" width="78px" height="78px" />
      </div>
      <div className="absolute left-[326px] top-[450px] lg:top-[506px] animate-pulse fof__particle3">
        <Image src={normalGradientEllipse} alt="" width="44px" height="44px" />
      </div>
      <div className="absolute left-[850px] top-[550px] fof__particle4">
        <Image src={blurGradientEllipse} alt="" width="56px" height="56px" />
      </div>

      <div className="fixed w-[422px] h-[422px] left-[1068px] -top-[195px] bg-[#d9d9d9] blur-[250px]" />
      <div className="fixed w-[533px] h-[533px] -left-[93.05px] top-[376px] bg-gradient-to-l from-[#00D9F5] to-[#fff] blur-[400px] rotate-[15deg]" />
    </div>
  );
}
