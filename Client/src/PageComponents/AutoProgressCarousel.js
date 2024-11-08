import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Import framer-motion

const AutoProgressCarousel = () => {
  const [progress, setProgress] = useState(0);
  const intervalTime = 10 * 1000; // 7 seconds per slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) =>
        prev < 100 ? prev + 100 / (intervalTime / 100) : 0
      );
    }, 100);
    return () => clearInterval(timer);
  }, [intervalTime]);

  const Data = [
    {
      bgImg: "/bg1.jpg",
      bgMobile : "/bgM1.jpg",
      title: "Elegance with Every Stitch",
      description:
        "Discover our exquisite collection of embroidered ladies' suits, crafted to elevate your style with elegance and grace. Perfect for every occasion, our designs blend tradition with modern sophistication.",
      button: "Shop the Collection",
    },
    {
      bgImg: "/bg2.jpg",
      bgMobile : "/bgM2.jpg",
      title: "Embrace the Art of Embroidery",
      description:
        "Step into a world of intricate embroidery and luxurious fabrics. Our exclusive ladies' suits are designed to make every moment feel extraordinary. From casual gatherings to grand celebrations, find your perfect look.",
      button: "Explore Now",
    },
    {
      bgImg: "/bg3.jpg",
      bgMobile : "/bgM3.jpg",
      title: "Luxury in Every Detail",
      description:
        "Indulge in the charm of fine embroidery with our latest collection of ladies' suits. Each piece tells a story of tradition and elegance, tailored for the modern woman who values timeless beauty.",
      button: "View the Collection",
    },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: intervalTime,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          setProgress(0);
          setCurrentSlide(swiper.activeIndex); // Set current slide index to re-trigger animation
        }}
      >
        {Data.map((data, index) => (
          <SwiperSlide key={index}>
            <motion.div
              key={currentSlide} // This ensures re-animation on slide change
              className="slide-content flex md:py-52 py-48 md:px-10"
              style={{
                // backgroundImage: `url(${data.bgImg})`,
                backgroundImage: `url(${isMobile ? data.bgMobile : data.bgImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                height: "100vh",
                position: "relative",
              }}
              initial={{ opacity: 0.8, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Black overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
              ></div>

              {/* Slide Text Content with Animation */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  color: "white",
                  padding: "20px",
                }}
                className="flex flex-col justify-start items-start w-[800px] pb-6 md:pb-0"
              >
                <div className="flex flex-col md:gap-4 gap-3">
                  <div className="overflow-hidden" >
                  <motion.h2
                    className="md:text-[5rem] text-[4rem] tracking-tighter md:leading-[70px] leading-[60px] pb-6"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {data.title}
                  </motion.h2>
                  </div>

                  <div className="overflow-hidden" >
                  <motion.p
                    className="md:text-[1rem] text-[.9rem]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {data.description}
                  </motion.p>
                  </div>

                 <div className="overflow-hidden" >
                 <motion.button
                    className="text-[1rem] border-[1.3px] border-white md:p-3 p-2 rounded-sm hover:bg-black/50 transition-all duration-300 hover:border-transparent hover:rounded-tr-xl hover:rounded-bl-xl w-fit"
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay:0.1, }}
                  >
                    {data.button}
                  </motion.button>
                 </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Timer Overlay */}
      <div className="timer-overlay">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default AutoProgressCarousel;
