import { motion } from "framer-motion";
import { Book, Award, Heart, Compass, Globe, Sparkles } from "lucide-react";
import service from '../assets/Images/service.jpg'
import book from '../assets/Images/Book.jpg'
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className=" text-gray-200">
        <div>

        </div>
      {/* Hero / Intro Section */}
      <section className="container md:h-screen mt-6 mx-auto px-6 bg-gray-100 sm:pt-10 pb-10 pt-10 mb-5 sm:pb-20 sm:mt-10 sm:mb-5 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <h1 className="mt-4 text-2xl md:text-5xl font-bold text-black mb-4">
            Hi, I’m <span className="text-red-400">Busayo Davies</span>
          </h1>
          <p className="text-[14px] leading-loose text-gray-900 mb-2">
             I’m a strategic Life coach, focused on helping people proffer solutions to problems, especially emotionally related ones. My target audience are teenagers and Young adults
            I am a serial Entrepreneur, partnering with Longrich Bioscience International Company to provide a Healthy/wealthy lifestyle to its clients.
            I am Digital Currency Ethusiast and an experienced Top notch Marketer for all your promotions.
          </p>
          <p className="text-[14px] leading-loose text-gray-900 mb-6 pt-1 ">
            I am a budding Voice over artiste and the <span className="text-red-500">  Initiator of CONCEPT SMILE PROJECTS and CONCEPT SAFETY INITIATIVE</span>, both created with the purpose of putting smiles on the faces of less privileged in the society and sensitizing people of the need to be safety conscious.
            A full time mum to 4 amazing kids and a wife to a Wonderful Man, I love to leave my mark in the lives of everyone i encounter.
          </p>
          <p className="italic text-gray-900">
            “Guiding lives toward clarity, confidence, and purpose.”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-96 h-96  rounded-full overflow-hidden shadow-2xl">
            <img
               src={service}
              alt="Coach Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-red-600/40 to-blue-500/40 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Her Journey */}
      <section className="container mx-auto px-6 py-16 border-t hidden border-red-900/40">
        <h2 className="text-3xl font-semibold mb-4 text-red-400">My Journey</h2>
        <p className="text-gray-300 leading-relaxed">
          My journey into coaching began with a deep passion for helping others
          navigate through life’s toughest seasons. Over the years, I’ve worked
          with individuals seeking emotional healing, purpose, and clarity — and
          it has been one of the most fulfilling paths I could have chosen.
        </p>
      </section>

      {/* Her Mission */}
      <section className="container mx-auto px-6 hidden py-16">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">My Mission</h2>
        <blockquote className="border-l-4 border-blue-500 pl-6 text-gray-300 italic">
          “I believe every individual deserves clarity and courage to navigate life’s transitions.”
        </blockquote>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-6  pt-4 pb-16">
        <h2 className="text-3xl font-semibold mb-10 text-red-400">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-500 transform border border-red-800/40">
            <Award className="text-red-400 mb-3" />
            <h3 className="text-xl text-black font-semibold mb-2">Certified Strategic Life Coaching Practitioner</h3>
            <p className="text-gray-900 text-sm">
              Helping clients find clarity, structure, and purpose in their personal growth journey.
            </p>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-500 transform border border-red-800/40">
            <Globe className="text-blue-400 mb-3" />
            <h3 className="text-xl text-black font-semibold mb-2">Certified Social Impact Coach & Mentor</h3>
            <p className="text-gray-900 text-sm">
              Empowering individuals and organizations to create meaningful, lasting change.
            </p>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-all ease-in-out duration-500 transform border border-red-800/40">
            <Compass className="text-red-300 mb-3" />
            <h3 className="text-xl text-black font-semibold mb-2">Professional Counsellor (Life Navigation)</h3>
            <p className="text-gray-900 text-sm">
              Supporting individuals to navigate emotional transitions and rediscover themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <img
            src={book}
            alt="Book Cover"
            className="border"
          />
        </motion.div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-950">The Author Side</h2>
          <p className="text-gray-900 mb-4 leading-relaxed">
            My book, <span className="text-red-400 italic">“You Unveiled”</span>, 
            was inspired by real stories and experiences from my coaching journey.
            It is a call to rediscovery, resilience, and hope.
          </p>
          <p className="text-gray-900  leading-relaxed">
            It’s time to take responsibility for your success in life!
            Both success and failure in life are predictable based on 
            the choice and decisions we make daily. You can choose to 
            live all your life with a victim mentality, blaming the 
            environment you were raised, your family background, your 
            ‘disadvantaged’ childhood <span className="text-red-600"><Link to="/book">Read More...</Link></span>.
          </p>
          <a
            href="https://selar.com/m/IamBusayoDavies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 mt-4 text-white px-6 py-3 rounded-full transition-all"
          >
            Get My Book on Selar
          </a>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="container mx-auto px-6 py-16 border-t border-red-900/40">
        <h2 className="text-3xl font-semibold mb-10 text-red-400">A Little More About Me</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-900">
          <p>✈️ Exploring new places helps me see life through new lenses.</p>
          <p>❤️ My vision: to help one person at a time find peace and purpose.</p>
          <p>🎙 I enjoy sharing life lessons that inspire growth and healing.</p>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 text-center bg-linear-to-t from-[#1a0101] to-[#2b0000] border-t border-red-900/40">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s take the first step toward clarity, confidence, and transformation.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://selar.com/m/IamBusayoDavies" target="blank" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium">
            Book a Session
          </a>
          <a href="/contact" className="border border-red-500 hover:bg-red-500 hover:text-white text-red-400 px-8 py-3 rounded-full font-medium">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
