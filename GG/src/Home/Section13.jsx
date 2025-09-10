import { useEffect, useState } from "react"

function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span className="font-thin text-2xl md:text-3xl">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-fit">
      {/* Stats Counter Section */}
      <section className="py-16 bg-[#0D0D0D]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-full shadow-lg">
              <div className="text-white/70 mb-2">
                <AnimatedCounter end={125000} suffix="+" duration={2500} />
              </div>
              <p className="text-gray-400 font-medium">Views</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-full shadow-lg">
              <div className="text-white/70 mb-2">
                <AnimatedCounter end={850} suffix="+" duration={2200} />
              </div>
              <p className="text-gray-400  font-medium">Clients</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-full shadow-lg">
              <div className="text-white/70 mb-2 ">
                <AnimatedCounter end={1200} suffix="+" duration={2800} />
              </div>
              <p className="text-gray-400  font-medium">Work Done</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-full shadow-lg">
              <div className="text-white/70 mb-2">
                <AnimatedCounter end={780} suffix="+" duration={2400} />
              </div>
              <p className="text-gray-400 font-medium">Client Complete</p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-full shadow-lg">
              <div className="text-white/70 mb-2">
                <AnimatedCounter end={95} suffix="%" duration={2600} />
              </div>
              <p className="text-gray-400  font-medium">Feedback</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
