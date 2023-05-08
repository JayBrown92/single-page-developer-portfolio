import Image from "next/image";

import DeveloperImg from "../../../public/image-profile-mobile.webp";
import DeveloperImgMd from "../../../public/image-profile-mobile.webp";
import ringsPattern from "../../../public/pattern-rings.svg";
import circlePattern from "../../../public/pattern-circle.svg";
import Section from "../UI/Section";
import Button from "../UI/Button";
import Container from "../UI/Container";

export default function Hero() {
  return (
    <Section id={"hero-section"} className=" ">
      <Container className="relative flex flex-col justify-between pb-20 md:flex-row md:justify-end md:pb-16">
        {" "}
        <Image
          src={DeveloperImg}
          width={174}
          height={383}
          className="relative bottom-32 mx-auto -mb-32 md:hidden"
          alt="image of developer adam keyes"
        />
        <Image
          src={DeveloperImgMd}
          width={322}
          height={600}
          priority
          className="relative -right-8 -top-32 order-2 -mb-32 hidden min-w-[322px] md:block "
          alt="image of developer adam keyes"
        />
        <div
          id="hero-content"
          className=" z-10 mt-10 flex flex-col items-center gap-6  text-center md:absolute md:bottom-16 md:left-8 md:order-1 md:w-[443px] md:items-start md:gap-16 md:text-left"
        >
          <h1>
            Nice to <br className=" hidden md:inline" /> meet you! I&apos;m{" "}
            <br className=" hidden md:inline" />
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
      </Container>
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
        className="absolute -right-16 top-32 z-10 md:top-[28rem]"
      />
    </Section>
  );
}
