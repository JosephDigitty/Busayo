import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white/70 border border-red-300 text-gray-900 py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          Book a Session or Say Hello 👋
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Ready to start your transformation journey? Whether it’s a coaching
          session, mentorship, or life navigation counselling — let’s connect.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        {/* Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Mail className="text-red-400 w-6 h-6" />
            <p>youunveiledwithbdavies@gmail.com</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <Phone className="text-red-400 w-6 h-6" />
            <p>+234 800 123 4567</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2">
            <MapPin className="text-red-400 w-6 h-6" />
            <p>Lagos, Nigeria</p>
          </div>

          <div className="mt-6">
            <a
              href="mailto:coach@example.com"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
            >
              Send a Message
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
        action="https://formsubmit.co/youunveiledwithbdavies@gmail.com"
        method="POST"
          className="bg-black/80  backdrop-blur-sm border border-red-900/40 rounded-2xl p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
            name="Full Name"
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white border border-red-800/40 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
              required
            />
            <input
            name="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg bg-white border border-red-800/40 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <textarea
            name="Message"
            placeholder="Your Message"
            rows="5"
            className="w-full mt-6 p-3 rounded-lg bg-white border border-red-800/40 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500"
            required
          ></textarea>

          <button
            type="submit"
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition-all w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
