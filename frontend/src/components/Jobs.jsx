import React from "react";
import Navbar from "./shared/Navbar";
import FliterCard from "./FliterCard";
import Job from "./Job";
import './responsive/JobsPage.css'

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl  mx-auto mt-5">
        <div className="flex gap-r gap-5">
          <div className="w-20% max-w-r">
            <FliterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-2 card-w grid-r mx-4 gap-4">
                    {
                        jobsArray.map((Item,index)=> (
                            <div>
                                <Job />
                            </div>
                        ))
                    }
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
