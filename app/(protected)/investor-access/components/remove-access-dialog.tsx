import React from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface RemoveAccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  investor: {
    id: string;
    name: string;
  } | null;
  onRemoveAccess: (investorId: string) => void;
}

export function RemoveAccessDialog({
  isOpen,
  onClose,
  investor,
  onRemoveAccess,
}: RemoveAccessDialogProps) {
  const handleRemove = () => {
    if (investor) {
      onRemoveAccess(investor.id);
      toast.success("Investor access removed successfully");
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] p-6">
        <div className="flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
            <Trash2 className="h-5 w-5 text-red-500" />
          </div>
          <DialogTitle className="text-xl font-semibold mb-4">Remove Investor Access</DialogTitle>
          <div className="w-full p-4 bg-[#F8F9FC] rounded-lg mb-6">
            <p className="text-sm font-medium">{investor?.name}</p>
          </div>
          <div className="flex items-center gap-3 w-full">
            <Button variant="outline" onClick={onClose} className="flex-1 cursor-pointer">
              Cancel
            </Button>
            <Button
              onClick={handleRemove}
              className="flex-1 bg-[#3064F6] hover:bg-[#3064F6]/90 text-white cursor-pointer"
            >
              Remove Access
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
