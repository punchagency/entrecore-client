"use client";

import { usePathname } from "next/navigation";
import { OnboardingNav } from "@/components/onboarding-nav";

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export default function OnboardingLayout({ children }: OnboardingLayoutProps) {
  const pathname = usePathname();
  let title = "";

  switch (pathname) {
    case "/onboarding":
      title = "Tell Us About Yourself";
      break;
    case "/onboarding/company":
      title = "About Your Company";
      break;

    case "/onboarding/link-account":
      title = "Link Your Account";
      break;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <OnboardingNav />
      <main className="flex-1 flex flex-col pt-16">
        <div className="w-full bg-primary text-white py-5 px-4 text-center">
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        <div className="flex-1 flex flex-col items-center w-full py-8 px-4 pb-24">{children}</div>
      </main>
    </div>
  );
}
