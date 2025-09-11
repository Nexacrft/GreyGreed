import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselItems = [
  {
    id: 1,
    title: "Winter Wonderland",
    subtitle: "Snowy mountain peaks",
    image: "", // Added missing icon
  },
  {
    id: 2,
    title: "Lakeside Retreat",
    subtitle: "Peaceful waters await",
    image: "/peaceful-lake-with-mountains-reflection.jpg",
  },
  {
    id: 3,
    title: "Desert Oasis", // Fixed title and subtitle
    subtitle: "Golden sand dunes",
    image: "/desert-oasis-with-palm-trees-golden-sand.jpg",
  },
  {
    id: 4,
    title: "Mountain Adventure",
    subtitle: "Hiking trails and views",
    image: "/mountain-hiking-trail-with-backpacker.jpg",
  },
  {
    id: 5,
    title: "Forest Escape",
    subtitle: "Deep woods serenity",
    image: "/dense-forest-path-with-tall-trees.jpg",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with center card active

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const getCardScale = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1.1 // Return numeric values instead of CSS classes
    if (distance === 1) return 0.95
    return 0.75
  }

  const getCardOpacity = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1
    if (distance === 1) return 0.9
    return 0.6
  }

  const getCardZIndex = (index) => {
    const distance = Math.abs(index - currentIndex)
    return carouselItems.length - distance
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-thin text-white mb-4 text-balance">
          Discover Nature's Beauty
        </h1>
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto text-pretty">
          Explore breathtaking landscapes and find your perfect escape in these stunning destinations
        </p>
      </div>

      <div className="relative rounded-3xl">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3  transition-all duration-200 "
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3  transition-all duration-200 "
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </button>

        {/* Carousel Container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="flex items-center justify-center h-full relative">
            {carouselItems.map((item, index) => {
              const position = index - currentIndex
              const translateX = position * (window.innerWidth < 768 ? 200 : 280) // Responsive spacing

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${translateX}px) scale(${getCardScale(index)})`, // Fixed transform syntax
                    opacity: getCardOpacity(index),
                    zIndex: getCardZIndex(index),
                  }}
                  onClick={() => goToSlide(index)}
                >
                  {/* Card */}
                  <div className="relative w-48 h-64 md:w-64 md:h-80 lg:w-[800px] lg:h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    {/* Background Image */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover" // Fixed image styling - removed fill prop and added proper sizing
                      onError={(e) => {
                        e.target.src = "/landscape-placeholder.jpg"
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
