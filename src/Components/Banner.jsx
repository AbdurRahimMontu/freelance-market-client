import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide01 from "../assets/slide (1).jpg";
import slide02 from "../assets/slide (2).jpg";
import slide03 from "../assets/slide (3).jpg";
import slide04 from "../assets/slide (4).jpg";
import slide05 from "../assets/slide (5).jpg";
import slide06 from "../assets/slide (6).jpg";
import slide07 from "../assets/slide (7).jpg";
import slide08 from "../assets/slide (8).jpg";
import slide09 from "../assets/slide (9).jpg";
import slide10 from "../assets/slide (10).jpg";
import slide11 from "../assets/slide (11).jpg";
import slide12 from "../assets/slide (12).jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
      <Carousel showThumbs={false} autoPlay={true} stopOnHover={true} infiniteLoop={true}>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px] relative">
          <img src={slide01} alt="Slide 01" className="w-full h-ful object-cover"/>
          <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Users can easily search and post jobs.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide02} alt="Slide 02" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Marketplace is a reliable online platform.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide03} alt="Slide 03" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Marketplace is a reliable online platform.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide04} alt="Slide 04" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Marketplace is a trustworthy place for freelance work.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide05} alt="Slide 05" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">It provides various jobs safely to users.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide06} alt="Slide 06" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Marketplace is a reliable online platform.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide07} alt="Slide 07" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Companies can easily find suitable qualified candidates.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide08} alt="Slide 08" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Freelancers can accept jobs based on their skills.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide09} alt="Slide 09" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Reviews and ratings build trust among users.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide10} alt="Slide 10" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Secure payment system ensures fast and safe transactions.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide11} alt="Slide 11" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Trusted freelancers and companies work together seamlessly.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
        <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
          <img src={slide12} alt="Slide 12" className="w-full h-ful object-cover"/>
           <div className="absolute top-50 px-10 space-y-3">
            <p className="text-2xl bg-purple-400 py-3 px-2">Each job’s quality and responsibility is ensured.</p>
            <Link to="/addAJob" className="btn bg-purple-700 text-white">Create A Job</Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

// Marketplace is a reliable online platform.

// It provides various jobs safely to users.

// Users can easily search and post jobs.

// Each job’s quality and responsibility is ensured.

// Trusted freelancers and companies work together seamlessly.

// Secure payment system ensures fast and safe transactions.

// Reviews and ratings build trust among users.

// Freelancers can accept jobs based on their skills.

// Companies can easily find suitable qualified candidates.

// Marketplace is a trustworthy place for freelance work.