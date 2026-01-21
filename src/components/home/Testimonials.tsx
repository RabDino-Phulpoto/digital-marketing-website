"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// 1. DUMMY DATA (You can change text/images later)
const testimonials = [
  {
    id: 1,
    name: "Akif M. Shaikh",
    role: "CEO, Waiiz and TechArabiya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", // Dummy photo
    text: "We have engaged Digi Forum for more than 6 months now in many areas from Company Branding to Website Development. Digi Forum is a reliable, honest & trusted agency that delivers what they promise. It has been a real pleasure working with them.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Marketing Director, StyleHub",
    image: "https://images.unsplash.com/photo-1573496359-7013119ac63b?auto=format&fit=crop&q=80&w=200&h=200", // Dummy photo
    text: "The team at Digi Forum completely transformed our online presence. Their SEO strategies doubled our traffic in just 3 months. I highly recommend them to anyone looking for serious growth.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder, GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200", // Dummy photo
    text: "Professional, responsive, and incredibly talented. They built our custom Next.js website from scratch and it loads instantly. The best investment we made this year.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 uppercase tracking-wide">
          Client Testimonials
        </h2>
        <p className="text-gray-500 mb-12">
          What some of our satisfied customers are saying
        </p>

        {/* CAROUSEL CARD */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center items-center">
          
          {/* Decorative Quote Icon */}
          <Quote className="absolute top-8 left-8 text-blue-100 h-12 w-12 -z-0 rotate-180" />

          {/* ANIMATED CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Client Image */}
              <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-blue-50 shadow-sm">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-900 uppercase">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-6">
                {testimonials[currentIndex].role}
              </p>

              {/* The Review Text */}
              <p className="text-gray-600 text-lg leading-relaxed italic max-w-2xl">
                "{testimonials[currentIndex].text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION BUTTONS (Arrows) */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-white" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-white" />
            </button>
          </div>

        </div>

        {/* DOTS INDICATOR (Bottom) */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;