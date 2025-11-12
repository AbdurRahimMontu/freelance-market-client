import React from 'react';
import Banner from '../Components/Banner';

import TopCategories from '../Components/TopCategories';
import ClientComment from '../Components/ClientComment';
import { useLoaderData } from 'react-router';
import JobCard from '../Components/JobCard';


const Home = () => {
const jobs = useLoaderData()
console.log(jobs);
    return (
        <div>
            <Banner></Banner>
       <div className='bg-base-300'>
        <h2 className='text-2xl text-center font-semibold py-5 pt-15  '>Latest Jobs</h2>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-5'>
           {
            jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
           }
        </div>
</div>
            <TopCategories></TopCategories>
            <ClientComment></ClientComment>
        </div>
    );
};

export default Home;