"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
interface User {
  id: string;
  name: string;
  email?: string;
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

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUserToggle = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
    );
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
    // Remove spaces and convert to lowercase for consistent seed generation
    const seed = name.toLowerCase().replace(/\s+/g, "");
    return `https://api.dicebear.com/7.x/micah/svg?seed=${seed}`;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <Input
              placeholder="Search users by name or email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
            />
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
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
          <div className="space-y-4">
            <h3 className="font-medium">Select Analytics to Share</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>Gross Profit</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>MRR/ARR</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>ACV</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span>CAC</span>
              </label>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-medium">Confirm Sharing Settings</h3>
            <div className="space-y-2">
              <p>Selected Users: {selectedUsers.length}</p>
              <p>Selected Metrics: All</p>
              <p>Access Level: View Only</p>
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
              <Button variant="ghost" size="icon" className="mr-2" onClick={handleBack}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            <DialogTitle className="text-lg font-semibold">
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
