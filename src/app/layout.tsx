import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
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
        
        {/* 1. Navbar is Fixed at the top */}
        <Navbar />
        
        {/* 2. THE FIX: Added 'pt-24' (padding-top: 96px) 
            This pushes ALL page content down so it doesn't hide behind the Navbar */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        
        {/* --- Floating Buttons --- */}
        <a 
          href="mailto:rabdinophulpoto@gmail.com?subject=DigiForum Services required for the project"
          className="fixed bottom-28 right-8 z-50 group"
          aria-label="Send us an Email"
        >
          <div className="bg-blue-600 p-3.5 rounded-full shadow-xl hover:shadow-blue-600/40 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center justify-center border-2 border-white">
            <FaEnvelope className="h-6 w-6 text-white" />
          </div>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Email Us
          </span>
        </a>

        <a 
          href="https://wa.me/923001234567" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center justify-center border-2 border-white">
            <FaWhatsapp className="h-8 w-8 text-white" />
          </div>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </a>

        <Footer />
        
      </body>
    </html>
  );
}