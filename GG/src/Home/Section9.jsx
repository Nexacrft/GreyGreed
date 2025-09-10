import React from 'react';
import { ArrowRight } from "lucide-react"

const HeroVid = () => {
  const cards = [
    { bg: 'bg-red-500', rotateY: 60, height: 'h-96', width: 'w-64', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg'},
    { bg: 'bg-blue-500', rotateY: 40, height: 'h-80', width: 'w-52', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-yellow-500', rotateY: 20, height: 'h-72', width: 'w-48', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-pink-500', rotateY: 0, height: 'h-72', width: 'w-44', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' }, // center
    { bg: 'bg-yellow-500', rotateY: -20, height: 'h-72', width: 'w-48', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-blue-500', rotateY: -40, height: 'h-80', width: 'w-52', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
    { bg: 'bg-red-500', rotateY: -60, height: 'h-96', width: 'w-64', img: 'https://images.pexels.com/photos/11055558/pexels-photo-11055558.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 text-balance">
            <span className="font-serif italic font-light text-white">Streamline Your Team,</span>
            <br />
            <span className="font-sans font-bold text-white">Supercharge Your Workflow</span>
          </h1>

          <p className="text-lg text-gray-300/60 max-w-md mx-auto mb-8 leading-relaxed">
            All-in-one platform to plan, collaborate,
            <br />
            and deliver — faster and smarter.
          </p>

          <button className="bg-white/10 hover:bg-white hover:text-black transform duration-200 text-white px-8 py-3 rounded-full text-base font-medium transition-colors inline-flex items-center">
            Get started for Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

    <div
      className="flex justify-center items-center gap-5 w-full"
      style={{ perspective: '1500px' }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative"
          style={{
            transform: `rotateY(${card.rotateY}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className={`${card.bg} ${card.height} ${card.width} ${card.extraClass} rounded-3xl shadow-xl transition-transform duration-500 overflow-clip`}
          >
            <img src={""} alt="" />
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>

  );
};

export default HeroVid;