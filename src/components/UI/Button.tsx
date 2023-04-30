import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};
export default function Button({ children, href }: Props) {
  return (
    <>
      {" "}
      <Link
        href={href}
        className=" border-b-2	border-color-accent pb-3 font-bold uppercase tracking-widest transition-colors hover:text-color-accent "
      >
        {children}
      </Link>
    </>
  );
}
