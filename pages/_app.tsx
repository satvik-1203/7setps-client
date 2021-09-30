import "../styles/app.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@Components/layouts/Layout";
import GlobalState from "@Context/state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <Head>
        <link
          rel="icon"
          href="https://images.squarespace-cdn.com/content/575e917ef699bb2cb6543065/1598646296408-OHB2KD1W3Z5UPUF0Y6DS/Screenshot+2020-08-29+at+1.54.35+AM.png?format=100w&content-type=image%2Fpng"
        />
        <title>7 steps</title>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalState>
  );
}

export default MyApp;
