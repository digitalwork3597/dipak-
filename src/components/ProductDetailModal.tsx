import React, { useState } from 'react';
import { Product, PageType } from '../types';
import { X, CheckCircle2, MapPin, Sparkles, HelpCircle, ChevronDown, PhoneCall, PackageCheck, Download } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigate: (page: PageType) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onNavigate
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!product) return null;

  const handleFindStore = () => {
    onClose();
    onNavigate('store-locator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactUs = () => {
    onClose();
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadBrochure = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>BORCELLE Product Info - ${product.name}</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; color: #1e293b; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.5; }
            .header { text-align: center; border-b: 3px solid #0F3C8A; padding-bottom: 20px; margin-bottom: 30px; }
            .logo { font-size: 28px; font-weight: 900; color: #0F3C8A; letter-spacing: 2px; }
            .tagline { color: #d97706; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-top: 4px; }
            .product-grid { display: flex; gap: 30px; margin-bottom: 30px; }
            .img-container { width: 220px; flex-shrink: 0; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 10px; text-align: center; }
            .img-container img { max-width: 100%; max-height: 220px; object-fit: contain; }
            .title { font-size: 24px; font-weight: 800; color: #0F3C8A; margin: 0 0 8px 0; }
            .badge { display: inline-block; background: #fef3c7; color: #92400e; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; }
            .section-title { font-size: 14px; font-weight: 800; text-transform: uppercase; color: #0F3C8A; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; margin-top: 24px; margin-bottom: 10px; }
            .benefits-list { padding-left: 20px; margin: 0; }
            .benefits-list li { margin-bottom: 4px; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 8px; }
            th, td { border: 1px solid #e2e8f0; padding: 8px 12px; text-align: left; }
            th { background: #f1f5f9; font-weight: 700; color: #334155; }
            .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #cbd5e1; font-size: 12px; color: #64748b; }
            @media print { body { padding: 20px; } button { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">BORCELLE</div>
            <div class="tagline">PET NUTRITION & EXCELLENCE SINCE 1984</div>
          </div>

          <div class="product-grid">
            <div class="img-container">
              <img src="${product.image}" alt="${product.name}" />
            </div>
            <div>
              <span class="badge">${product.categoryTag}</span>
              <h1 class="title">${product.name}</h1>
              <p><strong>Suitable For:</strong> ${product.suitableFor}</p>
              <p>${product.fullDescription}</p>
            </div>
          </div>

          <div class="section-title">Key Health Benefits</div>
          <ul class="benefits-list">
            ${product.keyBenefits.map((b) => `<li>✓ ${b}</li>`).join('')}
          </ul>

          <div class="section-title">Guaranteed Nutritional Analysis</div>
          <table>
            <tr><th>Crude Protein</th><td>${product.nutritionalAnalysis.crudeProtein}</td></tr>
            <tr><th>Crude Fat</th><td>${product.nutritionalAnalysis.crudeFat}</td></tr>
            <tr><th>Crude Fiber</th><td>${product.nutritionalAnalysis.crudeFiber}</td></tr>
            <tr><th>Moisture</th><td>${product.nutritionalAnalysis.moisture}</td></tr>
            <tr><th>Caloric Content</th><td>${product.nutritionalAnalysis.caloricContent}</td></tr>
          </table>

          <div class="section-title">Ingredients</div>
          <p style="font-size: 12px;">${product.ingredients.join(', ')}.</p>

          <div class="section-title">Daily Feeding Guidance</div>
          <table>
            <thead><tr><th>Pet Weight</th><th>Daily Serving Range</th></tr></thead>
            <tbody>
              ${product.feedingGuide.map((g) => `<tr><td>${g.weightKg}</td><td>${g.dailyServingGrams}</td></tr>`).join('')}
            </tbody>
          </table>

          <div class="section-title">Storage & Care Instructions</div>
          <p style="font-size: 12px;">Store in a cool, dry place away from direct sunlight. Keep sealed tightly to preserve maximum freshness.</p>

          <div class="footer">
            <p><strong>BORCELLE PET NUTRITION INFORMATION BROCHURE</strong></p>
            <p>Customer Support: +1 (800) 123-4567 | Email: support@borcellepet.com | Website: www.borcellepet.com</p>
            <p>Find an authorized retailer near you at: <em>www.borcellepet.com/store-locator</em></p>
          </div>

          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
              product.petType === 'dog' 
                ? 'bg-amber-100 text-amber-800' 
                : 'bg-sky-100 text-sky-800'
            }`}>
              {product.petType === 'dog' ? '🐶 Dog Food' : '🐱 Cat Food'}
            </span>
            <span className="text-xs font-medium text-slate-500 bg-stone-100 px-2.5 py-1 rounded-full">
              {product.categoryTag}
            </span>
            <span className="text-xs font-black bg-amber-400 text-slate-950 px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-300 shadow-2xs">
              VET RECOMMENDED
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-slate-800 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top Grid: Image + Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Product Image & Branding Badges */}
            <div className="bg-stone-50 rounded-2xl p-6 flex flex-col items-center justify-center border border-stone-100 space-y-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-xs"
                referrerPolicy="no-referrer"
              />

              {/* Official BORCELLE Packaging Seals */}
              <div className="w-full bg-white p-3.5 rounded-xl border border-stone-200/80 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 border-b border-stone-100 pb-1.5">
                  <span>BORCELLE Premium Packaging</span>
                  <span className="text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">NET WT. 2kg</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-700">
                  <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-100">
                    <span className="text-emerald-600 font-bold">🍃</span> Natural Ingredients
                  </div>
                  <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-100">
                    <span className="text-amber-600 font-bold">🧪</span> No Artificial Colors
                  </div>
                  <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-100">
                    <span className="text-sky-600 font-bold">🌿</span> No Added Preservatives
                  </div>
                  <div className="flex items-center gap-1.5 bg-stone-50 p-1.5 rounded-lg border border-stone-100">
                    <span className="text-indigo-600 font-bold">🩺</span> Vet Recommended
                  </div>
                </div>
                <p className="text-[10px] text-center text-slate-500 font-medium pt-1 italic">
                  "MADE WITH CARE. MADE FOR LOVE."
                </p>
              </div>
            </div>

            {/* Overview & Main Details */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  {product.name}
                </h2>
                {product.suitableFor && (
                  <p className="text-xs font-semibold text-amber-900 bg-amber-50 border border-amber-200 inline-block px-3 py-1 rounded-lg mt-2">
                    Suitable for: {product.suitableFor}
                  </p>
                )}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Key Benefits List */}
              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Key Health Benefits
                </h4>
                <ul className="space-y-2">
                  {product.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Storage Information */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-slate-600 flex items-start gap-2">
                <PackageCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Storage Guidance:</strong>
                  <span>Store in a cool, dry place away from direct sunlight. Reseal bag tightly after opening to preserve nutrient freshness.</span>
                </div>
              </div>

              {/* Action Buttons: Download Brochure, Find a Store, Contact Us */}
              <div className="pt-4 border-t border-stone-200 space-y-2">
                <button
                  onClick={handleDownloadBrochure}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 text-xs font-black py-3 px-4 rounded-xl shadow-xs transition-all cursor-pointer border border-amber-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Product Information (PDF Brochure)</span>
                </button>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    onClick={handleFindStore}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0F3C8A] text-white hover:bg-[#0A2E70] text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-amber-300" />
                    <span>Find a Store</span>
                  </button>

                  <button
                    onClick={handleContactUs}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-slate-900 text-xs font-bold py-3 px-4 rounded-xl border border-stone-300 transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-700" />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Guaranteed Nutritional Analysis Table */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 border border-stone-200/80 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Guaranteed Nutritional Analysis
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                <span className="block text-xs text-slate-500 font-medium">Crude Protein</span>
                <span className="text-base font-bold text-slate-900">{product.nutritionalAnalysis.crudeProtein}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                <span className="block text-xs text-slate-500 font-medium">Crude Fat</span>
                <span className="text-base font-bold text-slate-900">{product.nutritionalAnalysis.crudeFat}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                <span className="block text-xs text-slate-500 font-medium">Crude Fiber</span>
                <span className="text-base font-bold text-slate-900">{product.nutritionalAnalysis.crudeFiber}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-stone-200/60">
                <span className="block text-xs text-slate-500 font-medium">Moisture</span>
                <span className="text-base font-bold text-slate-900">{product.nutritionalAnalysis.moisture}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium pt-1">
              Caloric Content: <span className="text-slate-800 font-semibold">{product.nutritionalAnalysis.caloricContent}</span>
            </p>
          </div>

          {/* Ingredients & Feeding Guide Tabs or Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Ingredients */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Ingredient Information
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.ingredients.join(', ')}.
              </p>
              <p className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-100">
                🌿 No artificial colors, synthetic flavors, or poultry by-product meals.
              </p>
            </div>

            {/* Feeding Guide Table */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Daily Feeding Guidance
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-stone-200 text-slate-500 font-semibold">
                      <th className="pb-2">Pet Weight</th>
                      <th className="pb-2 text-right">Daily Serving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {product.feedingGuide.map((row, idx) => (
                      <tr key={idx} className="text-slate-700">
                        <td className="py-2 font-medium">{row.weightKg}</td>
                        <td className="py-2 text-right text-slate-900 font-semibold">{row.dailyServingGrams}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Product FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-2">
                {product.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="border border-stone-200 rounded-xl overflow-hidden bg-stone-50/50">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-3.5 text-xs font-semibold text-slate-800 flex items-center justify-between hover:bg-stone-100 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-3.5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-stone-200/60 bg-white">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
