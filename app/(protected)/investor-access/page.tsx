"use client";
import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Investor {
  id: string;
  name: string;
  accessLevel: "view" | "edit";
}

const mockInvestors: Investor[] = [
  { id: "1", name: "Daniel Jones", accessLevel: "view" },
  { id: "2", name: "Sam Josep", accessLevel: "edit" },
  { id: "3", name: "Kim Doson", accessLevel: "view" },
  { id: "4", name: "Jennifer Lorenz", accessLevel: "edit" },
  { id: "5", name: "Kate Watson", accessLevel: "view" },
  { id: "6", name: "Rose H.", accessLevel: "view" },
  { id: "7", name: "Bob", accessLevel: "edit" },
  { id: "8", name: "Sid Jr.", accessLevel: "view" },
  { id: "9", name: "Nelly", accessLevel: "edit" },
  { id: "10", name: "Mary D", accessLevel: "view" },
  { id: "11", name: "Sarah Connor", accessLevel: "view" },
  { id: "12", name: "John Smith", accessLevel: "edit" },
  { id: "13", name: "Emma Watson", accessLevel: "view" },
  { id: "14", name: "Michael Scott", accessLevel: "edit" },
  { id: "15", name: "Pam Beesly", accessLevel: "view" },
  { id: "16", name: "Jim Halpert", accessLevel: "edit" },
  { id: "17", name: "Dwight Schrute", accessLevel: "view" },
  { id: "18", name: "Angela Martin", accessLevel: "edit" },
  { id: "19", name: "Oscar Martinez", accessLevel: "view" },
  { id: "20", name: "Kevin Malone", accessLevel: "edit" },
  { id: "21", name: "Stanley Hudson", accessLevel: "view" },
  { id: "22", name: "Phyllis Vance", accessLevel: "edit" },
  { id: "23", name: "Creed Bratton", accessLevel: "view" },
  { id: "24", name: "Meredith Palmer", accessLevel: "edit" },
  { id: "25", name: "Kelly Kapoor", accessLevel: "view" },
  { id: "26", name: "Ryan Howard", accessLevel: "edit" },
  { id: "27", name: "Andy Bernard", accessLevel: "view" },
  { id: "28", name: "Robert California", accessLevel: "edit" },
  { id: "29", name: "Erin Hannon", accessLevel: "view" },
  { id: "30", name: "Toby Flenderson", accessLevel: "edit" },
  { id: "31", name: "David Wallace", accessLevel: "view" },
  { id: "32", name: "Jan Levinson", accessLevel: "edit" },
  { id: "33", name: "Holly Flax", accessLevel: "view" },
  { id: "34", name: "Gabe Lewis", accessLevel: "edit" },
  { id: "35", name: "Karen Filippelli", accessLevel: "view" },
];

const ITEMS_PER_PAGE = 10;

const InvestorAccess = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredInvestors = mockInvestors.filter((investor) =>
    investor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInvestors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedInvestors = filteredInvestors.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-[18px] font-medium mb-6">List Of Investor Who Have Access</h1>
        <Input
          placeholder="Search investor by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-[300px]"
          size={"lg"}
        />
      </div>

      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col gap-1 p-1">
          {paginatedInvestors.map((investor) => (
            <div
              key={investor.id}
              className="flex items-center justify-between py-3 px-5 rounded-lg hover:bg-[#EFF4FF] transition-all duration-200"
            >
              <span className="text-[15px] font-medium">{investor.name}</span>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 hover:bg-[#3064F6]/10 rounded-lg transition-colors group cursor-pointer"
                  title="View access"
                >
                  <Eye className="w-4 h-4 text-gray-600 group-hover:text-[#3064F6]" />
                </button>
                <button
                  className="p-2 hover:bg-[#3064F6]/10 rounded-lg transition-colors group cursor-pointer"
                  title="Edit access"
                >
                  <Pencil className="w-4 h-4 text-gray-600 group-hover:text-[#3064F6]" />
                </button>
                <button
                  className="p-2 hover:bg-red-50 rounded-lg transition-colors group cursor-pointer"
                  title="Remove access"
                >
                  <Trash2 className="w-4 h-4 text-gray-600 group-hover:text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationLink
                        onClick={() => handlePageChange(pageNumber)}
                        isActive={pageNumber === currentPage}
                        className="cursor-pointer"
                      >
                        {pageNumber}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                  return (
                    <PaginationItem key={pageNumber}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  );
                }
                return null;
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default InvestorAccess;
