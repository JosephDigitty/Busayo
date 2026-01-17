
import { motion } from "framer-motion";
import { Book, Award, Heart, Compass, Globe, Sparkles } from "lucide-react";
import service from '../assets/Images/service.jpg'

const About = () => {
  return (
    <div className="min-h-screen text-gray-200">
        <div>

        </div>
      {/* Hero / Intro Section */}
      <section className="container px-6 bg-gray-100  md:ml-0 m:pt-10 pb-10 pt-10 mt-3 mb-5 sm:pb-20 sm:mt-10 sm:mb-5 flex flex-col md:flex-row-reverse items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About <span className="text-red-400">Busayo Davies</span>
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
            the Author of "You UNVEILED" and founder of YOU UVEILED life Navigation Program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-[350px] mt-8 h-[450px]  hidden md:block overflow-hidden ring ring-slate-200 shadow-3xl">
            <img
              src={service}
              alt="Coach Portrait"
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-red-600/40 to-blue-500/40 animate-pulse"></div>
          </div>
        </motion.div>
      </section>
      {/* Certifications */}
      <section className="container mx-auto px-6  pt-4 pb-16">
        <h2 className="text-4xl font-bold mb-10 text-red-400">Certifications</h2>
         <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between"
        >
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
        </motion.div>
        
      </section>
    </div>
  );
};

export default About;
