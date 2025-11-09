import React from "react";

const AddAJob = () => {
  return (
 <div className="bg-base-300">
       <div className="border flex justify-center items-center">
      <div className=" card  w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body  border">
          <h1 className="text-3xl font-bold text-center">Add A Job</h1>
          <form>
            <div>
              <label className="label text-xl text-black">Title</label>
              <input type="text" className="input w-full" placeholder="Enter Your Title" />
            </div>
            <div>
              <label className="label text-xl text-black">Posted By</label>
              <input type="text" className="input w-full" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="label text-xl text-black">Category</label>
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
              <label className="label text-xl text-black">Cover Photo</label>
              <input type="photo" className="input w-full" placeholder="Enter Your Photo URL" />
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
