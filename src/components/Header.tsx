import React, { useState, useEffect, useRef } from 'react';
import { PageType, Product, BlogPost } from '../types';
import { Logo } from './Logo';
import { PRODUCTS } from '../data/products';
import { BLOGS } from '../data/blogs';
import { 
  Menu, 
  X, 
  MapPin, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  Dog, 
  Cat, 
  Bone, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Feather, 
  Smile, 
  ArrowRight,
  BookOpen,
  Info,
  ShoppingBag
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'dog' | 'cat' | null>(null);
  const [mobileDogExpanded, setMobileDogExpanded] = useState(false);
  const [mobileCatExpanded, setMobileCatExpanded] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard escape listener for Search Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setActiveMegaMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterMega = (menu: 'dog' | 'cat') => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setActiveMegaMenu(menu);
  };

  const handleMouseLeaveMega = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  // Filtered search results
  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryTag.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const filteredBlogs = searchQuery.trim() === ''
    ? []
    : BLOGS.filter(b =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const dogCategories = [
    { title: 'Puppy Food', desc: 'Brain development & immunity', icon: Bone },
    { title: 'Adult Dog Food', desc: 'Balanced energy & digestion', icon: Dog },
    { title: 'Senior Dog Food', desc: 'Joint mobility & gentle care', icon: ShieldCheck },
    { title: 'Small Breed Food', desc: 'Nutrient-dense mini kibble', icon: Sparkles },
    { title: 'Large Breed Food', desc: 'Glucosamine joint support', icon: ShieldCheck },
    { title: 'Active Dog Food', desc: 'High protein for energy', icon: Sparkles },
  ];

  const catCategories = [
    { title: 'Kitten Food', desc: 'Essential DHA & high protein', icon: Feather },
    { title: 'Adult Cat Food', desc: 'Essential taurine for heart', icon: Cat },
    { title: 'Senior Cat Food', desc: 'Renal care & easy chewing', icon: Heart },
    { title: 'Indoor Cat Food', desc: 'Weight & stool odor care', icon: Smile },
    { title: 'Hairball Care', desc: 'Fiber blend for hairballs', icon: Feather },
    { title: 'Sensitive Care', desc: 'Single protein digestive care', icon: Sparkles },
  ];

  return (
    <div className="sticky top-0 z-50 transition-all duration-200">
      
      {/* ========================================================= */}
      {/* SECTION 1: TOP INFORMATION BAR                            */}
      {/* ========================================================= */}
      <div className="bg-[#0F2C59] text-white py-1.5 px-4 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left Side */}
          <div className="flex items-center gap-1.5 text-slate-200 truncate">
            <span className="text-amber-400">🐾</span>
            <span className="truncate font-semibold">Complete Nutrition for Happy, Healthy Pets</span>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center gap-2 text-amber-300 font-semibold text-[11px] tracking-wide uppercase">
            <span>🌿 Free Pet Nutrition Guidance</span>
          </div>

          {/* Right Side */}
          <button
            type="button"
            onClick={() => handleNavClick('store-locator')}
            className="flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors cursor-pointer shrink-0"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="underline underline-offset-2">Find a Store</span>
          </button>

        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 2: NEW MAIN NAVIGATION BAR                        */}
      {/* ========================================================= */}
      <header className={`bg-white/95 backdrop-blur-md border-b border-stone-200/90 transition-all duration-300 ${
        isScrolled ? 'py-2.5 shadow-md' : 'py-4 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Logo + Tagline */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleNavClick('home')} 
                className="flex items-center focus:outline-none text-left cursor-pointer group"
                aria-label="BORCELLE Pet Nutrition Home"
              >
                <Logo className="h-10 sm:h-11 transition-transform group-hover:scale-[1.02]" variant="color" showTagline={false} />
                <div className="hidden sm:block border-l border-stone-300 pl-3 ml-2">
                  <span className="block text-[#0F2C59] font-black text-sm tracking-wider uppercase leading-none">
                    BORCELLE
                  </span>
                  <span className="block text-[10px] font-bold text-slate-500 tracking-tight mt-0.5">
                    Nourishing Pets, Enriching Lives
                  </span>
                </div>
              </button>
            </div>

            {/* CENTER: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* Home */}
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all relative cursor-pointer ${
                  currentPage === 'home'
                    ? 'text-[#0F2C59]'
                    : 'text-slate-700 hover:text-[#0F2C59] hover:bg-stone-100/80'
                }`}
              >
                Home
                {currentPage === 'home' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-1 bg-[#F59E0B] rounded-full" />
                )}
              </button>

              {/* Dog Food Dropdown/Mega Menu Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnterMega('dog')}
                onMouseLeave={handleMouseLeaveMega}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick('dog-food')}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    currentPage === 'dog-food'
                      ? 'text-[#0F2C59]'
                      : 'text-slate-700 hover:text-[#0F2C59] hover:bg-[#FEF9C3]/70'
                  }`}
                >
                  <span>Dog Food</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'dog' ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                  {currentPage === 'dog-food' && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-1 bg-[#F59E0B] rounded-full" />
                  )}
                </button>

                {/* DOG FOOD MEGA MENU PANEL */}
                {activeMegaMenu === 'dog' && (
                  <div className="absolute top-full left-0 w-[540px] bg-white rounded-3xl p-6 border border-stone-200 shadow-2xl z-50 animate-fadeIn mt-2">
                    <div className="flex items-center justify-between border-b border-amber-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black">
                          🐶
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-[#0F2C59] uppercase tracking-wider">BORCELLE CANINE NUTRITION</h4>
                          <p className="text-[11px] text-slate-500 font-medium">Complete formulas for puppies, adult, & senior dogs</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleNavClick('dog-food')}
                        className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 cursor-pointer"
                      >
                        <span>Explore Dog Nutrition</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {dogCategories.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={i}
                            onClick={() => handleNavClick('dog-food')}
                            className="p-3 rounded-2xl bg-amber-50/50 hover:bg-amber-100/70 border border-amber-100/80 transition-all cursor-pointer group"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-white text-amber-600 flex items-center justify-center shadow-2xs group-hover:bg-[#F59E0B] group-hover:text-slate-950 transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="block text-xs font-extrabold text-[#0F2C59] group-hover:text-amber-900">
                                  {item.title}
                                </span>
                                <span className="block text-[10px] text-slate-500 font-medium leading-tight">
                                  {item.desc}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Cat Food Dropdown/Mega Menu Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnterMega('cat')}
                onMouseLeave={handleMouseLeaveMega}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick('cat-food')}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-1 cursor-pointer ${
                    currentPage === 'cat-food'
                      ? 'text-[#0F2C59]'
                      : 'text-slate-700 hover:text-[#0F2C59] hover:bg-sky-50'
                  }`}
                >
                  <span>Cat Food</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegaMenu === 'cat' ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
                  {currentPage === 'cat-food' && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-1 bg-[#F59E0B] rounded-full" />
                  )}
                </button>

                {/* CAT FOOD MEGA MENU PANEL */}
                {activeMegaMenu === 'cat' && (
                  <div className="absolute top-full left-0 w-[540px] bg-white rounded-3xl p-6 border border-stone-200 shadow-2xl z-50 animate-fadeIn mt-2">
                    <div className="flex items-center justify-between border-b border-sky-100 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-900 flex items-center justify-center font-black">
                          🐱
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-[#0F2C59] uppercase tracking-wider">BORCELLE FELINE NUTRITION</h4>
                          <p className="text-[11px] text-slate-500 font-medium">Thoughtful recipes for kittens, adult, & senior cats</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleNavClick('cat-food')}
                        className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200 cursor-pointer"
                      >
                        <span>Explore Cat Nutrition</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {catCategories.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div 
                            key={i}
                            onClick={() => handleNavClick('cat-food')}
                            className="p-3 rounded-2xl bg-sky-50/50 hover:bg-sky-100/70 border border-sky-100/80 transition-all cursor-pointer group"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-white text-sky-600 flex items-center justify-center shadow-2xs group-hover:bg-[#5299D3] group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="block text-xs font-extrabold text-[#0F2C59] group-hover:text-sky-950">
                                  {item.title}
                                </span>
                                <span className="block text-[10px] text-slate-500 font-medium leading-tight">
                                  {item.desc}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Products */}
              <button
                type="button"
                onClick={() => handleNavClick('products')}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all relative cursor-pointer ${
                  currentPage === 'products'
                    ? 'text-[#0F2C59]'
                    : 'text-slate-700 hover:text-[#0F2C59] hover:bg-stone-100/80'
                }`}
              >
                Products
                {currentPage === 'products' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-1 bg-[#F59E0B] rounded-full" />
                )}
              </button>

              {/* Nutrition */}
              <button
                type="button"
                onClick={() => handleNavClick('products')}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all relative cursor-pointer ${
                  currentPage === 'products'
                    ? 'text-[#0F2C59]'
                    : 'text-slate-700 hover:text-[#0F2C59] hover:bg-stone-100/80'
                }`}
              >
                Nutrition
              </button>

              {/* Store Locator */}
              <button
                type="button"
                onClick={() => handleNavClick('store-locator')}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all relative cursor-pointer ${
                  currentPage === 'store-locator'
                    ? 'text-[#0F2C59]'
                    : 'text-slate-700 hover:text-[#0F2C59] hover:bg-stone-100/80'
                }`}
              >
                Store Locator
                {currentPage === 'store-locator' && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-1 bg-[#F59E0B] rounded-full" />
                )}
              </button>

              {/* About Us */}
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-all relative cursor-pointer ${
                  currentPage === 'about'
                    ? 'text-[#0F2C59]'
                    : 'text-slate-700 hover:text-[#0F2C59] hover:bg-stone-100/80'
                }`}
              >
                About Us
              </button>

            </nav>

            {/* RIGHT SIDE: Search Icon, Cart/Bag Icon & Primary CTA "Find the Right Food" */}
            <div className="hidden lg:flex items-center gap-3">
              
              {/* Search Icon Trigger */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-stone-100 hover:bg-amber-100 text-[#0F2C59] flex items-center justify-center transition-colors cursor-pointer border border-stone-200"
                aria-label="Open Search Modal"
                title="Search products, tips & store locator"
              >
                <Search className="w-4 h-4 text-[#0F2C59]" />
              </button>

              {/* Bag / Cart Icon */}
              <button
                type="button"
                onClick={() => handleNavClick('products')}
                className="w-10 h-10 rounded-full bg-stone-100 hover:bg-amber-100 text-[#0F2C59] flex items-center justify-center transition-colors cursor-pointer border border-stone-200 relative"
                aria-label="View Products Cart"
                title="View Selected Products"
              >
                <ShoppingBag className="w-4 h-4 text-[#0F2C59]" />
                <span className="absolute -top-1 -right-1 bg-[#F59E0B] text-[#0F2C59] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-2xs">
                  0
                </span>
              </button>

              {/* Primary CTA Pill Button */}
              <button
                type="button"
                onClick={() => handleNavClick('products')}
                className="bg-[#203A5B] hover:bg-[#182C47] text-white font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Find the Right Food</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
              </button>

            </div>

            {/* Mobile Actions: Search & Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2.5 rounded-xl bg-stone-100 text-[#0F2C59] hover:bg-amber-100 cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#0F2C59] hover:bg-stone-100 cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 shadow-2xl animate-fadeIn mt-2">
            <div className="px-4 pt-3 pb-6 space-y-2">
              
              {/* Mobile Quick Pet Switch */}
              <div className="bg-amber-50 p-2 rounded-2xl border border-amber-200 flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-600 pl-2">Quick Jump:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleNavClick('dog-food')}
                    className="bg-amber-400 text-[#0F2C59] font-black text-xs px-3 py-1 rounded-xl shadow-2xs flex items-center gap-1"
                  >
                    🐶 DOG FOOD
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNavClick('cat-food')}
                    className="bg-sky-400 text-slate-950 font-black text-xs px-3 py-1 rounded-xl shadow-2xs flex items-center gap-1"
                  >
                    🐱 CAT FOOD
                  </button>
                </div>
              </div>

              {/* Home */}
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm ${currentPage === 'home' ? 'bg-amber-100 text-[#0F2C59]' : 'text-slate-700'}`}
              >
                Home
              </button>

              {/* Dog Food Collapsible */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileDogExpanded(!mobileDogExpanded)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm ${currentPage === 'dog-food' ? 'bg-amber-100 text-[#0F2C59]' : 'text-slate-700'}`}
                >
                  <span>Dog Food</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDogExpanded ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                </button>
                {mobileDogExpanded && (
                  <div className="pl-6 pr-2 py-2 space-y-1 bg-amber-50/60 rounded-2xl my-1 border border-amber-100">
                    {dogCategories.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleNavClick('dog-food')}
                        className="w-full text-left py-2 px-3 text-xs font-semibold text-slate-700 hover:text-amber-900 flex items-center justify-between border-b border-amber-100/50 last:border-none"
                      >
                        <span>{c.title}</span>
                        <span className="text-[10px] text-amber-700 font-medium">{c.desc.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Cat Food Collapsible */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileCatExpanded(!mobileCatExpanded)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm ${currentPage === 'cat-food' ? 'bg-sky-100 text-[#0F2C59]' : 'text-slate-700'}`}
                >
                  <span>Cat Food</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileCatExpanded ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
                </button>
                {mobileCatExpanded && (
                  <div className="pl-6 pr-2 py-2 space-y-1 bg-sky-50/60 rounded-2xl my-1 border border-sky-100">
                    {catCategories.map((c, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleNavClick('cat-food')}
                        className="w-full text-left py-2 px-3 text-xs font-semibold text-slate-700 hover:text-sky-900 flex items-center justify-between border-b border-sky-100/50 last:border-none"
                      >
                        <span>{c.title}</span>
                        <span className="text-[10px] text-sky-700 font-medium">{c.desc.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Pet Nutrition */}
              <button
                type="button"
                onClick={() => handleNavClick('products')}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm ${currentPage === 'products' ? 'bg-amber-100 text-[#0F2C59]' : 'text-slate-700'}`}
              >
                Pet Nutrition
              </button>

              {/* Pet Care Tips */}
              <button
                type="button"
                onClick={() => handleNavClick('blogs')}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm ${currentPage === 'blogs' ? 'bg-amber-100 text-[#0F2C59]' : 'text-slate-700'}`}
              >
                Pet Care Tips
              </button>

              {/* About Us */}
              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm ${currentPage === 'about' ? 'bg-amber-100 text-[#0F2C59]' : 'text-slate-700'}`}
              >
                About Us
              </button>

              {/* Store Locator */}
              <button
                type="button"
                onClick={() => handleNavClick('store-locator')}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm ${currentPage === 'store-locator' ? 'bg-amber-100 text-[#0F2C59]' : 'text-slate-700'}`}
              >
                Store Locator
              </button>

              {/* Prominent Mobile Store Locator CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('store-locator')}
                  className="w-full bg-[#F59E0B] text-[#0F2C59] font-black py-3 rounded-2xl uppercase tracking-wider text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#0F2C59]" />
                  <span>FIND A STORE</span>
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* SEARCH MODAL OVERLAY                                      */}
      {/* ========================================================= */}
      {searchOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-start justify-center pt-16 px-4 animate-fadeIn">
          <div className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-stone-200 overflow-hidden">
            
            {/* Search Input Bar */}
            <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
              <Search className="w-5 h-5 text-amber-600 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, pet care tips, or nutrition guides..."
                className="w-full bg-transparent text-slate-900 font-semibold text-sm outline-none placeholder:text-slate-400 placeholder:font-normal"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-bold text-slate-400 hover:text-slate-700 px-2 py-1 bg-stone-200 rounded-md"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-200 text-slate-700 hover:bg-stone-300 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Dynamic Results Container */}
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
              
              {searchQuery.trim() === '' ? (
                <div className="py-6 text-center space-y-3">
                  <span className="text-2xl">🔍</span>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quick Suggestions</p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {['Puppy Formula', 'Salmon Cat Food', 'Adult Dog Kibble', 'Store Locator', 'Hairball Care'].map((tag, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="bg-stone-100 hover:bg-amber-100 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full border border-stone-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Matching Products */}
                  {filteredProducts.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider flex items-center gap-1.5">
                        <Dog className="w-4 h-4 text-amber-600" />
                        <span>Matching Products ({filteredProducts.length})</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {filteredProducts.map((p) => (
                          <div
                            key={p.id}
                            onClick={() => {
                              if (p.petType === 'dog') handleNavClick('dog-food');
                              else handleNavClick('cat-food');
                            }}
                            className="p-2.5 rounded-2xl bg-amber-50/50 hover:bg-amber-100 border border-amber-100 transition-all cursor-pointer flex items-center gap-3"
                          >
                            <img src={p.image} alt={p.name} className="w-12 h-12 object-cover rounded-xl shrink-0" />
                            <div className="truncate">
                              <span className="block text-xs font-bold text-[#0F2C59] truncate">{p.name}</span>
                              <span className="text-[10px] text-slate-500 font-medium uppercase">{p.petType} • {p.lifeStage}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Articles */}
                  {filteredBlogs.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-stone-100">
                      <h4 className="text-xs font-black text-[#0F2C59] uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-sky-600" />
                        <span>Nutrition Tips & Blogs ({filteredBlogs.length})</span>
                      </h4>
                      <div className="space-y-1.5">
                        {filteredBlogs.map((b) => (
                          <div
                            key={b.id}
                            onClick={() => handleNavClick('blogs')}
                            className="p-2.5 rounded-2xl bg-sky-50/50 hover:bg-sky-100 border border-sky-100 transition-all cursor-pointer flex items-center justify-between"
                          >
                            <span className="text-xs font-bold text-[#0F2C59] truncate pr-2">{b.title}</span>
                            <span className="text-[10px] font-bold text-sky-800 bg-white px-2 py-0.5 rounded-full border border-sky-200 shrink-0">
                              Read Tip →
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredProducts.length === 0 && filteredBlogs.length === 0 && (
                    <div className="py-8 text-center text-slate-500 space-y-2">
                      <span className="text-3xl">🐾</span>
                      <p className="text-sm font-semibold">No direct matches found for "{searchQuery}"</p>
                      <p className="text-xs text-slate-400">Try searching for "dog", "cat", "puppy", or "store"</p>
                    </div>
                  )}
                </>
              )}

            </div>

            <div className="p-3 bg-stone-100 border-t border-stone-200 text-center text-[11px] text-slate-500 font-medium">
              Press <kbd className="px-1.5 py-0.5 bg-white rounded border border-stone-300 font-mono text-[10px]">ESC</kbd> or click outside to close
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
