import Image from "next/image";
import DesignProjImg from "../../../public/thumbnail-project-1-small.webp";
import ELearningProjImg from "../../../public/thumbnail-project-2-small.webp";
import TodoProjImg from "../../../public/thumbnail-project-3-small.webp";
import EntertainmentProjImg from "../../../public/thumbnail-project-4-small.webp";
import MemoryProjImg from "../../../public/thumbnail-project-5-small.webp";
import ArtProjImg from "../../../public/thumbnail-project-6-small.webp";
import DesignProjImgLg from "../../../public/thumbnail-project-1-large.webp";
import ELearningProjImgLg from "../../../public/thumbnail-project-2-large.webp";
import TodoProjImgLg from "../../../public/thumbnail-project-3-large.webp";
import EntertainmentProjImgLg from "../../../public/thumbnail-project-4-large.webp";
import MemoryProjImgLg from "../../../public/thumbnail-project-5-large.webp";
import ArtProjImgLg from "../../../public/thumbnail-project-6-large.webp";
import Section from "../UI/Section";
import Container from "../UI/Container";
import Button from "../UI/Button";

export default function Projects() {
  const projects = [
    {
      image: [DesignProjImg, DesignProjImgLg],
      altText: "Screenshot of the design project",
      title: "DESIGN PORTFOLIO",
      stack: ["HTML", "CSS"],
    },
    {
      image: [ELearningProjImg, ELearningProjImgLg],
      altText: "Screenshot of the E-Learning landing page project",
      title: "E-LEARNING LANDING PAGE",
      stack: ["HTML", "CSS"],
    },
    {
      image: [TodoProjImg, TodoProjImgLg],
      altText: "Screenshot of the Todo app project",
      title: "TODO WEB APP",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: [EntertainmentProjImg, EntertainmentProjImgLg],
      altText: "Screenshot of the Entertainment app project",
      title: "ENTERTAINMENT WEB APP",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: [MemoryProjImg, MemoryProjImgLg],
      altText: "Screenshot of the memory game project",
      title: "MEMORY GAME",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      image: [ArtProjImg, ArtProjImgLg],
      altText: "Screenshot of the art gallery project",
      title: "ART GALLERY SHOWCASE",
      stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
  ];
  return (
    <Section
      id="projects-section"
      className=" z-0
    "
    >
      <Container className="grid grid-cols-1 gap-x-6 gap-y-10  md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
        <div className="flex items-center justify-between md:col-span-2">
          <h2 className=" ">Projects</h2>
          <Button href="#contact-me-section" className="">
            Contact me
          </Button>
        </div>
        {projects.map((project, index) => {
          const { image, altText, title, stack } = project;

          return (
            <div
              key={index}
              className=" flex  w-full flex-wrap content-between  gap-4 "
            >
              <Image
                src={image[0]}
                width={343}
                height={253}
                alt={altText}
                className="  lg:hidden"
              />
              <div className="group relative hidden cursor-pointer  items-center justify-center before:absolute  before:inset-0 before:transition-colors  before:hover:bg-primary-bg/75 lg:flex lg:flex-col">
                <Image src={image[1]} width={540} height={400} alt={altText} />
                <div
                  className="absolute flex flex-col justify-center gap-12 text-center opacity-0 transition-opacity  group-hover:opacity-100
                "
                >
                  <Button href="#">VIEW PROJECT</Button>
                  <Button href="#">VIEW CODE</Button>
                </div>
              </div>
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
              <div className="flex gap-x-4 lg:hidden">
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
