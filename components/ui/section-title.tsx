import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <span className="mb-5 block px-5 font-bold font-poppins uppercase">{children}</span>;
}
