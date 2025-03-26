"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, Shield, Eye, Edit2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
interface User {
  id: string;
  name: string;
  email?: string;
  accessLevel?: "view" | "edit";
}

const mockUsers: User[] = [
  { id: "1", name: "Julie Dowson" },
  { id: "2", name: "Daniel Jones" },
  { id: "3", name: "Lewis" },
  { id: "4", name: "Loki Ferguson" },
  { id: "5", name: "Samuel Hopes" },
  { id: "6", name: "Nick" },
  { id: "7", name: "Jenni R" },
];

interface ShareAnalyticsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ShareAnalyticsDialog({ open, onOpenChange }: ShareAnalyticsDialogProps) {
  const [step, setStep] = React.useState(1);
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedMetrics, setSelectedMetrics] = React.useState<string[]>([]);
  const [defaultAccessLevel, setDefaultAccessLevel] = React.useState<"view" | "edit">("view");
  const [userAccessLevels, setUserAccessLevels] = React.useState<Record<string, "view" | "edit">>(
    {}
  );

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const metrics = [
    "MRR/ARR",
    "ACV",
    "CAC",
    "LTV/CAC",
    "CAC Payback",
    "Chrun/Customer Retention",
    "Net Dollar Retention",
    "Cash Burn/Cash Flow",
    "Expansion/Contraction",
    "Gross Profit/Gross Margin",
    "Burn Multiple",
    "Net Income",
    "MOM Growth/YOY Growth",
  ];

  const handleUserToggle = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
  };

  const handleMetricToggle = (metric: string) => {
    setSelectedMetrics((prev) =>
      prev.includes(metric) ? prev.filter((m) => m !== metric) : [...prev, metric]
    );
  };

  const handleSelectAll = () => {
    if (selectedMetrics.length === metrics.length) {
      setSelectedMetrics([]);
    } else {
      setSelectedMetrics([...metrics]);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const getAvatarUrl = (name: string) => {
    const seed = name.toLowerCase().replace(/\s+/g, "");
    return `https://api.dicebear.com/7.x/micah/svg?seed=${seed}`;
  };

  const handleAccessLevelChange = (userId: string, level: "view" | "edit") => {
    setUserAccessLevels((prev) => ({
      ...prev,
      [userId]: level,
    }));
  };

  const handleDefaultAccessLevelChange = (level: "view" | "edit") => {
    setDefaultAccessLevel(level);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 min-h-[500px]">
            <p className="text-sm">
              Select the users with whom you want to share your analytics data with.
            </p>
            <Label className="text-sm text-[#181818] font-medium">Search users</Label>
            <Input
              placeholder="Search users by name or email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
              size="lg"
            />
            <div className="space-y-2 max-h-[350px] overflow-y-auto">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-[#EFF4FF]/70 cursor-pointer transition-colors"
                  onClick={() => handleUserToggle(user.id)}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={getAvatarUrl(user.name)}
                      alt={user.name}
                      className="rounded-full bg-gray-50"
                      width={40}
                      height={40}
                      unoptimized
                      priority
                    />
                    <span>{user.name}</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full relative transition-all ${
                      selectedUsers.includes(user.id)
                        ? "border-[#3064F6]"
                        : "border-2 border-[#2A2A2A] hover:border-[#3064F6]"
                    }`}
                  >
                    {selectedUsers.includes(user.id) && (
                      <>
                        <div className="absolute inset-0 rounded-full border-2 border-[#3064F6]" />
                        <div className="absolute inset-[4px] rounded-full bg-[#3064F6]" />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col h-[500px]">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                Choose the charts and analytics you wish to share with the investors.
              </p>
              <div className="flex items-center justify-between">
                <Label className="text-sm text-[#181818] font-medium">Select Chart</Label>
                <button
                  onClick={handleSelectAll}
                  className="text-sm text-[#3064F6] hover:text-[#3064F6]/90 font-medium"
                >
                  Select All
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto pr-1 -mr-2">
              {metrics.map((metric) => (
                <div
                  key={metric}
                  className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-[#EFF4FF]/70 cursor-pointer transition-colors mb-2 last:mb-0"
                  onClick={() => handleMetricToggle(metric)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#EFF4FF] flex items-center justify-center">
                      <Image
                        src="/svgs/chart-icon.svg"
                        alt="Chart"
                        width={16}
                        height={16}
                        className="text-[#3064F6]"
                      />
                    </div>
                    <span className="text-[15px]">{metric}</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full relative transition-all ${
                      selectedMetrics.includes(metric)
                        ? "border-[#3064F6]"
                        : "border-2 border-[#2A2A2A] hover:border-[#3064F6]"
                    }`}
                  >
                    {selectedMetrics.includes(metric) && (
                      <>
                        <div className="absolute inset-0 rounded-full border-2 border-[#3064F6]" />
                        <div className="absolute inset-[4px] rounded-full bg-[#3064F6]" />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto pr-1 -mr-2">
              <div className="space-y-4">
                <div>
                  <h3 className="text-[15px] font-medium mb-3">
                    Selected Users ({selectedUsers.length})
                  </h3>
                  <div className="flex flex-col gap-2">
                    {mockUsers
                      .filter((user) => selectedUsers.includes(user.id))
                      .map((user) => (
                        <div
                          key={user.id}
                          className="flex items-center justify-between bg-white rounded-lg px-3 py-2 w-full"
                        >
                          <div className="flex items-center gap-2">
                            <Image
                              src={getAvatarUrl(user.name)}
                              alt={user.name}
                              className="w-8 h-8 rounded-full bg-gray-50"
                              width={32}
                              height={32}
                              unoptimized
                              priority
                            />
                            <span className="text-sm font-medium">{user.name}</span>
                          </div>
                          <Select
                            value={userAccessLevels[user.id] || defaultAccessLevel}
                            onValueChange={(value: "view" | "edit") =>
                              handleAccessLevelChange(user.id, value)
                            }
                          >
                            <SelectTrigger className="w-[110px] bg-[#EFF4FF] border-0 text-[#3064F6] font-medium hover:bg-[#EFF4FF]/80">
                              <SelectValue placeholder="Access" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="view" className="text-sm">
                                <div className="flex items-center gap-2">
                                  <Eye className="w-3 h-3" />
                                  <span className="text-[12px]">View</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="edit" className="text-sm">
                                <div className="flex items-center gap-2">
                                  <Edit2 className="w-3 h-3" />
                                  <span className="text-[12px]">Edit</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[15px] font-medium mb-3">
                    Selected Metrics ({selectedMetrics.length})
                  </h3>
                  <div className="bg-white rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {selectedMetrics.map((metric) => (
                        <div key={metric} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#EFF4FF] flex items-center justify-center">
                            <Image
                              src="/svgs/chart-icon.svg"
                              alt="Chart"
                              width={12}
                              height={12}
                              className="text-[#3064F6]"
                            />
                          </div>
                          <span className="text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-[#EFF4FF]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#EFF4FF] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#3064F6]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Default Access Level</h4>
                        <p className="text-[12px] text-gray-600">Applied to new users</p>
                      </div>
                    </div>
                    <Select
                      value={defaultAccessLevel}
                      onValueChange={handleDefaultAccessLevelChange}
                    >
                      <SelectTrigger className="w-[110px] bg-[#EFF4FF] border-0 text-[#3064F6] font-medium hover:bg-[#EFF4FF]/80">
                        <SelectValue placeholder="Access" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="view" className="text-sm">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            <span className="text-[12px]">View</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="edit" className="text-sm">
                          <div className="flex items-center gap-2">
                            <Edit2 className="w-3 h-3" />
                            <span className="text-[12px]">Edit</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#EFF4FF] p-0">
        <DialogHeader className="border-b pb-4 px-6 pt-6">
          <div className="flex items-center">
            {step > 1 && (
              <Button variant="ghost" size="icon" className="mr-4 -ml-2" onClick={handleBack}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            <DialogTitle className="text-[22px] font-semibold">
              {step === 1 ? "Share Analytics" : step === 2 ? "Select Metrics" : "Confirm Sharing"}
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="p-6">{renderStepContent()}</div>
        <div className="px-6 pb-6">
          <Button
            onClick={() => (step === 3 ? onOpenChange(true) : handleNext())}
            className="w-full h-[40px] cursor-pointer font-medium"
          >
            {step === 3 ? "Share" : "Next"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
