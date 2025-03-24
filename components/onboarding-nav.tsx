"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

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
    <div className="w-full border-b border-[#D9DBDD] bg-white fixed top-0 z-50">
      <div className="container flex h-16 items-center justify-between gap-5">
        <Link href="/" className="mx-5">
          <Image src="/svgs/logo.svg" alt="Logo" width={150} height={24} />
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
        <Link href="/dashboard" className="">
          <Button variant="outline" className="rounded-lg w-20 cursor-pointer">
            Skip
          </Button>
        </Link>
      </div>
    </div>
  );
}
