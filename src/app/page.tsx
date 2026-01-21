import ClientLogos from "@/components/home/ClientLogos"; // Import Client Logos
import ConsultationForm from "@/components/home/ConsultationForm";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      
      {/* 1. Dynamic Hero Section */}
      <Hero />

      {/* 2. Intro Text Section */}
      <section className="py-20 bg-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-600 font-bold uppercase tracking-wider mb-2">
            We help you get noticed online
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Best Digital Marketing Company Working Globally
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Digi Forum is one of the best Digital Marketing Companies working globally that focuses on providing results-focused digital marketing solutions. Based out of Pakistan, we take your business from scratch, build its identity from the ground up, and turn it into an ideal brand for your target customers.
          </p>
        </div>
      </section>

      {/* 3. Services Grid */}
      <ServicesGrid />

      {/* 4. Stats Counter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">1000+</h3>
            <p className="text-gray-400 font-medium">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">50K+</h3>
            <p className="text-gray-400 font-medium">Keywords Ranked</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">13+</h3>
            <p className="text-gray-400 font-medium">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-500 mb-2">400+</h3>
            <p className="text-gray-400 font-medium">Websites Delivered</p>
          </div>
        </div>
      </section>

      {/* 5. Trust Badges Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-10 text-gray-800">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-gray-400">Google</span>
              <span className="text-xs text-yellow-500">★★★★★ Reviews</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-gray-400">Clutch</span>
              <span className="text-xs text-red-500">4.8 Rated</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-gray-400">GoodFirms</span>
              <span className="text-xs text-blue-500">Top Company</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <Testimonials />

      {/* 7. Client Logos Section (Added here) */}
      <ClientLogos />

      {/* 8. Consultation Form */}
      <ConsultationForm />

    </main>
  );
}