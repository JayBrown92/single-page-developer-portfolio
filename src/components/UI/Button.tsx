import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  className?: string;
};
export default function Button({ children, href, className }: Props) {
  return (
    <>
      {" "}
      <Link
        href={href}
        className={` box-content	whitespace-nowrap border-b-2 border-color-accent pb-2 font-bold uppercase tracking-widest transition-colors hover:text-color-accent ${className}`}
      >
        {children}
      </Link>
    </>
  );
}
