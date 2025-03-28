"use client";

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
import { countries } from "@/utils/countries";

const teamSizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
];

const workStyles = ["Remote", "Hybrid", "In-office"];

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
      <div className="w-full max-w-3xl mb-24">
        <div className="space-y-8 p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-primary">Company Info</h2>
              <div className="space-y-4">
                <div className="space-y-2 w-full">
                  <label className="text-sm font-medium">Company Name</label>
                  <Input placeholder="Enter company name" className="w-full" size="lg" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 w-full">
                    <label className="text-sm font-medium">Year Founded</label>
                    <Select>
                      <SelectTrigger className="w-full" size="lg">
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
                      <SelectTrigger className="w-full" size="lg">
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
                      <SelectTrigger className="w-full" size="lg">
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
                      <SelectTrigger className="w-full" size="lg">
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
                  {["B2B", "B2C", "B2G", "B2B2C", "C2C", "C2B"].map((type) => (
                    <Button
                      key={type}
                      variant={selectedBusinessType === type ? "default" : "outline"}
                      className="h-[48px] w-[206.67px] flex items-center justify-center"
                      onClick={() => setSelectedBusinessType(type)}
                    >
                      <span className="font-medium">{type}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium">Industry vertical</label>
              <Select>
                <SelectTrigger className="w-full" size="lg">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="real_estate">Real Estate</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="media">Media & Entertainment</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Company Location */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-[#4361EE]">Company Location</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Country</label>
                <Select>
                  <SelectTrigger className="w-full" size="lg">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem
                        key={country.code}
                        value={country.code}
                        className="flex items-center gap-2"
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span>{country.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">City</label>
                <Input placeholder="City" size="lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">State</label>
                <Select>
                  <SelectTrigger className="w-full" size="lg">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="AK">Alaska</SelectItem>
                    <SelectItem value="AZ">Arizona</SelectItem>
                    <SelectItem value="AR">Arkansas</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="CO">Colorado</SelectItem>
                    <SelectItem value="CT">Connecticut</SelectItem>
                    <SelectItem value="DE">Delaware</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="GA">Georgia</SelectItem>
                    <SelectItem value="HI">Hawaii</SelectItem>
                    <SelectItem value="ID">Idaho</SelectItem>
                    <SelectItem value="IL">Illinois</SelectItem>
                    <SelectItem value="IN">Indiana</SelectItem>
                    <SelectItem value="IA">Iowa</SelectItem>
                    <SelectItem value="KS">Kansas</SelectItem>
                    <SelectItem value="KY">Kentucky</SelectItem>
                    <SelectItem value="LA">Louisiana</SelectItem>
                    <SelectItem value="ME">Maine</SelectItem>
                    <SelectItem value="MD">Maryland</SelectItem>
                    <SelectItem value="MA">Massachusetts</SelectItem>
                    <SelectItem value="MI">Michigan</SelectItem>
                    <SelectItem value="MN">Minnesota</SelectItem>
                    <SelectItem value="MS">Mississippi</SelectItem>
                    <SelectItem value="MO">Missouri</SelectItem>
                    <SelectItem value="MT">Montana</SelectItem>
                    <SelectItem value="NE">Nebraska</SelectItem>
                    <SelectItem value="NV">Nevada</SelectItem>
                    <SelectItem value="NH">New Hampshire</SelectItem>
                    <SelectItem value="NJ">New Jersey</SelectItem>
                    <SelectItem value="NM">New Mexico</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="NC">North Carolina</SelectItem>
                    <SelectItem value="ND">North Dakota</SelectItem>
                    <SelectItem value="OH">Ohio</SelectItem>
                    <SelectItem value="OK">Oklahoma</SelectItem>
                    <SelectItem value="OR">Oregon</SelectItem>
                    <SelectItem value="PA">Pennsylvania</SelectItem>
                    <SelectItem value="RI">Rhode Island</SelectItem>
                    <SelectItem value="SC">South Carolina</SelectItem>
                    <SelectItem value="SD">South Dakota</SelectItem>
                    <SelectItem value="TN">Tennessee</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    <SelectItem value="UT">Utah</SelectItem>
                    <SelectItem value="VT">Vermont</SelectItem>
                    <SelectItem value="VA">Virginia</SelectItem>
                    <SelectItem value="WA">Washington</SelectItem>
                    <SelectItem value="WV">West Virginia</SelectItem>
                    <SelectItem value="WI">Wisconsin</SelectItem>
                    <SelectItem value="WY">Wyoming</SelectItem>
                    <SelectItem value="DC">District of Columbia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Zip Code</label>
                <Input placeholder="Zip Code" size="lg" />
              </div>
            </div>
          </div>

          {/* Team Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-[#4361EE]">Team Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Team Size</label>
                <Select>
                  <SelectTrigger className="w-full" size="lg">
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Work Style</label>
                <Select>
                  <SelectTrigger className="w-full" size="lg">
                    <SelectValue placeholder="Select One" />
                  </SelectTrigger>
                  <SelectContent>
                    {workStyles.map((style) => (
                      <SelectItem key={style} value={style}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Founders Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-[#4361EE]">Founders Information</h2>
            <div className="space-y-2">
              <label className="text-sm font-medium">Background of The Founders</label>
              <Textarea
                placeholder="Tell us about the founders..."
                className="min-h-[150px] resize-none w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <BottomNav onBack={handleBack} onNext={handleSaveAndContinue} nextLabel="Save & Continue" />
    </>
  );
}
