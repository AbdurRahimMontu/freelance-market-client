import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ViewDetails = () => {
   const job = useLoaderData()
  const {_id, title, category, postedBy,  summary, coverImage} = job;
  

    return (
        <div className=' bg-base-300'>
                 <div className='grid grid-cols-12 w-11/12 mx-auto gap-10 py-10'>
                    <div className='col-span-9 p-10 bg-white'>
                      <div className='lg:h-[500px] md:[400px] h-[300px]'>
                       <img src={ coverImage} alt="" className='w-full h-full'/>
                    </div>
                    <p id="email-marketing" className='text-lg py-10'>{summary}</p>
                    </div>
                    <div className='col-span-3 flex flex-col gap-5 py-10 bg-white p-10'>
                        <h2 className='text-2xl font-semibold'>{title}</h2>
                        <h3 className='text-xl'>{category}</h3>
    <p className='text-justify text-xl'>{summary.slice(0, 300)}<a href="#email-marketing" className="text-blue-600 hover:underline">  Details</a></p>
                     <p className='text-end italic'>Name : {postedBy}</p>
                      <Link to={`/myAcceptedTasks`} className='btn '>Accept</Link>
                    </div>
                   
                 </div>
    
        </div>
    );
};

export default ViewDetails;