import React from "react";
import client1 from "../assets/Client1.jpg";
import client2 from "../assets/Client2.jpg";
import client3 from "../assets/Client3.jpg";
import client4 from "../assets/Client4.jpg";
import { motion } from 'motion/react';

const ClientComment = () => {
  return (
 <div className="bg-base-300 py-5 ">
    <h2 className="text-2xl text-center py-5 font-bold">Client Comment</h2>
   <div className="grid lg:grid-cols-4 pt-5 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto gap-8">

  <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img whileHover={{
        scale: 1.2,
      }}
          src={client1}
          alt="Client1"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
        The quality of their work exceeded my expectations, and I would highly recommend their services to anyone. Thank you for a job well done! Martin Cope Design Director at Pixel highly recommend their services to anyone. Thank you for a job well done!
          <span className="font-semibold">Martin Cope</span>,   Design Director at Pixel
        </p>
      </div>
    </div>

 <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img whileHover={{
        scale: 1.2,
      }}
          src={client2}
          alt="Client2"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
          I am truly impressed by the outstanding service I experienced! The
          team showed remarkable dedication to fulfilling my requirements,
           showcasing unmatched professionalism and expertise. Samantha Reed tched professionalism and expertise. 
          <br />
          <span className="font-semibold">Samantha Reed</span>, 
           Marketing Manager at TechSol Inc
        </p>
      </div>
    </div>
 <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img whileHover={{
        scale: 1.2,
      }}
          src={client3}
          alt="Client3"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
          I couldn't be happier with the incredible service I received! The
         team went above and beyond to cater to my needs, displaying a
         level of professionalism and expertise that truly impressed me.  level of professionalism and expertise that truly impressed me.
          <br />
          <span className="font-semibold">Emily Parker</span>
           CEO at Elegance Boutique
        </p>
      </div>
    </div>
 <div className="hero bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      <div className="hero-content flex flex-col items-center text-center">
        <motion.img whileHover={{
        scale: 1.2,
      }}
          src={client4}
          alt="Client4"
          className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full shadow"
        />
        <p className="py-4 text-base sm:text-lg text-justify leading-relaxed">
         The quality of their work exceeded my expectations, and I would
   highly recommend their services to anyone. Thank you their
    services to anyone seeking excellence. Thank you for a job
    exceptionally well done!exceptionally well done!exceptionally well done!
          <br />
          <span className="font-semibold">Martin Cope</span>,   Design Director at Pixel
        </p>
      </div>
    </div>







    </div>
 </div>
  );
};

export default ClientComment;




      // <div className="hero bg-base-200">
      //   <div className="hero-content gap-10 flex-col lg:flex-row flex">
      //     <div className="flex-1">
      //       <img src={client2}   className="w-64 sm:w-80 md:w-96 lg:w-[420px] rounded-2xl shadow-md object-cover"
      // />
      //       <p className="py-6 text-xl text-justify p-2">
      //         I am truly impressed by the outstanding service I experienced! The
      //         team showed remarkable dedication to fulfilling my requirements,
      //         showcasing unmatched professionalism and expertise. Samantha Reed tched professionalism and expertise. Samantha Reed
      //         Marketing Manager at TechSol Inc
      //       </p>
      //     </div>
      //   </div>
      // </div>

      // <div className="hero bg-base-200">
      //   <div className="hero-content gap-10 flex-col lg:flex-row flex">
      //     <div className="flex-1">
      //       <img src={client3}   className="w-64 sm:w-80 md:w-96 lg:w-[420px] rounded-2xl shadow-md object-cover"
      // />
      //       <p className="py-6 text-xl flex-1">
      //         I couldn't be happier with the incredible service I received! The
      //         team went above and beyond to cater to my needs, displaying a
      //         level of professionalism and expertise that truly impressed me.  level of professionalism and expertise that truly impressed me.
      //         <br />
            
      //         Emily Parker CEO at Elegance Boutique
      //       </p>
      //     </div>
      //   </div>
      // </div>
      // <div className="hero bg-base-200">
      //   <div className="hero-content gap-10 flex-col lg:flex-row flex">
      //     <div className="flex-1">
      //       <img src={client4}  className="w-64 sm:w-80 md:w-96 lg:w-[420px] rounded-2xl shadow-md object-cover"
      // />
      //       <p className="py-6 text-xl flex-1">
      //         The quality of their work exceeded my expectations, and I would
      //         highly recommend their services to anyone. Thank you their
      //         services to anyone seeking excellence. Thank you for a job
      //         exceptionally well done!exceptionally well done!exceptionally well done!
      //         <br />
      //         <br />
      //         Martin Cope Design Director at Pixel
      //       </p>
      //     </div>
      //   </div>
      // </div>