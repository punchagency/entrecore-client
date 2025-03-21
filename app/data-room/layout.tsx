"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import UploadComponent from "@/components/upload-file";

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

  const handleAdd = () => {
    console.log("Add");
  };

  return (
    <div className="bg-[#EFF4FF] h-screen">
      <div className="flex items-center justify-between py-[1.25vw] px-[1.563vw] border-b border-gray-200">
        <h1 className="flex items-center gap-2 text-[1.146vw] font-bold   ">
          {pathname !== "/data-room" && (
            <Link href="/data-room">
              <ChevronLeft size={32} color="#000000" />
            </Link>
          )}
          {title}
        </h1>
        <div>
          <Dialog>
            <DialogTrigger className="bg-primary text-white flex items-center gap-2 px-[0.833vw] py-[0.417vw] rounded-md text-[0.781vw] font-bold cursor-pointer">
              <CirclePlus size={24} color="#ffffff" strokeWidth={2.5} />
              Add New File
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New File</DialogTitle>
                <hr className="w-full border-gray-200 my-[0.25vw]" />
              </DialogHeader>
              <div className="flex flex-col gap-2">
                <Label className="text-[0.781vw] font-bold">File Name</Label>
                <Input type="text" placeholder="File Name" name="file-name" />
                <Label className="text-[0.781vw] font-bold">Category</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="company-documents">Company Documents</SelectItem>
                    <SelectItem value="financial">Financial</SelectItem>
                    <SelectItem value="previous-funding">Previous Funding</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                    <SelectItem value="intellectual-property">Intellectual Property</SelectItem>
                    <SelectItem value="legal">Legal</SelectItem>
                  </SelectContent>
                </Select>

                <Label className="text-[0.781vw] font-bold">Description</Label>
                <Textarea placeholder="Description" name="description" className="h-[6vw]" />
                <Label className="text-[0.781vw] font-bold">Upload File</Label>
                <UploadComponent />
                <DialogClose asChild>
                <Button 
                  className="bg-primary text-white py-6 cursor-pointer" 
                  onClick={handleAdd}
                >
                  Add
                </Button>
              </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {children}
    </div>
  );
}
