import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // 1. YOUR PHONE NUMBER HERE (Format: CountryCode + Number, no + or -)
  // Example for Pakistan: 923001234567
  const phoneNumber = "923003488181"; 
  
  // 2. The message the client sees when they open WhatsApp
  const message = "Hi Digi Forum! I found your website and want to discuss a project.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 hover:shadow-green-500/50 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon */}
      <MessageCircle className="w-8 h-8 text-white fill-white" />
      
      {/* Notification Dot (Pulse Effect) */}
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>

      {/* Tooltip (Hover text) */}
      <span className="absolute right-20 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;