import Image from "next/image";
import React from "react";
import { blurGradientEllipse, normalGradientEllipse } from "../assets";
import Button from "../components/Button";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment, createElement } from "react";
import styles from "../styles/404.module.css";

export default function NotFound() {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <meta property="og:type" content="404" />
        <meta property="og:title" content="Page Not Found" />
        <meta property="og:description" content="Page Not Found" />
        <meta property="og:image" content="/Mockup.png" />
        <meta
          property="og:url"
          content="https://modern-portfolio.deri.my.id/404"
        />
        <meta property="og:site_name" content="404 - Deri Kurniawan" />
        <title>404 - Deri Kurniawan</title>
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
            Page Not Found
          </h1>
          <p className="text-[18px] lg:text-[23px] text-center -translate-y-12 z-50">
            Sorry! the page doesn&apos;t exist or has been
            <br />
            temporarily moved or deleted
          </p>
          <div className="z-50 -translate-y-12">
            <Button
              showIcon={false}
              title="Go Back Home"
              clickHandle={(): any => router.push("/")}
            />
          </div>
        </div>

        <div
          className={`absolute left-[300px] lg:left-[432px] top-[97px] animate-pulse ${styles.particle1}`}
        >
          <Image src={blurGradientEllipse} alt="" width={44} height={44} />
        </div>
        <div
          className={`absolute left-[20px] lg:left-[1034px] top-[400px] lg:top-[306px] ${styles.particle2}`}
        >
          <Image src={normalGradientEllipse} alt="" width={78} height={78} />
        </div>
        <div
          className={`absolute left-[326px] top-[450px] lg:top-[506px] animate-pulse ${styles.particle3}`}
        >
          <Image src={normalGradientEllipse} alt="" width={44} height={44} />
        </div>
        <div
          className={`absolute left-[850px] top-[550px] ${styles.particle4}`}
        >
          <Image src={blurGradientEllipse} alt="" width={56} height={56} />
        </div>

        {createElement("al-404-1")}
        {createElement("al-404-2")}
      </div>
    </Fragment>
  );
}
