import "../styles/globals.css";

import type { AppProps } from "next/app";

import Template from "../components/content/Template";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <main className="relative overflow-x-hidden">
        <Component {...pageProps} />
      </main>
    </Template>
  );
}
