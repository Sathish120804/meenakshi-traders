import React, { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedBrands } from './components/FeaturedBrands';
import { ProductCatalogue } from './components/ProductCatalogue';
import { WholesaleSection } from './components/WholesaleSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileActionBar } from './components/MobileActionBar';

export const MainContent: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream/20 text-brand-dark selection:bg-brand-leaf selection:text-white">
      {/* 1. Compact Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Cattle-feed-focused Hero with 3 Business Highlights */}
        <Hero />

        {/* 3. Five Product Categories */}
        <CategoriesSection onSelectCategory={handleSelectCategory} />

        {/* 4. Compact Featured Brand Strip */}
        <FeaturedBrands />

        {/* 5. Main Searchable Product Catalogue */}
        <ProductCatalogue
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* 6. Wholesale & Retail Enquiry Section */}
        <WholesaleSection />

        {/* 7. Short About Us Section */}
        <AboutSection />

        {/* 8. Team and Contact Section */}
        <ContactSection />

        {/* 9. Map / Location Section */}
        <LocationSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Fixed Bottom Action Bar for Mobile Viewports */}
      <MobileActionBar />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
      <SpeedInsights />
    </LanguageProvider>
  );
};

export default App;
