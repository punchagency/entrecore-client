"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { AnalyticsCard } from "@/components/analytics-card";
import { MetricsChartCard } from "@/components/metrics-chart-card";

const mockGrossProfitData = [
  { name: "Mar", value: 15000000 },
  { name: "Apr", value: 16500000 },
  { name: "May", value: 15800000 },
  { name: "Jun", value: 16200000 },
  { name: "Jul", value: 14800000 },
  { name: "Aug", value: 15089210 },
];

const mockMRRData = [
  { name: "Mar", value: 60 },
  { name: "Apr", value: 80 },
  { name: "May", value: 100 },
  { name: "Jun", value: 140 },
  { name: "Jul", value: 120 },
  { name: "Aug", value: 180 },
];

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

      <br />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <MetricsChartCard
          title="Gross profit"
          value={15089210}
          percentageChange={4.6}
          chartData={mockGrossProfitData}
          variant="area"
          timeRange="1"
        />
        <MetricsChartCard
          title="MRR/ARR"
          value={542}
          percentageChange={14.2}
          chartData={mockMRRData}
          variant="bar"
          timeRange="Last 6 Months"
          subtitle="6 Month Total"
        />
      </div>
    </div>
  );
};

export default Metrics;
