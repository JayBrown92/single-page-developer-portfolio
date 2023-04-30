import Link from "next/link";

type Props = {
  children: React.ReactNode;
};
export default function Button({ children }: Props) {
  return (
    <>
      {" "}
      <Link
        href="#contact-me-section"
        className=" border-b-2	border-color-accent pb-3 font-bold uppercase tracking-widest transition-colors hover:text-color-accent "
      >
        {children}
      </Link>
    </>
  );
}
