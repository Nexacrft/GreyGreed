import { Video, Camera, Film, Edit, Users, PenTool, Hash, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-4xl leading-relaxed">
            Grey Greed offers a comprehensive suite of services across media and social platforms, designed to elevate
            your brand's presence and impact.
          </p>
        </div>

        {/* Grey Greed Media Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Grey Greed Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Video Production */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Production</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting compelling visual narratives that resonate with your audience.
              </p>
            </div>

            {/* Photography */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Photography</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Capturing moments with precision and artistry, tailored to your brand's identity.
              </p>
            </div>

            {/* Cinematography */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cinematography</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert cinematography that brings your vision to life with stunning visuals.
              </p>
            </div>

            {/* Post-Production */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <Edit className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Post-Production</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Refining and enhancing your content to achieve a polished and impactful final product.
              </p>
            </div>
          </div>
        </div>

        {/* Grey Greed Social Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Grey Greed Social</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Social Media Management */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Media Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Strategic management of your social media presence to engage and grow your audience.
              </p>
            </div>

            {/* Content Creation */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creating captivating content that drives engagement and aligns with your brand's goals.
              </p>
            </div>

            {/* Influencer Marketing */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <Hash className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Influencer Marketing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leveraging influencer partnerships to expand your reach and build credibility.
              </p>
            </div>

            {/* Analytics & Reporting */}
            <div className="bg-white/10 rounded-3xl p-6 hover:bg-gray-750 transition-colors">
              <div className="mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Providing detailed analytics and reports to measure performance and optimize your strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
