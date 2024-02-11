"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}
export function Providers({ children }: ProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
