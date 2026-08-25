import React from 'react';
import { PageType } from '../types';
import heroPetsImg from '../assets/images/borcelle_hero_pets_1785770481473.jpg';
import adultDogBagImg from '../assets/images/borcelle_adult_dog_bag_1786628492232.jpg';
import catBagImg from '../assets/images/borcelle_cat_bag_1786628538149.jpg';
import { ShieldCheck, Heart, Eye, Target, Award, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0 text-slate-800">
      
      {/* Hero Header */}
      <section className="bg-[#FAF6F0] py-12 sm:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-500 mb-4 flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
                OUR PASSION FOR PETS
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                About BORCELLE
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Dedicated to crafting wholesome, science-backed pet nutrition that helps dogs and cats lead longer, happier, and more vibrant lives.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img
                src={heroPetsImg}
                alt="Friendly dog and cat"
                className="w-full h-64 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Section 1: Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="grid grid-cols-2 gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-200">
              <div className="rounded-xl overflow-hidden shadow-xs border border-stone-200 bg-white p-2 flex items-center justify-center">
                <img 
                  src={adultDogBagImg} 
                  alt="BORCELLE Dog Food Package" 
                  className="w-full h-64 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xs border border-stone-200 bg-white p-2 flex items-center justify-center">
                <img 
                  src={catBagImg} 
                  alt="BORCELLE Cat Food Package" 
                  className="w-full h-64 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Our Story
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Borcelle was founded with a simple promise: to eliminate low-quality fillers, artificial colors, and confusing ingredients from pet diets. We began in 2018 with a team of veterinary nutritionists and pet lovers who wanted better options for their own furry family members.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Today, Borcelle is trusted by thousands of pet parents and veterinary clinics worldwide. Every batch is manufactured under strict quality standards using ethically sourced proteins and non-GMO grains.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Our Mission & Vision */}
      <section className="py-16 bg-[#FAF8F5] border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To enrich the lives of dogs and cats by delivering clean, transparent, and balanced pet nutrition tailored to every life stage. We strive to empower pet parents with honest nutritional knowledge.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-stone-200 space-y-4 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most trusted, reliable, and accessible pet food brand globally—setting the standard for animal nutrition, eco-friendly ingredient sourcing, and pet health advocacy.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Our Commitment to Pet Health */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Our Commitment to Pet Health
            </h2>
            <p className="text-slate-600 text-sm">
              Non-negotiable quality principles built into every bag.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-base">Real Animal Protein First</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Free-range chicken, grass-fed beef, and wild salmon always lead our ingredient lists.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-base">Zero Artificial Fillers</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                No corn, wheat, soy, or synthetic preservatives that can trigger allergies or sluggish digestion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-base">Veterinary Formulated</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Every recipe passes strict nutritional benchmarks set by leading animal nutrition specialists.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
