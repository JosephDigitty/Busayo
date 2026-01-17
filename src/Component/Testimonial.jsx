import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Anthony Oluwaseun",
    role: "Student",
    message:
      "Her Coaching and Mentorship has taught me that “Excellence isn't about perfection but progressive journey of growth”",
  },
  {
    name: "Umorem Blessing",
    role: "Student",
    message:
      "I have learnt more on how to navigate round my life.... knowing that not using books, songs and other things to solve a problem that just brings temporary solution.",
  },
  {
    name: "Dorcas Bakare",
    role: "Student",
    message:
      "I have learnt to be more disciplined and resilient as a result of her mentorship.",
  },
  {
    name: "wisdom Nkechi",
    role: "Studen",
    message:
      "Her coaching has changed my mindset",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section
      id="testimonials"
      className="min-h-[80vh] bg-white text-black py-20 px-6 md:px-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-red-400 mb-12 text-center">
        What Clients Are Saying
      </h2>

      <div className="relative w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-black backdrop-blur-sm p-10 rounded-2xl border border-red-900/40 shadow-xl"
          >
            <Quote className="text-red-500 w-8 h-8 mb-4" />
            <p className="text-lg text-gray-300 italic leading-relaxed mb-6">
              “{testimonials[current].message}”
            </p>
            <h3 className="text-red-300 font-semibold">
              {testimonials[current].name}
            </h3>
            <p className="text-sm text-gray-400">{testimonials[current].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-2">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-red-900/40 rounded-full hover:bg-red-700/60 transition"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 bg-red-900/40 rounded-full hover:bg-red-700/60 transition"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Small Dots */}
      <div className="flex mt-8 gap-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-red-500" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
