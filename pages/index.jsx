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
import Script from "next/script";
import FetchFailed from "../components/errors/FetchFailed";
import { init as AOSInit } from "aos";
import { Fragment } from "react";
import internalData from "../db/data.json";
import {
  EnvironmentError,
  envIsNotDefined,
  envIsProduction,
  envSameAs,
} from "../utils/envHelper";

export default function Home({ data, error }) {
  const navbarContainerRef = useRef(null);

  useEffect(() => {
    AOSInit({
      duration: 500,
      once: true,
    });

    const handleScroll = () => {
      if (scrollY === 0) {
        navbarContainerRef?.current?.classList?.remove(
          "navbar-glass",
          "navbar-ease-out"
        );
      }
      if (scrollY > 0) {
        navbarContainerRef?.current?.classList?.add(
          "navbar-glass",
          "navbar-ease-in"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (error !== null) return <FetchFailed />;

  return (
    <Fragment>
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
        <div
          ref={navbarContainerRef}
          className="fixed top-0 z-50 w-full"
          data-aos="fade-in"
        >
          <div className="max-w-[1440px] m-auto w-full">
            <Navbar data={data?.navLinks} />
          </div>
        </div>
        <div className="max-w-[1440px] m-auto w-full z-[1]">
          <div className="relative px-[30px] ss:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[106px]">
            <Hero data={data?.hero} />
            <Stats data={data?.stats} />
            <Ability data={data?.abilities} />
            <Projects data={data?.projects} />
            <Education data={data?.educations} />
            <Feedback data={data?.feedbacks} />
            <Contacts data={data?.contacts} />
            <Footer
              data={{
                links: data?.footer,
                socialMedia: data?.socialMedia,
              }}
            />
            <al-home-1 />
            <al-home-2 />
            <al-home-3 />
            <al-home-4 />
            <al-home-5 />
          </div>
        </div>
      </div>
      <Script
        id="particle"
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
    </Fragment>
  );
}

export async function getStaticProps() {
  if (envIsNotDefined("DATA_SOURCE")) {
    throw new EnvironmentError(
      "DATA_SOURCE is not defined as environtment variable"
    );
  }

  if (envSameAs("DATA_SOURCE", "internal")) {
    if (envIsProduction() && envIsNotDefined("BASE_URL")) {
      throw new EnvironmentError(
        "BASE_URL is not defined as environtment variable"
      );
    }

    return {
      props: {
        data: internalData,
        error: null,
      },
    };
  } else if (envSameAs("DATA_SOURCE", "external")) {
    try {
      const response = await fetch(
        `${
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : process.env.BASE_URL
        }/api/data`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = await response.json();

      return {
        props: {
          data: data[0],
          error: null,
        },
        revalidate: 1,
      };
    } catch (err) {
      return {
        props: {
          data: [],
          error: err.message,
        },
      };
    }
  } else {
    throw new EnvironmentError(
      "DATA_SOURCE is not defined properly, it must be `internal` or `external`"
    );
  }
}
