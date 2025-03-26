"use client";

import * as React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
  title: string;
  value: number;
  percentageChange: number;
  className?: string;
}

export function AnalyticsCard({ title, value, percentageChange, className }: AnalyticsCardProps) {
  const [timeRange, setTimeRange] = React.useState("28");

  const formattedValue = new Intl.NumberFormat("en-US").format(value);
  const isPositiveChange = percentageChange > 0;

  return (
    <Card className={cn("w-full shadow-none", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
        <h3 className="text-base font-bold uppercase">{title}</h3>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="h-8 w-[140px] rounded-full border-0 bg-[#F4F3FF] text-sm font-medium ring-offset-0 focus:ring-0 focus-visible:ring-0">
            <SelectValue placeholder="Select range" />
          </SelectTrigger>
          <SelectContent className="border-none bg-[#F4F3FF]">
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="14">Last 14 days</SelectItem>
            <SelectItem value="28">Last 28 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-bold">{formattedValue}</div>
          <div className="flex items-center gap-1">
            {isPositiveChange ? (
              <ArrowUpIcon className="h-4 w-4 text-[#3064F6]" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-[#3064F6]" />
            )}
            <span className="text-[#3064F6] text-sm font-medium">
              {Math.abs(percentageChange)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
