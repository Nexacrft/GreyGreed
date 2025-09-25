export default function Home() {
  return (
    <main className="min-h-fit bg-[#0D0D0D] flex items-center justify-center px-4 py-10">
      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-light text-white mb-6 text-balance">
          Got a brief, a brand, or just a wild idea?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">
          We're all ears — and a whole lot of execution.
        </p>

        {/* WhatsApp Redirect */}
        <a
          href="https://wa.me/917498487413?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20idea."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 hover:bg-white hover:text-black text-white font-medium px-8 py-3 rounded-full text-base font-montserrat transition-colors duration-200 cursor-pointer"
        >
          Say Hello →
        </a>
      </div>
    </main>
  )
}
