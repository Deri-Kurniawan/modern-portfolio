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
import useSWR from "swr";
import FetchFailed from "../components/errors/FetchFailed";

const dataFetcher = async (...args) => {
  try {
    const res = await fetch(...args);
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
};

export default function Home({ BASE_API }) {
  const navbarContainerRef = useRef(null);
  const { data, error } = useSWR(`${BASE_API}/data`, dataFetcher);

  useEffect(() => {
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

  if (
    error ||
    (typeof data !== "object" && data?.toLowerCase() === "not found")
  )
    return <FetchFailed />;

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

      {!data ? (
        <div className="relative overflow-hidden overflow-x-hidden overflow-y-scroll text-white bg-primary font-poppins">
          <div className="max-w-[1440px] m-auto w-full h-screen z-[1]">
            <div className="relative px-[30px] ss:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[106px]">
              <al-home-1 />
              <al-home-2 />
              <al-home-3 />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="relative overflow-hidden text-white bg-primary font-poppins">
            <div
              ref={navbarContainerRef}
              className="fixed top-0 z-50 w-full"
              data-aos="fade-in"
            >
              <div className="max-w-[1440px] m-auto w-full">
                <Navbar data={data[0]?.navLinks} />
              </div>
            </div>
            <div className="max-w-[1440px] m-auto w-full z-[1]">
              <div className="relative px-[30px] ss:px-[50px] sm:px-[70px] md:px-[90px] lg:px-[106px]">
                <Hero data={data[0]?.hero} />
                <Stats data={data[0]?.stats} />
                <Ability data={data[0]?.abilities} />
                <Projects data={data[0]?.projects} />
                <Education data={data[0]?.educations} />
                <Feedback data={data[0]?.feedbacks} />
                <Contacts data={data[0]?.contacts} />
                <Footer
                  data={{
                    links: data[0]?.footer,
                    socialMedia: data[0]?.socialMedia,
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

          <Script
            src="https://unpkg.com/aos@2.3.1/dist/aos.js"
            onLoad={() => {
              AOS.init({
                duration: 500,
                once: true,
              });
            }}
            defer
          ></Script>
        </>
      )}
    </>
  );
}

export function getStaticProps() {
  if (!process.env.BASE_API) {
    throw new Error("BASE_API is missing or not defined in .env.local");
  }

  return {
    props: {
      BASE_API: process.env.BASE_API,
    },
  };
}
