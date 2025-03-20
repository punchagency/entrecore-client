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
    <div className="w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-xl text-primary">
          entrecore
        </Link>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary">
          Skip
        </Link>
      </div>
    </div>
  );
}
