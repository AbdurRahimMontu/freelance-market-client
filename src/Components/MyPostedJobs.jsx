import React, { use, useEffect, useState } from 'react';
import AuthContext from '../Provider/AuthContext';
import JobCard from './JobCard';
import { Link } from 'react-router';

const MyPostedJobs = () => {
    const {user} = use(AuthContext)
    const [jobs, setJobs] = useState([])
 

    useEffect(()=>{
    fetch(`http://localhost:3000/myPostedJobs?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
      setJobs(data)

      console.log(data)
    })
  },[user.email])



    return (
        <div >
   <div className='bg-base-300 pt-5'>
    <h2 className='text-2xl font-semibold text-center'>My Posted Jobs</h2>
            <div className='gap-5 w-11/12 mx-auto'>
           
        
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-center'>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Delete</th>
        <th>Delete</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {jobs?.map(job=>(
      <tr key={job._id}>
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
          <br />
          <span className="badge bg-purple-700 text-white p-3">{job.category}</span>
        </td>
        <td>Purple</td>

        <th>
        <Link to={`/viewDetails/${job._id}`} className='btn w-full'>Delete</Link>
        </th>
        <th>
        <Link to={`/viewDetails/${job._id}`} className='btn w-full'>Update</Link>
        </th>
        <th>
        <Link to={`/viewDetails/${job._id}`} className='btn w-full'>View Details</Link>
        </th>
      </tr>))}
    </tbody>

  </table>
</div>
        
           }
        </div>
</div>
        </div>
    );
};

export default MyPostedJobs;