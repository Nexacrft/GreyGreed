import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-[745px] flex items-center justify-center relative overflow-hidden">
      {/* Dark radial gradient background */}
     <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://i.postimg.cc/66gSkj8t/generated-image.png')",
  }}
/>

      {/* Hero content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-500 ease-in-out -translate-y-10`}
      >
        {/* Main heading */}
        <h1 className="font-bold text-white leading-tight mb-5">
          <div className="text-4xl md:text-5xl lg:text-8xl text-bold">Not Chasing Noise.</div>
          <div className="text-5xl md:text-6xl lg:text-8xl text-balance mt-3">Creating Gravity</div>
        </h1>

        {/* Subheading */}
        <p className="text-[#DDDDDD] text-xl md:text-lg max-w-5xl mx-auto mb-24 ">
          We're a production company that helps brands create content that resonates with their audience.
        </p>

        {/* Call-to-action button */}
        <button
          className="bg-[#4BA3B5] hover:bg-[#3C8C9C] text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4BA3B5] focus:ring-offset-2 focus:ring-offset-black"
          onClick={() => {
            // Placeholder action - can be replaced with actual navigation
            console.log("CTA clicked")
          }}
        >
          Let's Build Something People Can't Ignore!
        </button>
      </div>
    </main>
  )
}
