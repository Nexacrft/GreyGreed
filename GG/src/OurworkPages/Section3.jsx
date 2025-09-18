import { Link } from "react-router";

export default function ProjectShowcase() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Project Title Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-thin mb-4 text-white">Immersive Digital Creations</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            CGI and AI Work-Where code meets chaos—imagination engineered into visuals you can’t ignore.
          </p>
        </div>
       {/* Video Player Section */}
<div className="mb-16">
  <div className="relative bg-gray-300 rounded-3xl overflow-hidden aspect-video flex items-center justify-center">
    <video
      src="https://res.cloudinary.com/djzzj4s72/video/upload/v1758133823/ogvideo3_pbagi4.mp4" // replace with your video path
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
           We set out to push the boundaries of imagination by merging CGI artistry with AI innovation. The objective was to create visuals so unique and immersive that they couldn’t be ignored.
          </p>
        </div>

        {/* Creative Solution Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Creative Solution</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
       Our team combined technical expertise in CGI with AI-driven enhancements to design surreal, futuristic, and dynamic visuals. By using advanced rendering and intelligent automation, we were able to engineer chaos into harmony.
          </p>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-white">Results</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            The output delivered unforgettable visuals that amplified brand storytelling. Campaigns stood out in cluttered feeds, resulting in greater shareability, wider reach, and positioning the brand as a leader in innovation.
          </p>
        </div>

        {/* Back to Work Button */}
        <div>
          <Link 
          to="/work"
          className="bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Back to Work
          </Link>
        </div>
      </div>
    </div>
  )
}
