"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size and dimensions
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          if (img.width < 400 || img.height < 400) {
            alert("Image must be at least 400x400 pixels");
            return;
          }
          if (img.width !== img.height) {
            alert("Image must have a 1:1 aspect ratio");
            return;
          }
          setPreviewUrl(e.target?.result as string);
          setSelectedFile(file);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAndContinue = () => {
    router.push("/onboarding/company");
  };

  const handleSkip = () => {
    router.push("/onboarding/company");
  };

  return (
    <div className="container max-w-3xl px-4 py-8">
      <div className="mb-8">
        <Progress value={33} className="h-2" />
      </div>

      <Card className="p-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-center">Tell Us About Yourself</h1>
            <p className="text-muted-foreground text-center">Help us personalize your experience</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Location</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Country</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      {/* Add more countries */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <Input placeholder="Enter city" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">State</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="ny">New York</SelectItem>
                      {/* Add more states */}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Zip Code</label>
                  <Input placeholder="Enter zip code" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Social</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">LinkedIn Profile URL</label>
                <Input placeholder="https://www.linkedin.com/in/..." />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Education</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">University</label>
                  <Input placeholder="Enter university name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Highest Level Completed</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">Ph.D.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Profile Image</h2>
              <div className="space-y-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    className="w-[150px]"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Upload Image
                  </Button>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground">
                      Min. 400x400px
                      <br />
                      1:1 Aspect Ratio
                    </p>
                    {selectedFile && (
                      <p className="text-sm text-primary">Selected: {selectedFile.name}</p>
                    )}
                  </div>
                </div>
                {previewUrl && (
                  <div className="mt-4">
                    <Image
                      src={previewUrl}
                      alt="Profile preview"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <Button variant="ghost" onClick={handleSkip}>
              Skip
            </Button>
            <Button onClick={handleSaveAndContinue}>Save & Continue</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
