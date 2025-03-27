"use client";
import { LayoutGrid } from "lucide-react";
import { Button } from "./ui/button";

const DelinkAccount = () => {
  const integrations = [
    {
      id: "quickbooks",
      name: "QuickBooks",
      domain: "quickbooks.intuit.com",
    },
    {
      id: "xero",
      name: "Xero",
      domain: "xero.com",
    },
  ];
  return (
    <div className="space-y-[1.302vw]">
      <h1 className="text-[1.25vw] font-bold text-soft-black">Delink Your Account</h1>
      {integrations.map((integration) => (
        <div
          key={integration.id}
          className="flex items-center justify-between p-4 border bg-white rounded-sm px-[1.563vw] py-[1.302vw] border-l-[#181818]"
        >
          <div className="flex items-center gap-4">
            <div className="w-[2.604vw] h-[2.604vw] relative border border-gray-400 rounded-sm flex items-center justify-center">
              <LayoutGrid />
            </div>
            <div>
              <h3 className="font-bold text-[0.833vw] text-soft-black">{integration.name}</h3>
              <p className="text-[0.629vw] text-gray">{integration.domain}</p>
            </div>
          </div>
          <Button variant="default" onClick={() => {}} className="cursor-pointer">
            Delink
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DelinkAccount;
