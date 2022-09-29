import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#010510" />
        <meta name="msapplication-TileColor" content="#00f6ff" />
        <meta name="description" content="Deri Kurniawan Modern Portfolio" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#00f6ff" />
        <link rel="icon" type="image/svg+xml" href="./brand.svg" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
