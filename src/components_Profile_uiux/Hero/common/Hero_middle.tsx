import React from "react";

//shadcn_ui
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button";

//lucide_icon
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Hero_middle = () => {

  return (
    <div className="relative flex flex-1/3 flex-col gap-y-2 w-full h-full text-white">
          <div className="flex flex-row w-full h-fit p-2 pl-3 justify-between items-center bg-white/20 rounded-lg ">
            <p className="text-lg font-semibold">Projects</p>
            <div className="space-x-1">
              <Button variant="secondary" size="icon" className="size-7">
                <ChevronLeftIcon />
              </Button>
              <Button variant="secondary" size="icon" className="size-7">
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
          {/* <div className="w-full h-full flex rounded-lg border "></div>
          <div className="w-full h-full flex rounded-lg border "></div>
          <div className="w-full h-full flex rounded-lg border "></div>
          <div className="w-full h-full flex rounded-lg border "></div> */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
            <div className="col-start-1 bg-white/20 rounded-lg"></div>
            <div className="col-start-2 bg-white/20 rounded-lg"></div>
            <div className="col-start-1 bg-white/20 rounded-lg"></div>
            <div className="col-start-2 bg-white/20 rounded-lg"></div>
          </div>
    </div>
  );
}; 

export default Hero_middle;