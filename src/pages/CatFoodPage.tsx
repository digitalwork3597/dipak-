import React, { useState } from 'react';
import { PageType, Product } from '../types';
import { PRODUCTS } from '../data/products';
import catBagImg from '../assets/images/borcelle_cat_bag_1786628538149.jpg';
import { ArrowRight, CheckCircle2, Cat, Filter, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface CatFoodPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
}

export const CatFoodPage: React.FC<CatFoodPageProps> = ({ onNavigate, onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const catProducts = PRODUCTS.filter(p => p.petType === 'cat');

  const categories = [
    { id: 'all', label: 'All Cat Food' },
    { id: 'Kitten Food', label: 'Kitten Food' },
    { id: 'Adult Cat Food', label: 'Adult Cat Food' },
    { id: 'Senior Cat Food', label: 'Senior Cat Food' },
    { id: 'Indoor Cat Food', label: 'Indoor Cat Food' },
    { id: 'Hairball Care', label: 'Hairball Care' },
    { id: 'Sensitive Care', label: 'Sensitive Care' },
  ];

  const filteredProducts = catProducts.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.categoryTag.toLowerCase() === selectedCategory.toLowerCase();
  });

  const scrollToCatalog = () => {
    const el = document.getElementById('cat-catalog-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F7FA] via-[#FAF6F0] to-[#EBF5FA] py-12 sm:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text Left */}
            <div className="lg:col-span-7 space-y-5">
              <nav className="text-xs text-slate-500 flex items-center gap-2">
                <button onClick={() => onNavigate('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Cat Food</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider border border-sky-200">
                <Cat className="w-4 h-4" />
                <span>Borcelle Feline Nutrition</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Complete Nutrition for Happy Cats
              </h1>

              <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
                Explore carefully crafted Borcelle nutrition designed to support your cat’s health and everyday wellbeing.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={scrollToCatalog}
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Cat Nutrition</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-stone-200/80 max-w-md text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Essential Taurine</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Heart className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Hairball Control</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Urinary Support</span>
                </div>
              </div>
            </div>

            {/* Hero Image Right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white p-4 rounded-3xl border border-stone-200 shadow-md">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-stone-50 border border-stone-100 flex items-center justify-center p-2">
                  <img
                    src={catBagImg}
                    alt="Borcelle Cat Food Packaging"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-sky-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
                    CAT FOOD RANGE
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Category Navigation Bar & Product Grid */}
      <section id="cat-catalog-grid" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Navigation Bar */}
          <div className="bg-stone-50 p-3 sm:p-4 rounded-2xl border border-stone-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-2 px-1">
              <Filter className="w-4 h-4 text-sky-700" />
              <span>Select Cat Food Variety:</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-sky-500 text-white shadow-xs ring-2 ring-sky-300'
                      : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-100 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-5 space-y-4">
                  {/* Packaging Image & Category Badge */}
                  <div className="relative h-52 rounded-xl overflow-hidden bg-stone-50 border border-stone-100 flex items-center justify-center p-2">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-200">
                      {prod.categoryTag}
                    </span>
                  </div>

                  {/* Title & Suitable For */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-semibold text-sky-800 bg-sky-50 inline-block px-2 py-0.5 rounded mt-1">
                      Suitable for: {prod.suitableFor}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {prod.shortDescription}
                  </p>

                  {/* 4 Key Benefits */}
                  <div className="space-y-1.5 pt-1 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      Key Benefits
                    </span>
                    {prod.keyBenefits.map((ben, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="font-medium line-clamp-1">{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Details Action */}
                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="w-full mt-3 bg-stone-100 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
