import Image from "next/image";
import DesignProjImg from "../../../public/thumbnail-project-1-small.webp";
import ELearningProjImg from "../../../public/thumbnail-project-2-small.webp";
import TodoProjImg from "../../../public/thumbnail-project-3-small.webp";
import EntertainmentProjImg from "../../../public/thumbnail-project-4-small.webp";
import MemoryProjImg from "../../../public/thumbnail-project-5-small.webp";
import ArtProjImg from "../../../public/thumbnail-project-6-small.webp";
import Section from "../UI/Section";
import Container from "../UI/Container";
import Button from "../UI/Button";

export default function Projects() {
  const projects = [
    {
      image: DesignProjImg,
      altText: "Screenshot of the design project",
      title: "DESIGN PORTFOLIO",
      stack: ["HTML", "CSS"],
    },
    {
      image: ELearningProjImg,
      altText: "Screenshot of the E-Learning landing page project",
      title: "E-LEARNING LANDING PAGE",
      stack: ["HTML", "CSS"],
    },
    {
      image: TodoProjImg,
      altText: "Screenshot of the Todo app project",
      title: "TODO WEB APP",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: EntertainmentProjImg,
      altText: "Screenshot of the Entertainment app project",
      title: "ENTERTAINMENT WEB APP",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: MemoryProjImg,
      altText: "Screenshot of the memory game project",
      title: "MEMORY GAME",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: ArtProjImg,
      altText: "Screenshot of the art gallery project",
      title: "ART GALLERY SHOWCASE",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
  ];
  return (
    <Section id="projects-section">
      <Container className="flex flex-wrap items-center justify-between gap-y-10 py-20    md:py-14 ">
        <h2>Projects</h2>
        <Button href="#contact-me-section">Contact me</Button>
        {projects.map((project, index) => {
          const { image, altText, title, stack } = project;

          return (
            <div
              key={index}
              className=" flex w-full flex-wrap  content-between gap-4 md:w-1/2 "
            >
              <Image
                src={image}
                width={322}
                height={253}
                alt={altText}
                className=" h-[253px]"
              />
              <div className="flex  flex-wrap gap-2">
                <h4 className="W-full">{title}</h4>
                <ul className="flex  w-full gap-4">
                  {stack.map((tech, index) => {
                    return (
                      <>
                        <li key={index}>{tech}</li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="flex gap-x-4">
                <Button href="#">VIEW PROJECT</Button>
                <Button href="#">VIEW CODE</Button>
              </div>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
