import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Our Work" },
    { href: "/service", label: "Our Services" },
    { href: "/whygg", label: "Why Grey Greed" },
  ]

  return (
     <nav
  className="top-0 z-50 w-full h-[90px] px-10 shadow-2xl"
  style={{
    backgroundImage: "url('https://i.postimg.cc/66gSkj8t/generated-image.png')",
  }}
  role="navigation"
  aria-label="Main navigation"
>
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="font-montserrat font-bold text-white text-3xl leading-tight">greygreed.</div>
            <div className="font-montserrat text-[#bfbfbf] text-[5px] uppercase tracking-[3px] leading-none text-center">
              PRODUCTIONS
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-inter font-medium text-white text-base hover:text-[#a8a8a8] transition-colors duration-300"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link
           to="/contact"
            className="hidden md:block font-inter font-semibold text-black text-base bg-[#6ba5b8] hover:bg-[#5a8d9e] px-6 py-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6ba5b8] focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
            aria-label="Get a quote for our services"
          >
            Get a Quote
          </Link>

          {/* Mobile Hamburger Button */}
          <Link
            to="/contact"
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-[70px] right-0 h-[calc(100vh-70px)] w-80 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 space-y-6">
            {/* Mobile CTA Button */}
            <button
              className="font-inter font-semibold text-black text-base bg-[#6ba5b8] hover:bg-[#5a8d9e] px-6 py-3 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#6ba5b8] focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
              aria-label="Get a quote for our services"
            >
              Get a Quote
            </button>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-inter font-medium text-white text-base hover:text-[#a8a8a8] transition-colors duration-300 py-2"
                  aria-label={link.label}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 top-[70px] bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
  )
}
