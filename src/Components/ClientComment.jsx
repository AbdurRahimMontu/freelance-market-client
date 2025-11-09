import React from "react";
import client1 from "../assets/Client1.jpg";
import client2 from "../assets/Client2.jpg";
import client3 from "../assets/Client3.jpg";
import client4 from "../assets/Client4.jpg";

const ClientComment = () => {
  return (
 <div className="bg-white">
    <h2 className="text-2xl text-center py-5 font-bold">Client Comment</h2>
   <div className="grid lg:grid-cols-4 w-11/12 mx-auto grid-col-1 ">
      <div className="hero bg-base-200">
        <div className="hero-content gap-10 flex-col lg:flex-row flex">
          <div>
            <img src={client1} />
            <p className="py-6 text-xl text-justify p-2">
              The quality of their work exceeded my expectations, and I would
                  highly recommend their services to anyone. Thank you for a job
              well done! Martin Cope Design Director at Pixel
              highly recommend their services to anyone. Thank you for a job
              well done! Martin Cope Design Director at Pixel
            </p>
          
          </div>
        </div>
      </div>

      <div className="hero bg-base-200">
        <div className="hero-content gap-10 flex-col lg:flex-row flex">
          <div className="flex-1">
            <img src={client2} className="" />
            <p className="py-6 text-xl text-justify p-2">
              I am truly impressed by the outstanding service I experienced! The
              team showed remarkable dedication to fulfilling my requirements,
              showcasing unmatched professionalism and expertise. Samantha Reed tched professionalism and expertise. Samantha Reed
              Marketing Manager at TechSol Inc
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200">
        <div className="hero-content gap-10 flex-col lg:flex-row flex">
          <div className="flex-1">
            <img src={client3} className="" />
            <p className="py-6 text-xl flex-1">
              I couldn't be happier with the incredible service I received! The
              team went above and beyond to cater to my needs, displaying a
              level of professionalism and expertise that truly impressed me.  level of professionalism and expertise that truly impressed me.
              <br />
            
              Emily Parker CEO at Elegance Boutique
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content gap-10 flex-col lg:flex-row flex">
          <div className="flex-1">
            <img src={client4} className="" />
            <p className="py-6 text-xl flex-1">
              The quality of their work exceeded my expectations, and I would
              highly recommend their services to anyone. Thank you their
              services to anyone seeking excellence. Thank you for a job
              exceptionally well done!exceptionally well done!exceptionally well done!
              <br />
              <br />
              Martin Cope Design Director at Pixel
            </p>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default ClientComment;
