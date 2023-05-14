import Image from "next/image";

import DeveloperImg from "../../../public/image-profile-mobile.webp";
import DeveloperImgMd from "../../../public/image-profile-mobile.webp";
import DeveloperImgLg from "../../../public/image-profile-desktop.webp";
import ringsPattern from "../../../public/pattern-rings.svg";
import circlePattern from "../../../public/pattern-circle.svg";
import Section from "../UI/Section";
import Button from "../UI/Button";
import Container from "../UI/Container";

export default function Hero() {
  return (
    <Section id={"hero-section"}>
      <Container className="relative z-10 flex flex-col justify-between gap-y-10 overflow-visible !pt-0 md:flex-row md:pb-44 lg:pb-48 xl:pb-72 ">
        <Image
          src={ringsPattern}
          width={530}
          height={129}
          alt="pattern for hero section design consiting of multiple flat rings"
          className="absolute -left-52 top-0 z-[-1]"
        />{" "}
        <Image
          src={DeveloperImg}
          width={174}
          height={383}
          className=" relative -top-[131px] mx-auto -mb-[131px] md:hidden"
          alt="image of developer adam keyes"
        />
        <Image
          src={DeveloperImgMd}
          width={322}
          height={600}
          priority
          className="absolute -right-0 -top-[88px] order-2  hidden md:block lg:hidden"
          alt="image of developer adam keyes"
        />
        <Image
          src={DeveloperImgLg}
          width={445}
          height={720}
          priority
          className=" absolute -top-[88px] right-16 order-2 hidden min-w-[445px]  lg:block  "
          alt="image of developer adam keyes"
        />
        <Image
          src={circlePattern}
          width={129}
          height={129}
          alt="pattern for hero section design consiting of multiple flat rings"
          className=" absolute -right-16 bottom-[360px] z-20 md:bottom-20 lg:bottom-[155px] lg:right-[445px]"
        />
        <div
          id="hero-content"
          className=" z-10 flex flex-col items-center gap-6  text-center     md:order-1 md:mt-14 md:w-[445px] md:items-start md:gap-16 md:text-left lg:w-[700px]  lg:gap-12 xl:w-[710px] "
        >
          <h1>
            Nice to{" "}
            <br
              className="hidden md:inline lg:hidden 
            "
            />{" "}
            meet you! I&apos;m{" "}
            <span className=" underline decoration-color-accent decoration-solid underline-offset-8">
              Adam Keyes
            </span>
            .{" "}
          </h1>
          <p className=" max-w-[445px]">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.{" "}
          </p>{" "}
          <Button href="#contact-me-section">CONTACT ME</Button>
        </div>
      </Container>
    </Section>
  );
}
