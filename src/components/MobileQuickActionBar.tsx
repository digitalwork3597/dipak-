import React from 'react';
import { PageType } from '../types';
import { MapPin, MessageCircle, Phone } from 'lucide-react';

interface MobileQuickActionBarProps {
  onNavigate: (page: PageType) => void;
}

export const MobileQuickActionBar: React.FC<MobileQuickActionBarProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl px-3 py-2 flex items-center justify-around gap-2">
      
      {/* 1. Find Store */}
      <button
        type="button"
        onClick={() => onNavigate('store-locator')}
        className="flex-1 bg-amber-100 hover:bg-amber-200 text-amber-900 py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border border-amber-200"
      >
        <MapPin className="w-4 h-4 text-amber-700" />
        <span className="whitespace-nowrap">Find Store</span>
      </button>

      {/* 2. WhatsApp */}
      <a
        href="https://wa.me/919712663470?text=Hi%20BORCELLE%2C%20I%20would%20like%20to%20know%20more%20about%20your%20Dog%20%26%20Cat%20Food%20products.%20Can%20you%20please%20help%20me%20choose%20the%20right%20food%20for%20my%20pet%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border border-emerald-200"
      >
        <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-100" />
        <span className="whitespace-nowrap">WhatsApp</span>
      </a>

      {/* 3. Call Us */}
      <a
        href="tel:+9118001234567"
        className="flex-1 bg-blue-50 hover:bg-blue-100 text-[#0F3C8A] py-2 px-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer border border-blue-200"
      >
        <Phone className="w-4 h-4 text-[#0F3C8A]" />
        <span className="whitespace-nowrap">Call Us</span>
      </a>

    </div>
  );
};
