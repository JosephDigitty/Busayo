import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black py-20 px-6 md:px-12 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side — Contact Info / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-red-400 mb-4">
            Let's Connect 🤝
          </h2>
          <p className="text-gray-900 text-lg leading-relaxed">
            Whether you’re seeking clarity, growth, or a new beginning —
            reaching out is the first step. Fill the form or use any of the
            details below, and let’s begin your transformation journey.
          </p>

          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-4">
              <Mail className="text-red-500" />
              <p>youunveiledwithbdavies@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-red-500" />
              <p>+234 812 345 6789</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-red-500" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side — Contact Form */}
        <motion.form
        action="https://formsubmit.co/youunveiledwithbdavies@gmail.com" 
        method="POST"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black rounded-2xl p-8 shadow-xl border border-red-900 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-4">
            Send a Message
          </h3>

          <div>
            <label className="block text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-red-800 focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-red-800 focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Your Message</label>
            <textarea
              name="message"
              required
              placeholder="Type your message..."
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-red-800 focus:ring-2 focus:ring-red-600 outline-none resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactPage;
