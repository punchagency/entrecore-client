import { Metadata } from "next";
import { redirect } from "next/navigation";
import { OnboardingNav } from "@/components/onboarding-nav";

export const metadata: Metadata = {
  title: "Tell Us About Yourself - Entrecore",
  description: "Complete your profile information to get started",
};

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export default async function OnboardingLayout({ children }: OnboardingLayoutProps) {
  // TODO: Add authentication check here
  // if (!isAuthenticated()) {
  //   redirect("/auth/login")
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <OnboardingNav />
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center w-full">{children}</div>
      </main>
    </div>
  );
}
