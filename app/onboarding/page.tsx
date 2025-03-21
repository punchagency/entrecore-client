"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/bottom-nav";

export default function OnboardingPage() {
  const router = useRouter();
  //const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSaveAndContinue = () => {
    router.push("/onboarding/company");
  };

  return (
    <>
      <Card className="w-full max-w-3xl mb-24">
        <div className="space-y-8 p-6">
          <div className="space-y-6">
            {/* Location Section */}
            <div>
              <h2 className="text-primary text-sm font-medium mb-6">Location</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">Country</label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Country" />
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
                    <Input placeholder="City" className="h-11" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">State</label>
                    <Select>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="State" />
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
                    <Input placeholder="Zip Code" className="h-11" />
                  </div>
                </div>
              </div>
            </div>

            {/* Social Section */}
            <div>
              <h2 className="text-primary text-sm font-medium mb-6">Social</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">LinkedIn Profile URL</label>
                <Input placeholder="https://www..." className="h-11" />
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-primary text-sm font-medium mb-6">Education</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">University</label>
                  <Input placeholder="University" className="h-11" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Highest Level Completed</label>
                  <Select>
                    <SelectTrigger className="h-11">
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

            {/* Profile Image Section */}
            {/* <div>
              <h2 className="text-primary text-sm font-medium mb-6">Profile Image</h2>
              <div className="space-y-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileUpload}
                />
                <div className="flex items-start gap-4">
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="h-11"
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
            </div> */}
          </div>
        </div>
      </Card>

      <BottomNav onNext={handleSaveAndContinue} nextLabel="Save & Continue" />
    </>
  );
}
