export default function HomePage() {
  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-montserrat font-light ">
                About
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed font-montserrat">
                We’re Grey Greed - A Creative Agency & Production House.
                We don’t chase trends. We create for brands with content, culture & tech.
                From Ad Films to UGCs, Influencer Collabs to full-blown Campaigns - we make content that cuts through the noise and delivers. 
                We’re not just a vendor. We’re your creative partners.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white/10 text-white font-light px-6 py-2 rounded-full transition-colors">
                Get Started
              </button>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-light font-montserrat">100M+</div>
                <div className="text-lg font-inter text-gray-400">Views</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-light font-montserrat">700k+</div>
                <div className="text-lg font-inter text-gray-400">Watch Hours</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-light font-montserrat">20+</div>
                <div className="text-lg font-inter text-gray-400">Brands</div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Card Grid */}
          <div className="lg:col-span-3 pl-44 overflow-hidden h-[600px]">
            <div className="flex gap-4 h-full">
              {/* Column 1 - Scrolling Down */}
              <div className="animate-scroll-down flex flex-col gap-4">
                {/* Original cards */}
               <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className=" p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover "
                  />
                </div>

               <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Duplicate cards for seamless loop */}
                <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>
              </div>

              {/* Column 2 - Scrolling Up */}
              <div className="animate-scroll-up flex flex-col gap-4">
                {/* Original cards */}
                <div className="rounded-3xl overflow-hidden h-96 w-64 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Woman in blue"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className="rounded-3xl overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Blonde woman"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Duplicate cards for seamless loop */}
                <div className="rounded-3xl overflow-hidden h-96 w-64 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Woman in blue"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className="rounded-3xl overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Blonde woman"
                    className="w-full h-full object-cover"
                  />
                </div>
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
