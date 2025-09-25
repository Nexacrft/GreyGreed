import { useState } from "react"
import { Link } from "react-router-dom"
import Section1 from '../Home/Section3' // added import

const projects = [
  {
    id: 1,
    title: "Creative Storytelling Through Films",
    category:
      "Films & Brand Films – Stories that blur the line between cinema and brand, living rent-free in memory.",
    link: "https://www.youtube.com/embed/f5WOPLGKQg0",
    tags: ["lighting", "studio", "production"],
  },
  {
    id: 2,
    title: "UGC Campaigns",
    category:
      "User-Generated Content – Raw. Real. Reckless. Everyday creators turned into authentic brand storytellers.",
    link: "https://www.youtube.com/embed/ZmCfdxBHlyM",
    tags: ["camera", "equipment", "professional"],
  },
  {
    id: 3,
    title: "AI-Driven CGI Showcase",
    category:
      "Digital Creations – Where imagination meets engineering to deliver visuals powered by CGI and AI.",
    link: "https://www.youtube.com/embed/gBWWlncXdjA",
    tags: ["cgi", "ai", "creativity"],
  },
  {
    id: 4,
    title: "Short-Form Visual Narratives",
    category:
      "Micro-Content – Engaging short videos crafted to grab attention instantly.",
    link: "https://www.youtube.com/embed/3CusukXadQU",
    tags: ["shorts", "reels", "quick content"],
  },
  {
    id: 5,
    title: "Next-Gen Digital VFX",
    category:
      "Visual Effects – Advanced editing and effects to enhance storytelling through motion.",
    link: "https://www.youtube.com/embed/GzfJdQUFXs4",
    tags: ["vfx", "motion", "effects"],
  },
  {
    id: 6,
    title: "Immersive Motion Graphics",
    category:
      "Motion Design – Blending design, animation, and interactivity for impactful visuals.",
    link: "https://www.youtube.com/embed/6CkpfEWtDnY",
    tags: ["motion", "graphics", "design"],
  },
  {
    id: 7,
    title: "Creative AI Edits",
    category:
      "AI-Powered Edits – Leveraging artificial intelligence to transform raw footage into captivating stories.",
    link: "https://www.youtube.com/embed/YUq-V3Z3Q5w",
    tags: ["ai", "edits", "innovation"],
  },
  {
    id: 8,
    title: "Product Storytelling",
    category:
      "Brand Showcases – Highlighting products with compelling narratives and visuals.",
    link: "https://www.youtube.com/embed/2Um7Q8qTThM",
    tags: ["product", "branding", "storytelling"],
  },
  {
    id: 9,
    title: "Experimental Visual Arts",
    category:
      "Creative Experiments – Pushing the boundaries of digital art and cinematic visuals.",
    link: "https://www.youtube.com/embed/kZMgJ7b1pjI",
    tags: ["art", "experimental", "visuals"],
  },
]

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("Projects")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter projects
  const filteredProjects = projects.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSearchQuery("")
  }

  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-white mb-6">Our Work</h1>
          <p className="text-gray-400 text-lg max-w-4xl">
            Explore our portfolio of projects and case studies, showcasing our expertise in production and creative
            solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-8">
          <button
            onClick={() => handleTabChange("Projects")}
            className={`pb-4 px-2 text-lg font-medium transition-colors ${
              activeTab === "Projects" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleTabChange("Case Studies")}
            className={`pb-4 px-2 text-lg font-medium transition-colors ${
              activeTab === "Case Studies" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Case Studies
          </button>
        </div>

        {/* Content */}
        {activeTab === "Projects" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/20 transition-all duration-300 hover:border-white/40"
              >
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src={item.link}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-normal font-montserrat text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-12">
            <Section1 />
          </div>
        )}
      </div>
    </div>
  )
}
