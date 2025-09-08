import reel1 from '../Videos/reel1.mp4'
import reel2 from '../Videos/reel2.mp4'
import reel3 from '../Videos/reel3.mp4'
import reel4 from '../Videos/reel4.mp4'
import reel5 from '../Videos/reel5.mp4'
import reel6 from '../Videos/reel6.mp4'
import reel7 from '../Videos/reel7.mp4'
import reel8 from '../Videos/reel8.mp4'
import reel9 from '../Videos/reel9.mp4'

const cardData = [
  {
    id: "1",
    videoUrl: reel1,
    alt: "Data-Driven Decisions Conference",
    background: "bg-white/10",
  },
  {
    id: "2",
    videoUrl: reel2,
    alt: "Branding: Connecting with Introverts, Ambiverts, and Extroverts",
    background: "bg-white/10",
  },
  {
    id: "3",
    videoUrl: reel3,
    alt: "Brand Identity Website Development",
    background: "bg-white/10",
  },
  {
    id: "4",
    videoUrl: reel4,
    alt: "How Website Design Shapes Brand Perception",
    background: "bg-white/10",
  },
  {
    id: "5",
    videoUrl: reel5,
    alt: "Consistency breeds trust quote",
    background: "bg-white/10",
  },
  {
    id: "6",
    videoUrl: reel6,
    alt: "We Are Hiring Multi-Disciplinary Designer",
    background: "bg-white/10",
  },
  {
    id: "7",
    videoUrl: reel7,
    alt: "Branding Goals",
    background: "bg-white/10",
  },
  {
    id: "8",
    videoUrl: reel8,
    alt: "Why Brands Need to Embrace Hyper-Personalization",
    background: "bg-white/10",
  },
  {
    id: "9",
    videoUrl: reel9,
    alt: "Sharing Our Perspective and Helping Companies",
    background: "bg-white/10",
  },
]


function CardComponent({ card, index }) {
  return (
<div
  className={`${card.background} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-96`}
>
  <video
    src={card.videoUrl || "/placeholder.mp4"}
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
</div>
  )
}

export function InfiniteScrollGrid() {
  // Split cards into 3 columns
  const column1 = cardData.filter((_, index) => index % 3 === 0)
  const column2 = cardData.filter((_, index) => index % 3 === 1)
  const column3 = cardData.filter((_, index) => index % 3 === 2)

  // Duplicate cards for seamless loop
  const duplicatedColumn1 = [...column1, ...column1, ...column1]
  const duplicatedColumn2 = [...column2, ...column2, ...column2]
  const duplicatedColumn3 = [...column3, ...column3, ...column3]

  return (
    <>
      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 30s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
        }

        .gradient-teal {
          background: linear-gradient(135deg, #0d9488 0%, #14b8a6 100%);
        }

        .gradient-purple {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
        }

        .gradient-orange {
          background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
        }

        .gradient-blue {
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
        }
      `}</style>

      <div className="min-h-screen bg-[#0D0D0D] py-12">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-normal text-white text-5xl md:text-6xl font-montserrat text-foreground mb-6">Professional Branding</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-white font-inter font-thin">
            Discover insights, strategies, and innovations in modern branding and marketing design systems.
          </p>
        </div>

        {/* 3-Column Grid with Infinite Scroll */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {/* Column 1 - Scroll Down */}
          <div className="relative h-screen overflow-hidden">
            <div className="animate-scroll-down space-y-6">
              {duplicatedColumn1.map((card, index) => (
                <CardComponent key={`col1-${index}`} card={card} index={index} />
              ))}
            </div>
          </div>

          {/* Column 2 - Scroll Up */}
          <div className="relative h-screen overflow-hidden">
            <div className="animate-scroll-up space-y-6">
              {duplicatedColumn2.map((card, index) => (
                <CardComponent key={`col2-${index}`} card={card} index={index} />
              ))}
            </div>
          </div>

          {/* Column 3 - Scroll Down */}
          <div className="relative h-screen overflow-hidden">
            <div className="animate-scroll-down space-y-6">
              {duplicatedColumn3.map((card, index) => (
                <CardComponent key={`col3-${index}`} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 px-4">
          <p className="text-muted-foreground">
            Crafting exceptional brand experiences through innovative design systems
          </p>
        </div>
      </div>
    </>
  )
}


export default InfiniteScrollGrid;