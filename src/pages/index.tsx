import Image from "next/image";
import Link from "next/link";
import DesignProjImg from "../../public/thumbnail-project-1-small.webp";
import ELearningProjImg from "../../public/thumbnail-project-2-small.webp";
import TodoProjImg from "../../public/thumbnail-project-3-small.webp";
import EntertainmentProjImg from "../../public/thumbnail-project-4-small.webp";
import MemoryProjImg from "../../public/thumbnail-project-5-small.webp";
import ArtProjImg from "../../public/thumbnail-project-6-small.webp";
import ringsPattern from "../../public/pattern-rings.svg";
import Hero from "../components/content/Hero";
import Experience from "components/components/content/Experience ";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />

      <section id="projects-section">
        <Image
          src={ringsPattern}
          width={530}
          height={129}
          alt="pattern for hero section design consiting of multiple flat rings"
          className="relative -right-52 bottom-11  "
        />
        <h2>Projects</h2> <Link href="#contact-me-section">Contact Me</Link>
        <Image src={DesignProjImg} alt="Screenshot of the design project" />
        <h3>DESIGN PORTFOLIO </h3>
        <ul>
          <li>HTML </li>
          <li> CSS</li>
        </ul>
        <Link href="#">VIEW PROJECT</Link> <Link href="#"> VIEW CODE</Link>
        <Image
          src={ELearningProjImg}
          alt="Screenshot of the E-Learning landing page project"
        />
        <h3>E-LEARNING LANDING PAGE </h3>
        <ul>
          <li>HTML </li>
          <li> CSS</li>
        </ul>
        <Link href="#">VIEW PROJECT</Link> <Link href="#"> VIEW CODE</Link>{" "}
        <Image src={TodoProjImg} alt="Screenshot of the Todo app project" />
        <h3>TODO WEB APP</h3>
        <ul>
          <li>HTML </li>
          <li> CSS</li>
          <li> JAVASCRIPT</li>
        </ul>
        <Link href="#">VIEW PROJECT</Link> <Link href="#"> VIEW CODE</Link>{" "}
        <Image
          src={EntertainmentProjImg}
          alt="Screenshot of the Entertainment app project"
        />
        <h3>ENTERTAINMENT WEB APP</h3>
        <ul>
          <li>HTML </li>
          <li> CSS</li>
          <li> JAVASCRIPT</li>
        </ul>
        <Link href="#">VIEW PROJECT</Link> <Link href="#"> VIEW CODE</Link>{" "}
        <Image
          src={MemoryProjImg}
          alt="Screenshot of the memory game project"
        />
        <h3>MEMORY GAME </h3>
        <ul>
          <li>HTML </li>
          <li> CSS</li>
          <li> JAVASCRIPT</li>
        </ul>
        <Link href="#">VIEW PROJECT</Link> <Link href="#"> VIEW CODE</Link>{" "}
        <Image src={ArtProjImg} alt="Screenshot of the art gallery project" />
        <h3>ART GALLERY SHOWCASE </h3>
        <ul>
          <li>HTML </li>
          <li> CSS</li>
          <li> JAVASCRIPT</li>
        </ul>
        <Link href="#">VIEW PROJECT</Link> <Link href="#"> VIEW CODE</Link>
      </section>
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
