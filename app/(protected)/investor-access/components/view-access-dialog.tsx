import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface ViewAccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  investor: {
    id: string;
    name: string;
    accessLevel: "view" | "edit";
    selectedCharts?: string[];
  } | null;
  onUpdateAccess?: (charts: string[]) => void;
  isEditing?: boolean;
}

const charts = [
  { id: "mrr-arr", name: "MRR/ARR", icon: "/svgs/chart-icon.svg" },
  { id: "acv", name: "ACV", icon: "/svgs/chart-icon.svg" },
  { id: "cac", name: "CAC", icon: "/svgs/chart-icon.svg" },
  { id: "ltv-cac", name: "LTV/CAC", icon: "/svgs/chart-icon.svg" },
  { id: "cac-payback", name: "CAC Payback", icon: "/svgs/chart-icon.svg" },
  { id: "churn", name: "Chrun/Customer Retention", icon: "/svgs/chart-icon.svg" },
  { id: "ndr", name: "Net Dollar Retention", icon: "/svgs/chart-icon.svg" },
  { id: "cash-burn", name: "Cash Burn/Cash Flow", icon: "/svgs/chart-icon.svg" },
];

export function ViewAccessDialog({
  isOpen,
  onClose,
  investor,
  onUpdateAccess,
  isEditing = false,
}: ViewAccessDialogProps) {
  const allChartIds = React.useMemo(() => charts.map((chart) => chart.id), []);
  const [selectedCharts, setSelectedCharts] = React.useState<string[]>(allChartIds);
  const areAllSelected = selectedCharts.length === charts.length;

  React.useEffect(() => {
    if (isOpen) {
      setSelectedCharts(investor?.selectedCharts || allChartIds);
    }
  }, [isOpen, investor, allChartIds]);

  const handleChartClick = (chartId: string) => {
    setSelectedCharts((prev) => {
      if (prev.includes(chartId)) {
        return prev.filter((id) => id !== chartId);
      }
      return [...prev, chartId];
    });
  };

  const handleToggleAll = () => {
    if (areAllSelected) {
      setSelectedCharts([]);
    } else {
      setSelectedCharts(allChartIds);
    }
  };

  const handleUpdateAccess = () => {
    if (onUpdateAccess) {
      onUpdateAccess(selectedCharts);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] p-0">
        <div className="p-6 pb-0">
          <div className="flex items-center justify-between mb-4">
            <DialogTitle className="text-xl font-semibold">
              {isEditing ? "Edit Accesses" : "View Accesses"}
            </DialogTitle>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            {isEditing
              ? `Select which charts and analytics ${investor?.name} should have access to.`
              : `Charts and analytics that ${investor?.name} currently has access to.`}
          </p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Select Chart</span>
            <button
              onClick={handleToggleAll}
              className="text-sm text-[#3064F6] hover:text-[#3064F6]/90"
            >
              {areAllSelected ? "Deselect All" : "Select All"}
            </button>
          </div>
        </div>
        <div className="px-6">
          <div className="max-h-[400px] overflow-y-auto -mx-2 px-2">
            <div className="space-y-2 py-2">
              {charts.map((chart) => (
                <div
                  key={chart.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#F8F9FC] hover:bg-[#F8F9FC]/80 cursor-pointer transition-all duration-200"
                  onClick={() => handleChartClick(chart.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <Image src={chart.icon} alt={chart.name} width={20} height={20} />
                    </div>
                    <span className="text-sm font-medium">{chart.name}</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedCharts.includes(chart.id)
                        ? "border-[#3064F6] bg-white"
                        : "border-gray-200"
                    }`}
                  >
                    {selectedCharts.includes(chart.id) && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3064F6]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6 pt-4">
          <Button
            onClick={handleUpdateAccess}
            className="w-full bg-[#3064F6] hover:bg-[#3064F6]/90 text-white cursor-pointer"
          >
            Update Access
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
