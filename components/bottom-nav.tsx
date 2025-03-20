"use client";

import { Button } from "@/components/ui/button";

interface BottomNavProps {
  onBack?: () => void;
  onNext: () => void;
  backLabel?: string;
  nextLabel: string;
}

export function BottomNav({ onBack, onNext, backLabel = "Back", nextLabel }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t p-4">
      <div className="container max-w-3xl mx-auto flex justify-center gap-4">
        {onBack && (
          <Button variant="outline" onClick={onBack} className="w-[200px]">
            {backLabel}
          </Button>
        )}
        <Button onClick={onNext} className="w-[200px]">
          {nextLabel}
        </Button>
      </div>
    </div>
  );
}
