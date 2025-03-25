"use client";

import eCoverImage from "@/public/Svgs/e-cover-image.svg";
import eIcon from "@/public/Svgs/e-icon.svg";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Check, SquarePen, Star } from "lucide-react";
import Image from "next/image";

const SettingsPage = () => {
  return (
      <div className="bg-[#EFF4FF] h-screen">
        <div>
          <div className="px-[1.563vw] pt-[1.563vw]">
            <Card className="p-[0.321vw] w-[15.625vw] gap-0 rounded-sm">
              <CardHeader className="p-[0.321vw]">
                <CardTitle className="flex items-center gap-2"> <Image src={eIcon} alt="e-icon" width={32} height={32} /> Entercore</CardTitle>
                <Image src={eCoverImage} alt="e-icon" className="w-full" />
              </CardHeader>
              <CardContent className="p-0 m-[0.195vw]  flex flex-col gap-[0.521vw]" >
              <div className="flex items-center bg-[#EFF4FF] justify-between px-[0.521vw] py-[0.633vw] rounded-[0.281vw]">
                <p className="text-[0.781vw] font-bold">Edit Company Profile</p>
                <SquarePen color="#000000" strokeWidth={2.5} className="w-[1.042vw]" />
              </div>
              <div className="flex items-center bg-[#EFF4FF] justify-between px-[0.521vw] py-[0.633vw] rounded-[0.281vw]">
                <p className="text-[0.781vw] font-bold">Default Company </p>
                <Star  color="#000000" strokeWidth={2.5} className="w-[1.042vw]" />
              </div>
              <div className="flex items-center bg-primary text-white justify-between px-[0.521vw] py-[0.633vw] rounded-[0.281vw]">
                <p className="text-[0.781vw] font-bold">Active Company</p>
                <Check  color="white" strokeWidth={2.5} className="w-[1.042vw]" />
              </div>
              </CardContent>
            </Card>
          </div>
        </div>
            <hr className="my-[2vw]"/>
            <div className="px-[1.563vw]">  
            <h3 className="text-[1.146vw] font-bold mb-[1.563vw]">Teams</h3>
            <p className="text-[0.781vw] ">To be added to a team, contact the company admin and request you be added as ateam members</p>
            </div>
      </div>
  );
};

export default SettingsPage;
