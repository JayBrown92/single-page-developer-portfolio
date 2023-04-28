import "../styles/globals.css";

import type { AppProps } from "next/app";

import Template from "../components/UI/Template";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <main>
        <Component {...pageProps} />
      </main>
    </Template>
  );
}
