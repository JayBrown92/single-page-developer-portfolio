import Image from "next/image";
import ringsPattern from "../../public/pattern-rings.svg";

import Hero from "../components/content/Hero";
import Experience from "../components/content/Experience";
import Projects from "../components/content/Projects";
import Contact from "components/components/content/Contact ";
export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Image
        src={ringsPattern}
        width={530}
        height={129}
        alt="pattern for hero section design consiting of multiple flat rings"
        className="absolute -right-48 z-10 -translate-y-1/2 md:-right-96 "
      />
      <Projects />
      <Contact />
    </>
  );
}
