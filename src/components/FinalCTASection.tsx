import React from 'react';
import { PageType } from '../types';
import { Sparkles, ArrowRight, Store, Search } from 'lucide-react';

interface FinalCTASectionProps {
  onNavigate: (page: PageType) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate }) => {
  return (
    <section id="final-cta" className="bg-[#FAF9F6] py-16 sm:py-20 relative overflow-hidden border-b border-stone-200">
      
      {/* Decorative Pastel Shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0F3C8A] via-[#0A2E70] to-[#164CA0] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-blue-400/30 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle Top Shine */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

          {/* Left Text Content */}
          <div className="space-y-4 text-center md:text-left max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase border border-amber-400/30 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>INFORMATIONAL PET CARE HUB</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Better Information for Better Pet Care
            </h2>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Explore BORCELLE nutrition, compare products, find helpful pet-care information, and locate a store near you.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => {
                  const elem = document.getElementById('pet-food-finder');
                  if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('products');
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Find the Right Food</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('store-locator')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-7 py-3.5 rounded-xl font-bold text-sm backdrop-blur-md transition-all cursor-pointer"
              >
                <Store className="w-4 h-4" />
                <span>Find a Store</span>
              </button>
            </div>
          </div>

          {/* Right Dog/Cat Visual Card */}
          <div className="relative shrink-0 w-full md:w-80 h-56 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80"
              alt="Happy dog and cat"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white tracking-wide">
                🐶🐱 Complete & Balanced Nutrition Since 1984
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
