import Script from "next/script";
import "../styles/globals.css";
import "../styles/customDOM.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/scripts/console.log.js" defer></Script>
    </>
  );
}

export default MyApp;
