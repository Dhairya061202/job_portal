import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import './responsive/HomePage.css'

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#ec937f] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl h1-responsive font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur porro? Libero natus tempore reiciendis.</p>
        <div className="flex w-[40%] input-responsive sm: w-[60%] shadow-lg border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto">
            <input type="text" placeholder="Find Your Dream Jobs" className="outline-none border-none w-full" />
            <Button className="rounded-r-full bg-[#6A38C2]">
                <Search className="h-5 w-5"/>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
