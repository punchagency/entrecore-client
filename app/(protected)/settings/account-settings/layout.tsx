'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const AccountSettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex p-[2.083vw]">
      <div className="flex flex-col gap-3 pr-[2.083vw]">
        <Button variant="outline" className="rounded-sm border-l-[#181818]" onClick={() => scrollToSection('login-signup')}>
            Login & Signup
        </Button>
        <Button variant="outline" className="rounded-sm border-l-[#181818]" onClick={() => scrollToSection('additional-settings')}>
            Additional Settings
        </Button>
      </div>
      <div className="w-full pl-[2.083vw]">{children}</div>
    </div>
  );
};
export default AccountSettingsLayout;

