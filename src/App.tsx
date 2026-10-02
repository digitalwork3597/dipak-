import { useState, useEffect, useRef } from 'react';
import { PageType, Product, BlogPost } from './types';
import { trackPageView } from './utils/analytics';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { BlogDetailModal } from './components/BlogDetailModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickActionBar } from './components/MobileQuickActionBar';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DogFoodPage } from './pages/DogFoodPage';
import { CatFoodPage } from './pages/CatFoodPage';
import { ProductsPage } from './pages/ProductsPage';
import { StoreLocatorPage } from './pages/StoreLocatorPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [storeSearchCity, setStoreSearchCity] = useState('');
  const [storeSearchPincode, setStoreSearchPincode] = useState('');

  const isFirstRender = useRef(true);

  // Track page views on route / page changes
  useEffect(() => {
    const pageTitleMap: Record<PageType, string> = {
      'home': 'BORCELLE - Premium Nutrition. Happier Pets.',
      'about': 'About Us - BORCELLE Pet Food',
      'dog-food': 'Premium Dog Food & Nutrition - BORCELLE',
      'cat-food': 'Premium Cat Food & Nutrition - BORCELLE',
      'products': 'Complete Pet Nutrition Range - BORCELLE',
      'store-locator': 'Find Stores Near You - BORCELLE',
      'blogs': 'Pet Care Articles & Nutrition Guides - BORCELLE',
      'contact': 'Contact Us & Pet Care Support - BORCELLE',
    };

    const title = pageTitleMap[currentPage] || `BORCELLE - ${currentPage}`;
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;

    document.title = title;

    // Skip the first render because the official script in index.html already fires the initial pageview
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    trackPageView(path, title);
  }, [currentPage]);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeStoreSearch = (city: string, pincode: string) => {
    setStoreSearchCity(city);
    setStoreSearchPincode(pincode);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans antialiased selection:bg-amber-200 selection:text-slate-900 pb-16 sm:pb-0">
      
      {/* Sticky Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page View Content */}
      <main className="grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onSelectBlog={(b) => setSelectedBlog(b)}
            onStoreSearch={handleHomeStoreSearch}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'dog-food' && (
          <DogFoodPage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'cat-food' && (
          <CatFoodPage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'store-locator' && (
          <StoreLocatorPage
            onNavigate={handleNavigate}
            initialCity={storeSearchCity}
            initialPincode={storeSearchPincode}
          />
        )}

        {currentPage === 'blogs' && (
          <BlogsPage
            onNavigate={handleNavigate}
            onSelectBlog={(b) => setSelectedBlog(b)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNavigate={handleNavigate}
      />

      {/* Blog Article Reader Modal */}
      <BlogDetailModal
        blog={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      {/* Floating WhatsApp Support Button */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Bottom Quick Action Bar */}
      <MobileQuickActionBar currentPage={currentPage} onNavigate={handleNavigate} />

    </div>
  );
}
