'use client'
import { Button } from "@/components/ui/button";
import { Building2, File, History, Landmark, Plus, Scale, SquareUserRound } from "lucide-react";
import { useRouter } from "next/navigation";

const DataRoomPage = () => {
  const dataRooms = [
    {
      id: 1,
      name: "Company Documents",
      count: 48,
      icon: <File size={48} className="text-primary rounded-sm p-[0.417vw] bg-[#EFF4FF]" />,
      link: "/data-room/company-documents",
    },
    {
      id: 2,
      name: "Financial",
      count: 48,
      icon: <Landmark size={48} className="text-primary rounded-sm p-[0.417vw] bg-[#EFF4FF]" />,
      link: "/data-room/company-documents",
    },
    {
      id: 3,
      name: "Previous Funding",
      count: 48,
      icon: <History size={48} className="text-primary rounded-sm p-[0.417vw] bg-[#EFF4FF]" />,
      link: "/data-room/company-documents",
    },
    {
      id: 4,
      name: "Staff",
      count: 48,
      icon: (
        <SquareUserRound size={48} className="text-primary rounded-sm p-[0.417vw] bg-[#EFF4FF]" />
      ),
      link: "/data-room/company-documents",
    },
    {
        id: 5,
        name: "Others",
        count: 48,
        icon: (
            <SquareUserRound size={48} className="text-primary rounded-sm p-[0.417vw] bg-[#EFF4FF]" />
        ),
        link: "/data-room/company-documents",
    },
    {
        id: 6,
        name: "Interllectual Property",
        count: 48,
        icon: <Building2 size={48} className="text-primary rounded-sm p-[0.417vw] bg-[#EFF4FF]" />,
        link: "/data-room/company-documents",
    },
    {
        id: 7,
        name: "Legal",
        count: 48,
        icon: <Scale size={48} className="text-primary rounded-sm p-[0.417vw] bg-[#EFF4FF]" />,
        link: "/data-room/company-documents",
    },
  ];

  const router = useRouter();
  return (
   
      <div className="flex flex-col items-start px-[1.563vw]">
        <h3 className="text-[1.146vw] font-bold py-[1.763vw]  ">All Data Rooms</h3>
        <div className="grid grid-cols-3 gap-[1.563vw] w-full">
          {dataRooms.map((dataRoom) => (
            <div
              className="flex bg-white  py-[0.833vw] px-[0.833vw] rounded-md w-full cursor-pointer"
              key={dataRoom.id}
              onClick={() => router.push(dataRoom.link)}
            >
              <div className="flex flex-col gap-[1.163vw] w-full">
                <div className=" flex items-start justify-between w-full">
                  {dataRoom.icon}
                  <div className="text-[0.625vw] bg-[#EFF4FF] rounded-full px-[0.833vw] py-[0.417vw] font-medium">
                    Updated 1 day ago
                  </div>
                </div>
                <div className="flex flex-col gap-[0.363vw]">
                  <h4 className="text-[0.833vw] font-bold">{dataRoom.name}</h4>
                  <p className="text-[0.625vw] text-[#64717F]">{dataRoom.count} data entries</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default DataRoomPage;
