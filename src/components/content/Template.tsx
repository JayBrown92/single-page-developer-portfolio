import Image from "next/image";
import GithubIcon from "../../../public/icon-github.svg";
import FrontendMentorIcon from "../../../public/icon-frontend-mentor.svg";
import LinkedInIcon from "../../../public/icon-linkedin.svg";
import TwitterIcon from "../../../public/icon-twitter.svg";
import Container from "../UI/Container";

type PropTypes = {
  children: React.ReactNode;
};

export default function Template({ children }: PropTypes) {
  type IconTypes = {
    src: any;
    alt: string;
  };

  const icons: IconTypes[] = [
    {
      src: GithubIcon,
      alt: "github icon",
    },
    {
      src: FrontendMentorIcon,
      alt: "Frontend Mentor icon",
    },
    {
      src: LinkedInIcon,
      alt: "LinkedIn icon",
    },
    {
      src: TwitterIcon,
      alt: "Twitter icon",
    },
  ];

  const logo = <h4 className=" text-center md:text-left">adamkeyes</h4>;
  const iconMap = icons.map((icon, index) => {
    const { src, alt } = icon;
    return <Image key={index} src={src} alt={alt} width={20} height={20} />;
  });
  return (
    <>
      <header className="bg-primary-bg/0">
        <Container className=" flex flex-col items-center justify-center  gap-6 py-7  md:flex-row md:flex-nowrap md:justify-between md:gap-0">
          {logo}
          <div className="flex  justify-center gap-6 ">{iconMap}</div>
        </Container>
      </header>
      {children}
      <footer className=" flex flex-wrap justify-center  gap-6 py-10">
        <Container className=" flex flex-col items-center justify-center gap-6 py-5  md:flex-row md:flex-nowrap md:justify-between md:gap-0">
          {logo}
          <div className="flex  justify-center gap-6 ">{iconMap}</div>
        </Container>
      </footer>
    </>
  );
}
