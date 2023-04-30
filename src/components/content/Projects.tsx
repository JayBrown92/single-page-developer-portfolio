import Image from "next/image";
import Link from "next/link";
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
    <Section id="projects-section" className="py-10">
      <Container className="flex flex-wrap justify-between gap-y-10">
        <h2 className="basis-1/2">Projects</h2>{" "}
        <Button className="" href="#contact-me-section">
          Contact me
        </Button>
        {projects.map((project, index) => {
          const { image, altText, title, stack } = project;

          return (
            <div key={index} className=" flex basis-full flex-wrap gap-5">
              <Image src={image} alt={altText} />
              <div className="flex flex-wrap gap-2">
                <h3 className="basis-full">{title}</h3>
                <ul className="flex basis-full gap-x-4">
                  {stack.map((tech, index) => {
                    return (
                      <>
                        <li key={index}>{tech}</li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <Button href="#">VIEW PROJECT</Button>
              <Button href="#">VIEW CODE</Button>
            </div>
          );
        })}
      </Container>
    </Section>
  );
}
