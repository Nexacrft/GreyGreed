
const logos = [
  { name: "Enskart", src: "https://i.postimg.cc/PxfS8sJJ/Screenshot-2025-09-05-at-6-40-50-PM.png" },
  { name: "Mars", src: "https://i.postimg.cc/SxWdTNzj/Screenshot-2025-09-05-at-6-41-17-PM.png" },
  { name: "Casio", src: "https://i.postimg.cc/RhHpv1qL/Screenshot-2025-09-05-at-6-41-58-PM.png" },
  { name: "G-Shock", src: "https://i.postimg.cc/Cx70y03L/Screenshot-2025-09-05-at-6-47-26-PM.png" },
  { name: "Honest Farms", src: "https://i.postimg.cc/cJ1s6CRn/Screenshot-2025-09-05-at-6-46-25-PM.png" },
  { name: "GoMechanic Spares", src: "https://i.postimg.cc/c1zNZTkw/Screenshot-2025-09-05-at-6-46-03-PM.png" },
  { name: "YouTube", src: "https://i.postimg.cc/7YLbtBGz/Screenshot-2025-09-05-at-6-45-21-PM.png" },
  { name: "Zomato", src: "https://i.postimg.cc/YCZ4W1SW/Screenshot-2025-09-05-at-6-45-05-PM.png" },
]

export function LogoShowcase() {
  return (
    <section className="w-full py-10 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="relative">
        <div
          className="flex items-center gap-16 whitespace-nowrap "
          style={{
            animation: "scroll 30s linear infinite",
            animationName: "scroll",
            animationDuration: "30s",
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
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            >
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto md:h-10 object-contain filter brightness-0 invert"
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
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
export default LogoShowcase;
