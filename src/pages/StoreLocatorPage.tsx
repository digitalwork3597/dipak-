import React, { useState } from 'react';
import { PageType, Store } from '../types';
import { STORES } from '../data/stores';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Building2, Compass } from 'lucide-react';

interface StoreLocatorPageProps {
  onNavigate: (page: PageType) => void;
  initialCity?: string;
  initialPincode?: string;
}

export const StoreLocatorPage: React.FC<StoreLocatorPageProps> = ({
  onNavigate,
  initialCity = '',
  initialPincode = ''
}) => {
  const [citySearch, setCitySearch] = useState(initialCity);
  const [pincodeSearch, setPincodeSearch] = useState(initialPincode);
  const [stateSearch, setStateSearch] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'dog' | 'cat' | 'vet'>('all');
  const [isLocating, setIsLocating] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');
  const [activeStore, setActiveStore] = useState<Store | null>(STORES[0]);

  const filteredStores = STORES.filter((store) => {
    const matchesCity = !citySearch.trim() || store.city.toLowerCase().includes(citySearch.trim().toLowerCase());
    const matchesPincode = !pincodeSearch.trim() || store.pincode.toLowerCase().includes(pincodeSearch.trim().toLowerCase());
    const matchesState = !stateSearch.trim() || store.state.toLowerCase().includes(stateSearch.trim().toLowerCase());

    let matchesFilter = true;
    if (filterType === 'dog') {
      matchesFilter = store.dogFoodInStock;
    } else if (filterType === 'cat') {
      matchesFilter = store.catFoodInStock;
    } else if (filterType === 'vet') {
      matchesFilter = store.name.toLowerCase().includes('clinic') || store.name.toLowerCase().includes('vet') || store.name.toLowerCase().includes('hospital');
    }

    return matchesCity && matchesPincode && matchesState && matchesFilter;
  });

  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    setLocationStatus('Locating your position...');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsLocating(false);
          setCitySearch('New York');
          setLocationStatus('📍 Located: Showing stores near your area!');
        },
        () => {
          setIsLocating(false);
          setCitySearch('New York');
          setLocationStatus('📍 Demo Location: Showing major city stockists near New York.');
        },
        { timeout: 5000 }
      );
    } else {
      setIsLocating(false);
      setCitySearch('New York');
      setLocationStatus('📍 Demo Location: Showing major city stockists.');
    }
  };

  const handleGetDirections = (store: Store) => {
    const query = encodeURIComponent(`${store.name}, ${store.address}, ${store.city}, ${store.state} ${store.pincode}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="space-y-0 text-slate-800">
      
      {/* Hero Header */}
      <section className="bg-[#FAF6F0] py-12 sm:py-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <nav className="text-xs text-slate-500 flex items-center gap-2">
            <button onClick={() => onNavigate('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Store Locator</span>
          </nav>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase border border-amber-200">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>ADVANCED RETAIL FINDER</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F3C8A]">
              Find Your Nearest BORCELLE Store
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Locate authorized veterinary clinics, specialty pet care centers, and premium stockists offering BORCELLE Dog and Cat formulas near you.
            </p>
          </div>

          {/* Search Inputs & Filter Chips */}
          <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm max-w-4xl space-y-5 mt-6">
            
            {/* Quick Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-stone-100 pb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                Filter By Type:
              </span>

              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  filterType === 'all'
                    ? 'bg-[#0F3C8A] text-white border-[#0F3C8A]'
                    : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                All Retailers ({STORES.length})
              </button>

              <button
                type="button"
                onClick={() => setFilterType('dog')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  filterType === 'dog'
                    ? 'bg-[#0F3C8A] text-white border-[#0F3C8A]'
                    : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                🐶 Dog Food Stocked
              </button>

              <button
                type="button"
                onClick={() => setFilterType('cat')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  filterType === 'cat'
                    ? 'bg-[#0F3C8A] text-white border-[#0F3C8A]'
                    : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                🐱 Cat Food Stocked
              </button>

              <button
                type="button"
                onClick={() => setFilterType('vet')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  filterType === 'vet'
                    ? 'bg-[#0F3C8A] text-white border-[#0F3C8A]'
                    : 'bg-stone-50 text-slate-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                🏥 Vet Clinics
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Search by City</label>
                <input
                  type="text"
                  placeholder="e.g. New York, London"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#0F3C8A] bg-stone-50 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Search by State / Region</label>
                <input
                  type="text"
                  placeholder="e.g. NY, CA, IL"
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#0F3C8A] bg-stone-50 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Search by Pincode</label>
                <input
                  type="text"
                  placeholder="e.g. 10017, 90210"
                  value={pincodeSearch}
                  onChange={(e) => setPincodeSearch(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#0F3C8A] bg-stone-50 font-medium"
                />
              </div>
            </div>

            {/* Action Buttons & Counter */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                disabled={isLocating}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-slate-900" />
                <span>{isLocating ? 'Locating...' : 'Use My Current Location'}</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-600 font-medium">
                  Showing <strong>{filteredStores.length}</strong> verified locations
                </span>
                {(citySearch || stateSearch || pincodeSearch || filterType !== 'all') && (
                  <button
                    onClick={() => { setCitySearch(''); setStateSearch(''); setPincodeSearch(''); setFilterType('all'); setLocationStatus(''); }}
                    className="text-xs font-bold text-[#0F3C8A] underline cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {locationStatus && (
              <p className="text-xs font-bold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200">
                {locationStatus}
              </p>
            )}

          </div>

        </div>
      </section>

      {/* Main Interactive Grid: Map View + Store Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Store List Col (5 cols) */}
            <div className="lg:col-span-5 space-y-4 max-h-[750px] overflow-y-auto pr-1">
              {filteredStores.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                  <p className="text-slate-600 text-sm font-medium">No stores found matching your criteria.</p>
                  <p className="text-xs text-slate-500">Try searching for a major city name like "New York", "Chicago", or "Los Angeles".</p>
                </div>
              ) : (
                filteredStores.map((store) => {
                  const isSelected = activeStore?.id === store.id;
                  return (
                    <div
                      key={store.id}
                      onClick={() => setActiveStore(store)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                        isSelected 
                          ? 'border-[#0F3C8A] bg-amber-50/50 shadow-md ring-2 ring-amber-200' 
                          : 'border-stone-200 bg-white hover:border-amber-300 hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#0F3C8A] shrink-0" />
                          <span>{store.name}</span>
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-slate-700 shrink-0">
                          {store.city}, {store.state}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span>{store.address}, {store.pincode}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{store.phone}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{store.openingHours}</span>
                        </p>
                      </div>

                      {/* Stock availability */}
                      <div className="flex items-center gap-2 pt-1 text-[11px] font-medium flex-wrap">
                        {store.dogFoodInStock && (
                          <span className="flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Dog Food Available
                          </span>
                        )}
                        {store.catFoodInStock && (
                          <span className="flex items-center gap-1 text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Cat Food Available
                          </span>
                        )}
                      </div>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); handleGetDirections(store); }}
                          className="w-full bg-[#0F3C8A] hover:bg-[#0A2E70] text-white text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                        >
                          <Navigation className="w-3.5 h-3.5 text-amber-300" />
                          <span>Get Directions</span>
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Map Visualizer Col (7 cols) */}
            <div className="lg:col-span-7 bg-stone-100 rounded-3xl border border-stone-200 p-6 min-h-[550px] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-amber-100/30 via-slate-100/40 to-stone-200/60 -z-0" />
              
              {/* Map Header Overlay */}
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-stone-200 shadow-xs flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {activeStore ? activeStore.name : 'Select a store location'}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {activeStore ? `${activeStore.address}, ${activeStore.city}, ${activeStore.state}` : 'Click any store card to focus on map'}
                  </p>
                </div>
                {activeStore && (
                  <button
                    type="button"
                    onClick={() => handleGetDirections(activeStore)}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Open Maps</span>
                  </button>
                )}
              </div>

              {/* Vector Map Pins Visualizer */}
              <div className="relative z-10 my-8 py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-amber-200/50 animate-ping absolute inset-0" />
                  <div className="w-20 h-20 rounded-full bg-[#0F3C8A] text-amber-300 flex items-center justify-center relative shadow-xl">
                    <MapPin className="w-10 h-10" />
                  </div>
                </div>

                <div className="bg-white/95 p-4 rounded-2xl border border-stone-200 shadow-xs max-w-sm">
                  <span className="text-xs font-bold text-slate-900 block">BORCELLE Retail Location Pin</span>
                  <span className="text-xs text-slate-600 block mt-1">
                    {activeStore ? `Latitude: ${activeStore.latitude} | Longitude: ${activeStore.longitude}` : 'Select a store from the left column'}
                  </span>
                </div>
              </div>

              {/* Map Footer Action */}
              <div className="relative z-10 bg-[#0F3C8A] text-white p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold block">Can't find a store in your area?</span>
                  <span className="text-blue-100">Contact our pet care team to locate independent stockists.</span>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Contact Support
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
