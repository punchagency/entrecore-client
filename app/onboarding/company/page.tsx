"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BottomNav } from "@/components/bottom-nav";

export default function CompanyPage() {
  const router = useRouter();
  const [selectedBusinessType, setSelectedBusinessType] = useState<string | null>(null);

  const handleSaveAndContinue = () => {
    router.push("/onboarding/link-account");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Card className="w-full max-w-3xl mb-24">
        <div className="space-y-8 p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Company Info</h2>
              <div className="space-y-4">
                <div className="space-y-2 w-full">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input placeholder="Enter company name" className="h-11 w-full" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">Year Founded</label>
                    <Select>
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 124 }, (_, i) => (
                          <SelectItem key={2024 - i} value={(2024 - i).toString()}>
                            {2024 - i}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">Month Founded</label>
                    <Select>
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">January</SelectItem>
                        <SelectItem value="2">February</SelectItem>
                        <SelectItem value="3">March</SelectItem>
                        <SelectItem value="4">April</SelectItem>
                        <SelectItem value="5">May</SelectItem>
                        <SelectItem value="6">June</SelectItem>
                        <SelectItem value="7">July</SelectItem>
                        <SelectItem value="8">August</SelectItem>
                        <SelectItem value="9">September</SelectItem>
                        <SelectItem value="10">October</SelectItem>
                        <SelectItem value="11">November</SelectItem>
                        <SelectItem value="12">December</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">State Registered</label>
                    <Select>
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="ny">New York</SelectItem>
                        {/* Add more states */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">Business Entity Type</label>
                    <Select>
                      <SelectTrigger className="h-11 w-full">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="sole_proprietorship">Sole Proprietorship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label className="text-sm font-medium">Company Bio and Overview</label>
                  <Textarea
                    placeholder="Tell us about your company..."
                    className="min-h-[100px] resize-none w-full"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Company Type</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Model Type</label>
                <div className="grid grid-cols-3 gap-4">
                  {["B2B", "B2C", "B2G"].map((type) => (
                    <Button
                      key={type}
                      variant={selectedBusinessType === type ? "default" : "outline"}
                      className="h-auto py-4 px-6 flex flex-col items-center justify-center w-full"
                      onClick={() => setSelectedBusinessType(type)}
                    >
                      <span className="font-medium">{type}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <BottomNav onBack={handleBack} onNext={handleSaveAndContinue} nextLabel="Save & Continue" />
    </>
  );
}
