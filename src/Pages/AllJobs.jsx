import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import JobCard from '../Components/JobCard';

const AllJobs = () => {
  const jobs = useLoaderData(); 
  console.log(jobs);
  const [sortOrder, setSortOrder] = useState("desc"); 
  const [sortedJobs, setSortedJobs] = useState([]);

  useEffect(() => {
    if (jobs?.length > 0) {
      const sorted = [...jobs].sort((a, b) => {
        const A = new Date(a.postedDate);
        const B = new Date(b.postedDate);
        return sortOrder === 'asc' ? A - B : B - A;
      });
      setSortedJobs(sorted);
    }
  }, [sortOrder, jobs]);

  return (
    <div className="bg-base-300 min-h-screen pb-8 pt-4">
   
   
   
    <div className="w-11/12 mx-auto mb-4 flex justify-end">
      <select className=" px-4 py-2 bg-purple-700 text-white font-semibold" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
     <option value="desc">Sort By New Job</option>
     <option value="asc">Sort By Old Job</option>
    </select>
    </div> 
      
      
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
        {sortedJobs.map((job) => (
          <JobCard key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;