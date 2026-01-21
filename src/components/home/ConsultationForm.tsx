"use client";

import { Mail, Phone, Send } from "lucide-react";
import { FormEvent } from "react";

const ConsultationForm = () => {
  
  // Added this function to handle form submission gracefully
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevents page reload
    alert("Thank you! We will contact you soon.");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-1/3 bg-blue-600 p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 uppercase">Get Free Consultation</h2>
            <p className="mb-8 text-blue-100">
              Have questions or need assistance? We're here to help! Fill out the form, and our team will get back to you promptly.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold">Call Us</p>
                  <p className="font-semibold">+92 300 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold">Email Us</p>
                  <p className="font-semibold">hello@digiforum.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:w-2/3 bg-gray-50 p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="+92 300..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Interested In *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white">
                    <option>Select Your Service</option>
                    <option>SEO Services</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Graphic Design</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-all transform hover:translate-y-[-2px] shadow-lg">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;