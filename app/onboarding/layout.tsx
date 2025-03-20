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
      <main className="flex-1 flex flex-col pt-16">
        {/* Banner */}
        <div className="w-full bg-primary text-white py-8 px-4 text-center">
          <h1 className="text-2xl font-semibold">About Your Company</h1>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col items-center w-full py-8 px-4 pb-24">{children}</div>
      </main>
    </div>
  );
}
