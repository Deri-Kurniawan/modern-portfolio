import { Fragment } from "react";
import { AppProps } from "next/app";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import "../styles/customDOM.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NextNProgress
        color="#42BFD2"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
        options={{ easing: "ease", speed: 500 }}
      />
      <Component {...pageProps} />
      <Script src="/scripts/console.log.js" defer></Script>
    </Fragment>
  );
}

export default MyApp;
