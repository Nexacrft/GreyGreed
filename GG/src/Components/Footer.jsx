import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top section with Privacy Policy and Terms of Service */}
        <div className="flex justify-between items-center mb-8">
          <a href="/privacy-policy" className="text-white hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <a href="https://www.instagram.com/greygreedproductions/" className="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/greygreedproductions/?viewAsMember=true" className="text-white hover:text-gray-300 transition-colors" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-white">© 2025 Grey Greed. All rights reserved.</div>
      </div>
    </footer>
  )
}
export default Footer;
