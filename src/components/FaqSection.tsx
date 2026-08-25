import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How do I transition my dog or cat to BORCELLE pet food?",
    answer: "We recommend a gradual 7 to 10-day transition period. Start by mixing 25% BORCELLE with 75% of your pet's current food for 2-3 days, then move to 50/50 for 2-3 days, 75% BORCELLE for 2-3 days, and finally 100% BORCELLE. This helps prevent digestive upset."
  },
  {
    question: "Are BORCELLE recipes suitable for pets with sensitive stomachs?",
    answer: "Yes! Our recipes are formulated with highly digestible proteins, prebiotic fibers, and wholesome whole grains or grain-free options designed to be gentle on sensitive stomachs."
  },
  {
    question: "Where can I purchase authentic BORCELLE pet food?",
    answer: "You can locate authorized veterinary clinics, specialty pet stores, and retail stockists near you using our online Store Locator. Simply search by city or zip code."
  },
  {
    question: "Are BORCELLE recipes vet-approved and nutritionally complete?",
    answer: "Absolutely. All BORCELLE dog and cat food formulas are developed in collaboration with animal nutritionists and veterinarians to meet or exceed nutritional standards for complete life stages."
  },
  {
    question: "How should I store open bags of BORCELLE pet food?",
    answer: "Store pet food in its original bag inside a cool, dry place away from direct sunlight. Reseal the bag tightly after each feeding or store it in an airtight container to preserve freshness and crunchy flavor."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A]">
            Answers to Common Pet Parent Questions
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about feeding guidelines, ingredients, or store availability? Find quick answers below.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-stone-50/80 rounded-2xl border border-stone-200/90 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-[#0F3C8A] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0F3C8A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-stone-200/50 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
