import Image from "next/image";
import Section from "../UI/Section";

export default function Experience() {
  return (
    <Section
      id={"experience-section"}
      className="relative grid gap-6 py-10 text-center  before:absolute before:left-4  before:right-4 before:top-0 before:mx-auto before:border-y-[1px] before:border-color-primary after:absolute after:bottom-0  after:left-4 after:right-4 after:mx-auto after:border-y-[1px] after:border-color-primary  "
    >
      <div>
        <h3>HTML</h3> <p>4 Years Experience</p>{" "}
      </div>
      <div>
        <h3> CSS </h3>
        <p>4 Years Experience</p>
      </div>{" "}
      <div>
        <h3>JavaScript</h3> <p>4 Years Experience</p>
      </div>
      <div>
        {" "}
        <h3> Accessibility</h3> <p>4 Years Experience </p>
      </div>
      <div>
        <h3> React </h3>
        <p>3 Years Experience</p>{" "}
      </div>{" "}
      <div>
        <h3> Sass</h3> <p> 3 Years Experience </p>
      </div>
    </Section>
  );
}
