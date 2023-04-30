import Image from "next/image";
import Section from "../UI/Section";

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
    <Section
      id={"experience-section"}
      className=" grid gap-6 py-10  text-center before:absolute  before:left-4 before:right-4 before:top-0 before:mx-auto before:border-y-[1px] before:border-color-primary after:absolute  after:bottom-0 after:left-4 after:right-4 after:mx-auto after:border-y-[1px] after:border-color-primary "
    >
      {ExpContent.map((content, index) => {
        const { header, text } = content;
        return (
          <div key={index}>
            <h3>{header}</h3>
            <p>{text}</p>
          </div>
        );
      })}
    </Section>
  );
}
