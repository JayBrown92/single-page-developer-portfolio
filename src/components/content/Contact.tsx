import Image from "next/image";
import ringsPattern from "../../../public/pattern-rings.svg";
import Container from "../UI/Container";
import Section from "../UI/Section";

export default function Contact() {
  return (
    <Section id="contact-me-section" className=" bg-secondary-bg">
      <Container className="container mx-auto flex flex-wrap justify-center gap-y-5  px-4 py-20 text-center after:absolute  after:bottom-0 after:left-4 after:right-4 after:mx-auto after:border-y-[1px] after:border-color-secondary/50">
        {" "}
        <h2> Contact</h2>{" "}
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.{" "}
        </p>{" "}
        <form className="  grid  basis-full  gap-y-8 text-left uppercase text-color-secondary/50">
          <div>
            <input
              className="h-10 w-full border-b-2  border-color-primary/50 bg-secondary-bg  outline-0	placeholder:-translate-y-1.5 placeholder:translate-x-4 focus:border-color-accent focus:bg-secondary-bg active:border-color-accent disabled:border-color-disabled"
              id="name"
              type="text"
              placeholder="NAME"
            />
          </div>
          <div>
            <input
              className="h-10 w-full border-b-2 border-color-primary/50  bg-secondary-bg  outline-0 	placeholder:-translate-y-1.5   placeholder:translate-x-4 focus:border-color-accent focus:bg-secondary-bg active:border-color-accent disabled:border-color-disabled"
              id="email"
              type="email"
              placeholder="EMAIL"
            />
          </div>
          <div>
            <textarea
              className=" h-28 w-full overflow-x-hidden border-b-2 border-color-primary/50 bg-secondary-bg  outline-none placeholder:-translate-y-1.5	  placeholder:translate-x-4 focus:border-color-accent focus:bg-secondary-bg active:border-color-accent disabled:border-color-disabled"
              id="message"
              placeholder="MESSAGE"
            />
          </div>
          <button
            type="submit"
            className="ml-auto whitespace-nowrap	border-b-2 border-color-accent pb-3 font-bold uppercase tracking-widest text-color-secondary transition-colors hover:text-color-accent"
          >
            send message
          </button>
        </form>
        <Image
          src={ringsPattern}
          width={530}
          height={129}
          alt="pattern for hero section design consiting of multiple flat rings"
          className="absolute -left-48 bottom-0 z-10 -translate-y-28 "
        />
      </Container>
    </Section>
  );
}
