"use client";
import React from "react";
import { usePathname } from "next/navigation";

const PageHeader = () => {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace("-", " P");
  return (
    <div className="w-full space-y-4 border-b-[1px] border-[#D9DBDD]">
      <div className="flex items-center justify-between bg-[#EFF4FF] w-full px-2 py-4">
        <h1 className="text-2xl font-bold capitalize">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
