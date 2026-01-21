import DigiForamLogo from "@/components/ui/DigiForamLogo";
import { Facebook, Instagram, Linkedin, Mail, Phone, Star, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-100 pt-16 pb-8 overflow-hidden">
      
      {/* --- FIX START: Background Map --- */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
        <Image 
          src="/footer-map.png" 
          alt="World Map Background"
          fill
          // 1. mix-blend-multiply: Removes white background from the image
          // 2. opacity-15: Made it darker so it is visible
          // 3. object-cover: Ensures it covers the whole footer area
          className="object-cover opacity-15 mix-blend-multiply" 
        />
      </div>
      {/* --- FIX END --- */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link href="/" className="block hover:opacity-90 transition-opacity">
               <DigiForamLogo />
            </Link>
            
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              DigiForam is a leading Digital Marketing & Web Development agency based in Pakistan. Your vision is our strategy.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="font-semibold">+92 300 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>hello@digiforam.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-blue-600 transition">About Company</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-600 transition">Our Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600 transition">Blogs & News</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
           <div>
            <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/services" className="hover:text-blue-600 transition">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition">SEO Optimization</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition">Social Media Marketing</Link></li>
              <li><Link href="/services" className="hover:text-blue-600 transition">Graphic Design</Link></li>
            </ul>
          </div>

          {/* Column 4: Trust Badges */}
          <div>
             <h3 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Rated Excellent</h3>
             <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 mb-4 shadow-sm">
               <div className="flex items-center gap-1 mb-1">
                 <span className="font-bold text-gray-900 text-lg">5.0</span>
                 <div className="flex text-yellow-400">
                   <Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" />
                 </div>
               </div>
               <p className="text-xs text-gray-500">Based on 50+ Google Reviews</p>
             </div>
             
             <div className="flex items-center gap-2 mt-4 opacity-70">
                <span className="font-bold text-gray-400">CLUTCH</span>
                <span className="text-xs text-gray-400">4.8/5 Rated Agency</span>
             </div>
          </div>

        </div>

        {/* Bottom Socials Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4">
             <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
             <SocialIcon icon={<Instagram className="h-5 w-5" />} />
             <SocialIcon icon={<Twitter className="h-5 w-5" />} />
             <SocialIcon icon={<Facebook className="h-5 w-5" />} />
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} DigiForam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110">
    {icon}
  </a>
);

export default Footer;