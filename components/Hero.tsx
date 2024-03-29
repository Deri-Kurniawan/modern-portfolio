import React from "react";
import Image from "next/image";

const Hero = ({ data }: { data: HeroProps }) => (
  <section
    id="home"
    className="pt-[90px] pb-[80px] ss:pt-[100px] ss:pb-[90px] lg:pt-[150px] lg:pb-[140px]"
  >
    <div
      id="particles"
      className="absolute top-0 left-0 w-full h-[800px]"
      data-aos="fade-in"
      data-aos-delay="1000"
    ></div>

    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-1">
        <h1
          className="font-semibold text-[32px] ss:text-[42px] sm:text-[52px] md:text-[57px] lg:text-[62px]"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          I&apos;m <span className="text-gradient">{data?.fullName}</span>
          <br />
          A Passionate
          <br />
          <span className="text-gradient">{data?.jobTitle}</span>
        </h1>
      </div>
      <div className="flex justify-center lg:items-end lg:justify-end">
        <div
          className="pt-[45px] lg:pt-0 w-[219px] h-[222px] ss:w-[271px] ss:h-[276px] sm:w-[379px] sm:h-[382px] lg:w-[421px] lg:h-[426px] z-10"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          <Image
            src={data?.image}
            alt={`${data?.fullName
              ?.replace(" ", "_")
              .toLowerCase()}_hero_image`}
            width={421}
            height={426}
            priority={true}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
