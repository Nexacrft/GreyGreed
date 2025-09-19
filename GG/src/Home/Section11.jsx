export function AboutUs() {
  return (
    <section className="bg-[#111111] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-left">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative w-[600px] h-96 rounded overflow-hidden ">
              <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/7Zzk67Jh/Screenshot-2025-09-05-at-7-04-36-PM.png"
                  alt="Grey Greed Creative Agency"
                  width={200}
                  height={200}
                  className="rounded"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-balance">About Us</h2>

            <div className="space-y-4 text-lg leading-relaxed text-gray-300">
              <p>
                We don't chase trends. We create gravity for brands with content, culture & tech. We're Grey Greed — a
                creative agency + production house.
              </p>

              <p>
                From AD films to UGC's, influencer collabs to full-blown campaigns — we make content that cuts through
                culture and actually works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;
