import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  id: string;
};
export default function Section({ className, children, id }: Props) {
  return (
    <section id={id} className={` relative ${className}`}>
      {children}
    </section>
  );
}
