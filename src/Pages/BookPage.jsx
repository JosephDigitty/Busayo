import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import book from '../assets/Images/Book.jpg'

const BookPage = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#1a0000] via-[#2b0000] to-[#000814] text-gray-200 py-20 px-6 md:px-20 flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-red-400 mb-4">
          “You Unveiled”
        </h1>
        <p className="text-lg text-gray-300">
          A powerful guide to self-discovery, healing, and finding clarity —
          written from real experiences of transformation and purpose.
        </p>
      </motion.div>

      {/* Book Display */}
      <motion.div
        className="mt-12 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-700 via-red-700 to-blue-800 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-700 animate-spin-slow"></div>
          <img
            src={book}
            alt="Book Cover"
            className="relative h-96 w-64 md:w-72 rounded-2xl shadow-lg"
          />
        </div>

        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-semibold text-red-300 mb-3">
            About the Book
          </h2>
          <p className="text-gray-100 leading-relaxed mb-6">
            Wherever you belong in this spectrum, this book, You Unveiled, is for you. 
            Precisely, it is for those that have been battered by life and have given up. 
            It is for those that are yet to discover who they are. It’s also for those that 
            need to rev up the needed momentum to live an exceptional life. In it, you will learn: <br />
            *How to discover and harness your uniqueness <br />
            *How to heal from your past pain and trauma <br />
            *How to chart the path for sustainable progress in life <br />
            And lots more… 
          </p>
          <a
            href="https://selar.com/m/IamBusayoDavies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            <BookOpen className="mr-2 w-5 h-5" /> Get Your Copy on Selar
          </a>
        </div>
      </motion.div>

      {/* Quote / Philosophy */}
      <motion.div
        className="mt-16 max-w-2xl text-center italic text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>
          “It is time for YOU to be unveiled (in your fullest capacity) to your generation and posterity!”
        </p>
      </motion.div>
    </section>
  );
};

export default BookPage;
