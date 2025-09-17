export default function ContactPage() {
  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
          Start a Conversation
        </h1>

        <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base text-pretty">
          We're excited to hear from you. Whether you have a project in mind or just want to chat, reach out and let's
          explore how we can work together.
        </p>

        <form className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              id="company"
              type="text"
              placeholder="Your Company"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Brief Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 resize-none text-sm sm:text-base sm:rows-6"
            />
          </div>

          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 sm:mt-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Information</h2>
          <div className="space-y-2 text-gray-300 text-sm sm:text-base">
            <p>Email: jagriti@graygreedproductions.com</p>
            <p>Phone: +91 9654499044</p>
          </div>
        </div>
      </div>
    </div>
  )
}
