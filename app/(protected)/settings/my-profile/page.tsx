"use client";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const MyProfilePage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full flex items-center justify-center bg-[#EFF4FF]">
      <div className="space-y-8 p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-primary text-sm font-medium mb-3">Name</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                </div>
                <Input placeholder="First Name" className="h-11" size={"lg"} />
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                </div>
                <Input placeholder="Last Name" className="h-11" size={"lg"} />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-primary text-sm font-medium mb-3">Location</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium ">City</label>
                </div>
                <Input placeholder="City" className="h-11" size={"lg"} />
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium">State</label>
                </div>
                <Select>
                  <SelectTrigger className="w-full" size="lg">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium">Zip Code</label>
                </div>
                <Input placeholder="Zip Code" size={"lg"} />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-primary text-sm font-medium mb-3">Social</h2>
            <div className="space-y-2">
              <div>
                <label className="text-sm font-medium">LinkedIn Profile URL</label>
              </div>
              <Input placeholder="https://www..." className="w-full" size={"lg"} />
            </div>
          </div>

          <div>
            <h2 className="text-primary text-sm font-medium mb-3">Education</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium">University</label>
                </div>
                <Input placeholder="University" size={"lg"} />
              </div>
              <div className="space-y-2">
                <div>
                  <label className="text-sm font-medium">Highest Level Completed</label>
                </div>
                <Select>
                  <SelectTrigger className="w-full" size={"lg"}>
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
                    <SelectItem value="masters">Master&apos;s Degree</SelectItem>
                    <SelectItem value="phd">Ph.D.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-primary text-sm font-medium mb-3">Experience</h2>
            <div className="space-y-2">
              <div>
                <label className="text-sm font-medium">Profile Image</label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-[8.773vw]">
                    <Input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center gap-2 p-[0.833vw] bg-white border rounded-sm cursor-pointer hover:bg-gray-50"
                    >
                      <PlusCircle className="w-4 h-4 text-soft-black" />
                      <span className="text-soft-black text-[0.781vw] font-bold">Upload Image</span>
                    </label>
                  </div>
                  <div className="border-l border-soft-black pl-4 w-[7.773vw]">
                    <p className="text-soft-black text-[0.781vw] font-medium">
                      Min. 400x400px 1:1 Aspect Ratio
                    </p>
                  </div>
                </div>
                <div className="w-[4.167vw] h-[4.167vw] rounded-sm border border-[#D9DBDD] flex items-center justify-center bg-gray-50 overflow-hidden">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      alt="Profile preview"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
