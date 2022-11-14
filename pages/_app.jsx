import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";
import "../styles/globals.css";
import "../styles/customDOM.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
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
