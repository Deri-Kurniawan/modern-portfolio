import Button from "../components/Button";
import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

export default function Offline() {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <meta property="og:type" content="200" />
        <meta property="og:title" content="No Internet" />
        <meta property="og:description" content="No Internet" />
        <meta property="og:image" content="/Mockup.png" />
        <meta
          property="og:url"
          content="https://portfolio.deri-kurniawan.vercel.app/offline"
        />
        <meta property="og:site_name" content="No Internet - Deri Kurniawan" />
        <title>No Internet - Deri Kurniawan</title>
      </Head>
      <div className="relative w-screen h-screen overflow-x-hidden text-white bg-primary font-poppins">
        <div className="flex flex-col items-center my-[15vh] lg:my-0 lg:h-full lg:w-full z-50">
          <div className="relative flex flex-row items-center justify-center">
            <h1 className="text-[180px] lg:text-[256px] font-extrabold m-auto z-10">
              200
            </h1>
          </div>
          <h1 className="text-[43px] lg:text-[56px] text-gradient font-bold -translate-y-16 z-50">
            You are offline
          </h1>
          <p className="text-[18px] lg:text-[23px] text-center -translate-y-12 z-50">
            Please check your internet connection and try again
          </p>
          <div className="z-50 -translate-y-12">
            <Button
              showIcon={false}
              title="Go Back Home"
              clickHandle={() => router.push("/")}
            />
          </div>
        </div>

        <div className="fixed w-[422px] h-[422px] left-[1068px] -top-[195px] bg-[#d9d9d9] blur-[250px]" />
        <div className="fixed w-[533px] h-[533px] -left-[93.05px] top-[376px] bg-gradient-to-l from-[#00D9F5] to-[#fff] blur-[400px] rotate-[15deg]" />
      </div>
    </Fragment>
  );
}
