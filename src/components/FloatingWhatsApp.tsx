import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/919712663470?text=Hi%20BORCELLE%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Dog%20%26%20Cat%20Food%20products.%20Can%20you%20please%20help%20me%20choose%20the%20right%20food%20for%20my%20pet%3F";

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BORCELLE on WhatsApp"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 active:translate-y-0 border border-emerald-500/30"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-emerald-100 group-hover:scale-110 transition-transform duration-300" />
        <span className="font-bold text-xs sm:text-sm tracking-wide">Ask Pet Care Expert</span>
      </a>
    </div>
  );
};

