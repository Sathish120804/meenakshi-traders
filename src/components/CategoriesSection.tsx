import React from 'react';
import { categories } from '../data/categories';
import { CategoryCard } from './CategoryCard';

interface CategoriesSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-14 sm:py-20 bg-brand-rice border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-forest">
            Product Categories
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/75">
            Explore our core agricultural product lines curated for livestock, dairy, and commercial trading.
          </p>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelectCategory={onSelectCategory}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
