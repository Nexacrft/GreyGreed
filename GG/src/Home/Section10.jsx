import { useState, useEffect, useRef } from "react"


const carouselItems = [
  {
    id: 1,
    title: "Mars",
    subtitle: "Exploring new horizons, igniting innovation, and pushing boundaries to transform every vision into extraordinary reality.",
    video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758131278/video02_xw5rwk.mp4",
  },
  {
    id: 2,
    title: "Casio",
    subtitle: "Blending precision with creativity, capturing timeless moments, and crafting experiences that resonate across generations.",
    video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758131381/video03_hy4wmd.mp4",
  },
  {
    id: 3,
    title: "Pink Celestial",
    subtitle: "Turning imagination into vibrant stories, illuminating dreams with every frame, and creating a universe of unforgettable visuals.",
    video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758132287/video04_1_1_sq4tl2.mp4",
  },
  {
    id: 4,
    title: "Zomato",
    subtitle: "Transforming ideas into immersive experiences, celebrating flavor, culture, and connection through every captivating creation.",
    video: "https://res.cloudinary.com/djzzj4s72/video/upload/v1758132522/video05_1_ivbokb.mov",
  },
]

// ✅ LazyVideo Component
const LazyVideo = ({ src, className }) => {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      className={className}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  )
}

export default function InfiniteImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with center card active

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % carouselItems.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getCardScale = (index) => {
    const distance = Math.abs(index - currentIndex)
    if (distance === 0) return 1.1
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
        <div className="bg-[#0D0D0D] backdrop-blur-sm rounded-2xl p-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-thin text-white mb-4 text-balance">
            Shades of Grey
          </h1>
          <p className="text-lg md:text-2xl text-white/50 font-normal max-w-4xl mx-auto text-pretty">
            Turning bold ideas into breathtaking stories, capturing every emotion, every frame, and every shade to create unforgettable cinematic masterpieces
          </p>
        </div>
      </div>

      <div className="relative rounded-3xl">
        {/* Carousel Container */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <div className="flex items-center justify-center h-full relative">
            {carouselItems.map((item, index) => {
              const position = index - currentIndex
              const translateX = position * (typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 280)

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}px) scale(${getCardScale(index)})`,
                    opacity: getCardOpacity(index),
                    zIndex: getCardZIndex(index),
                  }}
                >
                  {/* Card */}
                  <div className="relative w-48 h-64 md:w-64 md:h-80 lg:w-[800px] lg:h-[500px] bg-white rounded-3xl overflow-hidden shadow-2xl">
                    {/* Background Video */}
                    <LazyVideo
                      src={item.video || "/placeholder.mp4"}
                      className="w-full h-full object-cover"
                    />

                    {/* Title + Subtitle Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h2 className="text-white text-lg md:text-4xl font-bold font-montserrat">
                        {item.title}
                      </h2>
                      <p className="text-white/70 text-sm font-semibold md:text-lg">
                        {item.subtitle}
                      </p>
                    </div>
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
