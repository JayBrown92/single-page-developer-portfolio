import Image from "next/image";
import ringsPattern from "../../../public/pattern-rings.svg";

import Section from "../UI/Section";
import Container from "../UI/Container";

export default function Experience() {
  const ExpContent: { header: string; text: string }[] = [
    {
      header: "HTML",
      text: "4 Years Experience",
    },
    {
      header: "CSS",
      text: "4 Years Experience",
    },
    {
      header: "JavaScript",
      text: "4 Years Experience ",
    },
    {
      header: "Accessibility",
      text: "4 Years Experience",
    },
    {
      header: "React",
      text: "3 Years Experience",
    },
    {
      header: "SASS",
      text: "3 Years Experience",
    },
  ];

  return (
    <Section id={"experience-section"}>
      <Container className="  grid gap-6 overflow-visible py-10 text-center  before:absolute before:left-4 before:right-4 before:top-0 before:mx-auto before:border-y-[1px] before:border-color-primary  after:absolute after:bottom-0 after:left-4 after:right-4 after:mx-auto after:border-y-[1px] after:border-color-primary md:grid-cols-2 md:py-14 md:text-left md:before:left-8 md:before:right-8 md:after:hidden lg:grid-cols-3 lg:before:left-16 lg:before:right-16">
        {ExpContent.map((content, index) => {
          const { header, text } = content;
          return (
            <div key={index}>
              <h3>{header}</h3>
              <p>{text}</p>
            </div>
          );
        })}
        <Image
          src={ringsPattern}
          width={530}
          height={129}
          alt="pattern for hero section design consiting of multiple flat rings"
          className="absolute -bottom-16 z-10 -translate-y-1/2 md:-right-96 "
        />
      </Container>
    </Section>
  );
}
