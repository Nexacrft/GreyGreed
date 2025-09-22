
const logos = [
  { name: "Enskart", src: "https://i.postimg.cc/nr5bQJjx/Screenshot-2025-09-10-at-3-32-41-PM-removebg-preview.png" },
  { name: "Mars", src: "https://i.postimg.cc/jdpYxRYQ/Screenshot-2025-09-10-at-3-33-45-PM-Photoroom.png" },
  { name: "Casio", src: "https://i.postimg.cc/tgDcxjwc/Screenshot-2025-09-10-at-3-35-06-PM-Photoroom.png" },
  { name: "G-Shock", src: "https://i.postimg.cc/ydbrLTVX/Screenshot-2025-09-10-at-3-36-04-PM-Photoroom.png" },
  { name: "Honest Farms", src: "https://i.postimg.cc/hGyBqTDh/Screenshot-2025-09-10-at-3-37-53-PM-Photoroom.png" },
  { name: "GoMechanic Spares", src: "https://i.postimg.cc/ZRWhYnnH/Screenshot-2025-09-10-at-3-38-52-PM-Photoroom.png" },
  { name: "YouTube", src: "https://i.postimg.cc/HsDCHpg0/Screenshot-2025-09-10-at-3-39-35-PM-Photoroom.png" },
  { name: "Zomato", src: "https://i.postimg.cc/PqFB7Hyw/Screenshot-2025-09-10-at-3-40-40-PM-Photoroom.png" },
  { name: "a", src: "https://i.postimg.cc/hj13Bqbs/Screenshot-2025-09-10-at-3-43-08-PM-Photoroom.png" },
  { name: "b", src: "https://i.postimg.cc/JnscTVYt/Screenshot-2025-09-10-at-3-43-47-PM-Photoroom.png" },
  { name: "c", src: "https://i.postimg.cc/ZKtFLQ8K/Screenshot-2025-09-10-at-3-44-16-PM-Photoroom.png" },
  { name: "d", src: "https://i.postimg.cc/KjzXpzSB/Screenshot-2025-09-10-at-3-44-57-PM-Photoroom.png" },
  { name: "e", src: "https://i.postimg.cc/yNcSW1Gm/Screenshot-2025-09-10-at-3-45-52-PM-Photoroom.png" },
  { name: "f", src: "https://i.postimg.cc/CKTRyyKz/Screenshot-2025-09-10-at-3-46-26-PM-Photoroom.png" },
  { name: "h", src: "https://i.postimg.cc/zfrGtndh/Screenshot-2025-09-10-at-3-47-05-PM-Photoroom.png" },
  { name: "g", src: "https://i.postimg.cc/NGzfqhJB/Screenshot-2025-09-10-at-3-47-40-PM-Photoroom.png" },
  { name: "i", src: "https://i.postimg.cc/3xM8NXQq/Screenshot-2025-09-10-at-3-48-16-PM-Photoroom.png" },
  { name: "j", src: "https://i.postimg.cc/7L9wKjJv/Screenshot-2025-09-10-at-3-48-57-PM-Photoroom.png" },
  { name: "k", src: "https://i.postimg.cc/P5zjq04L/Screenshot-2025-09-10-at-3-49-52-PM-Photoroom.png" },
  { name: "l", src: "https://i.postimg.cc/vZzZK4CS/Screenshot-2025-09-10-at-3-50-19-PM-Photoroom.png" },
  { name: "m", src: "https://i.postimg.cc/PqVrtBXW/Screenshot-2025-09-10-at-3-50-52-PM-Photoroom.png" },
  { name: "n", src: "https://i.postimg.cc/j2Ps42zc/Screenshot-2025-09-10-at-3-51-30-PM-Photoroom.png" },
  { name: "o", src: "https://i.postimg.cc/J4C743L2/Screenshot-2025-09-10-at-3-51-56-PM-Photoroom.png" },
  { name: "p", src: "https://i.postimg.cc/9QJcpvq6/Screenshot-2025-09-10-at-3-52-50-PM-Photoroom.png" },
]

export function LogoShowcase() {
  return (
    <section className="w-full py-10 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="relative">
        <div
          className="flex items-center gap-16 whitespace-nowrap "
          style={{
            animation: "scroll 10s linear infinite",
            animationName: "scroll",
            animationDuration: "40s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto md:h-14 object-contain"
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200%);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
export default LogoShowcase;
