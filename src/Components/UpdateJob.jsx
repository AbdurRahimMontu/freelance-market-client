import React, { use } from "react";


// import { useLoaderData } from "react-router";
import AuthContext from "../Provider/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useLoaderData } from "react-router";

const UpdateJob = () => {
    const {user} = use(AuthContext)
 
     const job = useLoaderData()


const handleSubmitPut=(e)=>{
  e.preventDefault();

  const formData={
    title : e.target.title.value,
    category: e.target.category.value,
    summary: e.target.summary.value,
    coverImage: e.target.coverImage.value,
    
  }
  // fetch(`http://localhost:3000/updateJobs/${job._id}`,{
  //   method:"PUT",
  //   headers:{
  //     "Content-type":"Application/json"
  //   },
  //    body: JSON.stringify(formData) 
  // })
  // .then(res=>res.json())
  axios.put(`http://localhost:3000/updateJobs/${job._id}`,formData)
  .then(data=>{
    toast.success("Updated Job Successful")
    e.target.reset()
    console.log(data)
    
  })
  .catch(error=>{
     console.log(error)
  })

 }





  return (
 <div className="bg-base-300">
       <div className="border flex justify-center items-center">
      <div className=" card  w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body  border">
          <h1 className="text-3xl font-bold text-center">Update Job</h1>
          <form onSubmit={handleSubmitPut}>
            <div>
              <label className="label text-xl ">Title</label>
              <input type="text" name="title" className="input w-full" placeholder="Enter Your Title" defaultValue={job.title}/>
            </div>
            <div>
              <label className="label text-xl ">Posted By</label>
              <input type="text" readOnly defaultValue={user.displayName} className="input w-full" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="label text-xl ">Category</label>
        <select defaultValue={job.category} name="category" className="select appearance-none w-full">
            <option >Select A Category</option>
            <option>Graphics Design</option>
            <option>Web Developer</option>
            <option>Digital Marketing </option>
            <option>Seo Expert </option>

            </select>
            </div>
            <div>
            <fieldset className="fieldset">
            <legend className="fieldset-legend">Summary</legend>
            <textarea className="textarea h-24 w-full" placeholder="Summary" name="summary" defaultValue={job.summary}></textarea>
            <div className="label">Optional</div>
            </fieldset>
            </div>
            <div>
              <label className="label text-xl ">Cover Photo</label>
              <input type="photo" name="coverImage" className="input w-full" placeholder="Enter Your Photo URL" defaultValue={job.coverImage} />
            </div>
            <button className="btn bg-purple-700 text-white font-semibold w-full mt-4">Update Job</button>
          </form>
        </div>
      </div>
    </div>
 </div>
  );
};

export default UpdateJob;
