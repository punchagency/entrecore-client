"use client";

import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { CircleCheck, CircleX, Info } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const eudoxusSans = localFont({
  src: [
    {
      path: "../public/fonts/eudoxus-sans-font-family-1742274690-0/EudoxusSans-Regular-BF659b6cb1d4714.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/eudoxus-sans-font-family-1742274690-0/EudoxusSans-Medium-BF659b6cb1c14cb.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/eudoxus-sans-font-family-1742274690-0/EudoxusSans-Bold-BF659b6cb1408e5.ttf",
      weight: "700",
    },
  ],
  variable: "--font-eudoxus-sans",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eudoxusSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <Toaster
            className={cn(eudoxusSans.className, "font-normal")}
            icons={{
              info: <Info className="text-[#3064F6]" strokeWidth={1.2} />,
              error: <CircleX className="text-red-400" strokeWidth={1.2} />,
              success: <CircleCheck className="text-[#3064F6]" strokeWidth={1.2} />,
            }}
          />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
