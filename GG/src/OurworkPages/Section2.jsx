import video1 from '../Videos/ogvideo2.mp4'

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Project Title Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-thin mb-4 text-white">UGCs</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
           UGCs- Raw. Real. Reckless. We turn everyday creators into brand storytellers
          </p>
        </div>
       {/* Video Player Section */}
<div className="mb-16">
  <div className="relative bg-gray-300 rounded-3xl overflow-hidden aspect-video flex items-center justify-center">
    <video
      src={video1} // replace with your video path
      className="w-full h-full object-cover"
      autoPlay={true}
      loop
      muted
    />
  </div>
</div>

        {/* Project Overview Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Project Overview</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            With the rise of creators and everyday influencers, we aimed to transform raw, real, and sometimes reckless UGCs into powerful brand storytelling tools. The challenge was channeling authenticity while maintaining brand consistency.
          </p>
        </div>

        {/* Creative Solution Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Creative Solution</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
           We collaborated with creators, curating and refining their content into structured narratives. Instead of polished ads, we embraced real voices, integrating them into campaigns that showcased relatability and inclusivity.
          </p>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
           The campaigns generated high organic engagement, boosted trust, and cultivated communities around the brand. Audiences connected with the rawness, leading to higher participation and stronger advocacy.
          </p>
        </div>

        {/* Back to Work Button */}
        <div>
          <button className="bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Back to Work
          </button>
        </div>
      </div>
    </div>
  )
}
