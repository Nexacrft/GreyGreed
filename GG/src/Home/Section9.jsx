import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";


const LazyVideo = ({ src, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  );
};

const HeroVid = () => {
  const cards = [
    { rotateY: 60, height: "h-96", width: "w-64", video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758122241/hero1_ygpqbs.mp4" },
    { rotateY: 40, height: "h-80", width: "w-52", video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758123183/hero2_1_j2fudl.mp4" },
    { rotateY: 20, height: "h-72", width: "w-48", video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758125908/hero3_1_ddiwdb.mp4" },
    { rotateY: 0, height: "h-72", width: "w-44", video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758126936/reelg_x32x9g.mp4" },
    { rotateY: -20, height: "h-72", width: "w-48", video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758130732/hero5_1_1_sbnvak.mp4" },
    { rotateY: -40, height: "h-80", width: "w-52", video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758131070/hero6_1_tkspav.mp4" },
    { rotateY: -60, height: "h-96", width: "w-64", video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758126766/hero4_1_1_syuhwi.mov" },
  ];

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(#ffffff_1.85px,#000000_1.85px)] [background-size:37px_37px] opacity-100 rounded-[70px]">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center pt-20 ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 text-balance">
            <span className="font-serif italic font-light text-white">
              Not Chasing Noise 
              <br />
              Creating Gravity
            </span>
            <br />
            <span className="font-sans text-4xl font-normal text-white">
             
            </span>
          </h1>
          <p className="text-lg lg:text-2xl font-thin  text-gray-300/60 max-w-3xl mx-auto mb-8 leading-relaxed">
            We are a Creative Agency and Production House
          </p>
        </div>

        {/* Videos */}
        <div
          className="flex justify-center items-center gap-5 w-full"
          style={{ perspective: "1500px" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative"
              style={{
                transform: `rotateY(${card.rotateY}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`${card.height} ${card.width} rounded-3xl shadow-xl transition-transform duration-500 overflow-clip`}
              >
                <LazyVideo
                  src={card.video}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroVid;