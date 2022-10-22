import { useEffect, useRef } from "react";
import Head from "next/head";
import {
  Navbar,
  Hero,
  Stats,
  Ability,
  Projects,
  Education,
  Feedback,
  Contacts,
  Footer,
} from "../components";
import dataJSON from "../db/data.json";
import Script from "next/script";

export default function Home() {
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY === 0) {
        navbarContainerRef.current.classList.remove(
          "navbar-glass",
          "navbar-ease-out"
        );
      }
      if (scrollY > 0) {
        navbarContainerRef.current.classList.add(
          "navbar-glass",
          "navbar-ease-in"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:type" content="portfolio" />
        <meta property="og:title" content="Deri Kurniawan Modern Portfolio" />
        <meta
          property="og:description"
          content="About Deri Kurniawan Personality, Skills, Education, Projects and Feedback"
        />
        <meta property="og:image" content="/Mockup.png" />
        <meta
          property="og:url"
          content="https://portfolio.deri-kurniawan.vercel.app"
        />
        <meta property="og:site_name" content="Deri Kurniawan Portfolio" />

        <title>Home - Deri Kurniawan</title>
      </Head>
      <div className="relative overflow-hidden text-white bg-primary font-poppins">
        <div ref={navbarContainerRef} className="fixed top-0 z-50 w-full">
          <div className="max-w-[1440px] m-auto w-full">
            <Navbar data={dataJSON.navLinks} />
          </div>
        </div>
        <div className="max-w-[1440px] m-auto w-full z-[1]">
          <div className="relative px-[30px] ss:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[106px]">
            <Hero data={dataJSON.hero} />
            <Stats data={dataJSON.stats} />
            <Ability data={dataJSON.abilities} />
            <Projects data={dataJSON.projects} />
            <Education data={dataJSON.educations} />
            <Feedback data={dataJSON.feedbacks} />
            <Contacts data={dataJSON.contacts} />
            <Footer
              data={{
                links: dataJSON.footer,
                socialMedia: dataJSON.socialMedia,
              }}
            />
            <div className="absolute w-[195px] h-[324px] -left-[97px] top-[170px] blur-[280px] lg:bg-white bg-white/[0.5]  z-[0]" />
            <div className="absolute w-[82.5px] h-[162px] lg:-left-[1000px] lg:top-[170px] -right-[50px] top-[200px] blur-[150px] lg:blur-[280px] bg-secondary  z-[0]" />
            <div className="absolute w-[436.52px] h-[544.07px] left-[1000px] -top-[29px] blur-[300px] rounded-[200px] rotate-[47.46deg] bg-gradient-to-r from-[#1a2980] to-[#26d0ce] z-0" />
            <div className="absolute w-[405px] h-[471px] -left-[300px] top-[1600px] lg:left-[257.09px] lg:top-[1825.18px] lg:bg-white/[0.6] bg-white/[0.3] blur-[500px] lg:blur-[370px] rotate-[176.62deg] z-[0]" />
            <div className="absolute w-[436.52px] h-[544.07px] -right-[400px] top-[4000px] lg:left-[1100px] lg:top-[3200px] bg-gradient-to-r from-[#1a2980] to-[#26d0ce] blur-[370px] rounded-[200px] rotate-[47.46deg] z-0" />
          </div>
        </div>
      </div>
      <Script
        src="/scripts/particles.js-2.0.0/particles.min.js"
        onLoad={() => {
          // id element, config particles, callback
          particlesJS.load(
            "particles",
            "/scripts/particles.js-2.0.0/particlesjs-config.json",
            function () {
              // console.log("callback - particles.js config loaded");
            }
          );
        }}
      ></Script>
    </>
  );
}
