import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { ProductCategory } from '../types';

interface CategoryCardProps {
  category: ProductCategory;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  onSelectCategory,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSelectCategory(category.id);
    const target = document.querySelector('#catalogue');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-forest/30 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* Category Image */}
      <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
        {!imageError ? (
          <img
            src={category.image}
            alt={category.nameEn}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-4 text-center">
            <ImageIcon className="w-8 h-8 mb-1 opacity-50" />
            <span className="text-xs font-semibold">{category.nameEn}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <h3 className="font-bold text-lg text-brand-forest leading-snug group-hover:text-brand-leaf transition-colors">
            {category.nameEn}
          </h3>
          <p className="text-xs sm:text-sm text-brand-dark/75 line-clamp-2 leading-relaxed">
            {category.shortDescEn}
          </p>
        </div>

        <button
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-forest hover:text-brand-leaf transition-colors pt-2 border-t border-gray-100"
        >
          <span>View Products</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
