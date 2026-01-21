import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa"; // Official WhatsApp Logo
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DigiForum | Your Vision Is Our Strategy",
  description: "Best Digital Marketing Agency working globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* 1. Navbar (Top of every page) */}
        <Navbar />
        
        {/* 2. Main Page Content */}
        {children}
        
        {/* 3. FLOATING WHATSAPP BUTTON (Fixed on every page) */}
        <a 
          href="https://wa.me/923001234567" // <--- REPLACE THIS WITH YOUR REAL NUMBER
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center justify-center border-2 border-white">
            <FaWhatsapp className="h-8 w-8 text-white" />
          </div>
          
          {/* Tooltip on Hover */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>

        {/* 4. Footer (Bottom of every page) */}
        <Footer />
        
      </body>
    </html>
  );
}