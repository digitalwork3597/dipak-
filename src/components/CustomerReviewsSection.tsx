import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Dog, 
  Cat, 
  Heart, 
  Send, 
  CheckCircle2, 
  Upload, 
  Image as ImageIcon, 
  ShieldCheck, 
  MessageSquareHeart,
  Sparkles,
  Info
} from 'lucide-react';

import { Review, PetStory, SAMPLE_REVIEWS, HAPPY_PET_STORIES } from '../data/reviews';

export const CustomerReviewsSection: React.FC = () => {
  // Slider state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  
  // Touch swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Form state
  const [formName, setFormName] = useState('');
  const [formPetName, setFormPetName] = useState('');
  const [formPetType, setFormPetType] = useState<'dog' | 'cat'>('dog');
  const [formEmail, setFormEmail] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formHoverRating, setFormHoverRating] = useState(0);
  const [formReview, setFormReview] = useState('');
  const [formConsent, setFormConsent] = useState(false);
  const [formPhotoPreview, setFormPhotoPreview] = useState<string | null>(null);
  
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Responsiveness detector for cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = SAMPLE_REVIEWS.length;
  const maxIndex = Math.max(0, totalReviews - cardsPerView);

  // Auto slide timer (6 seconds)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) {
      handleNextSlide();
    } else if (isSwipeRight) {
      handlePrevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Image upload simulation handler
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission handler with validation
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!formName.trim()) errors.name = 'Please enter your name.';
    if (!formPetName.trim()) errors.petName = 'Please enter your pet’s name.';
    if (!formEmail.trim() || !/\S+@\S+\.\S+/.test(formEmail)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formReview.trim() || formReview.trim().length < 10) {
      errors.review = 'Please write a review (at least 10 characters).';
    }
    if (!formConsent) {
      errors.consent = 'You must confirm genuine experience to submit.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormName('');
    setFormPetName('');
    setFormPetType('dog');
    setFormEmail('');
    setFormRating(5);
    setFormReview('');
    setFormConsent(false);
    setFormPhotoPreview(null);
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <div className="bg-[#FAF6F0] border-y border-stone-200/80 space-y-20 py-16 sm:py-20 relative overflow-hidden">
      
      {/* Soft Light-Blue & Pastel-Yellow Decorative Shapes in Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -z-0 pointer-events-none transform translate-x-20 -translate-y-20" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl -z-0 pointer-events-none transform -translate-x-20" />

      {/* ========================================================== */}
      {/* SECTION 1: CUSTOMER REVIEWS SLIDER                          */}
      {/* ========================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Header & Rating Summary */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 bg-amber-100/90 text-amber-900 border border-amber-200 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>REAL PET PARENT EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F3C8A] tracking-tight">
            Loved by Pets. Trusted by Pet Parents.
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover the experiences shared by pet parents who explore BORCELLE nutrition for their dogs and cats.
          </p>

          {/* Customer Rating Summary */}
          <div className="pt-2 flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-2 text-sm font-black text-slate-900">Loved by Pet Parents</span>
            </div>
            <p className="text-xs text-slate-500 font-medium italic">
              Customer feedback helps us improve the BORCELLE experience.
            </p>
          </div>

        </div>

        {/* Reviews Slider Container */}
        <div 
          className="relative px-2 sm:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-slate-800 shadow-md hover:shadow-lg border border-stone-200 flex items-center justify-center hover:bg-amber-400 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNextSlide}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white text-slate-800 shadow-md hover:shadow-lg border border-stone-200 flex items-center justify-center hover:bg-amber-400 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Overflow Track */}
          <div className="overflow-hidden py-4 px-1">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {SAMPLE_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  style={{ flex: `0 0 calc(${100 / cardsPerView}% - ${(24 * (cardsPerView - 1)) / cardsPerView}px)` }}
                  className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
                >
                  
                  {/* Card Header: Pet Parent & Pet Images */}
                  <div className="flex items-start justify-between gap-3 border-b border-stone-100 pb-4">
                    <div className="flex items-center gap-3">
                      
                      {/* Avatar Overlap Stack */}
                      <div className="relative flex items-center">
                        <img
                          src={rev.customerImage}
                          alt={rev.customerName}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                          referrerPolicy="no-referrer"
                        />
                        <div className="relative -ml-4">
                          <img
                            src={rev.petImage}
                            alt={rev.petName}
                            className="w-10 h-10 rounded-full object-cover border-2 border-amber-300 shadow-xs"
                            referrerPolicy="no-referrer"
                          />
                          <span className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white ${
                            rev.petType === 'dog' ? 'bg-amber-500' : 'bg-sky-500'
                          }`}>
                            {rev.petType === 'dog' ? '🐶' : '🐱'}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                          {rev.customerName}
                        </h4>
                        <p className="text-xs font-semibold text-amber-900 flex items-center gap-1">
                          <span>Pet: <strong>{rev.petName}</strong></span>
                          <span className="text-[10px] text-slate-400">({rev.petType === 'dog' ? 'Dog' : 'Cat'})</span>
                        </p>
                      </div>

                    </div>

                    {/* Transparency Label: Sample Pet Parent Story */}
                    <span className="bg-stone-100 text-slate-600 border border-stone-200 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shrink-0">
                      Sample Story
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed grow italic">
                    "{rev.reviewText}"
                  </p>

                  {/* Card Footer: Clear Transparency Note */}
                  <div className="pt-2 text-[10px] text-slate-400 font-medium flex items-center justify-between border-t border-stone-100">
                    <span className="flex items-center gap-1">
                      <Info className="w-3 h-3 text-stone-400" />
                      Sample Pet Parent Story
                    </span>
                    <span className="text-slate-500 font-bold">BORCELLE Community</span>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-8 bg-[#0F3C8A]' 
                    : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

          {/* Transparency Disclaimer Footer Banner */}
          <div className="mt-6 text-center max-w-xl mx-auto bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3 text-[11px] text-amber-900 font-medium flex items-center justify-center gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Sample Pet Parent Stories:</strong> Displayed for demonstration until real customer reviews are submitted and approved by our moderation team.
            </span>
          </div>

        </div>

      </section>

      {/* ========================================================== */}
      {/* SECTION 2: HAPPY PET STORIES GALLERY                        */}
      {/* ========================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-900 border border-sky-200 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
            <span>HAPPY PET STORIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F3C8A] tracking-tight">
            Happy Pets, Happy Families
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every pet has a unique story. Explore the special moments shared by pet parents and their companions.
          </p>
        </div>

        {/* Clean Masonry / Rounded Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HAPPY_PET_STORIES.map((story) => (
            <div
              key={story.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-stone-200 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image with Hover Zoom & Gradient Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Pet Type Tag */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-2xs">
                  <span>{story.petType === 'dog' ? '🐶 Dog' : '🐱 Cat'}</span>
                  <span>•</span>
                  <span className="text-amber-700">{story.petName}</span>
                </div>

                {/* Sample Badge */}
                <div className="absolute top-3 right-3 z-10 bg-stone-900/70 backdrop-blur-xs text-stone-200 text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                  Sample Story
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text Content Overlay at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold leading-tight text-white group-hover:text-amber-300 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-stone-200 leading-relaxed font-normal">
                    {story.shortStory}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================== */}
      {/* SECTION 3: SHARE YOUR PET'S STORY / WRITE A REVIEW FORM    */}
      {/* ========================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-6 sm:p-10 space-y-8">
          
          <div className="text-center space-y-2 border-b border-stone-100 pb-6">
            <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <MessageSquareHeart className="w-4 h-4 text-amber-600" />
              <span>COMMUNITY STORIES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F3C8A]">
              Share Your Pet’s Story
            </h3>
            <p className="text-slate-600 text-sm">
              Tell us about your experience with BORCELLE.
            </p>
          </div>

          {isSubmitted ? (
            /* Submission Confirmation Message */
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h4 className="text-xl font-extrabold text-slate-900">
                  Thank You for Sharing Your Story!
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  Thank you for sharing your pet’s story! Your review has been received and will be reviewed before publication.
                </p>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-emerald-200 text-[11px] text-slate-600 max-w-md mx-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1.5" />
                <span>Our moderation team approves community submissions within 24-48 hours.</span>
              </div>

              <button
                type="button"
                onClick={handleResetForm}
                className="bg-[#0F3C8A] hover:bg-[#0A2E70] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow-2xs mt-2"
              >
                Submit Another Story
              </button>
            </div>
          ) : (
            /* Interactive Review Form */
            <form onSubmit={handleSubmitReview} className="space-y-6">
              
              {/* Inputs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Your Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                    Your Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full text-xs p-3.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#0F3C8A] bg-stone-50 font-medium text-slate-800"
                  />
                  {formErrors.name && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Pet Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                    Pet Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bruno"
                    value={formPetName}
                    onChange={(e) => setFormPetName(e.target.value)}
                    className="w-full text-xs p-3.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#0F3C8A] bg-stone-50 font-medium text-slate-800"
                  />
                  {formErrors.petName && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1">{formErrors.petName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                    Email Address <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full text-xs p-3.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#0F3C8A] bg-stone-50 font-medium text-slate-800"
                  />
                  {formErrors.email && (
                    <p className="text-[11px] text-red-600 font-semibold mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Dog or Cat Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                    Pet Type <span className="text-amber-600">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormPetType('dog')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        formPetType === 'dog'
                          ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-2xs ring-2 ring-amber-200'
                          : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <Dog className="w-4 h-4" />
                      <span>Dog</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormPetType('cat')}
                      className={`py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                        formPetType === 'cat'
                          ? 'bg-sky-400 text-slate-950 border-sky-300 shadow-2xs ring-2 ring-sky-200'
                          : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <Cat className="w-4 h-4" />
                      <span>Cat</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                  Star Rating <span className="text-amber-600">*</span>
                </label>
                <div className="flex items-center gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200 w-fit">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = star <= (formHoverRating || formRating);
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormRating(star)}
                        onMouseEnter={() => setFormHoverRating(star)}
                        onMouseLeave={() => setFormHoverRating(0)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            isFilled
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-stone-300 fill-stone-100'
                          }`}
                        />
                      </button>
                    );
                  })}
                  <span className="text-xs font-bold text-slate-700 ml-2">
                    {formRating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Your Review Textarea */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                  Your Review / Story <span className="text-amber-600">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Share details about your experience with BORCELLE pet nutrition..."
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  className="w-full text-xs p-3.5 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#0F3C8A] bg-stone-50 font-medium text-slate-800 leading-relaxed"
                />
                {formErrors.review && (
                  <p className="text-[11px] text-red-600 font-semibold mt-1">{formErrors.review}</p>
                )}
              </div>

              {/* Upload Pet Photo (Optional) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                  Upload Pet Photo (Optional)
                </label>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-stone-300 transition-colors inline-flex items-center gap-2">
                    <Upload className="w-4 h-4 text-amber-700" />
                    <span>Choose Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>

                  {formPhotoPreview ? (
                    <div className="flex items-center gap-2 bg-stone-50 p-1.5 rounded-xl border border-stone-200">
                      <img
                        src={formPhotoPreview}
                        alt="Pet photo preview"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <span className="text-[11px] font-semibold text-emerald-700">Photo attached!</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 font-medium">No photo selected</span>
                  )}
                </div>
              </div>

              {/* Confirmation Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formConsent}
                    onChange={(e) => setFormConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-[#0F3C8A] rounded border-stone-300 focus:ring-[#0F3C8A]"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I confirm that this review is based on my genuine experience and I allow BORCELLE to review it before publication.
                  </span>
                </label>
                {formErrors.consent && (
                  <p className="text-[11px] text-red-600 font-semibold mt-1">{formErrors.consent}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0F3C8A] hover:bg-[#0A2E70] text-white font-extrabold text-sm py-4 px-6 rounded-2xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Submit Your Story</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
