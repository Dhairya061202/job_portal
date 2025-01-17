import React from "react";
import { Badge } from "./ui/badge";
import './responsive/HomePage.css'

const LatestJobsCards = () => {
  return (
    <div className="mt-5 p-5 rounded-md shadow-xl bf-white border border-gray-200 cursor-pointer">
      <div>
        <h1 className="font-medium h1-r text-lg">Company Name</h1>
        <p className="text-sm  text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold h1-r text-lg my-2">Job Title</h1>
        <p className="text-sm w-[100%] text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
      <div className="flex items-center  gap-2 mt-4">
        <Badge className={"text-blue-700 badge-r font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] badge-r font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209B7] badge-r font-bold"} variant="ghost">
          24LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCards;
