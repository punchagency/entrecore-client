"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import Image from "next/image";
import pdfIcon from "@/public/Svgs/pdf-icon.svg";
import excelIcon from "@/public/Svgs/xls-icon.svg";
import docIcon from "@/public/Svgs/docx-icon.svg";
import { EllipsisVertical, Search, Trash, Trash2 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FileFormDialog } from "@/components/file-form-dialog";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DeleteFileDialog from "@/components/delete-file-dialog";

const CompanyDocuments = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const data = [
    {
      id: 1,
      name: "Composite File Name.doc",
      description: "This is the dummy description being put to use for only design purpose...",
      AddedOn: "21/03/2025",
    },
    {
      id: 2,
      name: "Composite File Name.xls",
      description: "This is the dummy description being put to use for only design purpose...",
      AddedOn: "21/03/2025",
    },
    {
      id: 3,
      name: "Composite File Name.pdf",
      description: "This is the dummy description being put to use for only design purpose...",
      AddedOn: "21/03/2025",
    },
    {
      id: 4,
      name: "Composite File Name.xls",
      description: "This is the dummy description being put to use for only design purpose...",
      AddedOn: "21/03/2025",
    },
    {
      id: 5,
      name: "Composite File Name.pdf",
      description: "This is the dummy description being put to use for only design purpose...",
      AddedOn: "21/03/2025",
    },
    {
      id: 6,
      name: "Composite File Name.doc",
      description: "This is the dummy description being put to use for only design purpose...",
      AddedOn: "21/03/2025",
    },
  ];

  const getFileIcon = (fileName: string) => {
    const extension = fileName?.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "pdf":
        return pdfIcon;
      case "xls":
        return excelIcon;
      case "doc":
        return docIcon;
      default:
        return docIcon;
    }
  };

  return (
    <div className="flex flex-col items-start px-[1.563vw]">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-[1.146vw] font-bold py-[1.763vw]  ">Added Documents</h3>
        <div className="relative w-[10.417vw]">
          <Search
            color="#000000"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-[1.042vw]"
          />
          <Input type="text" placeholder="Search" className="w-full rounded-full pl-[2.321vw] pr-[0.208vw]" />
        </div>
      </div>
      <div className="w-full">
        <Table>
          <TableHeader className="border-none">
            <TableRow className="text-[0.677vw] font-medium">
              <TableHead className=" text-[#18181880]">File Name</TableHead>
              <TableHead className=" text-[#18181880]">Description</TableHead>
              <TableHead className="text-[#18181880] ">Added On</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-[0.885vw]  font-medium gap-[0.521vw]">
            {data.map((item) => (
              <TableRow className="bg-white" key={item.id}>
                <TableCell className="font-medium first:rounded-tl-[0.321vw] first:rounded-bl-[0.321vw]">
                  <div className="flex items-center gap-2">
                    <div className="rounded-[0.125vw] bg-[#EFF4FF] flex items-center justify-center p-[0.325vw]">
                      <Image src={getFileIcon(item.name)} alt="pdf" width={20} height={20} />
                    </div>
                    {item.name}
                  </div>
                </TableCell>

                <TableCell>
                  {" "}
                  <Popover>
                    <PopoverTrigger>{item.description}</PopoverTrigger>{" "}
                    <PopoverContent className="w-[17.396vw] bg-[#192131] text-white relative before:content-[''] before:absolute before:-top-2 before:left-[50%] before:translate-x-[-50%] before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:border-b-[8px] before:border-b-[#192131]">
                      <p>{item.description}</p>
                    </PopoverContent>
                  </Popover>
                </TableCell>
                <TableCell className="last:rounded-tr-[0.321vw] last:rounded-br-[0.321vw]">
                  <div className="flex items-center justify-between gap-2">
                    {item.AddedOn}
                    <DropdownMenu>
                      {" "}
                      <DropdownMenuTrigger>
                        <EllipsisVertical size={24} color="black" className="cursor-pointer" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="mr-12 font-bold ">
                        <DropdownMenuItem
                          onSelect={(event) => {
                            event.preventDefault();
                            setSelectedItem(item);
                            setEditOpen(true);
                          }}
                        >
                          Edit
                        </DropdownMenuItem>
                        <FileFormDialog
                          open={editOpen}
                          onOpenChange={setEditOpen}
                          mode="edit"
                          initialData={selectedItem}
                        />
                        <DropdownMenuItem>Download</DropdownMenuItem>
                        <DropdownMenuItem
                          onSelect={(event) => {
                            event.preventDefault();
                            setSelectedItem(item);
                            setDeleteOpen(true);
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                        <DeleteFileDialog
                          deleteOpen={deleteOpen}
                          setDeleteOpen={setDeleteOpen}
                          selectedItem={selectedItem}
                          getFileIcon={getFileIcon}
                        />

                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <hr className="w-full border-gray-200 my-[1.25vw]" />
      </div>
    </div>
  );
};

export default CompanyDocuments;
