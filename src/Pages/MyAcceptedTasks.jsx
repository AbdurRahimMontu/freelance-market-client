import React, { use, useEffect, useState } from 'react';
import AuthContext from '../Provider/AuthContext';



const MyAcceptedTasks = () => {
const {user} = use(AuthContext)
  const [jobs, setJobs] = useState([]);
 


  useEffect(() => {
    fetch(`http://localhost:3000/myAcceptedTasks?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
          setJobs(data);
      
      
})}, [user]);

const handleDelete =(_id)=>{
    fetch(
      `http://localhost:3000/myAcceptedTasks/${_id}?email=${user.email}`,
      { method: "DELETE" }
    )
    setJobs(jobs.filter((job) => job._id !== _id));
  }

  

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
             {
                jobs.map(job=>(
                <div className="p-5 bg-base-100 shadow-xl flex flex-col justify-between">
      <div>
        <img src={job.coverImage} alt="" className="w-full " />
        <div className="px-4 pt-4">
          <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
          <h3 className='text-lg font-medium'>{job.category}</h3>
          <p className="text-justify ">{job.summary.slice(0, 78)}....</p>
          <h4 className='text-end italic font-semibold'>{job.postedBy}</h4>
    
        </div>
      
      </div>
      <div className="px-4 pb-5 pt-3 mt-auto space-x-3">
         <button onClick={()=>handleDelete(job._id)} className='btn bg-purple-700 text-white'>Done</button>
         <button onClick={()=>handleDelete(job._id)}  className='btn bg-purple-700 text-white'>Cancel</button>
      </div>
    </div>
             ))}
        </div>
    );
};

export default MyAcceptedTasks;