import { useState } from "react"
import { Link } from "react-router-dom"
import Section1 from '../Home/Section3' // added import

const projects = [
  {
    id: 1,
    title: "AI AND CGI FILMS",
    subtitle: "Where technology meets imagination.",
    category:
      "Digital Creations – Visuals engineered with artificial intelligence and CGI.",
    link: "https://www.youtube.com/embed/6CkpfEWtDnY",
    tags: ["ai", "cgi", "creativity"],
  },
  {
    id: 2,
    title: "Braun IPL",
    subtitle: "A product story that glows with confidence.",
    category:
      "Product Campaign – Highlighting beauty and personal care technology.",
    link: "https://www.youtube.com/embed/Ahr8SyE51Cw",
    tags: ["product", "beauty", "tech"],
  },
  {
    id: 3,
    title: "Casio mIni keyboard",
    subtitle: "Music reimagined for little talents.",
    category:
      "Brand Films – Showcasing instruments as joyful companions for kids.",
    link: "https://www.youtube.com/embed/U07S_X4Qqcg",
    tags: ["music", "kids", "brand film"],
  },
  {
    id: 4,
    title: "Casio mIni keyboard FILM 2",
    subtitle: "A cinematic take on playful music.",
    category:
      "Films – Second chapter of Casio’s storytelling through sound.",
    link: "https://www.youtube.com/embed/TAD0WJtz-ow",
    tags: ["music", "storytelling", "cinema"],
  },
  {
    id: 5,
    title: "cosco",
    subtitle: "Sports and fitness brought to life.",
    category:
      "Reels & Shorts – Quick, energetic stories about sports products.",
    link: "https://www.youtube.com/embed/qeiYXpLKKdg",
    tags: ["sports", "fitness", "shorts"],
  },
  {
    id: 6,
    title: "Dehaat Cattle Care X Grey Greed",
    subtitle: "A heartfelt campaign for rural wellness.",
    category:
      "Campaign Films – Agricultural products told through storytelling.",
    link: "https://www.youtube.com/embed/_E6YkGma5tQ",
    tags: ["agriculture", "cattle", "brand"],
  },
  {
    id: 7,
    title: "DHF AR FILTER",
    subtitle: "Playful interactions powered by AR.",
    category:
      "AR Innovation – Bridging creativity with interactive augmented filters.",
    link: "https://www.youtube.com/embed/3CusukXadQU",
    tags: ["ar", "filter", "innovation"],
  },
  {
    id: 8,
    title: "G-SHOCK Brand film",
    subtitle: "Celebrating toughness with a cultural edge.",
    category:
      "Brand Film – Rooted in street culture to amplify brand voice.",
    link: "https://www.youtube.com/embed/fLYjugz26rM",
    tags: ["watch", "street", "brand"],
  },
  {
    id: 9,
    title: "Independence Day CGI",
    subtitle: "Patriotism rendered in pixels.",
    category:
      "CGI Film – Digital storytelling for national celebration.",
    link: "https://www.youtube.com/embed/YUq-V3Z3Q5w",
    tags: ["cgi", "independence", "visuals"],
  },
  {
    id: 10,
    title: "International Women’s Day",
    subtitle: "Empowering stories of women, beautifully told.",
    category:
      "Campaign – A tribute to women through cinematic visuals.",
    link: "https://www.youtube.com/embed/vy1q-89b3GU",
    tags: ["women", "empowerment", "campaign"],
  },
  {
    id: 11,
    title: "Kheton Ka zaika",
    subtitle: "The taste of farms brought home.",
    category:
      "Food Campaign – Capturing authentic flavors from the source.",
    link: "https://www.youtube.com/embed/eg-EVXX10KQ",
    tags: ["food", "farm", "authentic"],
  },
  {
    id: 12,
    title: "Mars Brand FILM",
    subtitle: "Cinematic stories for a global brand.",
    category:
      "Ad Film – Creating engaging narratives for the Mars brand.",
    link: "https://www.youtube.com/embed/zmsPLemLikg",
    tags: ["brand", "cinema", "advertising"],
  },
  {
    id: 13,
    title: "Mother’s Day ad film",
    subtitle: "Celebrating mothers through heartfelt films.",
    category:
      "Occasion Campaign – Storytelling wrapped in emotion and love.",
    link: "https://www.youtube.com/embed/M8xJ8MZEy20",
    tags: ["mother", "love", "film"],
  },
  {
    id: 14,
    title: "MOTHER’S DAY FOR CASE STUDY",
    subtitle: "When moms became brand ambassadors.",
    category:
      "Case Study – A campaign that turned real-life mothers into storytellers.",
    link: "https://www.youtube.com/embed/RQaTitvXrRo",
    tags: ["case study", "mother", "campaign"],
  },
  {
    id: 15,
    title: "Oriflame podcast",
    subtitle: "Conversations beyond products.",
    category:
      "Podcast Series – Expanding beauty storytelling into audio format.",
    link: "https://www.youtube.com/embed/5iH8uuMrMT0",
    tags: ["podcast", "beauty", "conversation"],
  },
  {
    id: 16,
    title: "Oriflame Product CGI",
    subtitle: "Beauty crafted in digital pixels.",
    category:
      "Product CGI – Virtual production showcasing Oriflame innovation.",
    link: "https://www.youtube.com/embed/gBWWlncXdjA",
    tags: ["oriflame", "cgi", "digital"],
  },
  {
    id: 17,
    title: "Pink Celestial brand film",
    subtitle: "A dreamy visual journey.",
    category:
      "Brand Film – Crafting poetic visuals for a celestial brand.",
    link: "https://www.youtube.com/embed/3RBHkkrTSg4",
    tags: ["brand", "aesthetic", "film"],
  },
  {
    id: 18,
    title: "Swamish Brand Film",
    subtitle: "Tradition meets modern storytelling.",
    category:
      "Brand Film – Blending heritage with cinematic craft.",
    link: "https://www.youtube.com/embed/52gx6yWk-0M",
    tags: ["heritage", "brand", "cinema"],
  },
  {
    id: 19,
    title: "Work",
    subtitle: "Our creative portfolio of stories.",
    category:
      "Films & Brand Films – Stories that blur the line between cinema and brand, living rent-free in memory.",
    link: "https://www.youtube.com/embed/f5WOPLGKQg0",
    tags: ["portfolio", "showcase", "films"],
  },
  {
    id: 20,
    title: "Zomato",
    subtitle: "Food delivery with a creative twist.",
    category:
      "Ad Campaign – Relatable storytelling for a household name.",
    link: "https://www.youtube.com/embed/DiSTXKecZho",
    tags: ["food", "delivery", "brand"],
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
            Filmes
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
