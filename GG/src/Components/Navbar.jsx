import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Link } from "react-router";

export default function Navbar() {
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
    <nav className=" top-0 z-50 w-full h-[90px] px-4 sm:px-6 lg:px-10 shadow-2xl bg-[#0D0D0D]">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex flex-col">
          <div className="font-sans font-bold text-white text-2xl sm:text-3xl leading-tight">greygreed.</div>
          <div className="font-sans text-[#bfbfbf] text-[4px] sm:text-[5px] uppercase tracking-[2px] sm:tracking-[3px] leading-none text-center">
            PRODUCTIONS
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link, index) => (
            <Link
             
              to={link.href}
              className="font-sans font-thin text-white text-lg xl:text-xl hover:text-[#a8a8a8] transition-colors duration-300"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Link
          to="/contact"
          className="hidden lg:block font-sans font-normal hover:bg-white hover:text-black text-white text-sm xl:text-base bg-white/10 px-6 xl:px-9 py-3 rounded-full transition-colors duration-300 focus:outline-none"
          aria-label="Get in touch with us"
        >
          Get In Touch
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d0d0d] rounded-md"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[90px] left-0 right-0 h-[calc(100vh-90px)] w-full sm:w-80 sm:right-0 sm:left-auto bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Mobile CTA Button */}
          <Link
            to="/contact"
            className="font-sans font-normal text-black text-base bg-white px-6 py-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0d0d0d] text-center"
            aria-label="Get in touch with us"
            onClick={() => setIsMenuOpen(false)}
          >
            Get In Touch
          </Link>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link, index) => (
              <Link
               
                to={link.href}
                className="font-sans font-medium text-white text-lg hover:text-[#a8a8a8] transition-colors duration-300 py-2"
                aria-label={link.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[90px] bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}
