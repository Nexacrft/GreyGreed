

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Project Title Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-thin mb-4 text-white">Creative Storytelling Through Films</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
           Films and Brand Films- Stories that blur the line between cinema and brand, living rent-free in memory
          </p>
        </div>

       {/* Video Player Section */}
<div className="mb-16">
  <div className="relative bg-gray-300 rounded-3xl overflow-hidden aspect-video flex items-center justify-center">
    <video
      src="https://res.cloudinary.com/djzzj4s72/video/upload/v1758133726/ogvideo1_ba1hp9.mp4" // replace with your video path
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
            Our goal was to craft compelling narratives that blur the lines between cinema and brand, creating stories that don’t just advertise but live in memory. The challenge lay in balancing artistic storytelling with brand objectives.
          </p>
        </div>

        {/* Creative Solution Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Creative Solution</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
           We used cinematic techniques emotive storytelling, visual depth, and strong character arcs to make brand films resonate like movies. Each project was tailored to feel authentic and engaging, ensuring audiences stayed connected beyond the screen.
          </p>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The films achieved higher brand recall, improved engagement, and positioned the brand as more relatable and culturally relevant. Viewers not only remembered the campaigns but also associated them with meaningful experiences.
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
