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
    { rotateY: 60, height: "h-96", width: "w-64", video: "https://res.cloudinary.com/dmo8bqzrx/video/upload/v1762075884/cosco_Magnetic_Bottle_bf9mqd.mp4" },
    { rotateY: 40, height: "h-80", width: "w-52", video: "https://res.cloudinary.com/dmo8bqzrx/video/upload/v1762098729/G-SHOCK_X_GreyGreed_Productions_Store_launch_ej2lye.mp4" },
    { rotateY: 20, height: "h-72", width: "w-48", video: "https://res.cloudinary.com/dmo8bqzrx/video/upload/v1762100799/love_nature_1_d9r0xc.mp4" },
    { rotateY: 0, height: "h-72", width: "w-44", video: "https://res.cloudinary.com/dmo8bqzrx/video/upload/v1762075680/G-Shock_X_GreyGreed_Vox_Pop_sw3c0g.mp4" },
    { rotateY: -20, height: "h-72", width: "w-48", video: "https://res.cloudinary.com/dmo8bqzrx/video/upload/v1762076299/DHF_Ghee_X_GreyGreed_PRODUCT_FILM_zk6jjj.mp4" },
    { rotateY: -40, height: "h-80", width: "w-52", video: "https://res.cloudinary.com/dmo8bqzrx/video/upload/v1762098183/COSCO_YOGA_MAT_embjj3.mp4" },
    { rotateY: -60, height: "h-96", width: "w-64", video: "https://res.cloudinary.com/dmo8bqzrx/video/upload/v1762098546/Arata_X_Grey_Greed_cu94ao.mp4" },
  ];

  return (
    <div className="min-h-screen bg-black bg-[linear-gradient(#131313_4px,transparent_4px),linear-gradient(to_right,#131313_4px,#000000_4px)] bg-[length:80px_80px] opacity-100 rounded-[70px] overflow-hidden">
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