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

const Banner = () => {
  return (
    <div className="h-[580px]">
      <Carousel showThumbs={false} autoPlay={true} stopOnHover={false} infiniteLoop={true}>
        <div className="h-[580px]">
          <img src={slide01} />
        </div>
        <div className="h-[580px]">
          <img src={slide02} />
        </div>
        <div className="h-[580px]">
          <img src={slide03} />
        </div>
        <div className="h-[580px]">
          <img src={slide04} />
        </div>
        <div className="h-[580px]">
          <img src={slide05} />
        </div>
        <div className="h-[580px]">
          <img src={slide06} />
        </div>
        <div className="h-[580px]">
          <img src={slide07} />
        </div>
        <div className="h-[580px]">
          <img src={slide08} />
        </div>
        <div className="h-[580px]">
          <img src={slide09} />
        </div>
        <div className="h-[580px]">
          <img src={slide10} />
        </div>
        <div className="h-[580px]">
          <img src={slide11} />
        </div>
        <div className="h-[580px]">
          <img src={slide12} />
         
        </div>
  
      </Carousel>
   
    </div>
  );
};

export default Banner;