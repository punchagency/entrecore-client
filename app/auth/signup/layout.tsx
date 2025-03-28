import { ReactNode } from "react";

export const metadata = {
  title: "Sign Up | Entrecore",
  description: "Create your Entrecore account to get started with our platform.",
  keywords: "signup, registration, create account, entrecore platform",
  openGraph: {
    title: "Sign Up | Entrecore",
    description: "Create your Entrecore account to get started with our platform.",
    type: "website",
  },
};

interface SignupLayoutProps {
  children: ReactNode;
}

export default function SignupLayout({ children }: SignupLayoutProps) {
  return <>{children}</>;
}
