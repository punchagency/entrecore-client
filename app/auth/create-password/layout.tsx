import { ReactNode } from "react";

export const metadata = {
  title: "Create Password | Entrecore",
  description: "Set up a secure password for your Entrecore account.",
  keywords: "create password, account setup, password security, entrecore platform",
  openGraph: {
    title: "Create Password | Entrecore",
    description: "Set up a secure password for your Entrecore account.",
    type: "website",
  },
};

interface CreatePasswordLayoutProps {
  children: ReactNode;
}

export default function CreatePasswordLayout({ children }: CreatePasswordLayoutProps) {
  return <>{children}</>;
}
