import React, { useState } from 'react';
import { PageType, Product, PetType } from '../types';
import { PRODUCTS } from '../data/products';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  RotateCcw, 
  Store, 
  Eye, 
  ShieldAlert,
  Dog,
  Cat
} from 'lucide-react';

interface PetFoodFinderQuizProps {
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageType) => void;
}

export const PetFoodFinderQuiz: React.FC<PetFoodFinderQuizProps> = ({
  onSelectProduct,
  onNavigate,
}) => {
  const [step, setStep] = useState<number>(1);
  const [petType, setPetType] = useState<PetType>('dog');
  const [ageGroup, setAgeGroup] = useState<string>('adult');
  const [sizeOrEnv, setSizeOrEnv] = useState<string>('medium');
  const [activityLevel, setActivityLevel] = useState<string>('normal');
  const [specialNeed, setSpecialNeed] = useState<string>('none');
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      calculateResult();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const calculateResult = () => {
    // Filter products based on selected parameters
    let matched = PRODUCTS.filter((p) => p.petType === petType);

    if (petType === 'cat' && specialNeed === 'hairball') {
      const hairballMatch = matched.find((p) => p.id === 'cat-hairball-care');
      if (hairballMatch) {
        setRecommendedProduct(hairballMatch);
        setStep(6);
        return;
      }
    }

    if (specialNeed === 'sensitive') {
      const sensitiveMatch = matched.find((p) => p.id === 'cat-sensitive-care' || p.id === 'dog-senior-food');
      if (sensitiveMatch) {
        setRecommendedProduct(sensitiveMatch);
        setStep(6);
        return;
      }
    }

    // Match age group
    if (ageGroup === 'puppy_kitten') {
      const puppyMatch = matched.find((p) => p.lifeStage === 'puppy' || p.lifeStage === 'kitten');
      if (puppyMatch) matched = [puppyMatch];
    } else if (ageGroup === 'senior') {
      const seniorMatch = matched.find((p) => p.lifeStage === 'senior');
      if (seniorMatch) matched = [seniorMatch];
    } else if (petType === 'dog') {
      if (sizeOrEnv === 'small') {
        const smallMatch = matched.find((p) => p.id === 'dog-small-breed-food');
        if (smallMatch) matched = [smallMatch];
      } else if (sizeOrEnv === 'large') {
        const largeMatch = matched.find((p) => p.id === 'dog-large-breed-food');
        if (largeMatch) matched = [largeMatch];
      } else if (activityLevel === 'high') {
        const activeMatch = matched.find((p) => p.id === 'dog-active-food');
        if (activeMatch) matched = [activeMatch];
      }
    } else if (petType === 'cat') {
      if (sizeOrEnv === 'indoor') {
        const indoorMatch = matched.find((p) => p.id === 'cat-indoor-food');
        if (indoorMatch) matched = [indoorMatch];
      }
    }

    // Fallback to first matched or default adult
    const finalProduct = matched[0] || PRODUCTS.find((p) => p.petType === petType) || PRODUCTS[0];
    setRecommendedProduct(finalProduct);
    setStep(6); // Step 6 = Result step
  };

  const resetQuiz = () => {
    setStep(1);
    setPetType('dog');
    setAgeGroup('adult');
    setSizeOrEnv('medium');
    setActivityLevel('normal');
    setSpecialNeed('none');
    setRecommendedProduct(null);
  };

  return (
    <section id="pet-food-finder" className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/60 via-amber-50/30 to-white relative overflow-hidden border-b border-amber-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>PERSONALIZED PET NUTRITION</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
            Find the Right Food for Your Pet
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Answer a few simple questions to explore BORCELLE nutrition options that may suit your pet’s life stage and needs.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200 relative overflow-hidden">
          
          {/* Progress Bar (Only during steps 1-5) */}
          {step <= totalSteps && (
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
                <span>Step {step} of {totalSteps}</span>
                <span>{Math.round((step / totalSteps) * 100)}% Completed</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-amber-400 to-[#0F3C8A] h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Pet Type */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
                Who are you shopping information for?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2">
                
                {/* Dog Card */}
                <button
                  type="button"
                  onClick={() => setPetType('dog')}
                  className={`p-6 sm:p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 text-center cursor-pointer ${
                    petType === 'dog'
                      ? 'border-[#0F3C8A] bg-blue-50/80 shadow-md ring-2 ring-[#0F3C8A]/20'
                      : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${petType === 'dog' ? 'bg-[#0F3C8A] text-white' : 'bg-amber-100 text-amber-800'}`}>
                    <Dog className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-slate-900 block">🐶 Dog</span>
                    <span className="text-xs text-slate-500 mt-1 block">Puppies, Adult & Senior Dogs</span>
                  </div>
                </button>

                {/* Cat Card */}
                <button
                  type="button"
                  onClick={() => setPetType('cat')}
                  className={`p-6 sm:p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 text-center cursor-pointer ${
                    petType === 'cat'
                      ? 'border-[#0F3C8A] bg-blue-50/80 shadow-md ring-2 ring-[#0F3C8A]/20'
                      : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${petType === 'cat' ? 'bg-[#0F3C8A] text-white' : 'bg-amber-100 text-amber-800'}`}>
                    <Cat className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-slate-900 block">🐱 Cat</span>
                    <span className="text-xs text-slate-500 mt-1 block">Kittens, Indoor & Outdoor Cats</span>
                  </div>
                </button>

              </div>
            </div>
          )}

          {/* STEP 2: Pet Age */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
                What is your pet’s age?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'puppy_kitten', label: petType === 'dog' ? 'Puppy (2-12 Months)' : 'Kitten (Up to 12 Months)', desc: 'Rapid growth & active learning' },
                  { id: 'young_adult', label: 'Young Adult (1 - 3 Years)', desc: 'High energy & vibrant lifestyle' },
                  { id: 'adult', label: 'Adult (3 - 7 Years)', desc: 'Balanced daily energy & maintenance' },
                  { id: 'senior', label: 'Senior (7+ Years)', desc: 'Gentle digestion & joint comfort' },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setAgeGroup(option.id)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      ageGroup === option.id
                        ? 'border-[#0F3C8A] bg-blue-50/80 ring-2 ring-[#0F3C8A]/20 shadow-sm'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-base">{option.label}</span>
                      {ageGroup === option.id && <CheckCircle2 className="w-5 h-5 text-[#0F3C8A]" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{option.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Size (Dog) or Environment (Cat) */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
                {petType === 'dog' ? 'What is your dog’s size?' : 'Is your cat mainly indoor or active outdoors?'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {petType === 'dog' ? (
                  [
                    { id: 'small', label: 'Small Breed', desc: 'Under 10 kg (Toy & Mini)' },
                    { id: 'medium', label: 'Medium Breed', desc: '10 kg - 25 kg' },
                    { id: 'large', label: 'Large Breed', desc: 'Over 25 kg (Giant & Work)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSizeOrEnv(opt.id)}
                      className={`p-5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        sizeOrEnv === opt.id
                          ? 'border-[#0F3C8A] bg-blue-50/80 ring-2 ring-[#0F3C8A]/20 shadow-sm'
                          : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-bold text-slate-900 text-base block">{opt.label}</span>
                      <span className="text-xs text-slate-500 mt-1 block">{opt.desc}</span>
                    </button>
                  ))
                ) : (
                  [
                    { id: 'indoor', label: 'Indoor', desc: 'Mainly relaxed indoors' },
                    { id: 'active', label: 'Active Outdoor', desc: 'Loves exploring outside' },
                    { id: 'both', label: 'Both', desc: 'Balanced indoor/outdoor time' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSizeOrEnv(opt.id)}
                      className={`p-5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                        sizeOrEnv === opt.id
                          ? 'border-[#0F3C8A] bg-blue-50/80 ring-2 ring-[#0F3C8A]/20 shadow-sm'
                          : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-bold text-slate-900 text-base block">{opt.label}</span>
                      <span className="text-xs text-slate-500 mt-1 block">{opt.desc}</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}

          {/* STEP 4: Activity Level */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
                What is your pet’s activity level?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'low', label: 'Low Activity', desc: 'Loves long naps & cozy indoor lounging' },
                  { id: 'normal', label: 'Normal Activity', desc: 'Daily walks, playtime, normal energy' },
                  { id: 'high', label: 'Highly Active', desc: 'Agile, sporting, or nonstop play' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setActivityLevel(opt.id)}
                    className={`p-5 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                      activityLevel === opt.id
                        ? 'border-[#0F3C8A] bg-blue-50/80 ring-2 ring-[#0F3C8A]/20 shadow-sm'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-slate-900 text-base block">{opt.label}</span>
                    <span className="text-xs text-slate-500 mt-1 block">{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Special Needs */}
          {step === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
                Does your pet have any special nutrition needs?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'sensitive', label: 'Sensitive Digestion', desc: 'Requires gentle, single-protein or prebiotic ingredients' },
                  { id: 'hairball', label: 'Hairball Care', desc: 'Targeted fiber blend to gently pass hairballs' },
                  { id: 'weight', label: 'Healthy Weight Support', desc: 'Controlled calories & high fiber for satiety' },
                  { id: 'none', label: 'No Special Need', desc: 'Standard complete daily maintenance' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSpecialNeed(opt.id)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                      specialNeed === opt.id
                        ? 'border-[#0F3C8A] bg-blue-50/80 ring-2 ring-[#0F3C8A]/20 shadow-sm'
                        : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-base">{opt.label}</span>
                      {specialNeed === opt.id && <CheckCircle2 className="w-5 h-5 text-[#0F3C8A]" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Action Buttons (Steps 1-5) */}
          {step <= totalSteps && (
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  step === 1
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-[#0F3C8A] hover:bg-[#0A2E70] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{step === totalSteps ? 'See My Results' : 'Next'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 6: RESULT CARD */}
          {step === 6 && recommendedProduct && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Your Personalized Match
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Recommended Nutrition Option
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  Based on your answers, <strong className="text-[#0F3C8A]">{recommendedProduct.name}</strong> may be a suitable option to explore.
                </p>
              </div>

              {/* Product Match Card */}
              <div className="bg-gradient-to-br from-amber-50/50 via-blue-50/30 to-white rounded-2xl p-6 border border-stone-200 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-sm">
                <div className="w-40 sm:w-48 h-48 sm:h-52 bg-white rounded-2xl p-3 border border-stone-200 flex-shrink-0 flex items-center justify-center shadow-inner">
                  <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="max-h-full max-w-full object-contain drop-shadow"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-3 text-center md:text-left grow">
                  <span className="inline-block bg-[#0F3C8A] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {recommendedProduct.categoryTag}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900">{recommendedProduct.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{recommendedProduct.shortDescription}</p>
                  
                  <div>
                    <span className="text-xs font-bold text-slate-700 block mb-1.5">Key Nutrition Benefits:</span>
                    <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                      {recommendedProduct.keyBenefits.map((b, i) => (
                        <span key={i} className="bg-white border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded-lg font-medium shadow-2xs">
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectProduct(recommendedProduct)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F3C8A] hover:bg-[#0A2E70] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Product Details</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('store-locator')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-all cursor-pointer"
                >
                  <Store className="w-4 h-4" />
                  <span>Find a Store</span>
                </button>

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Quiz</span>
                </button>
              </div>

              {/* Mandatory Veterinary Disclaimer Note */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-3 text-xs text-amber-900 mt-4">
                <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Note:</strong> This tool provides general product information and is not veterinary advice. Consult a veterinarian for personalized nutrition guidance.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
