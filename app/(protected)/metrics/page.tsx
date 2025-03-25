"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Metrics = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <p className="text-lg font-semibold">Analytics and Metrics</p>
        </div>

        <div>
          <Button className="w-[200px]">Share Analytics</Button>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
