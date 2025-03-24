"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface UploadComponentProps {
  onFileSelect: (file: File) => void;
  value?: File | null;
}

const UploadComponent = ({ onFileSelect, value }: UploadComponentProps) => {
  const [file, setFile] = useState<File | null>(value || null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    maxFiles: 1,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed border-[#757575] bg-white rounded-sm p-8 text-center cursor-pointer transition-colors",
          isDragActive && "border-primary bg-primary/5",
          file && "border-primary"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2 text-soft-black">
          {!file && <Upload size={24} className="" />}
          {file ? (
            <div className="flex items-center gap-2">
              <p className="text-[0.825vw] text-gray font-bold">Selected: {file.name}</p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  onFileSelect(null as any);
                }}
                className="text-xs text-red-500 hover:text-red-600"
              >
                <X size={26} className="rounded-full p-1 cursor-pointer" />
              </button>
            </div>
          ) : (
            <p className="text-[0.729vw] font-medium">
              <span className="border-b border-[#181818]">Click to Upload</span>
              {" or Drag & Drop"}
            </p>
          )}
        </div>
      </div>
      <p className="text-[0.625vw] text-gray mt-[0.75vw] mb-[0.5vw] font-medium">Supported file types: .doc, .docx, .pdf, .xls, .xlsx</p>
    </div>
  );
};

export default UploadComponent;
