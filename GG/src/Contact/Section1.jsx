import { useState } from "react"

export default function ContactPage() {
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, success: null, error: null })

    const formData = new FormData(event.target)
    formData.append("access_key", "fd3a1053-ff54-4d7b-9ff3-4e851e516c6e") // Replace with your Web3Forms access key

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json())

      if (res.success) {
        setStatus({ loading: false, success: "Message sent successfully!", error: null })
        event.target.reset() // Reset form after success
      } else {
        throw new Error(res.message || "Something went wrong")
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

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

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white 
                placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
                text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white 
                placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
                text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white 
                placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
                text-sm sm:text-base"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Brief Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message..."
              required
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 rounded-2xl sm:rounded-3xl text-white 
                placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
                resize-none text-sm sm:text-base sm:rows-6"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="bg-white hover:bg-gray-100 disabled:bg-gray-400 text-black px-6 sm:px-8 py-2 sm:py-3 
              rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 
              focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base w-full sm:w-auto"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Response Messages */}
        {status.success && <p className="mt-4 text-green-400">{status.success}</p>}
        {status.error && <p className="mt-4 text-red-400">{status.error}</p>}

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
