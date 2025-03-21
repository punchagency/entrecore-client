"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function OnboardingNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "You",
      href: "/onboarding",
    },
    {
      label: "Company",
      href: "/onboarding/company",
    },
    {
      label: "Link Account",
      href: "/onboarding/link-account",
    },
  ];

  return (
    <div className="w-full border-b bg-white fixed top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-3xl text-primary">
          entrecore
        </Link>
        <div className="flex bg-gray-100/80 rounded-full p-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-6 py-2 rounded-full transition-colors text-sm font-medium",
                pathname === item.href
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/dashboard"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Skip
        </Link>
      </div>
    </div>
  );
}
