"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, CirclePlus } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { FileFormDialog } from "@/components/file-form-dialog";

const dataRoomTitles: { [key: string]: string } = {
  "/data-room": "Data Room",
  "/data-room/company-documents": "Company Documents",
  "/data-room/financial": "Financial",
  "/data-room/previous-funding": "Previous Funding",
  "/data-room/staff": "Staff",
  "/data-room/others": "Others",
  "/data-room/intellectual-property": "Intellectual Property",
  "/data-room/legal": "Legal",
};


export default function DataRoomLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const title = dataRoomTitles[pathname] || "Data Room";

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#EFF4FF] h-screen w-full">
      <div className="flex items-center justify-between py-[1.25vw] px-[1.563vw] border-b border-gray-200">
        <h1 className="flex items-center gap-2 text-[1.146vw] font-bold   ">
          {pathname !== "/data-room" && (
            <Link href="/data-room">
              <ChevronLeft size={32} color="#000000" />
            </Link>
          )}
          {title}
        </h1>
        {pathname !== "/data-room" && (
          <div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="bg-primary text-white flex items-center gap-2 px-[0.833vw] py-[0.417vw] rounded-md text-[0.781vw] font-bold cursor-pointer">
                <CirclePlus  color="#ffffff" strokeWidth={2.5} className="w-[1.042vw]" />
                Add New File
              </DialogTrigger>
              <FileFormDialog
                open={open}
                onOpenChange={setOpen}
                mode="add"
        />
            </Dialog>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
