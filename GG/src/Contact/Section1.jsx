export default function ContactPage() {
  return (
    <div className="min-h-fit bg-[#0D0D0D] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">Start a Conversation</h1>

        <p className="text-gray-300 mb-8 leading-relaxed">
          We're excited to hear from you. Whether you have a project in mind or just want to chat, reach out and let's
          explore how we can work together.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/10  rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
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
              className="w-full px-4 py-3 bg-white/10 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
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
              className="w-full px-4 py-3 bg-white/10 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Brief Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-white/10 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2 text-gray-300">
            <p>Email: jagriti@graygreedproductions.com</p>
            <p>Phone: +91 9654499044</p>
          </div>
        </div>
      </div>
    </div>
  )
}
