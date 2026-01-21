import { Globe, Monitor, PenTool } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-white" />,
    title: "Digital Marketing Services",
    items: ["On-Page SEO Services", "Off-Page SEO Services", "Local SEO Services", "White Label SEO Services", "Social Media Management", "Content Writing"],
  },
  {
    icon: <PenTool className="h-10 w-10 text-white" />,
    title: "Graphic Design Services",
    items: ["Logo Design", "Brand Identity Design", "Brand Development", "Company Profile Design"],
  },
  {
    icon: <Monitor className="h-10 w-10 text-white" />,
    title: "Web Design Services",
    items: ["WordPress Website", "Ecommerce Store", "Shopify Store", "Website Redesign", "Website Maintenance"],
  },
];

const ServicesGrid = () => {
  return (
    <section 
      className="relative py-32 bg-[#1a1a1a]" // Dark Gray Background
      style={{
        // This creates the "Slanted" top edge exactly like your image
        clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%)",
        marginTop: "-4rem" // Pulls it up slightly to overlap the previous section
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. TEXT HEADER (Left Aligned like reference) */}
        <div className="mb-16 text-left">
          <p className="text-white font-medium mb-2">What we are good at</p>
          <h2 className="text-4xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Our Digital Marketing Services
          </h2>
          <div className="max-w-3xl">
            <p className="text-gray-400 text-lg leading-relaxed mb-1">
              We are one of the leading SEO Companies that is serving <span className="text-[#00C2CB]">clients globally.</span>
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We develop and market <span className="text-[#FF4A57]">Products</span> for customers around the globe.
            </p>
          </div>
        </div>

        {/* 2. SERVICES COLUMNS */}
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              
              {/* Icon */}
              <div className="mb-6 p-0 transition-transform duration-300 group-hover:-translate-y-2">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6 uppercase border-b-2 border-transparent group-hover:border-[#00C2CB] pb-2 transition-all">
                {service.title}
              </h3>

              {/* List Items */}
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. BUTTON AT BOTTOM */}
        <div className="mt-16 text-center">
          <Link 
            href="/services" 
            className="inline-block bg-[#00C2CB] text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-[#00aeb6] transition-colors uppercase text-sm"
          >
            Explore Our Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;