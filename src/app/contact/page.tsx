import ConsultationForm from "@/components/home/ConsultationForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-10">
      
      {/* 1. Page Header */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to grow your business? Fill out the form below or contact us directly.
          </p>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 mb-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: Email */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
            <p className="text-gray-500">hello@digiforam.com</p>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Call Us</h3>
            <p className="text-gray-500">+92 300 123 4567</p>
          </div>

          {/* Card 3: Office */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Visit Us</h3>
            <p className="text-gray-500">Karachi, Pakistan</p>
          </div>

        </div>
      </section>

      {/* 3. Reuse your existing form */}
      <div className="pb-20">
        <ConsultationForm />
      </div>

    </main>
  );
}