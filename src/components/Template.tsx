import Image from "next/image";
import GithubIcon from "../../public/icon-github.svg";
import FrontendMentorIcon from "../../public/icon-frontend-mentor.svg";
import LinkedInIcon from "../../public/icon-linkedin.svg";
import TwitterIcon from "../../public/icon-twitter.svg";

type PropTypes = {
  children: React.ReactNode;
};

export default function Template({ children }: PropTypes) {
  return (
    <>
      <header className=" flex flex-wrap justify-center gap-6 py-5">
        <h4 className="basis-full text-center">adamkeyes</h4>
        <Image src={GithubIcon} width={20} alt="github icon" />
        <Image src={FrontendMentorIcon} width={20} alt="Frontend Mentor icon" />
        <Image src={LinkedInIcon} width={20} alt="LinkedIn icon" />
        <Image src={TwitterIcon} width={20} alt="Twitter icon" />{" "}
      </header>
      {children}
      <footer className=" flex flex-wrap justify-center gap-6 py-10">
        <h4 className="basis-full text-center">adamkeyes</h4>
        <Image src={GithubIcon} width={20} alt="github icon" />
        <Image src={FrontendMentorIcon} width={20} alt="Frontend Mentor icon" />
        <Image src={LinkedInIcon} width={20} alt="LinkedIn icon" />
        <Image src={TwitterIcon} width={20} alt="Twitter icon" />{" "}
      </footer>
    </>
  );
}
