import React, {use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import AuthContext from '../Provider/AuthContext';
import { toast } from 'react-toastify';

const ViewDetails = () => {
  const {user} = use(AuthContext)
  const navigate = useNavigate()
   const job = useLoaderData()
  const {title, category, postedBy,  summary, coverImage} = job;

 const handleAccept=(e)=>{
  e.preventDefault()
  console.log("clicked");
      
     fetch(`http://localhost:3000/allJobs/${job._id}/accept`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userEmail:user.email}),
    })
      .then((data) => {
        toast.success(data, "accept successful")
       console.log(data);
       navigate ("/myAcceptedTasks"); 
      });
  };




    return (
        <div className=' bg-base-300'>
                 <div className='grid grid-cols-12 w-11/12 mx-auto gap-10 py-10'>
                    <div className='col-span-12 lg:col-span-9 p-10 '>
                      <div className='lg:h-[500px] md:[400px] h-[300px]'>
                       <img src={ coverImage} alt="" className='w-full h-full'/>
                    </div>
                    <p id="email-marketing" className='text-lg py-10'>{summary}</p>
                    </div>
                    <div className='col-span-12 lg:col-span-3 flex flex-col gap-5 py-10 p-10'>
                        <h2 className='text-2xl font-semibold'>{title}</h2>
                        <h3 className='text-xl'>{category}</h3>
    <p className='text-justify text-xl'>{summary.slice(0, 300)}<a href="#email-marketing" className="text-blue-600 hover:underline">  Details</a></p>
                     <p className='text-end italic'>Name : {postedBy}</p>
                      
             {job.email !== user.email && (
               <button type='button' onClick={handleAccept} className="btn">
                 Accept
              </button>
               )}

                    
                  

                    </div>
                   
                 </div>
    
        </div>
    );
};

export default ViewDetails;




