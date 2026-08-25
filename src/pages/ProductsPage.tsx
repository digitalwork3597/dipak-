import React, { useState } from 'react';
import { PageType, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ArrowRight, CheckCircle2, Search, Filter } from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onSelectProduct }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [petFilter, setPetFilter] = useState<'all' | 'dog' | 'cat'>('all');

  const filteredProducts = PRODUCTS.filter(prod => {
    const matchesPet = petFilter === 'all' || prod.petType === petFilter;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.categoryTag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPet && matchesSearch;
  });

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* Hero */}
      <section className="bg-[#FAF6F0] py-12 sm:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Products</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            BORCELLE Pet Nutrition Catalog
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            Explore our complete range of carefully formulated recipes for dogs and cats. Click any product to view full ingredients, nutritional analysis, and feeding guidelines.
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 max-w-2xl">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search formulas (e.g. Chicken, Salmon, Senior, Puppy)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-3 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
              />
            </div>

            <div className="flex items-center gap-1 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setPetFilter('all')}
                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  petFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-white border border-stone-300 text-slate-700 hover:bg-stone-100'
                }`}
              >
                All Pets
              </button>
              <button
                onClick={() => setPetFilter('dog')}
                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  petFilter === 'dog' ? 'bg-amber-100 text-amber-900 border border-amber-200' : 'bg-white border border-stone-300 text-slate-700 hover:bg-stone-100'
                }`}
              >
                🐶 Dogs
              </button>
              <button
                onClick={() => setPetFilter('cat')}
                className={`px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  petFilter === 'cat' ? 'bg-sky-100 text-sky-900 border border-sky-200' : 'bg-white border border-stone-300 text-slate-700 hover:bg-stone-100'
                }`}
              >
                🐱 Cats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong className="text-slate-900">{filteredProducts.length}</strong> formulas</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200 space-y-3">
              <p className="text-slate-600 text-sm font-medium">No formulas found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setPetFilter('all'); }}
                className="text-xs text-amber-700 font-bold underline"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-5 space-y-4">
                    <div className="relative h-48 rounded-xl overflow-hidden bg-stone-50 border border-stone-100 flex items-center justify-center p-2">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-contain rounded-lg"
                        referrerPolicy="no-referrer"
                      />
                      <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        prod.petType === 'dog' ? 'bg-amber-100 text-amber-900' : 'bg-sky-100 text-sky-900'
                      }`}>
                        {prod.categoryTag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
                      {prod.name}
                    </h3>

                    <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                      {prod.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {prod.keyBenefits.slice(0, 3).map((ben, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{ben}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-stone-100 mt-2">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="w-full mt-3 bg-stone-100 hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
