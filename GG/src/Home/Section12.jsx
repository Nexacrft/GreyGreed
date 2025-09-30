import React from 'react'
import { Calendar, Users, Lightbulb, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

const Section12 = () => {
    const [currentSet, setCurrentSet] = useState(0)

    const testimonials = [
  {
    name: "Kanishka Mitra",
    role: "Deputy Brand Manager, Casio India",
    location: "India",
    quote: "Working with Grey Greed on our Casio Mini Keyboard campaign has been an incredibly rewarding experience. Their ability to translate our brand’s vision into two engaging short films was nothing short of exceptional. The storytelling was crisp, engaging, and visually vibrant - making the content not just informative, but truly memorable for the users by catching their attention. I deeply appreciate the team’s collaborative spirit, agility, and commitment to excellence. They’ve helped us bring music closer to our audience in a way that feels authentic, aspirational, and fun.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEOvUq3DflULw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727972204136?e=1761177600&v=beta&t=NwwnJxVeDMt2vANuXm8dqG4PB97cxiRR4618j62XVTA",
  },
  {
    name: "Abhishek Chaktraborty",
    role: "Head Of Brand Communications, Digital and PR, Oriflame India",
    location: "India",
    quote: "A team who understands new generation. Passion driven objective led and grounded to deliver good job that is what I know about Grey Greed. Kudos to the young and energetic team.",
    image: "https://i.postimg.cc/8CXGrPyZ/Whats-App-Image-2025-09-29-at-8-46-51-PM.jpg",
  },
  {
    name: "Akash Malhotra",
    role: "Vice President - Marketing, DeHaat",
    location: "India",
    quote: "Partnering with Grey Greed has been a game changer for DeHaat Honest Farms. They started from scratch, building our social media presence from the ground up. Be it content creation, influencer associations or building innovative ways of content dissemination, Grey Greed brought fresh ideas, consistency, and a deep understanding of our brand. The team is professional, creative, and always responsive. It's been wonderful co-creating with them.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEW30J5BkweOQ/profile-displayphoto-crop_800_800/B56Zl7l1gNI0AI-/0/1758715140939?e=1761782400&v=beta&t=FtfC2Zcr0zwkfDvYklvj35rryQNMtF4_QSwOnbLjGJI",
  },
  {
    name: "Muskan Jain",
    role: "Brand Manager, Mars Cosmetics",
    location: "India",
    quote: "This has turned out to be one of our finest content pieces to date! Huge thanks to the team for their creativity and dedication! Excited to see us raise the bar even higher with every project.",
    image: "https://i.postimg.cc/tgjZmDy8/Screenshot-2025-09-30-at-4-15-44-PM.png",
  },
  {
    name: "Apurv Anand",
    role: "Founder, SceneZone",
    location: "India",
    quote: "Amazing job with the direction and production. Innovative executors in the creative world.",
    image: "https://i.postimg.cc/jdxMBQqb/Whats-App-Image-2025-09-29-at-8-47-26-PM.jpg",
  },
]


  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % 2) // 2 sets of 3 testimonials each
  }

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + 2) % 2)
  }

  const currentTestimonials = testimonials.slice(currentSet * 3, (currentSet + 1) * 3)

  return (
     <section className="mb-20 bg-[#0D0D0D] text-black py-16 px-8 rounded-3xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-6xl font-thin mb-8 text-white text-center">Client Testimonials</h2>

            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex gap-2">
                <button
                  onClick={prevSet}
                  className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSet}
                  className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSet(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSet === index ? "bg-gray-800" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSet * 100}%)` }}
              >
                {/* First set of testimonials */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <div
                      key={`set-0-${index}`}
                      className="bg-white/10 p-8 rounded-3xl shadow-3xl transform transition-all duration-500 "
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 lg:w-15 h-10 lg:h-15 rounded-full object-cover"
                        />
                      </div>

                      <Quote className="w-8 h-8 text-white mb-6" />

                      <p className="text-sm font-thin text-white leading-tight mb-8">{testimonial.quote}</p>

                      <div className="border-l-4 border-gray-300 pl-4">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second set of testimonials */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {testimonials.slice(3, 6).map((testimonial, index) => (
                    <div
                      key={`set-1-${index}`}
                      className="bg-white/10 p-8 rounded-3xl shadow-3xl transform transition-all duration-500 "
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-10 lg:w-15 h-10 lg:h-15 rounded-full object-cover"
                        />
                      </div>

                      <Quote className="w-8 h-8 text-white mb-6" />

                      <p className="text-sm font-thin text-white leading-tight mb-8">{testimonial.quote}</p>

                      <div className="border-l-4 border-gray-300 pl-4">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Section12
