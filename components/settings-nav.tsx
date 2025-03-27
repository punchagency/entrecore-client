"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SettingsNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Companies",
      href: "/settings",
    },
    {
      label: "My Profile",
      href: "/settings/my-profile",
    },
    {
      label: "Account Settings",
      href: "/settings/account-settings",
    },
  ];

  return (
    <nav className="w-full border-b border-[#D9DBDD] bg-[#EFF4FF]  z-50">
      <div className="container flex h-[3.646vw] items-center">

        <div className="flex pl-[1.563vw]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "py-[1.22vw] mr-[1.302vw] transition-colors text-[0.833vw] font-bold ",
                pathname === item.href || (item.href !== "/settings" && pathname.startsWith(item.href))
                  ? "text-primary border-b-2 border-[#3064F6]"
                  : "text-soft-black    "
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
