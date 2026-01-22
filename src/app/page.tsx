"use client"; // Required for animations

import ClientLogos from "@/components/home/ClientLogos";
import ConsultationForm from "@/components/home/ConsultationForm";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import { motion, useScroll, useSpring } from "framer-motion";

// 1. Reusable "Fade In" Wrapper Component
// This makes any section inside it slide up smoothly when it appears on screen.
const SectionReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start: Invisible and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // End: Visible and original position
      viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth 0.8s animation
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  // 2. Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-slate-50 overflow-hidden">
      
      {/* --- PRO FEATURE: Scroll Progress Bar (Top of Screen) --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* 1. Hero Section (No animation wrapper needed, usually has its own) */}
      <Hero />

      {/* 2. Intro Text Section - NOW ANIMATED */}
      <SectionReveal>
        <section className="py-24 bg-white text-center px-4 relative">
          {/* Background decoration (Subtle Gradient Blob) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 blur-[100px] -z-10 rounded-full" />
          
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Best Digital Marketing Company <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Working Globally
              </span>
            </h2>
            <p className="text-slate-500 text-xl leading-relaxed max-w-3xl mx-auto">
              DigiForam is a results-focused agency based in Pakistan. We don't just build websites; we build <strong className="text-slate-800">digital empires</strong>. From your first line of code to your first million visitors, we are your strategic partner.
            </p>
          </div>
        </section>
      </SectionReveal>

      {/* 3. Services Grid - NOW ANIMATED */}
      <SectionReveal>
        <ServicesGrid />
      </SectionReveal>

      {/* 4. Stats Counter Section - NOW ANIMATED */}
      <SectionReveal>
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { label: "Projects Delivered", value: "1000+" },
              { label: "Keywords Ranked", value: "50K+" },
              { label: "Years Experience", value: "13+" },
              { label: "Websites Launched", value: "400+" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <h3 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-blue-400 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      {/* 5. Trust Badges Section - NOW ANIMATED */}
      <SectionReveal>
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-sm font-bold mb-10 text-slate-400 uppercase tracking-widest">
              Trusted By Industry Leaders
            </h3>
            <div className="flex flex-wrap justify-center gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              {/* Simple Text Placeholders for Badges - Replace with Images if needed */}
              <div className="flex flex-col items-center group cursor-default">
                <span className="text-3xl font-bold text-slate-300 group-hover:text-slate-800 transition-colors">Google</span>
                <span className="text-[10px] text-yellow-500 font-bold mt-1">★★★★★ Reviews</span>
              </div>
              <div className="flex flex-col items-center group cursor-default">
                <span className="text-3xl font-bold text-slate-300 group-hover:text-slate-800 transition-colors">Clutch</span>
                <span className="text-[10px] text-red-500 font-bold mt-1">4.8 Rated Agency</span>
              </div>
              <div className="flex flex-col items-center group cursor-default">
                <span className="text-3xl font-bold text-slate-300 group-hover:text-slate-800 transition-colors">GoodFirms</span>
                <span className="text-[10px] text-blue-500 font-bold mt-1">Top Rated</span>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* 6. Testimonials Section - NOW ANIMATED */}
      <SectionReveal>
        <Testimonials />
      </SectionReveal>

      {/* 7. Client Logos Section - NOW ANIMATED */}
      <SectionReveal>
        <ClientLogos />
      </SectionReveal>

      {/* 8. Consultation Form - NOW ANIMATED */}
      <SectionReveal>
        <ConsultationForm />
      </SectionReveal>

    </main>
  );
}