export default function ContactForm() {
  return (
    <form action="/send_email.php" method="POST" className="space-y-4 w-full max-w-lg mx-auto">
      <div>
        <input
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full border border-white/20 bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
        />
      </div>
      
      <div>
        <input
          name="email"
          type="email"
          required
          placeholder="Your Email"
          className="w-full border border-white/20 bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors"
        />
      </div>
      
      <div>
        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows="6"
          className="w-full border border-white/20 bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 transition-colors resize-none"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 font-semibold hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
