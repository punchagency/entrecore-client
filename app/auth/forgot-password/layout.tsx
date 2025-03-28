import { ReactNode } from "react";

export const metadata = {
  title: "Forgot Password | Entrecore",
  description: "Reset your Entrecore account password securely.",
  keywords: "forgot password, reset password, password recovery, entrecore platform",
  openGraph: {
    title: "Forgot Password | Entrecore",
    description: "Reset your Entrecore account password securely.",
    type: "website",
  },
};

interface ForgotPasswordLayoutProps {
  children: ReactNode;
}

export default function ForgotPasswordLayout({ children }: ForgotPasswordLayoutProps) {
  return <>{children}</>;
}
