"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { AnalyticsCard } from "@/components/analytics-card";

const Metrics = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg">Analytics and Metrics</p>
        </div>

        <div>
          <Button className="cursor-pointer font-medium">Share Analytics</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnalyticsCard title="ACV" value={23370} percentageChange={2.7} />
        <AnalyticsCard title="CAC" value={5321} percentageChange={28.1} />
        <AnalyticsCard title="LTV" value={43} percentageChange={1.4} />
        <AnalyticsCard title="MQLs" value={5321} percentageChange={28.1} />
        <AnalyticsCard title="Gross profit" value={15089210} percentageChange={4.6} />
        <AnalyticsCard title="MRR" value={542} percentageChange={14.2} />
      </div>
    </div>
  );
};

export default Metrics;
