'use client'

import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import eCoverImage from "@/public/Svgs/e-cover-image.svg";
import eIcon from "@/public/Svgs/e-icon.svg";
import { Button } from '@/components/ui/button';
import { Camera, Upload } from 'lucide-react';
import Link from 'next/link';

export default function CompanyProfilePage({children}: {children: React.ReactNode}) {
  const params = useParams();
  const companyName = params.companyName;
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname()
  const tabs = [
    { name: 'Company', href: `/settings/company-profile/${companyName}` },
    { name: 'Fundraising', href: `/settings/company-profile/${companyName}/fundraising` },
    { name: 'Product', href: `/settings/company-profile/${companyName}/product` },
    { name: 'Financial', href: `/settings/company-profile/${companyName}/financial` },
  ];

//   useEffect(() => {
//     // Fetch company data based on companyId
//     async function fetchCompanyData() {
//       try {
//         // Replace with your actual API call
//         const response = await fetch(`/api/companies/${companyId}`);
//         const data = await response.json();
//         setCompany(data);
//       } catch (error) {
//         console.error('Error fetching company:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchCompanyData();
//   }, [companyId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!company) {
//     return <div>Company not found</div>;
//   }

  return (
    <div className="p-[1.563vw] bg-white">
      <div className="relative">
        {/* Cover Image */}
        <Image 
          src={eCoverImage} 
          alt="e-icon" 
          className="w-full h-[25vw] object-cover rounded-t-md" 
        />
        
        {/* Edit Cover Button */}
        <Button 
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black"
          size="sm"
        >
          <Camera className="mr-2 h-4 w-4" />
          Edit Cover
        </Button>
        
        {/* Profile Photo Circle */}
        <div className="absolute -bottom-[5vw] left-[2.083vw]">
          <div className="relative">
            <div className="w-[10vw] h-[10vw] rounded-full border-4 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
              {/* {company?.profileImage ? ( */}
                <Image 
                  src={eIcon} 
                  alt="Company profile" 
                  fill 
                  className="object-cover w-[10vw] h-[10vw] rounded-full border-4 border-white"
                />
              {/* ) : (
                <span className="text-[3vw] font-bold text-gray-400">
                  {company?.name?.charAt(0) || "A"}
                </span>
              )} */}
            </div>

            
            {/* Edit Profile Photo Button */}
          
          </div>
        </div>
      </div>
    
        <div className="bg-white p-[1.042vw] pb-0 ">
          <h1 className="text-[1.25vw] font-bold mb-[1.042vw] ml-44">Entercore</h1>
          <div className="border-b border-gray-200">
        <nav className="flex px-4">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  isActive 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
        </div>

      
      
        {children}
    </div>
  );
}