"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

export default function CompanyPage() {
  const router = useRouter();

  const handleSaveAndContinue = () => {
    router.push("/onboarding/link-account");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container max-w-3xl px-4 py-8">
      <div className="mb-8">
        <Progress value={66} className="h-2" />
      </div>

      <Card className="p-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-center">About Your Company</h1>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Company Info</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input placeholder="Enter company name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Year Founded</label>
                    <Select>
                      <SelectTrigger>
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
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Month Founded</label>
                    <Select>
                      <SelectTrigger>
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
                  <div className="space-y-2">
                    <label className="text-sm font-medium">State Registered</label>
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
                    <label className="text-sm font-medium">Business Entity Type</label>
                    <Select>
                      <SelectTrigger>
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

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Bio and Overview</label>
                  <Textarea placeholder="Tell us about your company..." className="min-h-[100px]" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Company Type</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Model Type</label>
                <div className="grid grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto py-4 px-6 flex flex-col items-center justify-center space-y-2"
                  >
                    <span className="font-medium">B2B</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-4 px-6 flex flex-col items-center justify-center space-y-2"
                  >
                    <span className="font-medium">B2C</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto py-4 px-6 flex flex-col items-center justify-center space-y-2"
                  >
                    <span className="font-medium">B2G</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-6">
            <Button variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleSaveAndContinue}>Save & Continue</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
