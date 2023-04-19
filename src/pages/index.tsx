import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/icon-github.svg";
import FrontendMentorIcon from "../../public/icon-frontend-mentor.svg";
import LinkedInIcon from "../../public/icon-linkedin.svg";
import TwitterIcon from "../../public/icon-twitter.svg";
import DeveloperImg from "../../public/image-profile-mobile.webp";

export default function Home() {
  return (
    <>
      <header>
        adamkeyes <Image src={GithubIcon} width={20} alt="github icon" />
        <Image src={FrontendMentorIcon} width={20} alt="Frontend Mentor icon" />
        <Image src={LinkedInIcon} width={20} alt="LinkedIn icon" />
        <Image src={TwitterIcon} width={20} alt="Twitter icon" />{" "}
      </header>
      <main>
        {" "}
        <Image src={DeveloperImg} alt="image of developer adam keyes" />
        <h1>Nice to meet you! I&apos;m Adam Keyes. </h1>{" "}
        <p>
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.{" "}
        </p>{" "}
        <Link href="#contact-me-section">Contact Me</Link> <h3>HTML</h3>{" "}
        <p>4 Years Experience</p> <h3> CSS </h3> <p>4 Years Experience</p>{" "}
        <h3>JavaScript</h3> <p>4 Years Experience</p> <h3> Accessibility</h3>{" "}
        <p>4 Years Experience </p>
        <h3> React </h3>
        <p>3 Years Experience</p> <h3> Sass</h3> <p> 3 Years Experience </p>
        <h2>Projects</h2> <Link href="#contact-me-section">Contact Me</Link>{" "}
        Design portfolio HTML CSS View project View code E-learning landing page
        HTML CSS View project View code Todo web app HTML CSS JavaScript View
        project View code Entertainment web app HTML CSS JavaScript View project
        View code Memory Game HTML CSS JavaScript View project View code Art
        gallery showcase HTML CSS JavaScript View project View code Contact I
        would love to hear about your project and how I could help. Please fill
        in the form, and I&apos;ll get back to you as soon as possible. Name
        Email Message Send message
      </main>
      <footer>adamkeyes</footer>
    </>
  );
}
