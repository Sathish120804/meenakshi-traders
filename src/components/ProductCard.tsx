import React, { useState } from 'react';
import { MessageCircle, Sprout } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductCardProps {
  product: ProductItem;
  onEnquire: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-forest/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
      
      {/* Top Media & Information */}
      <div>
        {/* Product Image Frame */}
        <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center">
          {!imageError ? (
            <img
              src={product.image}
              alt={product.imageAltEn}
              className={`w-full h-full ${
                product.imageFit === 'contain'
                  ? 'object-contain p-3'
                  : 'object-cover group-hover:scale-105 transition-transform duration-500 ease-out'
              }`}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 text-gray-400 p-4 text-center">
              <Sprout className="w-10 h-10 text-gray-300 mb-1" />
              <span className="text-xs font-medium text-gray-500">
                {product.nameEn}
              </span>
            </div>
          )}

          {/* Brand Badge */}
          {product.brand && (
            <div className="absolute top-2.5 left-2.5">
              <span className="px-2.5 py-0.5 rounded bg-brand-forest text-white text-[11px] font-semibold shadow-sm">
                {product.brand}
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4 sm:p-5 space-y-2">
          <div>
            {/* Primary English Name */}
            <h3 className="font-bold text-base sm:text-lg text-brand-forest leading-snug group-hover:text-brand-leaf transition-colors">
              {product.nameEn}
            </h3>
            {/* Smaller Tamil Reference directly underneath */}
            <p className="font-tamil text-xs text-brand-earth font-medium mt-0.5">
              {product.nameTa}
            </p>
          </div>

          {/* Short English Description */}
          <p className="text-xs sm:text-sm text-brand-dark/75 line-clamp-2 leading-relaxed">
            {product.shortDescEn}
          </p>
        </div>
      </div>

      {/* Single Clear Action Button */}
      <div className="p-4 sm:p-5 pt-0">
        <button
          onClick={() => onEnquire(product)}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-[0.99]"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Enquire on WhatsApp</span>
        </button>
      </div>

    </div>
  );
};
