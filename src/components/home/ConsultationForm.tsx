"use client";

import { AlertCircle, CheckCircle, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "", // Kept in state but removed from UI as per image
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const object = {
      ...formData,
      // YOUR REAL ACCESS KEY (Keep this safe!)
      access_key: "f3b7fa81-afbd-4759-9c55-1b127d412c55",
      subject: "New Lead from DigiForum Website",
      from_name: "DigiForum Site"
    };
    
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container with Rounded Corners and Shadow */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* --- LEFT PANEL (BLUE) --- */}
          <div className="md:w-2/5 bg-blue-600 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circle behind text */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                GET FREE <br/> CONSULTATION
              </h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed font-medium">
                Have questions or need assistance? We're here to help! Fill out the form, and our team will get back to you promptly.
              </p>
            </div>

            <div className="space-y-6 relative z-10">
              {/* Call Us */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-200 tracking-wider">CALL US</p>
                  <p className="text-xl font-bold">+92 300 123 4567</p>
                </div>
              </div>
              {/* Email Us */}
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-500/80 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-200 tracking-wider">EMAIL US</p>
                  <p className="text-xl font-bold break-all">hello@digiforum.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT PANEL (WHITE FORM) --- */}
          <div className="md:w-3/5 p-10 md:p-16 bg-white flex items-center">
            {isSuccess ? (
              /* Success State */
              <div className="w-full text-center animate-fade-in p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Your message has been sent successfully. Our team will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleSubmit} className="w-full space-y-8">
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-gray-800 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-gray-800 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-gray-800 placeholder-gray-400"
                      placeholder="+92 300..."
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Service Interested In *</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-gray-800 appearance-none cursor-pointer"
                      style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: '3rem'}}
                    >
                      <option value="" disabled>Select Your Service</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                    </select>
                  </div>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                    <AlertCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="font-medium">{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gray-900 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-gray-800 transition-all flex items-center gap-3 text-lg ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1 hover:shadow-2xl"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : <>Send Message <Send className="h-5 w-5" /></>}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;