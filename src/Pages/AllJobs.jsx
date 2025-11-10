import React from 'react';
import { useLoaderData } from 'react-router';
import JobCard from '../Components/JobCard';

const AllJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
<div className='bg-base-300'>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-5'>
           {
            jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
           }
        </div>
</div>
    );
};

export default AllJobs;