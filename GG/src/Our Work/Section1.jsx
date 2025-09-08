import { useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Studio Lighting Setup",
    category: "Production",
    image: "/professional-studio-lighting-setup-with-multiple-l.jpg",
    tags: ["lighting", "studio", "production"],
  },
  {
    id: 2,
    title: "Camera Equipment Array",
    category: "Equipment",
    image: "/professional-camera-equipment-and-lighting-rigs-in.jpg",
    tags: ["camera", "equipment", "professional"],
  },
  {
    id: 3,
    title: "Multi-Light Configuration",
    category: "Setup",
    image: "/multiple-professional-studio-lights-on-stands-in-d.jpg",
    tags: ["lights", "configuration", "setup"],
  },
  {
    id: 4,
    title: "Production Studio",
    category: "Studio",
    image: "/professional-production-studio-with-lighting-equip.jpg",
    tags: ["studio", "production", "professional"],
  },
  {
    id: 5,
    title: "Lighting Grid Setup",
    category: "Lighting",
    image: "/overhead-lighting-grid-setup-in-professional-studi.jpg",
    tags: ["grid", "lighting", "overhead"],
  },
  {
    id: 6,
    title: "Equipment Configuration",
    category: "Technical",
    image: "/professional-studio-equipment-and-lighting-configu.jpg",
    tags: ["equipment", "technical", "configuration"],
  },
  {
    id: 7,
    title: "Advanced Lighting Rig",
    category: "Production",
    image: "/advanced-professional-lighting-rig-with-multiple-f.jpg",
    tags: ["advanced", "rig", "lighting"],
  },
  {
    id: 8,
    title: "Studio Environment",
    category: "Environment",
    image: "/complete-studio-environment-with-professional-ligh.jpg",
    tags: ["environment", "complete", "studio"],
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
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage)

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
            Explore our portfolio of projects and case studies, showcasing our expertise in production and creative
            solutions.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 mb-8 ">
          <button
            onClick={() => setActiveTab("Projects")}
            className={`pb-4 px-2 text-lg font-medium transition-colors ${
              activeTab === "Projects" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("Case Studies")}
            className={`pb-4 px-2 text-lg font-medium transition-colors ${
              activeTab === "Case Studies" ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Case Studies
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Projects"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-white/10 text-white placeholder-slate-400 pl-12 py-4 text-lg rounded-full  focus:ring-2 focus:ring-gray-600 focus:outline-none transition-colors"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white/10 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found matching "{searchQuery}"</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  currentPage === page
                    ? "bg-white text-gray-900 hover:bg-gray-200"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
