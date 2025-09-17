import { useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const projects = [
  {
    id: 1,
    title: "Creative Storytelling Through Films",
    category:
      "Films and Brand Films - Stories that blur the line between cinema and brand, living rent-free in memory.",
    image: "https://i.postimg.cc/nzLp6M0j/Creative-Storytelling-in-Film.png",
    tags: ["lighting", "studio", "production"],
    link: "/section1",
  },
  {
    id: 2,
    title: "UGCs",
    category:
      "UGCs - Raw. Real. Reckless. We turn everyday creators into brand storytellers",
    image: "https://i.postimg.cc/0ydvj74K/Chat-GPT-Image-Sep-14-2025-02-44-01-PM.png",
    tags: ["camera", "equipment", "professional"],
    link: "/section2",
  },
  {
    id: 3,
    title: "Immersive Digital Creations",
    category:
      "CGI and AI Work - Where code meets chaos—imagination engineered into visuals you can’t ignore.",
    image: "https://i.postimg.cc/bN1r0DMp/Chat-GPT-Image-Sep-14-2025-02-45-30-PM.png",
    tags: ["lights", "configuration", "setup"],
    link: "/section3",
  },
]

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("Projects")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  )

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  )

  const handleSearchChange = (value) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-white mb-6">Our Work</h1>
          <p className="text-gray-400 text-lg max-w-4xl">
            Explore our portfolio of projects and case studies, showcasing our
            expertise in production and creative solutions.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-8 ">
          <button
            onClick={() => setActiveTab("Projects")}
            className={`pb-4 px-2 text-lg font-medium transition-colors ${
              activeTab === "Projects"
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project) => (
            <Link
              to={project.link}
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/20 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 "
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-normal font-montserrat text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Show message if no results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
