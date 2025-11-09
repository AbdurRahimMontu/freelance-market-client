import React from "react";
import category1 from "../assets/Category-01.png";
import category2 from "../assets/Category-02.png";
import category3 from "../assets/Category-03.png";

const TopCategories = () => {
  return (
<div className="bg-base-300">
        <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold py-5 text-center">Top Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 pb-10">
        <div className="p-5 shadow-lg bg-white flex flex-col gap-4 ">
          <div>
            <img src={category1} alt="" />
          </div>
         <div>
             <h3 className="text-2xl">Programming & Tech</h3>
          <ul>
            <li className="flex justify-between text-xl">App Development <span>(0)</span> </li>
            <li className="flex justify-between text-xl">Blockchain <span> (1)</span></li>
            <li className="flex justify-between text-xl">Game Development <span>(0)</span> </li>
            <li className="flex justify-between text-xl">Software Development <span>(2)</span> </li>
            <li className="flex justify-between text-xl">Website Development <span>(4)</span> </li>
          </ul>
         </div>
        </div>
       <div className="p-5 shadow-lg bg-white flex flex-col gap-4 ">
          <div>
            <img src={category2} alt="" />
          </div>
         <div> 
            <h3 className="text-2xl"> Graphics & Design</h3>
          <ul>
            <li className="flex justify-between text-xl">3D Design <span>(0)</span> </li>
            <li className="flex justify-between text-xl">Art & Illustration<span> (1)</span> </li>
            <li className="flex justify-between text-xl">Logo and Identity<span>(0)</span> </li>
            <li className="flex justify-between text-xl">Marketing Design <span>(1)</span></li>
            <li className="flex justify-between text-xl">Web & App Design <span>(6)</span></li>
          </ul></div>
        </div>
       <div className="p-5 shadow-lg bg-white flex flex-col gap-4">
          <div>
            <img src={category3} alt="" />
          </div>
         <div>
             <h3 className="text-2xl"> Digital Marketing</h3>
          <ul>
            <li className="flex justify-between text-xl">Ads Campaign <span>(1)</span></li>
            <li className="flex justify-between text-xl">Analytics & Strategy <span>(1)</span></li>
            <li className="flex justify-between text-xl">Channel <span>(0)</span></li>
            <li className="flex justify-between text-xl">Search <span>(0)</span></li>
            <li className="flex justify-between text-xl">Social Media <span>(0)</span></li>
          </ul>
         </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default TopCategories;
