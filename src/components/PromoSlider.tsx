import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import adultDogBagImg from '../assets/images/borcelle_adult_dog_bag_1786628492232.jpg';
import puppyBagImg from '../assets/images/borcelle_puppy_bag_1786628507707.jpg';
import seniorBagImg from '../assets/images/borcelle_senior_bag_1786628522992.jpg';
import catBagImg from '../assets/images/borcelle_cat_bag_1786628538149.jpg';
import bowlKibbleImg from '../assets/images/pet_food_bowl_kibble_1786630313283.jpg';
import modelPetsImg from '../assets/images/model_pets_hero_1786630330415.jpg';

import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Heart, 
  Award,
  Activity,
  Smile
} from 'lucide-react';

interface PromoSliderProps {
  onNavigate: (page: PageType) => void;
}

export const PromoSlider: React.FC<PromoSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch Swipe state for mobile gestures
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const TOTAL_SLIDES = 3;

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Slide Data Configuration
  const slidesData = [
    {
      id: 0,
      smallHeadline: 'Premium Nutrition. Happier Pets.',
      mainHeadline: 'Real Nutrition for Healthy, Happy Pets',
      supportingText: 'Thoughtfully crafted nutrition with quality ingredients to support your pet’s everyday health, energy and wellbeing.',
      badge: {
        tag: 'BORCELLE PET CARE',
        label: 'PREMIUM NUTRITION',
        subText: 'Dog & Cat Formulas'
      },
      primaryCTA: { text: 'Explore Products', page: 'products' as PageType },
      secondaryCTA: { text: 'Find the Right Food', page: 'products' as PageType },
      leftProducts: [
        { name: 'BORCELLE Puppy Food', img: puppyBagImg, badgeTag: 'Puppy DHA' },
        { name: 'BORCELLE Adult Dog Food', img: adultDogBagImg, badgeTag: 'Adult Formula' }
      ]
    },
    {
      id: 1,
      smallHeadline: 'Tailored Recipes for Active Pets',
      mainHeadline: 'Nutrition Made for Every Pet',
      supportingText: 'Discover tailored recipes designed for optimal digestion, strong immunity, and healthy everyday vitality.',
      badge: {
        tag: 'BALANCED RECIPES',
        label: 'QUALITY INGREDIENTS',
        subText: 'Dog & Cat Food'
      },
      primaryCTA: { text: 'Explore Dog Food', page: 'dog-food' as PageType },
      secondaryCTA: { text: 'Explore Cat Food', page: 'cat-food' as PageType },
      leftProducts: [
        { name: 'BORCELLE Adult Dog Food', img: adultDogBagImg, badgeTag: 'Adult Formula' },
        { name: 'BORCELLE Cat Food', img: catBagImg, badgeTag: 'Adult Cat' }
      ]
    },
    {
      id: 2,
      smallHeadline: 'Complete Care Across Every Stage',
      mainHeadline: 'Quality Nutrition for Every Life Stage',
      supportingText: 'From playful puppies and kittens to active adult pets and gentle seniors, discover nutrition made for every stage.',
      badge: {
        tag: 'LIFE STAGE CARE',
        label: 'ALL LIFE STAGES',
        subText: 'Puppy to Senior'
      },
      primaryCTA: { text: 'Find the Right Food', page: 'products' as PageType },
      secondaryCTA: { text: 'Explore Products', page: 'products' as PageType },
      leftProducts: [
        { name: 'BORCELLE Senior Dog Food', img: seniorBagImg, badgeTag: 'Senior 7+' },
        { name: 'BORCELLE Puppy Food', img: puppyBagImg, badgeTag: 'Growth Care' }
      ]
    }
  ];

  const currentData = slidesData[currentSlide];

  return (
    <section 
      className="relative bg-gradient-to-b from-[#FAF6F0] via-[#FFFDF9] to-[#F7F2EA] border-b border-stone-200/80 overflow-hidden select-none min-h-[85vh] sm:min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-between group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Subtle Studio Lighting Backdrop Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================= */}
      {/* ELEGANT NAVIGATION ARROWS NEAR BANNER EDGES               */}
      {/* ========================================================= */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#0F2C59] border border-stone-200/80 shadow-md hover:shadow-xl flex items-center justify-center transition-all cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6 text-[#0F2C59]" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#0F2C59] border border-stone-200/80 shadow-md hover:shadow-xl flex items-center justify-center transition-all cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-6 h-6 text-[#0F2C59]" />
      </button>

      {/* ========================================================= */}
      {/* MAIN HERO CONTENT - 3-COLUMN ADVERTISING COMPOSITION      */}
      {/* ========================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-6 relative z-10 w-full my-auto">
        
        <div key={`slide-content-${currentSlide}`} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center animate-fadeIn">
          
          {/* ======================================================= */}
          {/* LEFT 35%: PRODUCT PACKAGING + STAINLESS FOOD BOWL WITH KIBBLE */}
          {/* ======================================================= */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col items-center justify-center">
            <div 
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-full flex items-center justify-center cursor-pointer group/leftVisual"
              onClick={() => onNavigate('products')}
            >
              {/* Product Bags Arrangement */}
              <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[340px] flex items-center justify-center">
                
                {/* Back Left Product Bag */}
                {currentData.leftProducts[0] && (
                  <div className="absolute left-2 sm:left-6 lg:left-2 top-2 z-10 w-32 sm:w-44 lg:w-48 transform -rotate-6 transition-transform duration-500 group-hover/leftVisual:-rotate-3">
                    <img
                      src={currentData.leftProducts[0].img}
                      alt={currentData.leftProducts[0].name}
                      className="w-full h-auto object-contain drop-shadow-xl"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute -top-2 left-2 bg-stone-900 text-amber-300 text-[9px] font-black px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      {currentData.leftProducts[0].badgeTag}
                    </span>
                  </div>
                )}

                {/* Front Right Product Bag */}
                {currentData.leftProducts[1] && (
                  <div className="absolute right-2 sm:right-6 lg:right-2 top-0 z-20 w-36 sm:w-48 lg:w-52 transform rotate-4 transition-transform duration-500 group-hover/leftVisual:rotate-1">
                    <img
                      src={currentData.leftProducts[1].img}
                      alt={currentData.leftProducts[1].name}
                      className="w-full h-auto object-contain drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute -top-2 right-2 bg-amber-400 text-[#0F2C59] text-[9px] font-black px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                      {currentData.leftProducts[1].badgeTag}
                    </span>
                  </div>
                )}

                {/* Front Stainless Steel Bowl filled with Kibble */}
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 z-30 w-44 sm:w-56 lg:w-60 transform group-hover/leftVisual:scale-105 transition-transform duration-500">
                  <img
                    src={bowlKibbleImg}
                    alt="Premium Stainless Steel Food Bowl filled with Dry Kibble"
                    className="w-full h-auto object-contain rounded-full drop-shadow-2xl border-2 border-white/80"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floor Shadow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] h-4 bg-stone-900/30 rounded-full blur-md -z-10" />
                </div>

              </div>

              {/* Sub-label under visual */}
              <div className="mt-6 text-center">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#0F2C59] bg-white/80 border border-stone-200 px-3 py-1 rounded-full shadow-2xs">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Real Kibble • Master BORCELLE Formulas
                </span>
              </div>

            </div>
          </div>

          {/* ======================================================= */}
          {/* CENTER 45%: MARKETING HEADLINE + PROMO BADGE + NUTRITION BENEFITS + CTAS */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start space-y-4 sm:space-y-5">
            
            {/* Top Badge Block: Premium Quality */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-[#0F2C59] border border-amber-300 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="bg-[#0F2C59] text-amber-300 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                {currentData.badge.tag}
              </span>
              <span className="text-xs sm:text-sm font-black tracking-tight uppercase">
                {currentData.badge.label}
              </span>
              <span className="text-xs font-bold opacity-80 border-l border-[#0F2C59]/20 pl-2">
                {currentData.badge.subText}
              </span>
            </div>

            {/* Headline Section */}
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-extrabold text-amber-600 uppercase tracking-widest block">
                {currentData.smallHeadline}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-[#0F2C59] tracking-tight leading-[1.08] sm:leading-[1.1]">
                {currentData.mainHeadline}
              </h1>
            </div>

            {/* Supporting Subheading */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
              {currentData.supportingText}
            </p>

            {/* 5 Small Premium Nutrition Benefit Icons */}
            <div className="pt-1 pb-1 w-full max-w-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-left">
                
                <div className="flex items-center gap-2 bg-white/90 border border-stone-200/80 px-2.5 py-1.5 rounded-xl shadow-2xs">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-[11px] font-extrabold text-slate-800">Complete Nutrition</span>
                </div>

                <div className="flex items-center gap-2 bg-white/90 border border-stone-200/80 px-2.5 py-1.5 rounded-xl shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="text-[11px] font-extrabold text-slate-800">Quality Ingredients</span>
                </div>

                <div className="flex items-center gap-2 bg-white/90 border border-stone-200/80 px-2.5 py-1.5 rounded-xl shadow-2xs">
                  <Activity className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  <span className="text-[11px] font-extrabold text-slate-800">Healthy Digestion</span>
                </div>

                <div className="flex items-center gap-2 bg-white/90 border border-stone-200/80 px-2.5 py-1.5 rounded-xl shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="text-[11px] font-extrabold text-slate-800">Strong Immunity</span>
                </div>

                <div className="flex items-center gap-2 bg-white/90 border border-stone-200/80 px-2.5 py-1.5 rounded-xl shadow-2xs col-span-2 sm:col-span-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span className="text-[11px] font-extrabold text-slate-800">Skin & Coat</span>
                </div>

              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <button
                type="button"
                onClick={() => onNavigate(currentData.primaryCTA.page)}
                className="bg-[#0F2C59] hover:bg-[#182C47] text-white font-black text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all cursor-pointer flex items-center gap-2.5 uppercase tracking-wider transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{currentData.primaryCTA.text}</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate(currentData.secondaryCTA.page)}
                className="bg-white hover:bg-stone-100 text-[#0F2C59] border border-stone-300 font-black text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 uppercase tracking-wider"
              >
                <span>{currentData.secondaryCTA.text}</span>
              </button>
            </div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT 40%: LIFESTYLE MODEL WITH HAPPY DOG & CAT         */}
          {/* ======================================================= */}
          <div className="lg:col-span-3 order-3 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
              
              {/* Photo Card Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-gradient-to-b from-stone-100 to-stone-200/60 p-2">
                <img
                  src={modelPetsImg}
                  alt="Friendly lifestyle model interacting with healthy dog and cat"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl transform hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-stone-200 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold">
                    <Smile className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0F2C59] tracking-tight">Trusted by 50,000+ Pet Parents</h4>
                    <p className="text-[10px] text-slate-500 font-semibold">100% Satisfaction & Vet Recommended</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* BOTTOM PAGINATION DOTS & CONTROLS                        */}
      {/* ========================================================= */}
      <div className="pb-6 pt-2 flex flex-col items-center justify-center z-30 gap-2">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === index
                  ? 'w-8 h-2.5 bg-[#0F2C59] shadow-xs'
                  : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        {/* Small Autoplay status note */}
        <span className="text-[10px] font-medium text-slate-500 tracking-wide">
          {isPaused ? 'Paused on hover' : 'Auto-playing • Swipe or use arrows to navigate'}
        </span>
      </div>

    </section>
  );
};
