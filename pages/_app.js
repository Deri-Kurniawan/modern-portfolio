import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/scripts/console.log.js" defer></Script>
    </>
  );
}

export default MyApp;
