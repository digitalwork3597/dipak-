import React, { useState } from 'react';
import { PageType, PetType } from '../types';
import { Calculator, ArrowRight, Dog, Cat, Calendar, Sparkles, ShieldAlert } from 'lucide-react';

interface PetAgeCalculatorProps {
  onNavigate: (page: PageType) => void;
}

export const PetAgeCalculator: React.FC<PetAgeCalculatorProps> = ({ onNavigate }) => {
  const [petType, setPetType] = useState<PetType>('dog');
  const [dob, setDob] = useState<string>('');
  const [calculatedAge, setCalculatedAge] = useState<{
    years: number;
    months: number;
    lifeStageCategory: string;
    description: string;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    if (years < 0) {
      years = 0;
      months = 0;
    }

    let category = 'Adult Nutrition';
    let desc = 'Balanced daily nutrition for prime energy and strength.';

    if (years === 0) {
      category = petType === 'dog' ? 'Puppy Growth Nutrition' : 'Kitten Development Nutrition';
      desc = 'High-protein, DHA-enriched formula for developing bones and brain function.';
    } else if (years < 2) {
      category = 'Young Adult Nutrition';
      desc = 'Active lifestyle nutrition for vibrant daily energy.';
    } else if (years >= 7) {
      category = 'Senior Nutrition Care';
      desc = 'Easily digestible formula with joint support for gentle aging comfort.';
    }

    setCalculatedAge({
      years,
      months,
      lifeStageCategory: category,
      description: desc,
    });
  };

  return (
    <section id="pet-age-calculator" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0F3C8A] px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-blue-100">
            <Calculator className="w-3.5 h-3.5 text-[#0F3C8A]" />
            <span>PET AGE CALCULATOR</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
            How Old Is Your Pet?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Enter your pet’s date of birth to calculate their current age and explore the appropriate BORCELLE life-stage category.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm max-w-2xl mx-auto">
          <form onSubmit={handleCalculate} className="space-y-6">
            
            {/* Pet Type Toggle */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Select Pet Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPetType('dog')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    petType === 'dog'
                      ? 'bg-[#0F3C8A] text-white border-[#0F3C8A] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Dog className="w-4 h-4" />
                  <span>Dog</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPetType('cat')}
                  className={`py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    petType === 'cat'
                      ? 'bg-[#0F3C8A] text-white border-[#0F3C8A] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Cat className="w-4 h-4" />
                  <span>Cat</span>
                </button>
              </div>
            </div>

            {/* DOB Field */}
            <div className="space-y-2">
              <label htmlFor="pet-dob" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Enter Date of Birth
              </label>
              <div className="relative">
                <input
                  id="pet-dob"
                  type="date"
                  required
                  value={dob}
                  max={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0F3C8A] focus:outline-none"
                />
                <Calendar className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0F3C8A] hover:bg-[#0A2E70] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Calculate Age & Category</span>
            </button>
          </form>

          {/* Results Display */}
          {calculatedAge && (
            <div className="mt-8 pt-8 border-t border-slate-200 space-y-5 animate-fadeIn">
              <div className="bg-white rounded-2xl p-5 border border-amber-200 shadow-xs text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block">
                  Age Result
                </span>
                <p className="text-2xl font-extrabold text-slate-900">
                  Your pet is approximately{' '}
                  <span className="text-[#0F3C8A]">
                    {calculatedAge.years > 0
                      ? `${calculatedAge.years} year${calculatedAge.years > 1 ? 's' : ''}`
                      : ''}{' '}
                    {calculatedAge.months} month{calculatedAge.months !== 1 ? 's' : ''} old
                  </span>
                  .
                </p>

                <div className="pt-3">
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                    Suggested BORCELLE Life-Stage Category
                  </span>
                  <p className="text-xl font-bold text-[#0F3C8A] mt-1">
                    ✨ {calculatedAge.lifeStageCategory}
                  </p>
                  <p className="text-xs text-slate-600 max-w-md mx-auto mt-1">
                    {calculatedAge.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => onNavigate(petType === 'dog' ? 'dog-food' : 'cat-food')}
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all cursor-pointer"
                >
                  <span>Explore Recommended Food</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Disclaimer */}
              <div className="text-center">
                <p className="text-xs text-slate-500 italic flex items-center justify-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  This result is for general guidance only.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
