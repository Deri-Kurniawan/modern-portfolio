import Image from "next/image";
import { useEffect } from "react";
import { blurGradientEllipse, normalGradientEllipse } from "../../assets";
import Head from "next/head";
import { Fragment } from "react";

export default function FetchFailed() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.clear();
      return () => clearInterval(interval);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta property="og:type" content="404" />
        <meta property="og:title" content="Page Not Found" />
        <meta property="og:description" content="Page Not Found" />
        <meta property="og:image" content="/Mockup.png" />
        <meta
          property="og:url"
          content="https://portfolio.deri-kurniawan.vercel.app/404"
        />
        <meta property="og:site_name" content="404 - Deri Kurniawan" />
        <title>No Data Available - Deri Kurniawan</title>
      </Head>
      <div className="relative w-screen h-screen overflow-x-hidden text-white bg-primary font-poppins">
        <div className="flex flex-col items-center my-[15vh] lg:my-0 lg:h-full lg:w-full z-50">
          <div className="relative flex flex-row items-center justify-center">
            <h1 className="text-[180px] lg:text-[256px] font-extrabold m-auto -translate-x-14 lg:-translate-x-16 z-30">
              4
            </h1>
            <div className="absolute z-20 w-[148px] h-[148px] lg:w-[206px] lg:h-[206px]">
              <Image
                src={normalGradientEllipse}
                alt="0"
                width={206}
                height={206}
              />
            </div>
            <h1 className="text-[180px] lg:text-[256px] font-extrabold m-auto translate-x-14 lg:translate-x-16 z-10">
              4
            </h1>
          </div>
          <h1 className="text-[43px] lg:text-[56px] text-gradient font-bold -translate-y-16 z-50">
            No Data Available
          </h1>
          <p className="text-[18px] lg:text-[23px] text-center -translate-y-12 z-50">
            Sorry! the page is currently unavailable
            <br />
            because failed to get data from the server
          </p>
        </div>

        <div className="absolute left-[300px] lg:left-[432px] top-[97px] animate-pulse fof__particle1">
          <Image src={blurGradientEllipse} alt="" width="44px" height="44px" />
        </div>
        <div className="absolute left-[20px] lg:left-[1034px] top-[400px] lg:top-[306px] fof__particle2">
          <Image src={normalGradientEllipse} alt="" width={78} height={78} />
        </div>
        <div className="absolute left-[326px] top-[450px] lg:top-[506px] animate-pulse fof__particle3">
          <Image src={normalGradientEllipse} alt="" width={44} height={44} />
        </div>
        <div className="absolute left-[850px] top-[550px] fof__particle4">
          <Image src={blurGradientEllipse} alt="" width={56} height={56} />
        </div>

        <div className="fixed w-[422px] h-[422px] left-[1068px] -top-[195px] bg-[#d9d9d9] blur-[250px]" />
        <div className="fixed w-[533px] h-[533px] -left-[93.05px] top-[376px] bg-gradient-to-l from-[#00D9F5] to-[#fff] blur-[400px] rotate-[15deg]" />
      </div>
    </Fragment>
  );
}
