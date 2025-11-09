import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
     <li><NavLink className={({isActive})=>isActive?"text-purple-700 border-b-2 font-semibold":"font-semibold"} to="/">Home</NavLink></li>
     <li><NavLink className={({isActive})=>isActive?"text-purple-700 border-b-2 font-semibold":"font-semibold"} to="/allJobs">All Jobs</NavLink></li>
     <li><NavLink className={({isActive})=>isActive?"text-purple-700 border-b-2 font-semibold":"font-semibold"} to="/addAJob">Add A Job</NavLink></li>
     <li><NavLink className={({isActive})=>isActive?"text-purple-700 border-b-2 font-semibold":"font-semibold"} to="/myAcceptedTasks">My Accepted Tasks</NavLink></li>
   
    </>
    return (
        <div className='shadow-sm bg-base-100'>
         <div className="navbar  w-11/12 mx-auto  px-0">
  <div className="navbar-start">
 
    <Link to="/" className='text-5xl font-bold cursor-pointer'>F<span className='text-purple-800'>M</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      { links }
    </ul>
  </div>
  <div className="navbar-end space-x-3">
   <NavLink className={({isActive})=>isActive?"bg-purple-700 text-white btn btn-outline":"btn btn-outline"} to="login">Login</NavLink>
    <NavLink className={({isActive})=>isActive?"bg-purple-700 text-white btn btn-outline":"btn btn-outline"} to="/register">Register</NavLink>
     
     <div className="dropdown dropdown-end block md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
           <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>

      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         { links }
         <button className='btn bg-purple-800 text-white font-semibold'>LogOut</button>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;