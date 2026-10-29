import React, { useState, useMemo } from 'react';
import { Search, X, SlidersHorizontal, PackageSearch } from 'lucide-react';
import { products } from '../data/products';
import { ProductItem } from '../types';
import { ProductCard } from './ProductCard';
import { ProductEnquiryModal } from './ProductEnquiryModal';

interface ProductCatalogueProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [enquiryProduct, setEnquiryProduct] = useState<ProductItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'cattle-feed', label: 'Cattle Feed' },
    { id: 'bran-byproducts', label: 'Bran & By-products' },
    { id: 'rice-varieties', label: 'Rice Varieties' },
    { id: 'grains-millets', label: 'Grains & Millets' },
    { id: 'oil-cakes', label: 'Oil Cakes & Feed Ingredients' },
  ];

  // Filtered and searched products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;

      if (!matchesCategory) return false;

      // Search query match
      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase().trim();
      const inTamilName = product.nameTa.toLowerCase().includes(query);
      const inEnglishName = product.nameEn.toLowerCase().includes(query);
      const inBrand = product.brand ? product.brand.toLowerCase().includes(query) : false;
      const inDescEn = product.shortDescEn.toLowerCase().includes(query);

      return inTamilName || inEnglishName || inBrand || inDescEn;
    });
  }, [activeCategory, searchQuery]);

  const handleReset = () => {
    setSearchQuery('');
    onCategoryChange('all');
  };

  return (
    <section id="catalogue" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-forest">
            Our Product Catalogue
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/75">
            Browse genuine branded cattle feeds, rice varieties, grains, millets, and oil cakes. Contact us for daily quotes and availability.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name, brand, or Tamil name (e.g. SKM, Ragi, Sorghum)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-300 bg-white text-brand-dark placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-forest focus:border-brand-forest text-sm"
              aria-label="Product Search"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          <SlidersHorizontal className="w-4 h-4 text-brand-leaf flex-shrink-0 ml-1 hidden sm:block" />
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onCategoryChange(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-forest text-white shadow-sm'
                    : 'bg-gray-50 text-brand-dark hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={(p) => setEnquiryProduct(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-gray-50 rounded-xl border border-gray-200 max-w-lg mx-auto space-y-4">
            <PackageSearch className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="font-bold text-lg text-brand-forest">
              No products found
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              We could not find any products matching your search criteria. Try a different keyword or reset filters.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-forest text-white font-semibold text-xs sm:text-sm shadow-sm hover:bg-brand-deep transition-colors"
            >
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>

      {/* Enquiry Modal */}
      {enquiryProduct && (
        <ProductEnquiryModal
          product={enquiryProduct}
          onClose={() => setEnquiryProduct(null)}
        />
      )}
    </section>
  );
};
