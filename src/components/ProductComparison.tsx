import React, { useState } from 'react';
import { PageType, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Sparkles, Eye, Store, Check, Plus, X } from 'lucide-react';

interface ProductComparisonProps {
  onSelectProduct: (product: Product) => void;
  onNavigate: (page: PageType) => void;
}

export const ProductComparison: React.FC<ProductComparisonProps> = ({
  onSelectProduct,
  onNavigate,
}) => {
  // Pre-selected default 3 products for comparison
  const [selectedIds, setSelectedIds] = useState<string[]>([
    'dog-puppy-food',
    'dog-adult-food',
    'dog-senior-food',
  ]);

  const selectedProducts = selectedIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);

  const toggleSelectProduct = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((pId) => pId !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        // Replace last one if already 3 selected
        setSelectedIds([selectedIds[0], selectedIds[1], id]);
      }
    }
  };

  return (
    <section id="compare-products" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            <span>SIDE-BY-SIDE EVALUATION</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3C8A] tracking-tight">
            Compare BORCELLE Products
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Compare product categories and explore the right option for your pet. Select up to 3 recipes to compare.
          </p>
        </div>

        {/* Product Selection Chips */}
        <div className="mb-10 bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
            Select Up to 3 Products to Compare ({selectedIds.length}/3 selected):
          </div>
          <div className="flex flex-wrap gap-2">
            {PRODUCTS.map((prod) => {
              const isSelected = selectedIds.includes(prod.id);
              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => toggleSelectProduct(prod.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#0F3C8A] text-white border-[#0F3C8A] shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isSelected ? <X className="w-3.5 h-3.5 text-amber-300" /> : <Plus className="w-3.5 h-3.5" />}
                  <span>{prod.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* DESKTOP COMPARISON TABLE */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-3xl border border-stone-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 bg-slate-50/80">
                <th className="p-6 text-xs font-black text-slate-500 uppercase tracking-wider w-1/4">
                  Feature / Recipe
                </th>
                {selectedProducts.map((p) => (
                  <th key={p.id} className="p-6 text-center w-1/4 border-l border-stone-200">
                    <div className="space-y-3">
                      <div className="w-28 h-28 mx-auto bg-slate-50 rounded-xl p-2 border border-stone-200 flex items-center justify-center">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="max-h-full max-w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-900 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase mb-1">
                          {p.categoryTag}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">{p.name}</h4>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-sm">
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Pet Type</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 text-center font-medium text-slate-800 border-l border-stone-200 capitalize">
                    {p.petType === 'dog' ? '🐶 Dog' : '🐱 Cat'}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Life Stage</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 text-center font-medium text-slate-800 border-l border-stone-200 capitalize">
                    {p.lifeStage}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Suitable For</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 text-center text-xs font-semibold text-slate-700 border-l border-stone-200">
                    {p.suitableFor}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Digestion Support</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 text-center border-l border-stone-200">
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs bg-emerald-50 px-2.5 py-1 rounded-full">
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Gentle Prebiotics
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Energy Support</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 text-center border-l border-stone-200">
                    <span className="inline-flex items-center gap-1 text-blue-700 font-bold text-xs bg-blue-50 px-2.5 py-1 rounded-full">
                      <Check className="w-3.5 h-3.5 text-blue-600" /> Balanced Calories
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Skin & Coat Care</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 text-center border-l border-stone-200">
                    <span className="inline-flex items-center gap-1 text-amber-800 font-bold text-xs bg-amber-50 px-2.5 py-1 rounded-full">
                      <Check className="w-3.5 h-3.5 text-amber-600" /> Omega 3 & 6
                    </span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Special Focus</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 text-center text-xs font-bold text-[#0F3C8A] border-l border-stone-200">
                    {p.categoryTag}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900 bg-slate-50/50">Actions</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-5 border-l border-stone-200">
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(p)}
                        className="w-full bg-[#0F3C8A] hover:bg-[#0A2E70] text-white py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onNavigate('store-locator')}
                        className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Store className="w-3.5 h-3.5" />
                        <span>Find Store</span>
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* MOBILE STACKED CARDS COMPARISON */}
        <div className="md:hidden space-y-6">
          {selectedProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <div className="w-20 h-20 bg-slate-50 rounded-xl p-2 border border-stone-200 shrink-0 flex items-center justify-center">
                  <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="inline-block bg-amber-100 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full uppercase mb-1">
                    {p.categoryTag}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{p.name}</h4>
                  <p className="text-xs text-slate-500">{p.suitableFor}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl">
                  <span className="text-slate-400 font-bold block">Pet Type</span>
                  <span className="font-bold text-slate-800 capitalize">{p.petType}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl">
                  <span className="text-slate-400 font-bold block">Life Stage</span>
                  <span className="font-bold text-slate-800 capitalize">{p.lifeStage}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl">
                  <span className="text-slate-400 font-bold block">Digestion</span>
                  <span className="font-bold text-emerald-700">✓ Gentle Prebiotics</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl">
                  <span className="text-slate-400 font-bold block">Skin & Coat</span>
                  <span className="font-bold text-amber-800">✓ Omega 3 & 6</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectProduct(p)}
                  className="flex-1 bg-[#0F3C8A] text-white py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" /> Details
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('store-locator')}
                  className="flex-1 bg-amber-400 text-slate-900 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1"
                >
                  <Store className="w-3.5 h-3.5" /> Find Store
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
