import { BarChart, Megaphone, Monitor, PenTool, Search, Smartphone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Search className="h-12 w-12 text-blue-600" />,
    title: "SEO Services",
    description: "Rank #1 on Google with our data-driven SEO strategies. We help you dominate search results.",
    link: "/contact"
  },
  {
    icon: <Megaphone className="h-12 w-12 text-blue-600" />,
    title: "Social Media Marketing",
    description: "Engage your audience on Facebook, Instagram, and LinkedIn with creative ad campaigns.",
    link: "/contact"
  },
  {
    icon: <Monitor className="h-12 w-12 text-blue-600" />,
    title: "Web Development",
    description: "Custom, high-performance websites built on Next.js, WordPress, or Shopify.",
    link: "/contact"
  },
  {
    icon: <PenTool className="h-12 w-12 text-blue-600" />,
    title: "Graphic Design",
    description: "Stunning logos, brochures, and brand identity designs that leave a lasting impression.",
    link: "/contact"
  },
  {
    icon: <Smartphone className="h-12 w-12 text-blue-600" />,
    title: "App Development",
    description: "iOS and Android mobile applications designed for seamless user experiences.",
    link: "/contact"
  },
  {
    icon: <BarChart className="h-12 w-12 text-blue-600" />,
    title: "PPC Advertising",
    description: "Maximize your ROI with targeted Google Ads and Performance Marketing campaigns.",
    link: "/contact"
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We provide end-to-end digital solutions to help your business grow online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <Link href={service.link} className="text-blue-600 font-bold uppercase text-sm tracking-wider hover:underline">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow?</h2>
        <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
          Get a Free Quote
        </Link>
      </section>
    </main>
  );
}