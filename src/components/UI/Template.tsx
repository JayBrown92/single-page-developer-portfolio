import Image from "next/image";
import GithubIcon from "../../../public/icon-github.svg";
import FrontendMentorIcon from "../../../public/icon-frontend-mentor.svg";
import LinkedInIcon from "../../../public/icon-linkedin.svg";
import TwitterIcon from "../../../public/icon-twitter.svg";

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

  const logo = <h4 className="basis-full text-center">adamkeyes</h4>;
  const iconMap = icons.map((icon, index) => {
    const { src, alt } = icon;
    return <Image key={index} src={src} alt={alt} width={20} height={20} />;
  });
  return (
    <>
      <header className=" flex flex-wrap justify-center gap-6 py-5">
        {logo}
        {iconMap}
      </header>
      {children}
      <footer className=" flex flex-wrap justify-center gap-6 py-10">
        {logo}
        {iconMap}
      </footer>
    </>
  );
}
