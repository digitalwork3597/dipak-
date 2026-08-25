import React, { useState } from 'react';
import { PageType, Product, BlogPost } from '../types';
import { PRODUCTS } from '../data/products';
import { BLOGS } from '../data/blogs';
import heroPetsImg from '../assets/images/borcelle_hero_pets_1785770481473.jpg';
import adultDogBagImg from '../assets/images/borcelle_adult_dog_bag_1786628492232.jpg';
import catBagImg from '../assets/images/borcelle_cat_bag_1786628538149.jpg';
import peekingCatImg from '../assets/images/peeking_cat_stats_1785855814117.jpg';
import { PromoSlider } from '../components/PromoSlider';
import { CustomerReviewsSection } from '../components/CustomerReviewsSection';
import { FaqSection } from '../components/FaqSection';
import { useCountdown } from '../hooks/useCountdown';
import { 
  ArrowRight, 
  Search, 
  MapPin, 
  Sparkles, 
  HeartPulse, 
  ShieldCheck, 
  Zap, 
  Bone, 
  Cat, 
  Dog,
  CheckCircle2,
  Award,
  Feather,
  Smile,
  Tag,
  Clock,
  Users,
  Heart,
  Star
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onSelectBlog: (blog: BlogPost) => void;
  onStoreSearch: (city: string, pincode: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectBlog,
  onStoreSearch
}) => {
  const [cityInput, setCityInput] = useState('');
  const [pincodeInput, setPincodeInput] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  const homeTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'dog-food', label: 'Dog Food' },
    { id: 'cat-food', label: 'Cat Food' },
    { id: 'puppy', label: 'Puppy' },
    { id: 'kitten', label: 'Kitten' },
    { id: 'adult', label: 'Adult' },
    { id: 'senior', label: 'Senior' },
    { id: 'special-care', label: 'Special Care' },
  ];

  const filteredHomeProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dog-food') return p.petType === 'dog';
    if (activeTab === 'cat-food') return p.petType === 'cat';
    if (activeTab === 'puppy') return p.lifeStage === 'puppy';
    if (activeTab === 'kitten') return p.lifeStage === 'kitten';
    if (activeTab === 'adult') return p.lifeStage === 'adult';
    if (activeTab === 'senior') return p.lifeStage === 'senior';
    if (activeTab === 'special-care') return p.lifeStage === 'special-care' || p.categoryTag.toLowerCase().includes('care');
    return true;
  });

  const homeBlogs = BLOGS.slice(0, 3);

  const handleStoreLocatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStoreSearch(cityInput, pincodeInput);
    onNavigate('store-locator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* PROMOTIONAL HEADER SLIDER */}
      <PromoSlider onNavigate={onNavigate} />

      {/* FEATURED PET NUTRITION SECTION */}
      <section className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Header Content */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-200/80 border border-amber-300 text-amber-950 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>BORCELLE PREMIUM NUTRITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Nutrition Made with Care for Every Pet
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Discover thoughtfully crafted food designed to support healthy, happy dogs and cats at every stage of life.
            </p>
          </div>

          {/* Two-Column Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* LEFT SIDE: DOG FOOD NUTRITION */}
            <div 
              onClick={() => onNavigate('dog-food')}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Soft pastel-yellow background shape */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-100/50 rounded-full blur-2xl -z-0 pointer-events-none transform translate-x-12 -translate-y-12" />

              <div className="relative z-10 space-y-6">
                
                {/* Packaging & Visual Showcase Area */}
                <div className="bg-gradient-to-b from-amber-50 to-stone-50 rounded-2xl p-6 border border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
                  <div className="relative w-full sm:w-1/2 flex items-center justify-center">
                    <img
                      src={adultDogBagImg}
                      alt="BORCELLE Premium Dog Food Packaging"
                      className="h-56 sm:h-64 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 animate-pulse"
                      style={{ animationDuration: '4s' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="w-full sm:w-1/2 space-y-2.5 text-left">
                    <span className="inline-block bg-amber-100 text-amber-900 text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider border border-amber-200">
                      PREMIUM DOG NUTRITION
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                      Healthy Nutrition for Every Dog
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete and balanced nutrition designed to support healthy growth, energy, digestion, and everyday wellbeing.
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-amber-900">
                      <span>🐶 Net Wt. 2kg Formula</span>
                    </div>
                  </div>
                </div>

                {/* Benefit Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Health Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>High-Quality Ingredients</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Strong Immunity Support</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Healthy Digestion</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Healthy Skin and Coat</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-6 border-t border-stone-100 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('dog-food');
                  }}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  <span>Explore Dog Food</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: CAT FOOD NUTRITION */}
            <div 
              onClick={() => onNavigate('cat-food')}
              className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Soft light-blue background shape */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-sky-100/50 rounded-full blur-2xl -z-0 pointer-events-none transform translate-x-12 -translate-y-12" />

              <div className="relative z-10 space-y-6">
                
                {/* Packaging & Visual Showcase Area */}
                <div className="bg-gradient-to-b from-sky-50 to-stone-50 rounded-2xl p-6 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
                  <div className="relative w-full sm:w-1/2 flex items-center justify-center">
                    <img
                      src={catBagImg}
                      alt="BORCELLE Premium Cat Food Packaging"
                      className="h-56 sm:h-64 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 animate-pulse"
                      style={{ animationDuration: '4s' }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="w-full sm:w-1/2 space-y-2.5 text-left">
                    <span className="inline-block bg-sky-100 text-sky-900 text-[11px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider border border-sky-200">
                      PREMIUM CAT NUTRITION
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                      Complete Nutrition for Happy Cats
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Carefully crafted nutrition designed to support your cat’s health, energy, digestion, and everyday wellbeing.
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-sky-900">
                      <span>🐱 Net Wt. 2kg Formula</span>
                    </div>
                  </div>
                </div>

                {/* Benefit Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Health Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>High-Quality Ingredients</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Strong Immunity Support</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Healthy Digestion</span>
                    </div>
                    <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Healthy Skin and Coat</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-6 border-t border-stone-100 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('cat-food');
                  }}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all shadow-2xs flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  <span>Explore Cat Food</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* SECTION 2 — EXPLORE BY PET */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Find the Right Food for Your Pet
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore balanced nutrition designed for dogs and cats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* DOG FOOD CARD */}
            <div 
              onClick={() => onNavigate('dog-food')}
              className="group bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                  <Dog className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Dog Food
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                  Balanced nutrition for dogs at every life stage. Formulated with high-quality protein and essential omega fatty acids.
                </p>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between border-t border-stone-100">
                <button className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 group-hover:bg-amber-200 px-5 py-2.5 rounded-full text-xs font-bold transition-all">
                  <span>Explore Dog Food</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-stone-100 shadow-2xs bg-stone-50 flex items-center justify-center p-1">
                  <img 
                    src={adultDogBagImg} 
                    alt="BORCELLE Dog Food Package" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* CAT FOOD CARD */}
            <div 
              onClick={() => onNavigate('cat-food')}
              className="group bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-800">
                  <Cat className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  Cat Food
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                  Complete nutrition made for happy and healthy cats. Rich in taurine, ocean fish, and dietary fibers.
                </p>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between border-t border-stone-100">
                <button className="inline-flex items-center gap-2 bg-sky-100 text-sky-900 group-hover:bg-sky-200 px-5 py-2.5 rounded-full text-xs font-bold transition-all">
                  <span>Explore Cat Food</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-stone-100 shadow-2xs bg-stone-50 flex items-center justify-center p-1">
                  <img 
                    src={catBagImg} 
                    alt="BORCELLE Cat Food Package" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 — ABOUT BORCELLE & BRANDING */}
      <section className="py-16 sm:py-20 bg-[#F5EFE6] border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Official Borcelle Packaging Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-stone-100">
                <img
                  src={heroPetsImg}
                  alt="Official BORCELLE Pet Food Packaging - Dog & Cat Nutrition"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Right: Text content */}
            <div className="space-y-5">
              <span className="text-xs font-bold text-amber-800 bg-amber-200/80 px-3 py-1 rounded-full tracking-wider uppercase">
                ABOUT BORCELLE
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Made with Care for the Pets You Love
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Borcelle, we believe every pet deserves clean, nutrient-dense food that fuels their daily adventures. We collaborate with veterinary nutritionists to formulate recipes using real protein, whole grains, and antioxidant-rich fruits.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-semibold text-slate-800">
                <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Quality Ingredients</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-stone-200/80 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-emerald-600" />
                  <span>Balanced Nutrition</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 bg-amber-200 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-full text-xs transition-all shadow-2xs cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY CHOOSE BORCELLE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Choose Borcelle?
            </h2>
            <p className="text-slate-600 text-sm">
              Formulated with dedication to support lifelong pet vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Quality Ingredients</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Carefully selected ingredients for balanced nutrition without artificial preservatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Complete Nutrition</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Made to support your pet’s everyday health, immune strength, and stamina.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <Bone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">For Every Life Stage</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Suitable options tailored for growing puppies/kittens, active adults, and seniors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
                <Smile className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Made with Care</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Created with genuine attention and transparency for your pet's overall wellbeing.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 — PRODUCT RANGE */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Explore Our Product Range
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Explore balanced Borcelle recipes for dogs and cats across every life stage.
              </p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-xs font-bold text-slate-900 hover:text-amber-700 flex items-center gap-1 group cursor-pointer shrink-0"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-stone-200">
            {homeTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-slate-900 shadow-2xs'
                    : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHomeProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-5 space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden bg-stone-50 border border-stone-100 flex items-center justify-center p-2">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      prod.petType === 'dog' ? 'bg-amber-100 text-amber-900' : 'bg-sky-100 text-sky-900'
                    }`}>
                      {prod.categoryTag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
                      {prod.name}
                    </h3>
                    {prod.suitableFor && (
                      <p className="text-[11px] font-semibold text-slate-600 mt-0.5">
                        Suitable for: {prod.suitableFor}
                      </p>
                    )}
                  </div>

                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                    {prod.shortDescription}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    {prod.keyBenefits.slice(0, 2).map((ben, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="w-full mt-3 bg-stone-100 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="pt-4 text-center">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6 — PET HEALTH BENEFITS */}
      <section className="py-16 sm:py-20 bg-[#F0F9FF] border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-200/80 px-3 py-1 rounded-full">
              CORE WELLBEING
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Nutrition That Supports Everyday Health
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Healthy Digestion</h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">Natural prebiotic fibers gentle on sensitive stomachs.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <Bone className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Strong Muscles</h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">High animal protein ratios to build and repair lean tissue.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Healthy Skin & Coat</h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">Omega-3 & Omega-6 oils for radiant fur and hydrated skin.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Natural Energy</h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">Wholesome complex carbs for all-day playful stamina.</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Immune Support</h4>
              <p className="text-slate-600 text-[11px] leading-relaxed">Essential vitamins C & E plus fruit antioxidants.</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7 — STORE LOCATOR */}
      <section className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Search Form */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-amber-800 bg-amber-200/80 px-3 py-1 rounded-full uppercase tracking-wider">
                STORE LOCATOR
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Find a BORCELLE Store Near You
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Search for an authorized BORCELLE store in your city or nearby area. Check location details, opening hours, and stock availability.
              </p>

              <form onSubmit={handleStoreLocatorSubmit} className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City Name</label>
                    <input
                      type="text"
                      placeholder="e.g. New York, Chicago"
                      value={cityInput}
                      onChange={(e) => setCityInput(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-stone-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Pincode / Zip Code</label>
                    <input
                      type="text"
                      placeholder="e.g. 10017, 90210"
                      value={pincodeInput}
                      onChange={(e) => setPincodeInput(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-stone-50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3.5 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4 text-amber-300" />
                  <span>Find a Store</span>
                </button>
              </form>
            </div>

            {/* Map Illustration Right */}
            <div className="bg-stone-200/60 rounded-3xl p-6 border border-stone-300/70 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-sky-100/40" />
              <div className="relative z-10 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto text-amber-600">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Interactive Store Map</h3>
                <p className="text-xs text-slate-600 max-w-xs">
                  Locate authorized stockists across major cities with real-time stock availability status.
                </p>
                <button
                  onClick={() => onNavigate('store-locator')}
                  className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-2xs hover:bg-stone-100 transition-colors"
                >
                  <span>Open Interactive Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — BLOGS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Pet Care Tips
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Expert advice and feeding guides for your dog and cat.
              </p>
            </div>
            <button
              onClick={() => onNavigate('blogs')}
              className="text-xs font-bold text-slate-900 hover:text-amber-700 flex items-center gap-1 group cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3 p-5">
                  <div className="h-44 rounded-xl overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="inline-block text-[10px] font-bold px-2.5 py-1 bg-amber-100 text-amber-900 rounded-full uppercase">
                    {blog.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 line-clamp-2 hover:text-amber-700 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                    {blog.shortDescription}
                  </p>
                </div>

                <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                  <button
                    onClick={() => onSelectBlog(blog)}
                    className="w-full text-left text-xs font-bold text-slate-900 hover:text-amber-600 pt-3 flex items-center justify-between cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9 — REAL PET PARENT EXPERIENCES & HAPPY PET STORIES */}
      <CustomerReviewsSection />

      {/* SECTION 10 — FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* SECTION 11 — CONTACT CTA */}
      <section className="py-16 sm:py-20 bg-[#FEF9C3] border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Have Questions About Our Products?
          </h2>
          <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our team is here to help you learn more about BORCELLE pet nutrition, ingredient sourcing, and formula recommendations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold px-7 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              Contact Us
            </button>
            <button
              onClick={() => onNavigate('store-locator')}
              className="bg-white text-slate-900 hover:bg-stone-50 border border-stone-300 text-xs font-bold px-7 py-3.5 rounded-full shadow-2xs transition-all cursor-pointer"
            >
              Find a Store
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
