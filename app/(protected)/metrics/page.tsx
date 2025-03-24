"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Metrics = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>Metrics works!</h1>
      <p>Current pathname: {pathname}</p>
    </div>
  );
};

export default Metrics;
