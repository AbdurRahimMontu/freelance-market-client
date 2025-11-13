import React, { use, useEffect, useState } from 'react';
import AuthContext from '../Provider/AuthContext';

import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const MyPostedJobs = () => {
    const {user} = use(AuthContext)
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
     console.log(jobs);

    useEffect(()=>{
    axios.get(`http://localhost:3000/myPostedJobs?email=${user.email}`)
    .then(data=>{
      setJobs(data.data)
    
    
     
    })
  },[user.email])

const handleDelete=(_id)=>{
console.log("click delete");
  axios.delete(`http://localhost:3000/allJobs/${_id}`)
  .then(data=>{
     navigate('/allJobs')
    console.log(data)

  })
  .catch(error=>{
     console.log(error)
  })
     }

    



    return (
        <div >
   <div className='bg-base-300 py-10'>
    <h2 className='text-3xl font-semibold text-center pb-5'>My Posted Jobs</h2>
            <div className='gap-3 w-11/12 mx-auto'>
           
        
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-center bg-purple-500 text-white'>
   
        <th>Name</th>
        <th>Job Title</th>
        <th>Job Category</th>
        <th>Delete</th>
        <th>Update</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {jobs?.map(job=>(
      <tr key={job._id} >

        <td>
          <div className="flex items-center gap-5">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user?.photoURL}
                  alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
            </div>
          </div>
        </td>
        <td>
          <span className='text-xl  font-semibold'>{job.title}</span>
        </td>
        <td>
           <span className=" text-xl  font-semibold ">{job.category}</span>
        </td>
        <td>
        <button onClick={()=>handleDelete(job._id)} className='btn w-full btn-outline hover:bg-purple-500 hover:text-white'>Delete</button>
        </td>
        <td>
        <Link to={`/updateJob/${job._id}`}   className='btn w-full btn-outline hover:bg-purple-500 hover:text-white'>Update</Link>
        </td>
        <td>
        <Link to={`/viewDetails/${job._id}`} className='btn w-full btn-outline hover:bg-purple-500 hover:text-white'>View Details</Link>
        </td>
      </tr>))}
    </tbody>

  </table>
</div>
        
           
        </div>
</div>
        </div>
    );
};

export default MyPostedJobs;



