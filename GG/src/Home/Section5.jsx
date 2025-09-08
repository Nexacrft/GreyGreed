import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    id: 1,
    title: "Kanishka Mitra, Deputy Brand Manager, Casio India",
    quote:
      "Working with Grey Greed on our Casio Mini Keyboard campaign has been an incredibly rewarding experience. Their ability to translate our brand’s vision into two engaging short films was nothing short of exceptional",
  },
  {
    id: 2,
    title: "Abhishek Chaktraborty, Head Of Brand Communications, Digital and PR, Oriflame India",
    quote:
      "A team who understands new generation. Passion driven objective led and grounded to deliver good job that is what I know about Grey Greed. Kudos to the young and energetic team",
  },
  {
    id: 3,
    title: "Akash Malhotra, Vice President - Marketing, DeHaat",
    quote:
      "They started from scratch, building our social media presence from the ground up. Be it content creation, influencer associations or building innovative ways of content dissemination, Grey Greed brought fresh ideas, consistency, and a deep understanding of our brand",
  },
  {
    id: 4,
    title: "Muskan Jain, Brand Manager, Mars Cosmetics",
    quote:
      "This has turned out to be one of our finest content pieces to date! Huge thanks to the team for their creativity and dedication! Excited to see us raise the bar even higher with every project",
  },
  {
    id: 5,
    title: "Apurv Anand, Founder, SceneZone",
    quote:
      "Amazing job with the direction and production. Innovative executors in the creative world",
  },
]

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#121212] text-white py-15 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start py-10">
          {/* Left Column - Content - Added sticky positioning */}
          <div className="lg:sticky lg:top-8 space-y-8">
            {/* Header */}
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="text-3xl lg:text-5xl font-thin text-balance mb-10">Why Brands Choose Us (Again and Again)</h2>
              <p className="text-lg text-[#EAEAEA] leading-relaxed max-w-2xl">
                Our clients return because we consistently deliver high-quality, impactful content that drives results.
                We understand their vision and translate it into compelling stories that resonate with their target
                audience.
              </p>
            </div>

            {/* Testimonials */}
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-3">{testimonial.title}</h3>
                  <blockquote className="text-base text-[#EAEAEA] italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images - Added min-height to ensure proper scrolling */}
<div className="space-y-8 lg:pl-8 lg:min-h-screen">
  {testimonials.map((testimonial, index) => (
    <div
      key={`image-${testimonial.id}`}
      className={`transition-all duration-1000 delay-${(index + 1) * 300} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <img
        src={
          index === 0
            ? "https://i.pinimg.com/736x/db/18/8a/db188aa4d00d7b5db8f8d121fda8e991.jpg"   // Replace with your 1st image path
            : index === 1
            ? "https://i.pinimg.com/1200x/47/1f/33/471f33d9a7d90ba9b777d73d5e86c944.jpg"
            : index === 2  // Replace with your 2nd image path
            ? "https://i.pinimg.com/736x/f4/c7/ec/f4c7ec385c628fbf7ab0b4dc6cafd6da.jpg"
            : index === 3   // Replace with your 3rd image path
            ? "https://i.pinimg.com/736x/b7/d8/ea/b7d8ea5ee6e3592212cc2b9466f7adf6.jpg"   // Replace with your 3rd image path
            : "https://i.pinimg.com/736x/2d/b0/35/2db035ad799e5064c89feea4804c9637.jpg"   // Replace with your 3rd image path
        }
        alt={`${testimonial.title} showcase`}
        className="rounded-2xl aspect-[4/3] w-full object-cover transition-transform duration-300"
      />
    </div>
  ))}
</div>
</div>

        {/* Mobile Stacked Layout - Hidden on Desktop */}
        <div className="lg:hidden space-y-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={`mobile-${testimonial.id}`} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">{testimonial.title}</h3>
                <blockquote className="text-base text-[#EAEAEA] italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <img
                src={`/abstract-geometric-shapes.png?key=m2uub&height=400&width=600&query=${
                  index === 0
                    ? "modern brand design showcase with clean typography and professional layout"
                    : index === 1
                      ? "creative marketing campaign with bold visuals and engaging graphics"
                      : "strategic brand transformation with before and after comparison"
                }`}
                alt={`${testimonial.title} showcase`}
                className="rounded-lg aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
