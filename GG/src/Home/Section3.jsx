import React from 'react';
import video1 from '../Videos/video1.mov'; // Ensure you have a video file in this path
import video2 from '../Videos/video2.mov'; // Ensure you have a video file in this path


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white px-8 py-12 ">
      {/* Section 2: Case Studies */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-thin text-white mb-10">Case Studies</h2>

        <div className="space-y-12">
          {/* Project 1 Case Study */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-white">Project 1</h3>
              <div className="space-y-2 text-white/60">
                <p>
                  <span className="font-semibold">Problem:</span> Low brand awareness.
                </p>
                <p>
                  <span className="font-semibold italic">Idea:</span> Create a viral video campaign.
                </p>
                <p>
                  <span className="font-bold">Result:</span> Increased brand visibility by 300%.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
  <video 
    src={video1}   // Replace with your video path              // Adds play/pause, volume, fullscreen controls
    autoPlay={true}        // Change to true if you want autoplay
    loop                    // Keeps replaying
    muted                   // Useful if autoplay is on
    className="w-full h-full object-cover"
  />
</div>
          </div>

          {/* Project 2 Case Study */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-white">Project 2</h3>
              <div className="space-y-2 text-white/60">
                <p>
                  <span className="font-semibold">Problem:</span> Stagnant social media engagement.
                </p>
                <p>
                  <span className="font-semibold italic">Idea:</span> Develop a series of short, engaging video content.
                </p>
                <p>
                  <span className="font-bold">Result:</span> Boosted engagement rates by 150%.
                </p>
              </div>
            </div>
<div className="aspect-video rounded-lg overflow-hidden">
  <video 
    src={video2}   // Replace with your video path             // Adds play/pause, volume, fullscreen controls
    autoPlay={true}        // Change to true if you want autoplay
    loop                    // Keeps replaying
    muted                   // Useful if autoplay is on
    className="w-full h-full object-cover"
  />
</div>
          </div>
        </div>
      </section>
    </div>
  )
}
