import Image from "next/image";

import DeveloperImg from "../../../public/image-profile-mobile.webp";
import ringsPattern from "../../../public/pattern-rings.svg";
import circlePattern from "../../../public/pattern-circle.svg";
import Section from "../UI/Section";
import Button from "../UI/Button";

export default function Hero() {
  return (
    <Section id={"hero-section"} className="pb-20">
      {" "}
      <Image
        src={DeveloperImg}
        width={174}
        height={383}
        className="relative bottom-32 mx-auto -mb-32"
        alt="image of developer adam keyes"
      />
      <div
        id="hero-content"
        className="container mx-auto mt-10 flex flex-col items-center gap-6  px-4 text-center"
      >
        <h1>
          Nice to meet you! I&apos;m{" "}
          <span className=" underline decoration-color-accent decoration-solid underline-offset-8">
            Adam Keyes
          </span>
          .{" "}
        </h1>
        <p>
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.{" "}
        </p>{" "}
        <Button href="#contact-me-section">CONTACT ME</Button>
      </div>
      <Image
        src={ringsPattern}
        width={530}
        height={129}
        alt="pattern for hero section design consiting of multiple flat rings"
        className="absolute -left-52 top-0 z-[-1]"
      />
      <Image
        src={circlePattern}
        width={129}
        height={129}
        alt="pattern for hero section design consiting of multiple flat rings"
        className="absolute -right-16 top-32 z-[-1]"
      />
    </Section>
  );
}
