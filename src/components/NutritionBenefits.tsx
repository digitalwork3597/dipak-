import React from 'react';
import { Bone, BicepsFlexed, Sparkles, ShieldCheck, Leaf, Zap } from 'lucide-react';

export const NutritionBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Bone,
      iconBg: 'bg-amber-100 text-amber-800',
      title: 'Strong Bones',
      description: 'Balanced nutrition to support healthy bones and teeth.',
    },
    {
      icon: BicepsFlexed,
      iconBg: 'bg-blue-100 text-[#0F3C8A]',
      title: 'Healthy Muscles',
      description: 'Nutrition designed to support strength and muscle maintenance.',
    },
    {
      icon: Sparkles,
      iconBg: 'bg-yellow-100 text-yellow-800',
      title: 'Healthy Skin and Coat',
      description: 'Essential nutrients that support healthy skin and a shiny coat.',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-100 text-emerald-800',
      title: 'Immune Support',
      description: 'Balanced nutrition to support everyday wellbeing.',
    },
    {
      icon: Leaf,
      iconBg: 'bg-green-100 text-green-800',
      title: 'Healthy Digestion',
      description: 'Thoughtfully selected ingredients to support digestive health.',
    },
    {
      icon: Zap,
      iconBg: 'bg-sky-100 text-sky-800',
      title: 'Daily Energy',
      description: 'Balanced nutrition to support an active lifestyle.',
    },
  ];

  return (
    <section id="nutrition-benefits" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>EVERYDAY WELLNESS</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
            What Does Every Bowl Support?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Every Borcelle recipe is thoughtfully formulated to deliver comprehensive physical, metabolic, and digestive health benefits.
          </p>
        </div>

        {/* 6 Clean Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start gap-4 group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${benefit.iconBg}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0F3C8A] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
