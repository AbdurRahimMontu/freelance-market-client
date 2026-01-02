import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";

import "swiper/css";


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


const slides = [
  { img: slide01, text: "Users can easily search and post jobs." },
  { img: slide02, text: "Marketplace is a reliable online platform." },
  { img: slide03, text: "Marketplace is a reliable online platform." },
  { img: slide04, text: "Marketplace is a trustworthy place for freelance work." },
  { img: slide05, text: "It provides various jobs safely to users." },
  { img: slide06, text: "Marketplace is a reliable online platform." },
  { img: slide07, text: "Companies can easily find suitable candidates." },
  { img: slide08, text: "Freelancers can accept jobs based on their skills." },
  { img: slide09, text: "Reviews and ratings build trust among users." },
  { img: slide10, text: "Secure payment ensures fast and safe transactions." },
  { img: slide11, text: "Trusted freelancers and companies work together seamlessly." },
  { img: slide12, text: "Each job's quality and responsibility is ensured." },
];

const Banner = () => {
  return (
    <div className="h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
      <Swiper
          modules={[Autoplay]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,                 // ✅ 2 seconds
          pauseOnMouseEnter: true,     // ✅ pause on hover
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[580px]">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

              {/* Content */}
              <div className="absolute top-1/3 left-6 sm:left-12 max-w-xl space-y-4">
                <p className="text-lg sm:text-2xl font-semibold text-white">
                  {slide.text}
                </p>

                <Link
                  to="/addAJob"
                  className="inline-block rounded-md bg-purple-600 px-6 py-3 text-white font-medium hover:bg-purple-700 transition"
                >
                  Create A Job
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Banner;



