"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// 1. DUMMY DATA
const testimonials = [
  {
    id: 1,
    name: "Akif M. Shaikh",
    role: "CEO, Waiiz and TechArabiya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200", 
    text: "We have engaged Digi Forum for more than 6 months now in many areas from Company Branding to Website Development. Digi Forum is a reliable, honest & trusted agency that delivers what they promise. It has been a real pleasure working with them.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Marketing Director, StyleHub",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    text: "The team at Digi Forum completely transformed our online presence. Their SEO strategies doubled our traffic in just 3 months. I highly recommend them to anyone looking for serious growth.",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder, GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    text: "Professional, responsive, and incredibly talented. They built our custom Next.js website from scratch and it loads instantly. The best investment we made this year.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 2. AUTO-SLIDE LOGIC (5 Seconds)
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // 3. ANIMATION VARIANTS (Fixed for TypeScript Build)
  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        // "as const" fixes the build error!
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    }),
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* HEADING */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
            Client Testimonials
          </h2>
          <p className="text-slate-500">
            What some of our satisfied customers are saying
          </p>
        </div>

        {/* CAROUSEL CARD */}
        <div 
          className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <Quote className="absolute top-8 left-8 text-blue-100 h-16 w-16 -z-0 rotate-180" />

          {/* GRID STACK */}
          <div className="relative grid grid-cols-1 grid-rows-1 items-center justify-items-center w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="col-start-1 row-start-1 w-full flex flex-col items-center cursor-grab active:cursor-grabbing z-10"
                
                // Swipe Logic
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) handleNext();
                  if (swipe > 10000) handlePrev();
                }}
              >
                {/* Client Image */}
                <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-blue-50 shadow-md">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    onError={(e) => {}}
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-slate-900 uppercase">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-6">
                  {testimonials[currentIndex].role}
                </p>

                {/* The Review Text */}
                <p className="text-slate-600 text-lg leading-relaxed italic max-w-2xl">
                  "{testimonials[currentIndex].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 md:pl-4 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-100/80 hover:bg-blue-600 hover:text-white transition-all shadow-sm backdrop-blur-sm group"
            >
              <ChevronLeft className="h-6 w-6 text-slate-600 group-hover:text-white" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:pr-4 z-20">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-100/80 hover:bg-blue-600 hover:text-white transition-all shadow-sm backdrop-blur-sm group"
            >
              <ChevronRight className="h-6 w-6 text-slate-600 group-hover:text-white" />
            </button>
          </div>

        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-blue-600 w-8 h-2.5" 
                  : "bg-slate-300 w-2.5 h-2.5 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;