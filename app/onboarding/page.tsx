"use client";

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

  const handleSaveAndContinue = () => {
    router.push("/onboarding/company");
  };

  return (
    <>
      <div className="w-full max-w-3xl mb-24">
        <div className="space-y-8 p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-primary text-sm font-medium mb-6">Location</h2>
              <div className="space-y-4">
                <div className="w-full grid grid-cols-2 gap-8">
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">Country</label>
                    <Select>
                      <SelectTrigger className="w-full" size="lg">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">City</label>
                    <Input placeholder="City" className="h-11" size={"lg"} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">State</label>
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
                    <label className="text-sm font-medium">Zip Code</label>
                    <Input placeholder="Zip Code" size={"lg"} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-primary text-sm font-medium mb-6">Social</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">LinkedIn Profile URL</label>
                <Input placeholder="https://www..." className="w-full" size={"lg"} />
              </div>
            </div>

            <div>
              <h2 className="text-primary text-sm font-medium mb-6">Education</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium">University</label>
                  <Input placeholder="University" size={"lg"} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Highest Level Completed</label>
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
          </div>
        </div>
      </div>

      <BottomNav onNext={handleSaveAndContinue} nextLabel="Save & Continue" />
    </>
  );
}
