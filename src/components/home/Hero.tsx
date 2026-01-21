"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-6 leading-tight">
          Best{" "}
          <span className="text-blue-500 inline-block">
            <Typewriter
              options={{
                strings: [
                  "SEO",
                  "Web Design",
                  "Digital Marketing",
                  "App Development",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>{" "}
          <br />
          Company
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200">
          Rank #1. Be Unignorable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          >
            What We Do
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-blue-600 border-2 border-blue-600 text-white font-bold uppercase tracking-wider hover:bg-transparent hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
          >
            Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;