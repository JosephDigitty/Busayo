import React from "react";
import { motion } from "framer-motion";
import hero from '../assets/Images/hero.jpg'
import "./Hero.css"; // We'll create this for the rotating animation

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center  text-black font-[Poppins] py-20">
      <div className="w-full max-w-7xl flex flex-col max-auto mx-5 md:mx-12 justify-between sm:flex-row gap-12 items-center">

        {/* Left Side (Text) */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="md:w-1/2"
        >
             <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Helping You <span className="text-red-400">Navigate Life</span><br />
            with Clarity, Confidence & Purpose.
          </h1>

          <p className="text-xl text-gray-900 max-w-md">
            Certified Strategic Life Coach • Professional Counsellor • Social Impact Coach & Mentor Author • 
          </p>

          <p className="text-gray-900 max-w-md">
            I help individuals find solutions to complex problems and navigate life challenges.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-full font-medium shadow-md shadow-red-900/40"
            >
              Book a Session
            </a>
            <a
              href="#"
              className="border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition px-6 py-3 rounded-full font-medium"
            >
              Get My Book
            </a>
          </div>
        </div>
            
        </motion.div>
       

        {/* Right Side (Image with rotating glow) */}
        <div className="flex justify-center relative">
          <div className="rotating-border w-80 h-72 md:w-96 md:h-96 flex items-center justify-center overflow-hidden">
            <img
              src={hero}
              alt="Life Coach"
              className="object-contain w-[90%] h-[95%] rounded-full shadow-[0_0_60px_-15px_rgba(239,68,68,0.7)]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
