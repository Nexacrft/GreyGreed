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
                Meet the{" "}
                <span className="relative">
                  Super-fast
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded"></div>
                </span>
                <br />
                E-commerce Video
                <br />
                Platform
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed font-montserrat">
                Packed with lightning-fast Shoppable videos, Interactive video quizzes, Live-stream shopping & more –
                All 3x faster than YouTube.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-full bg-transparent transition-colors">
                Book A Demo
              </button>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-light font-montserrat">288%</div>
                <div className="text-sm font-inter text-gray-400">Up to Uplift Conversions</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-light font-montserrat">20X</div>
                <div className="text-sm font-inter text-gray-400">Jump in Product Discovery</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-light font-montserrat">392%</div>
                <div className="text-sm font-inter text-gray-400">Increase User Engagement</div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Card Grid */}
          <div className="lg:col-span-3 pl-44 overflow-hidden h-[600px]">
            <div className="flex gap-4 h-full">
              {/* Column 1 - Scrolling Down */}
              <div className="animate-scroll-down flex flex-col gap-4">
                {/* Original cards */}
                <div className="bg-yellow-300 text-black p-6 rounded-3xl h-40 w-64 flex-shrink-0">
                  <div className="text-3xl font-bold">11.17</div>
                  <div className="text-lg">mins</div>
                  <div className="text-sm mt-2">Average Videos Watch Time</div>
                </div>

                <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-3xl w-64 h-40 flex-shrink-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                      <div className="text-sm">Glow Face Mask</div>
                    </div>
                    <div className="text-xl font-bold">$149.99</div>
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white text-sm px-2 py-2 rounded-full transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>

                {/* Duplicate cards for seamless loop */}
                <div className="bg-yellow-300 text-black p-6 rounded-3xl h-40 w-64 flex-shrink-0">
                  <div className="text-3xl font-bold">11.17</div>
                  <div className="text-lg">mins</div>
                  <div className="text-sm mt-2">Average Videos Watch Time</div>
                </div>

                <div className="bg-orange-600 p-6 rounded-3xl relative overflow-hidden w-64 h-96 flex-shrink-0">
                  <img
                    src="https://i.pinimg.com/736x/7f/48/fc/7f48fc0c3682de6fbad2fcce6d24e754.jpg"
                    alt="Silhouette"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-3xl w-64 h-40 flex-shrink-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                      <div className="text-sm">Glow Face Mask</div>
                    </div>
                    <div className="text-xl font-bold">$149.99</div>
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white text-sm px-2 py-2 rounded-full transition-colors">
                      Buy Now
                    </button>
                  </div>
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

                <div className="bg-green-400 text-black p-6 rounded-3xl w-64 h-40 flex-shrink-0">
                  <div className="text-sm">Up to</div>
                  <div className="text-3xl font-bold">60%</div>
                  <div className="text-sm mt-2">More sales this week</div>
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

                <div className="bg-green-400 text-black p-6 rounded-3xl w-64 h-40 flex-shrink-0">
                  <div className="text-sm">Up to</div>
                  <div className="text-3xl font-bold">60%</div>
                  <div className="text-sm mt-2">More sales this week</div>
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
