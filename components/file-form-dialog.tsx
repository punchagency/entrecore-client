"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import UploadComponent from "@/components/upload-file";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import pdfIcon from "@/public/Svgs/pdf-icon.svg";
import excelIcon from "@/public/Svgs/xls-icon.svg";
import docIcon from "@/public/Svgs/docx-icon.svg";
import fileChangeIcon from "@/public/Svgs/file-change-icon.svg";

interface FileFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "add" | "edit";
  initialData?: any;
}

const addFormSchema = z.object({
  fileName: z.string().min(1, "File name is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  file: z.any().refine((file) => file, "File is required"),
});

const editFormSchema = z.object({
    fileName: z.string().min(1, "File name is required"),
    category: z.string().optional(),
    description: z.string().min(1, "Description is required"),
    file: z.any().optional()
  });

type FormData = z.infer<typeof addFormSchema | typeof editFormSchema>;

export function FileFormDialog({ open, onOpenChange, mode, initialData }: FileFormDialogProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(mode === 'add' ? addFormSchema : editFormSchema),
    defaultValues: {
      fileName: initialData?.name || "",
      category: initialData?.category || "",
      description: initialData?.description || "",
      file: initialData?.file || null,
    },
  });


  const [itemdata, setItemData] = useState(initialData);

  console.log(itemdata);

  useEffect(() => {
    if (initialData && open) {
      setItemData(initialData);
      form.reset({
        fileName: initialData.name,
        category: initialData.category || "",
        description: initialData.description,
        file: null,
      });
    }
  }, [initialData, open, form]);

  const handleSubmit = (values: FormData) => {
    form.reset();
    onOpenChange(false);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("file", file);
    }
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    console.log(extension);
    switch (extension) {
      case "pdf":
        return pdfIcon;
      case "xls":
        return excelIcon;
      case "xlsx":
        return excelIcon;
      case "doc":
        return docIcon;
      case "docx":
        return docIcon;
      default:
        return docIcon;
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#EFF4FF]" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Add New File" : "Edit File"}</DialogTitle>
          <hr className="w-full border-gray-200 my-[0.25vw]" />
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fileName"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[0.781vw] font-bold">File Name</Label>
                  <FormControl>
                    <Input placeholder="File Name" className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[0.781vw] font-bold">Category</Label>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-[0.781vw] font-bold">Description</Label>
                  <FormControl>
                    <Textarea
                      placeholder="File Description"
                      className="h-[6vw] bg-white resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {mode === "add" && (
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-[0.781vw] font-bold">
                      Upload{field.value ? "ed" : ""} File
                    </Label>
                    <FormControl>
                      <UploadComponent onFileSelect={(file) => field.onChange(file)} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {mode === "edit" && itemdata && (
              <>
                <div className="flex items-center justify-between gap-2 bg-white p-[0.417vw] rounded-md text-[0.885vw] font-medium">
                  <div className="flex items-center gap-2">
                    <div className="rounded-[0.125vw] bg-[#EFF4FF] flex items-center justify-center p-[0.325vw]">
                      <Image src={getFileIcon(form.watch("file")?.name || itemdata.name)} alt="pdf" width={20} height={20} />
                    </div>
                    {form.watch("file") ? form.watch("file").name : itemdata.name}
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => fileInputRef.current?.click()}
                    type="button"
                  >
                    <Image src={fileChangeIcon} alt="file-change" width={20} height={20} />
                  </Button>
                </div>
                <p className="text-[0.625vw] text-gray mt-[0.75vw] mb-[1.5vw] font-medium">
                  Supported file types: .doc, .docx, .pdf, .xls, .xlsx
                </p>
              </>
            )}

            <Button type="submit" className="bg-primary text-white py-6 cursor-pointer w-full">
              {mode === "add" ? "Add" : "Update"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
