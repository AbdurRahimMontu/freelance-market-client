import React from "react";
import { use } from "react";
import AuthContext from "../Provider/AuthContext";
import { motion } from 'motion/react';
import { toast } from "react-toastify";

const AddAJob = () => {
  const {user} = use(AuthContext)
  const handleSubmitPost=(e)=>{
  e.preventDefault();

  const formData={
    title : e.target.title.value,
    postedBy: user.displayName,
    category: e.target.category.value,
    summary: e.target.summary.value,
    coverImage: e.target.coverImage.value,
    email : user.email,
    postedDate: new Date()
    }
    
  fetch('http://localhost:3000/allJobs',{
    method:"POST",
    headers:{
      "Content-type":"Application/json"
    },
     body: JSON.stringify(formData) 
  })
  .then(res=>res.json())
  .then(data=>{
    toast.success("Job SuccessFully Added")
    e.target.reset()
    console.log(data)
  })
  .catch(error=>{
     console.log(error)
  })

 }
  return (
 <div className="bg-base-300">
       <div className=" flex justify-center items-center">
      <div className=" card  w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body bg-base-100 shadow-sm">
          <motion.h1 className="text-3xl font-bold text-center "   
          animate={{ x: [0, 100, 0],}} 
          transition={{duration: 2, repeat: 5 }}>Add A Job</motion.h1>
          <form onSubmit={handleSubmitPost}>
            <div>
              <label className="label text-xl ">Title</label>
              <input type="text" name="title" className="input w-full" placeholder="Enter Your Title" />
            </div>
            <div>
              <label className="label text-xl ">Posted By</label>
              <input type="text" readOnly defaultValue={user.displayName} className="input w-full" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="label text-xl ">Category</label>
        <select defaultValue="Select A Category" name="category" className="select appearance-none w-full">
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
            <textarea className="textarea h-24 w-full" placeholder="Summary" name="summary"></textarea>
            <div className="label">Optional</div>
            </fieldset>
            </div>
            <div>
              <label className="label text-xl ">Cover Photo</label>
              <input type="photo" name="coverImage" className="input w-full" placeholder="Enter Your Photo URL" />
            </div>
            <button className="btn bg-purple-700 text-white font-semibold w-full mt-4">Add A Job</button>
          </form>
        </div>
      </div>
    </div>
 </div>
  );
};

export default AddAJob;
