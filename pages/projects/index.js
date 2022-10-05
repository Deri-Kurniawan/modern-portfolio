import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { blurGradientEllipse, normalGradientEllipse } from "../../assets";
import Button from "../../components/Button";

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property="og:type" content="projects" />
        <meta property="og:title" content="Deri Kurniawan Projects" />
        <meta
          property="og:description"
          content="About Deri Kurniawan Projects"
        />
        <meta property="og:image" content="/Mockup.png" />
        <meta
          property="og:url"
          content="https://portfolio.deri-kurniawan.vercel.app/projects"
        />
        <meta property="og:site_name" content="Project - Deri Kurniawan" />
        <title>Projects - Deri Kurniawan</title>
      </Head>
      <div className="relative text-white bg-primary font-poppins w-screen h-screen overflow-x-hidden">
        <div className="max-w-[1440px] m-auto w-full z-[1]">
          <div className="relative px-[30px] ss:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[106px]">
            <section
              className="flex flex-col items-center my-[15vh] py-56 lg:my-0 lg:h-full lg:w-full z-50"
              id="welcome"
            >
              <h1 className="text-[43px] lg:text-[56px] text-gradient font-bold z-50">
                Projects Exhibition
              </h1>
              <p className="text-[18px] lg:text-[23px] text-center z-50">
                Let&apos;s see and explore what project which
                <br />
                I&apos;ve built and involved on a project
              </p>
              <div className="z-50">
                <Button
                  showIcon={false}
                  title="Let's Begin"
                  clickHandle={() => router.push("#start")}
                />
              </div>
            </section>

            <section className="py-56" id="start">
              <h1 className="text-[43px] text-center lg:text-[56px] text-gradient font-bold z-50">
                Start Section
              </h1>
              <p className="text-[18px] lg:text-[23px] text-center z-50">
                Start section for testing purpose
                <br />
                Content will be added soon
              </p>
            </section>

            <div className="absolute left-[300px] lg:left-[432px] top-[97px] animate-pulse fof__particle1">
              <Image
                src={blurGradientEllipse}
                alt=""
                width="44px"
                height="44px"
              />
            </div>
            <div className="absolute left-[20px] lg:left-[1034px] top-[400px] lg:top-[306px] fof__particle2">
              <Image
                src={normalGradientEllipse}
                alt=""
                width="78px"
                height="78px"
              />
            </div>
            <div className="absolute left-[326px] top-[450px] lg:top-[506px] animate-pulse fof__particle3">
              <Image
                src={normalGradientEllipse}
                alt=""
                width="44px"
                height="44px"
              />
            </div>
            <div className="absolute left-[850px] top-[550px] fof__particle4">
              <Image
                src={blurGradientEllipse}
                alt=""
                width="56px"
                height="56px"
              />
            </div>
            <div className="fixed w-[422px] h-[422px] left-[1068px] -top-[195px] bg-[#d9d9d9] blur-[250px]" />
            <div className="fixed w-[533px] h-[533px] -left-[93.05px] top-[376px] bg-gradient-to-l from-[#00D9F5] to-[#fff] blur-[400px] rotate-[15deg]" />
          </div>
        </div>
      </div>
    </>
  );
}
