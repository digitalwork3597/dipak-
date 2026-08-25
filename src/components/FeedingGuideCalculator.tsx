import React, { useState } from 'react';
import { PetType } from '../types';
import { PRODUCTS } from '../data/products';
import { Scale, Dog, Cat, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export const FeedingGuideCalculator: React.FC = () => {
  const [petType, setPetType] = useState<PetType>('dog');
  const [ageGroup, setAgeGroup] = useState<string>('adult');
  const [weightKg, setWeightKg] = useState<number>(10);
  const [activityLevel, setActivityLevel] = useState<string>('normal');
  const [selectedProductId, setSelectedProductId] = useState<string>('dog-adult-food');

  const [result, setResult] = useState<{
    dailyRangeGrams: string;
    suggestedMeals: string;
    cupsEstimate: string;
    guidanceTip: string;
  } | null>(null);

  // Filter products by petType
  const filteredProducts = PRODUCTS.filter((p) => p.petType === petType);

  const handlePetTypeChange = (type: PetType) => {
    setPetType(type);
    const firstProd = PRODUCTS.find((p) => p.petType === type);
    if (firstProd) setSelectedProductId(firstProd.id);
    if (type === 'cat' && weightKg > 10) setWeightKg(4);
    if (type === 'dog' && weightKg < 2) setWeightKg(10);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    let baseGramsPerKg = petType === 'dog' ? 18 : 15;

    if (ageGroup === 'puppy_kitten') {
      baseGramsPerKg *= 1.4;
    } else if (ageGroup === 'senior') {
      baseGramsPerKg *= 0.85;
    }

    if (activityLevel === 'low') {
      baseGramsPerKg *= 0.85;
    } else if (activityLevel === 'high') {
      baseGramsPerKg *= 1.25;
    }

    const calculatedGrams = Math.round(weightKg * baseGramsPerKg);
    const minGrams = Math.max(20, Math.round(calculatedGrams * 0.9));
    const maxGrams = Math.round(calculatedGrams * 1.1);

    const cups = (calculatedGrams / 110).toFixed(1);

    let meals = '2 meals per day (Morning & Evening)';
    if (ageGroup === 'puppy_kitten') {
      meals = '3 to 4 small meals per day';
    }

    setResult({
      dailyRangeGrams: `${minGrams}g - ${maxGrams}g per day`,
      suggestedMeals: meals,
      cupsEstimate: `Approx. ${cups} standard cup(s) per day`,
      guidanceTip: 'Split the total daily quantity evenly into scheduled meals. Ensure fresh, clean drinking water is accessible at all times.',
    });
  };

  return (
    <section id="feeding-guide-calculator" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0F3C8A] px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-blue-100">
            <Scale className="w-3.5 h-3.5 text-[#0F3C8A]" />
            <span>DAILY PORTION ESTIMATOR</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
            Find a General Feeding Guide
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Enter your pet’s details to view an estimated daily feeding range.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm max-w-2xl mx-auto">
          <form onSubmit={handleCalculate} className="space-y-6">
            
            {/* 1. Dog or Cat */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Select Pet Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handlePetTypeChange('dog')}
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
                  onClick={() => handlePetTypeChange('cat')}
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

            {/* 2. Age & Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Pet Life Stage
                </label>
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0F3C8A] focus:outline-none"
                >
                  <option value="puppy_kitten">{petType === 'dog' ? 'Puppy (2-12m)' : 'Kitten (Up to 12m)'}</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior (7+ yrs)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Pet Weight (kg)
                </label>
                <input
                  type="number"
                  min={0.5}
                  max={90}
                  step={0.5}
                  required
                  value={weightKg}
                  onChange={(e) => setWeightKg(parseFloat(e.target.value) || 1)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0F3C8A] focus:outline-none"
                />
              </div>
            </div>

            {/* 3. Activity Level & Product Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  4. Activity Level
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0F3C8A] focus:outline-none"
                >
                  <option value="low">Low Activity / Mainly Indoor</option>
                  <option value="normal">Normal Daily Activity</option>
                  <option value="high">Highly Active / Sporting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  5. Selected BORCELLE Product
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-[#0F3C8A] focus:outline-none"
                >
                  {filteredProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F3C8A] hover:bg-[#0A2E70] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Scale className="w-4 h-4" />
              <span>Calculate Feeding Guide</span>
            </button>
          </form>

          {/* Results Display */}
          {result && (
            <div className="mt-8 pt-8 border-t border-slate-200 space-y-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-xs space-y-4">
                
                <div className="flex items-center gap-2 text-[#0F3C8A] font-extrabold text-sm uppercase tracking-wider border-b border-stone-100 pb-2">
                  <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span>Estimated Daily Feeding Result</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-100">
                    <span className="text-xs font-bold text-amber-900 uppercase block mb-1">
                      Estimated Daily Range
                    </span>
                    <p className="text-2xl font-black text-[#0F3C8A]">
                      {result.dailyRangeGrams}
                    </p>
                    <span className="text-xs text-slate-500 mt-1 block">
                      {result.cupsEstimate}
                    </span>
                  </div>

                  <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                    <span className="text-xs font-bold text-blue-900 uppercase block mb-1">
                      Suggested Meal Frequency
                    </span>
                    <p className="text-base font-bold text-slate-900 flex items-center gap-1.5 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      {result.suggestedMeals}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  💡 <strong>Feeding Tip:</strong> {result.guidanceTip}
                </p>

              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3 text-xs text-amber-900">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Important Note:</strong> This calculator provides a general estimate only. Actual feeding needs may vary based on age, health, activity, body condition, and product instructions. Consult a veterinarian for personalized advice.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
