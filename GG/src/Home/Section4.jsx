import { Film, Video, Mic, Lightbulb, Megaphone, Users, TrendingUp, Hash, Bell, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Grey Greed Media Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-thin mb-2 text-balance">Concept to Camera to Campaign</h1>
          <h2 className="text-2xl font-medium mb-8 text-gray-300">Grey Greed Media</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <Film className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Digital</div>
                <div className="font-medium">Commercials</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <Video className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Video</div>
                <div className="font-medium">Production</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <Mic className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Audio</div>
                <div className="font-medium">Production</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <Lightbulb className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Creative</div>
                <div className="font-medium">Development</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <Megaphone className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Campaign</div>
                <div className="font-medium">Strategy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grey Greed Socials Section */}
        <div>
          <h2 className="text-2xl font-medium mb-8 text-gray-300">Grey Greed Socials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white/10  rounded-3xl p-6 flex items-center gap-4">
              <Users className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Influencer</div>
                <div className="font-medium">Management</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <TrendingUp className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Social Media</div>
                <div className="font-medium">Management</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <Hash className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Content</div>
                <div className="font-medium">Creation</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <Bell className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Community</div>
                <div className="font-medium">Engagement</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 flex items-center gap-4">
              <BarChart3 className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <div className="font-medium">Performance</div>
                <div className="font-medium">Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
