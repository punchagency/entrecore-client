"use client";
import AddNewCompanyDialog from "@/components/add-new-company-dialog";
import { SettingsNav } from "@/components/settings-nav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { CirclePlus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [btnText, setBtnText] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/settings":
        setTitle("Companies");
        setBtnText("New Company Profile");
        break;
      case "/settings/my-profile":
        setTitle("My Profile");
        setBtnText("Save Changes");
        break;
      case "/settings/account-settings":
        setTitle("Account Settings");
        break;
    }
  }, [pathname]);

  return (
    <div>
      <SettingsNav />
      <div className="flex justify-between items-center p-[1.563vw] border-b border-[#D9DBDD] bg-[#EFF4FF]">
        <h1 className="text-[1.146vw] font-bold">{title}</h1>
        {pathname === "/settings" && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="bg-primary text-white flex items-center gap-2 px-[0.833vw] py-[0.417vw] rounded-sm text-[0.781vw] font-bold cursor-pointer">
              <CirclePlus color="#ffffff" strokeWidth={2.5} className="w-[1.042vw]" />
              {btnText}
            </DialogTrigger>
            <AddNewCompanyDialog open={open} setOpen={setOpen} />
          </Dialog>
        )}

        {pathname === "/settings/my-profile" && (
          <Button
            variant="outline"
            className="bg-primary text-white flex items-center gap-2 px-[0.833vw] py-[0.417vw] rounded-sm text-[0.781vw] font-bold cursor-pointer"
          >
            {btnText}
          </Button>
        )}
      </div>
      {children}
    </div>
  );
};

export default SettingsLayout;
