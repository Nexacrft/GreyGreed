import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const filmImages = [
  {
    id: 1,
    src: "/professional-film-camera-setup-with-tripods-and-li.jpg",
    alt: "Professional film camera setup",
  },
  {
    id: 2,
    src: "/multiple-film-cameras-on-tripods-with-studio-light.jpg",
    alt: "Multiple camera film setup",
  },
  {
    id: 3,
    src: "/film-production-studio-with-professional-cameras-t.jpg",
    alt: "Film production studio",
  },
]

export default function FilmPortfolio() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with middle image

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filmImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filmImages.length) % filmImages.length)
  }

  const getVisibleImages = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + filmImages.length) % filmImages.length
      visible.push({
        ...filmImages[index],
        position: i,
      })
    }
    return visible
  }

  return (
    <div className="min-h-fit bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16 text-balance">
          Shades Of Grey: Our Films
        </h1>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl">
          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full z-10 bg-black/50 hover:bg-black/70 text-white  p-2 transition-all duration-300 ease-out flex items-center justify-center transform hover:scale-110"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6 rounded-full" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full z-10 bg-black/50 hover:bg-black/70 text-white  p-2 transition-all duration-300 ease-out flex items-center justify-center transform hover:scale-110"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6 rounded-full" />
          </button>

          {/* Image Carousel */}
          <div className="flex items-center justify-center gap-6 px-16">
            {getVisibleImages().map((image, index) => {
              const { position } = image
              const isCenter = position === 0
              const isSide = Math.abs(position) === 1

              return (
                <div
                  key={`${image.id}-${index}`}
                  className={`
                    relative transition-all duration-700 ease-out cursor-pointer transform
                    ${isCenter ? "scale-120 z-20" : ""}
                    ${isSide ? "scale-80 z-10 opacity-80 hover:opacity-90 hover:scale-80" : ""}
                  `}
                  onClick={() => setCurrentIndex((currentIndex + position + filmImages.length) % filmImages.length)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white/10 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-white/20">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className={`
                        object-cover transition-all duration-500 ease-out
                        ${isCenter ? "w-96 h-80" : ""}
                        ${isSide ? "w-64 h-48" : ""}
                      `}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ease-out" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {filmImages.map((_, index) => (
              <button
                key={index}
                className={`
                  w-2 h-2 rounded-full transition-all duration-500 ease-out transform hover:scale-150
                  ${index === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"}
                `}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
