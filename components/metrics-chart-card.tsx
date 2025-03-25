"use client";

import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "@radix-ui/react-icons";

interface MetricsChartCardProps {
  title: string;
  value: number;
  percentageChange: number;
  chartData: Array<{ name: string; value: number }>;
  variant: "area" | "bar";
  timeRange?: string;
  subtitle?: string;
  className?: string;
}

const formatValue = (value: number): string => {
  if (value >= 1000000) {
    return `$${Math.floor(value / 1000000)}M`;
  }
  return value.toString();
};

export function MetricsChartCard({
  title,
  value,
  percentageChange,
  chartData,
  variant,
  timeRange = "6",
  subtitle,
  className,
}: MetricsChartCardProps) {
  const [selectedTimeRange, setSelectedTimeRange] = React.useState(timeRange);
  const formattedValue = new Intl.NumberFormat("en-US").format(value);

  const getTimeRangeText = (value: string) => {
    switch (value) {
      case "1":
        return "Last Month";
      case "3":
        return "Last 3 Months";
      case "6":
        return "Last 6 Months";
      case "12":
        return "Last Year";
      default:
        return "Last 6 Months";
    }
  };

  return (
    <Card className={cn("w-full shadow-none", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
        <h3 className="text-base font-bold uppercase">{title}</h3>
        <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
          <SelectTrigger className="h-8 w-[140px] rounded-full border-0 bg-[#F4F3FF] text-sm font-medium ring-offset-0 focus:ring-0 focus-visible:ring-0">
            <SelectValue>{getTimeRangeText(selectedTimeRange)}</SelectValue>
          </SelectTrigger>
          <SelectContent className="border-none bg-[#F4F3FF]">
            <SelectItem value="1">Last Month</SelectItem>
            <SelectItem value="3">Last 3 Months</SelectItem>
            <SelectItem value="6">Last 6 Months</SelectItem>
            <SelectItem value="12">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-baseline gap-2">
          <div className="text-2xl font-bold">
            {title.toLowerCase().includes("profit") ? "$" : ""}
            {formattedValue}
          </div>
          <div className="flex items-center gap-1">
            <ArrowUpIcon className="h-4 w-4 text-[#3064F6]" />
            <span className="text-[#3064F6] text-sm font-medium">{percentageChange}%</span>
          </div>
          {subtitle && <span className="ml-1 text-sm text-muted-foreground">{subtitle}</span>}
        </div>

        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {variant === "area" ? (
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3064F6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#3064F6" stopOpacity={0.15} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={formatValue}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3064F6"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            ) : (
              <BarChart data={chartData}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A05BF8" stopOpacity={1} />
                    <stop offset="100%" stopColor="#A05BF8" stopOpacity={0.15} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
