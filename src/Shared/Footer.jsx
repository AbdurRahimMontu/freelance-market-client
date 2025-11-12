import React from 'react';
import { Link } from 'react-router';
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-base-100 '>

<div className="grid grid-cols-2  lg:grid-cols-4 w-11/12 mx-auto  text-base-content pt-5">
  <nav>
     <Link to="/" className='text-5xl font-bold cursor-pointer'>F<span className='text-purple-800'>M</span></Link>
 <div className="flex items-center gap-5 py-5">
  <Link target="_blank" to="https://x.com/home"><FaXTwitter size={22}/></Link>
  <Link target="_blank" to="https://www.youtube.com/"><FaYoutube size={28}/></Link>
  <Link target="_blank" to="https://www.facebook.com/"><FaFacebookSquare size={24}/></Link>

  </div>
  </nav>
  <nav>
    <h6 className="footer-title">Marketplace</h6>
   <div className='flex flex-col'>
     <a className="link link-hover">Upwork</a>
    <a className="link link-hover">Fiverr</a>
    <a className="link link-hover">Freelancer</a>
   </div>

  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
 <div className='flex flex-col'>
       <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
 </div>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-60">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  
</div>
<div className=' bg-base-300'>
    <p className="text-center py-2">
  Copyright © <span className='font-bold text-purple-800'>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</span> {new Date().getFullYear()}  - By Abdur Rahim Montu
</p>
</div>

        </footer>
    );
};

export default Footer;