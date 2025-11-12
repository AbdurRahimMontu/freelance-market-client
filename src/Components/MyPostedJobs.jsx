import React, { use, useEffect, useState } from 'react';
import AuthContext from '../Provider/AuthContext';

import { Link, useNavigate } from 'react-router';

const MyPostedJobs = () => {
    const {user} = use(AuthContext)
    const [jobs, setJobs] = useState([])
    const navigate = useNavigate()
     

    useEffect(()=>{
    fetch(`http://localhost:3000/myPostedJobs?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
      setJobs(data)
    
     
    })
  },[user.email])

const handleDelete=(_id)=>{
console.log("click delete");
    fetch(`http://localhost:3000/allJobs/${_id}`,{
    method:"DELETE"
    },)
  .then(res=>res.json())
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
    <h2 className='text-2xl font-semibold text-center'>My Posted Jobs</h2>
            <div className='gap-5 w-11/12 mx-auto'>
           
        
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-center bg-purple-700 text-white'>
        <th className="">
          <label >
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
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
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user?.photoURL}
                  alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
              <div className="text-sm opacity-50">Bangladesh</div>
            </div>
          </div>
        </td>
        <td>
          <span className='text-xl font-semibold'>{job.title}</span>
        </td>
        <th>
           <span className="badge bg-purple-600 py-4 text-white p-3">{job.category}</span>
        </th>
        <th>
        <button onClick={()=>handleDelete(job._id)} className='btn w-full bg-red-700 text-white'>Delete</button>
        </th>
        <th>
        <Link to={`/updateJob/${job._id}`}  className='btn w-full  bg-green-600 text-white'>Update</Link>
        </th>
        <th>
        <Link to={`/viewDetails/${job._id}`} className='btn w-full  bg-purple-600 text-white'>View Details</Link>
        </th>
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



