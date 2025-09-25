import React from 'react'
import { Link } from "react-router"

export default function HomePage() {
  // Instead of importing videos, use links (URLs)
  const videoLinks = [
    "https://res.cloudinary.com/djzzj4s72/video/upload/v1758132572/reel5_gmomcn.mp4",
    "https://res.cloudinary.com/djzzj4s72/video/upload/v1758132804/reel4_ylrqd9.mp4",
    "https://res.cloudinary.com/djzzj4s72/video/upload/v1758130732/hero5_1_1_sbnvak.mp4",
    "https://res.cloudinary.com/djzzj4s72/video/upload/v1758126936/reelg_x32x9g.mp4",
  ]

  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-light">About</h1>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-montserrat">
                We're Grey Greed - A Creative Agency & Production House. We don't chase trends. We create for brands
                with content, culture & tech. From Ad Films to UGCs, Influencer Collabs to full-blown Campaigns - we
                make content that cuts through the noise and delivers. We're not just a vendor. We're your creative
                partners.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-white font-light px-8 md:px-10 py-3 rounded-full transition-colors">
                Get Started
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-light font-montserrat">100M+</div>
                <div className="text-base md:text-lg font-inter text-gray-400">Views</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-light font-montserrat">700k+</div>
                <div className="text-base md:text-lg font-inter text-gray-400">Watch Hours</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl md:text-4xl font-light font-montserrat">50+</div>
                <div className="text-base md:text-lg font-inter text-gray-400">Brands</div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Card Grid */}
          <div className="hidden md:block lg:col-span-3 md:pl-8 lg:pl-44 overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="flex gap-2 md:gap-4 h-full">
              {/* Column 1 - Scrolling Down */}
              <div className="animate-scroll-down flex flex-col gap-2 md:gap-4">
                {videoLinks.map((vid, i) => (
                  <div
                    key={`down-${i}`}
                    className="p-4 md:p-6 rounded-2xl md:rounded-3xl relative overflow-hidden w-48 md:w-64 h-72 md:h-96 flex-shrink-0"
                  >
                    <video
                      src={vid}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-3xl"
                    />
                  </div>
                ))}
              </div>

              {/* Column 2 - Scrolling Up */}
              <div className="animate-scroll-up flex flex-col gap-2 md:gap-4">
                {[...videoLinks].reverse().map((vid, i) => (
                  <div
                    key={`up-${i}`}
                    className="p-4 md:p-6 rounded-2xl md:rounded-3xl relative overflow-hidden w-48 md:w-64 h-72 md:h-96 flex-shrink-0"
                  >
                    <video
                      src={vid}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl md:rounded-3xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-down {
          animation: scroll-down 20s linear infinite;
        }
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
