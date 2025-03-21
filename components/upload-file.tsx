import { Upload } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadComponent = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    }
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2 font-medium">
          <Upload size={24} className="" />
          <p className="text-base">
            <span className=" underline">Click to Upload</span>
            {" or Drag & Drop"}
          </p>
        </div>
      </div>
          <p className="text-sm text-gray-500 my-4">
            Supported file types .doc, .docx, .pdf, .xls, .xlsx
          </p>
      {file && (
        <p className="mt-2 text-sm text-gray-600">
          Selected file: {file.name}
        </p>
      )}
    </div>
  );
};

export default UploadComponent;
