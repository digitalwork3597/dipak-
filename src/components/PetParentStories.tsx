import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const PetParentStories: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 't1',
      customerName: 'Rahul',
      petName: 'Bruno (Golden Retriever)',
      ownerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      petImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      review:
        'Borcelle’s product information made it easy for me to explore food suitable for Bruno’s age and needs. His coat is shinier and he loves mealtime!',
    },
    {
      id: 't2',
      customerName: 'Priya',
      petName: 'Whiskers (Persian Cat)',
      ownerImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      petImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      review:
        'Finding the right indoor formula was so simple using the Pet Food Finder. Whiskers enjoys her food and has great daily energy.',
    },
    {
      id: 't3',
      customerName: 'Anand & Meera',
      petName: 'Bella (Beagle)',
      ownerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      petImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=300&q=80',
      rating: 5,
      review:
        'The Feeding Guide Calculator helped us establish a balanced daily feeding routine. High quality ingredients and great pet care guidance!',
    },
  ];

  const happyStories = [
    {
      id: 'hs1',
      petName: 'Max & Leo',
      petType: 'Rescue Dogs',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
      story: 'Transitioned smoothly to BORCELLE Adult Dog Food and enjoy active morning park sessions every day.',
    },
    {
      id: 'hs2',
      petName: 'Milo',
      petType: 'Indoor Tabby Cat',
      image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
      story: 'Thriving on BORCELLE Indoor Cat Food with healthy digestion and gentle hairball support.',
    },
    {
      id: 'hs3',
      petName: 'Coco',
      petType: 'Labrador Puppy',
      image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=600&q=80',
      story: 'Growing strong with DHA-enriched puppy nutrition, vibrant playful energy, and a glossy coat.',
    },
  ];

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeTestimonial];

  return (
    <section id="pet-parent-stories" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION 8: TESTIMONIALS */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-amber-200">
              <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>LOVED BY PET PARENTS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
              Discover Experiences Shared by Pet Parents
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              *Sample experiences shared for general demonstration purposes.
            </p>
          </div>

          {/* Testimonial Card Slider */}
          <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-amber-100/60 pointer-events-none" />

            {/* Images */}
            <div className="relative shrink-0 flex items-center justify-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md">
                <img
                  src={current.petImage}
                  alt={current.petName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src={current.ownerImage}
                  alt={current.customerName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 text-center sm:text-left grow">
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 text-base sm:text-lg italic leading-relaxed">
                "{current.review}"
              </p>

              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  {current.customerName} & {current.petName}
                </h4>
                <span className="text-xs text-amber-700 font-semibold">BORCELLE Pet Parent</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex sm:flex-col gap-2 shrink-0">
              <button
                type="button"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-amber-100 hover:text-slate-900 text-slate-600 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-amber-100 hover:text-slate-900 text-slate-600 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 9: HAPPY PET STORIES */}
        <div>
          <div className="text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0F3C8A] px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-[#0F3C8A]" />
              <span>VISUAL JOURNEYS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
              Healthy Pets, Happy Stories
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              A glimpse into the daily joy and vitality of pets enjoying BORCELLE nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {happyStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={story.image}
                    alt={story.petName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase">
                    {story.petType}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{story.petName}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
