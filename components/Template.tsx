import Image from "next/image";
import GithubIcon from "../public/icon-github.svg";
import FrontendMentorIcon from "../public/icon-frontend-mentor.svg";
import LinkedInIcon from "../public/icon-linkedin.svg";
import TwitterIcon from "../public/icon-twitter.svg";

type PropTypes = {
  children: React.ReactNode;
};

export default function Template({ children }: PropTypes) {
  return (
    <>
      <header>
        adamkeyes
        <Image src={GithubIcon} width={20} alt="github icon" />
        <Image src={GithubIcon} width={20} alt="github icon" />
        <Image src={FrontendMentorIcon} width={20} alt="Frontend Mentor icon" />
        <Image src={LinkedInIcon} width={20} alt="LinkedIn icon" />
        <Image src={TwitterIcon} width={20} alt="Twitter icon" />{" "}
      </header>
      {children}
      <footer>
        {" "}
        adamkeyes
        <Image src={GithubIcon} width={20} alt="github icon" />
        <Image src={FrontendMentorIcon} width={20} alt="Frontend Mentor icon" />
        <Image src={LinkedInIcon} width={20} alt="LinkedIn icon" />
        <Image src={TwitterIcon} width={20} alt="Twitter icon" />{" "}
      </footer>
    </>
  );
}
