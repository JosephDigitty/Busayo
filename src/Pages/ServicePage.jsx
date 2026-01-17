import { motion } from "framer-motion";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white  text-black">
      {/* Page Header */}
      <section className="container mx-auto px-6 pt-30 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-400 mb-4">
          Services & Programs
        </h1>
        <p className="text-gray-900 max-w-2xl mx-auto">
          Discover personalized pathways designed to help you find clarity, confidence,
          and impact — in your personal, emotional, and professional life.
        </p>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {/* Life Coaching */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-black border border-red-900/40 p-8 rounded-2xl shadow-lg"
        >
          <Target className="text-red-400 mb-4" size={32} />
          <h3 className="text-2xl font-semibold mb-3 text-white">Life Coaching</h3>
          <p className="text-white text-sm leading-relaxed mb-4">
            Focused on self-discovery, mindset transformation, and goal setting to help
            you take charge of your personal growth journey.
          </p>
          <button className="text-red-400 hover:text-red-300 font-medium">
            Book a Session →
          </button>
        </motion.div>

        {/* Social Impact Mentorship */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-black border border-red-900/40 p-8 rounded-2xl shadow-lg"
        >
          <Users className="text-blue-400 mb-4" size={32} />
          <h3 className="text-2xl font-semibold mb-3 text-white">
            Social Impact Mentorship
          </h3>
          <p className="text-white text-sm leading-relaxed mb-4">
            Designed for individuals building purpose-driven careers or community projects
            that make a difference in the world.
          </p>
          <button className="text-blue-400 hover:text-blue-300 font-medium">
            Schedule a Consultation →
          </button>
        </motion.div>

        {/* Life Navigation Counselling */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-black border border-red-900/40 p-8 rounded-2xl shadow-lg"
        >
          <Heart className="text-pink-400 mb-4" size={32} />
          <h3 className="text-2xl font-semibold mb-3 text-white">
            Life Navigation Counselling
          </h3>
          <p className="text-white text-sm leading-relaxed mb-4">
            A safe space for emotional wellness, clarity, and rediscovering purpose.
            Build resilience and live with renewed meaning.
          </p>
          <button className="text-pink-400 hover:text-pink-300 font-medium">
            Start Your Journey →
          </button>
        </motion.div>
      </section>

      {/* Process Overview */}
      <section className="container mx-auto px-6 py-20 text-center border-t border-red-900/30">
        <h2 className="text-3xl font-bold text-red-400 mb-10">
          How the Process Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-black p-6 rounded-xl border border-red-800/40">
            <Sparkles className="text-red-400 mb-3 mx-auto" size={28} />
            <h3 className="text-xl font-semibold mb-2 text-white">Step 1: Free Consultation</h3>
            <p className="text-white text-sm">
              Let’s connect to understand your goals, challenges, and aspirations.
            </p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-red-800/40">
            <Target className="text-blue-400 mb-3 mx-auto" size={28} />
            <h3 className="text-xl font-semibold mb-2 text-white">Step 2: Personalized Plan</h3>
            <p className="text-white text-sm">
              A customized plan designed to support your journey toward clarity and purpose.
            </p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-red-800/40">
            <Heart className="text-pink-400 mb-3 mx-auto" size={28} />
            <h3 className="text-xl font-semibold mb-2 text-white">Step 3: Transformation Journey</h3>
            <p className="text-white text-sm">
              Step into growth and transformation with guided support and tools for success.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20 border-t border-red-900/30">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
          Testimonials & Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Blessing Umorem",
              text: "I have learnt more on how to navigate round my life.... knowing that not using books, songs and other things to solve a problem that just brings temporary solution.",
            },
            {
              name: "Anthony Oluwaseun",
              text: "Her Coaching and Mentorship has taught me that “Excellence isn't about perfection but progressive journey of growth",
            },
            {
              name: "Bakare Dorcas",
              text: "I have learnt to be more disciplined and resilient as a result of her mentorship",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#150202] border border-red-800/40 p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-300 italic mb-4">“{t.text}”</p>
              <p className="text-red-400 font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-gray-500 text-center mt-12 italic">
          Over 100 clients coached to success ✨
        </p>
      </section>

      {/* CTA Footer */}
      <section className="py-20 text-center bg-linear-to-t from-[#2b0000] to-[#1a0000] border-t border-red-900/40">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-gray-400 mb-8">
          Schedule your free consultation today and begin your clarity journey.
        </p>
        <a target="blank" href="https://selar.com/m/IamBusayoDavies" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium">
          Schedule Consultation
        </a>
      </section>
    </div>
  );
};

export default ServicePage;
