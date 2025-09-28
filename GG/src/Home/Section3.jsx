import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white px-8 py-12">
      {/* Section 2: Case Studies */}
      <section className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-white">
                 Harr Nivala Mamta Wala
              </h3>
              <div className="space-y-2 text-white/60">
                <p><span className="font-semibold">Client:</span> DeHaat Honest Farms</p>
                <p><span className="font-semibold">Agency:</span> Grey Greed Productions</p>
                <p><span className="italic">Campaign:</span> “When Moms Became Brand Ambassadors”</p>
                <p>2M+ views · Documented real-life moms · Massive engagement</p>
                <p>
                  Harr Nivala Mamta Wala wasn’t just a campaign—it was a movement. 
                  We turned real mom cooks into storytellers, crafted a film straight from the heart, 
                  and sparked conversations around ghar ka khana.
                </p>
                <p>
                  <span className="font-bold">Result:</span> 5M+ views, high engagement, and elevated brand credibility—
                  positioning DeHaat Honest Farms as a trusted, family-first food brand.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-3xl border border-white/20  overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1lhKvtvZvajIUIFSf_iNk7Xm1rCha9q6t/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Project 1 Video"
              ></iframe>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-white"> G-SHOCK Flagship Launch</h3>
              <div className="space-y-2 text-white/60">
                <p><span className="font-semibold">Client:</span> G-SHOCK</p>
                <p><span className="font-semibold">Agency:</span> Grey Greed Productions</p>
                <p>50M+ views · Store Launch Campaign</p>
                <p>
                  Grey Greed Productions partnered with G-SHOCK to launch their flagship store 
                  in Connaught Place, Delhi. Through a high-energy film rooted in Delhi’s street culture, 
                  supported by vox pops and stills, the campaign resonated strongly with the youth.  
                </p>
                <p>
                  <span className="font-bold">Result:</span> Massive buzz, cultural resonance, 
                  and bold positioning of G-SHOCK’s philosophy of absolute toughness.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-3xl border border-white/20 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1gl9eJ3dwcAES9AU-___ukItP4o1qh6Ms/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Project 2 Video"
              ></iframe>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-white"> #Maakipasandkakhaana</h3>
              <div className="space-y-2 text-white/60">
                <p><span className="font-semibold">Client:</span> DeHaat Honest Farms</p>
                <p><span className="font-semibold">Agency:</span> Grey Greed Productions</p>
                <p>1M+ views · Influencer campaign · 1 Main Film</p>
                <p>
                  For Mother’s Day, DeHaat Honest Farms wanted more than just an ad—they wanted 
                  a heartfelt celebration. We created #Maakipasandkakhaana, producing the film 
                  end-to-end, along with influencer collaborations and an original song.  
                </p>
                <p>
                  <span className="font-bold">Result:</span> A campaign that made people hum along to mom’s love.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-3xl border border-white/20 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1UTaw3XonceTUPIdUEdPXBDTQjLr1h3_s/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Project 3 Video"
              ></iframe>
            </div>
          </div>

          {/* Project 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-light text-white"> Casio Mini Keyboard</h3>
              <div className="space-y-2 text-white/60">
                <p><span className="font-semibold">Client:</span> Casio Music</p>
                <p><span className="font-semibold">Agency:</span> Grey Greed Productions</p>
                <p>60M+ views · 2 Main Films · End-to-End Production</p>
                <p>
                  Grey Greed Productions crafted two short, relatable films that positioned the Mini Keyboard 
                  as more than an instrument—a joyful playtime companion for kids and parents alike. 
                </p>
                <p>
                  <span className="font-bold">Result:</span> From strategy to scripting, direction, and production, 
                  our team handled the project end-to-end—delivering massive reach and cultural impact.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-3xl border border-white/20 overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/19r9-nXTG8ZwE75xIaNnQyHXqEdDukQ5A/preview"
                className="w-full h-full"
                allow="autoplay"
                title="Project 4 Video"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
