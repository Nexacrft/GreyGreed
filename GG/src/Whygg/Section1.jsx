import { Calendar, Users, Lightbulb, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"
import Section12 from "../Home/Section12" 

export default function Home() {
  const [currentSet, setCurrentSet] = useState(0)

  const testimonials = [
  {
    name: "Kanishka Mitra",
    role: "Deputy Brand Manager, Casio India",
    location: "India",
    quote: "Working with Grey Greed on our Casio Mini Keyboard campaign has been an incredibly rewarding experience. Their ability to translate our brand’s vision into two engaging short films was nothing short of exceptional. The storytelling was crisp, engaging, and visually vibrant - making the content not just informative, but truly memorable for the users by catching their attention. I deeply appreciate the team’s collaborative spirit, agility, and commitment to excellence. They’ve helped us bring music closer to our audience in a way that feels authentic, aspirational, and fun.",
    image: "",
  },
  {
    name: "Abhishek Chaktraborty",
    role: "Head Of Brand Communications, Digital and PR, Oriflame India",
    location: "India",
    quote: "A team who understands new generation. Passion driven objective led and grounded to deliver good job that is what I know about Grey Greed. Kudos to the young and energetic team.",
    image: "/abhishek-chaktraborty.png",
  },
  {
    name: "Akash Malhotra",
    role: "Vice President - Marketing, DeHaat",
    location: "India",
    quote: "Partnering with Grey Greed has been a game changer for DeHaat Honest Farms. They started from scratch, building our social media presence from the ground up. Be it content creation, influencer associations or building innovative ways of content dissemination, Grey Greed brought fresh ideas, consistency, and a deep understanding of our brand. The team is professional, creative, and always responsive. It's been wonderful co-creating with them.",
    image: "/akash-malhotra.png",
  },
  {
    name: "Muskan Jain",
    role: "Brand Manager, Mars Cosmetics",
    location: "India",
    quote: "This has turned out to be one of our finest content pieces to date! Huge thanks to the team for their creativity and dedication! Excited to see us raise the bar even higher with every project.",
    image: "/muskan-jain.png",
  },
  {
    name: "Apurv Anand",
    role: "Founder, SceneZone",
    location: "India",
    quote: "Amazing job with the direction and production. Innovative executors in the creative world.",
    image: "/apurv-anand.png",
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
    <div className="min-h-screen bg-[#0D0D0D] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Why Choose Grey Greed Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-8 text-white">Why Choose Grey Greed</h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-5xl">
            At Grey Greed, we're not just another production company. We're a collective of passionate storytellers,
            driven by a shared vision to craft compelling narratives that resonate deeply with audiences. Our approach
            is rooted in collaboration, innovation, and an unwavering commitment to excellence. We believe in the power
            of visual storytelling to inspire, inform, and transform, and we're dedicated to bringing your vision to
            life with creativity and precision.
          </p>
        </section>

        {/* Client Testimonials Section */}
        <section className="mb-20  text-black py-16 px-8 rounded-3xl">
          <Section12/>
        </section>

        {/* Key Differentiators Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-white">Key Differentiators</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Creative Visionaries */}
            <div className="bg-white/10 p-8 rounded-3xl">
              <Calendar className="w-8 h-8 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Creative Visionaries</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team comprises seasoned filmmakers, writers, and designers who bring a wealth of experience and a
                fresh perspective to every project. We're passionate about pushing creative boundaries and crafting
                stories that leave a lasting impression.
              </p>
            </div>

            {/* Client-Centric Approach */}
            <div className="bg-white/10 p-8 rounded-3xl">
              <Users className="w-8 h-8 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Client-Centric Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe in building strong partnerships with our clients, working closely with you every step of the
                way to ensure your vision is not only realized but elevated. Your success is our priority.
              </p>
            </div>

            {/* Innovative Storytelling */}
            <div className="bg-white/10 p-8 rounded-3xl">
              <Lightbulb className="w-8 h-8 text-gray-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Innovative Storytelling</h3>
              <p className="text-gray-400 leading-relaxed">
                We leverage cutting-edge technology and innovative techniques to create visually stunning and
                emotionally resonant content. From concept to delivery, we're committed to delivering exceptional
                quality and exceeding expectations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
