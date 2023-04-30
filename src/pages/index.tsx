import Image from "next/image";
import ringsPattern from "../../public/pattern-rings.svg";

import Hero from "../components/content/Hero";
import Experience from "../components/content/Experience";
import Projects from "../components/content/Projects";
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
        className="absolute -right-48 z-10 -translate-y-1/2  "
      />
      <Projects />
      <section id="contact-section">
        {" "}
        <h3> Contact</h3>{" "}
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.{" "}
        </p>{" "}
        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" />

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
