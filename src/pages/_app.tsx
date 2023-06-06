import "../styles/globals.css";

import type { AppProps } from "next/app";

import Template from "../components/content/Template";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Head>
        <title>Adam Keyes | Web Developer</title>
        <meta
          name="description"
          content="Single page website for Adam Keyes, web developer"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main className="relative overflow-x-hidden">
        <Component {...pageProps} />
      </main>
    </Template>
  );
}
