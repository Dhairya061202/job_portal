import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";

import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import './responsive/JobsPage.css'

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" size="icon" variant="outline">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalke-Kf6_TB5yrnMuUYP158MBQd4bezQIxw&s"></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1>Company Name</h1>
          <p>India</p>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, officia!
        </p>
      </div>

      <div className="flex items-center  gap-2 mt-4">
        <Badge className={"text-blue-700 badge-res font-bold"} variant="ghost">
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] badge-res font-bold"} variant="ghost">
          Part Time
        </Badge>
        <Badge className={"text-[#7209B7] badge-res font-bold"} variant="ghost">
          24LPA
        </Badge>
      </div>
      <div className="flex flex-d-r items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7] btn-size-r">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
