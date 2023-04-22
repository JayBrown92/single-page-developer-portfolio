import "../styles/globals.css";

import type { AppProps } from "next/app";

import { Space_Grotesk } from "next/font/google";
import Template from "../../components/Template";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <main className={`${space_grotesk.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Template>
  );
}
