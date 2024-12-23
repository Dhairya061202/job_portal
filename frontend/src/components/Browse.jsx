import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import './responsive/BrowsePage.css'

const jobs = [1, 2, 3];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10 mx-5">Search Results {jobs.length}</h1>
        <div className="grid grid-cols-2 gap-4 mx-4 grid-r">
          {jobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
