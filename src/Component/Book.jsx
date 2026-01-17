import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import book from '../assets/Images/Book.jpg'
export default function Book() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          From Her Pen: The Book That Inspires Transformation
        </h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          <span className='text-red-600 text-xl font-semibold font-serif pt-1.5'> YOU UNVEILED:  </span>How to Become Exceptionally Successful in Life Despite the Limitations Surrounding
        </p>
      </motion.div>

      {/* Book Highlight Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-16 max-w-6xl"
      >
        {/* Book Image */}
        <div className="relative w-[280px] h-[400px] rounded-2xl overflow-hidden">
          <img
            src={book}
            alt="Book Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        </div>

        {/* Book Content */}
        <div className="max-w-xl space-y-6">
          <h2 className="text-3xl font-semiboldtext-red-400 flex items-center gap-2">
            <BookOpen className="text-red-500" /> About the Book
          </h2>
          <p className="text-white leading-relaxed">
            This book is for those that 
            have been battered by life and have given up. It is for 
            those that are yet to discover who they are. It’s also for 
            those that need to rev up the needed momentum to live an exceptional life.
          </p>

          <h3 className="text-2xl font-semibold text-red-600">
            Inspiration & Philosophy
          </h3>
          <p className="text-white leading-relaxed">
           Both success and failure in life are predictable 
           based on the choice and decisions we make daily. 
           You can choose to live all your life with a victim 
           mentality, blaming the environment you were raised, 
           your family background, your ‘disadvantaged’ childhood, 
           or those that hurt and deprived you of one opportunity or the other.
          </p>
            <div className="flex flex-col md:flex-row justify-start space-x-10 ">
               {/* CTA Button */}
          <motion.a
            href="https://www.amazon.in/-/hi/BUSAYO-YETUNDE-DAVIES-ebook/dp/B0BNBTHFJ1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block  md:mt-4 md:px-6 px-3 py-3 w-[250px] rounded-full bg-red-600 hover:bg-red-700 transition text-white font-medium shadow-lg"
          >
            Get the Book on Amazon →
          </motion.a>
          <motion.a
            href="https://selar.com/m/IamBusayoDavies"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block md:mt-4 mt-3 w-[250px] md:px-6 px-3 py-3 rounded-full bg-red-600 hover:bg-red-700 transition text-white font-medium shadow-lg"
          >
            Get the Book on Selar →
          </motion.a>
            </div>
         
        </div>
      </motion.div>

      {/* Bottom Highlight */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="mt-16 text-center max-w-2xl"
      >
        <p className="text-gray-400 italic">
          “Every page is a reflection of healing — a conversation between your
          heart and your higher self.”
        </p>
      </motion.div>
    </section>
  );
}
