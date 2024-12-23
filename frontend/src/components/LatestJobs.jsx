import React from "react";
import LatestJobsCards from "./LatestJobsCards";
import './responsive/HomePage.css'

const randJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl h1-resp font-bold text-center">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
      </h1>
      {/* grid grid-cols-3 */}
      <div className="grid grid-cols-2 card-r gap-4 my-4 mx-4">
        {randJobs.slice(0,6).map((item, index) => (
          <LatestJobsCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
