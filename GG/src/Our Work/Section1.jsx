import { useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Section1 from '../Home/Section3' // added import

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
    category: "UGCs - Raw. Real. Reckless. We turn everyday creators into brand storytellers",
    image: "https://i.postimg.cc/0ydvj74K/Chat-GPT-Image-Sep-14-2025-02-44-01-PM.png",
    tags: ["camera", "equipment", "professional"],
    link: "/section2",
  },
  {
    id: 3,
    title: "Immersive Digital Creations",
    category: "CGI and AI Work - Where code meets chaos—imagination engineered into visuals you can't ignore.",
    image: "https://i.postimg.cc/bN1r0DMp/Chat-GPT-Image-Sep-14-2025-02-45-30-PM.png",
    tags: ["lights", "configuration", "setup"],
    link: "/section3",
  },
]

const caseStudies = [
  {
    id: 1,
    title: "Brand Transformation: Tech Startup Success",
    category: "Complete brand overhaul resulting in 300% increase in user engagement and $2M funding round.",
    image: "/modern-tech-startup-office-with-team-collaboration.jpg",
    tags: ["branding", "strategy", "growth"],
    link: "/case-study-1",
    metrics: { engagement: "+300%", funding: "$2M", timeline: "6 months" },
  },
  {
    id: 2,
    title: "E-commerce Platform: Conversion Optimization",
    category: "UX/UI redesign and marketing campaign that doubled conversion rates and increased revenue by 150%.",
    image: "/e-commerce-website-dashboard-with-analytics-charts.jpg",
    tags: ["ux/ui", "conversion", "analytics"],
    link: "/case-study-2",
    metrics: { conversion: "+100%", revenue: "+150%", timeline: "4 months" },
  },
  {
    id: 3,
    title: "Healthcare App: User Adoption Campaign",
    category: "Multi-channel campaign strategy that achieved 1M+ downloads and 85% user retention rate.",
    image: "/healthcare-mobile-app-interface-with-medical-data.jpg",
    tags: ["healthcare", "mobile", "retention"],
    link: "/case-study-3",
    metrics: { downloads: "1M+", retention: "85%", timeline: "8 months" },
  },
  {
    id: 4,
    title: "Restaurant Chain: Digital Transformation",
    category: "End-to-end digital solution including app development, loyalty program, and marketing automation.",
    image: "/restaurant-mobile-ordering-app-with-food-delivery.jpg",
    tags: ["food", "mobile", "loyalty"],
    link: "/case-study-4",
    metrics: { orders: "+250%", loyalty: "60%", timeline: "5 months" },
  },
  {
    id: 5,
    title: "SaaS Platform: Market Penetration",
    category: "Go-to-market strategy and product positioning that captured 25% market share in competitive landscape.",
    image: "/saas-dashboard-with-business-analytics-and-growth-.jpg",
    tags: ["saas", "strategy", "market"],
    link: "/case-study-5",
    metrics: { marketShare: "25%", growth: "+400%", timeline: "12 months" },
  },
  {
    id: 6,
    title: "Fashion Brand: Social Media Dominance",
    category: "Influencer marketing and content strategy that built 500K+ community and 40% sales increase.",
    image: "/fashion-brand-social-media-content-with-influencer.jpg",
    tags: ["fashion", "social", "influencer"],
    link: "/case-study-6",
    metrics: { followers: "500K+", sales: "+40%", timeline: "7 months" },
  },
]

export default function OurWork() {
  const [activeTab, setActiveTab] = useState("Projects")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Only filter projects for the Projects tab; Case Studies will be handled by a component
  const filteredProjects = projects.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredProjects.slice(startIndex, startIndex + itemsPerPage)

  const handleSearchChange = (value) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCurrentPage(1)
    setSearchQuery("")
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

        {/* Content Grid OR Custom Case Studies Component */}
        {activeTab === "Projects" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentItems.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/20 transition-all duration-300 hover:border-white/40"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-normal font-montserrat text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.category}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 border border-white/20 rounded-full text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // render your custom component for Case Studies
          <div className="mb-12">
            <Section1 />
          </div>
        )}

        {/* Pagination (only for Projects) */}
        {activeTab === "Projects" && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? "bg-white text-black"
                      : "border border-white/20 text-white hover:border-white/40"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Show message if no results for Projects */}
        {activeTab === "Projects" && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
