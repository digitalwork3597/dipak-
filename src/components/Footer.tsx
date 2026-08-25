import React from 'react';
import { PageType } from '../types';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-stone-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => handleNav('home')} 
              className="focus:outline-hidden text-left"
              aria-label="Borcelle Home"
            >
              <Logo className="h-11" variant="light" />
            </button>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Borcelle provides carefully crafted pet nutrition designed to support your pet’s health, energy, and everyday wellbeing. Made with 100% natural, wholesome ingredients.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Informational Pet Nutrition Hub
              </span>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#instagram" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-stone-300 hover:text-amber-300 hover:bg-slate-700 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-stone-300 hover:text-amber-300 hover:bg-slate-700 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-stone-300 hover:text-amber-300 hover:bg-slate-700 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-stone-300 hover:text-amber-300 hover:bg-slate-700 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase">Navigation</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('dog-food')} className="hover:text-amber-300 transition-colors">Dog Food</button></li>
              <li><button onClick={() => handleNav('cat-food')} className="hover:text-amber-300 transition-colors">Cat Food</button></li>
              <li><button onClick={() => handleNav('products')} className="hover:text-amber-300 transition-colors">All Products</button></li>
              <li><button onClick={() => handleNav('store-locator')} className="hover:text-amber-300 transition-colors">Store Locator</button></li>
              <li><button onClick={() => handleNav('blogs')} className="hover:text-amber-300 transition-colors">Pet Care Blogs</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase">Pet Diets</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><button onClick={() => handleNav('dog-food')} className="hover:text-amber-300 transition-colors">Puppy Growth Formula</button></li>
              <li><button onClick={() => handleNav('dog-food')} className="hover:text-amber-300 transition-colors">Adult Dog Vitality</button></li>
              <li><button onClick={() => handleNav('dog-food')} className="hover:text-amber-300 transition-colors">Senior Dog Joint Care</button></li>
              <li><button onClick={() => handleNav('cat-food')} className="hover:text-amber-300 transition-colors">Kitten Growth Recipe</button></li>
              <li><button onClick={() => handleNav('cat-food')} className="hover:text-amber-300 transition-colors">Indoor Cat Fiber Care</button></li>
              <li><button onClick={() => handleNav('cat-food')} className="hover:text-amber-300 transition-colors">Sensitive Stomach Whitefish</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase">Get in Touch</h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>742 Evergreen Terrace, Suite 100, Pet Health Plaza, CA 90210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+1 (800) 555-BORCELLE</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>support@borcellepet.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 BORCELLE Pet Nutrition. All rights reserved.</p>
          <p className="text-stone-400">
            This website is strictly informational. No direct sales, shopping cart, or payment processing.
          </p>
        </div>
      </div>
    </footer>
  );
};
