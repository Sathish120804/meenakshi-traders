import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FeaturedBrands: React.FC = () => {
  const brands = [
    {
      id: 'knc',
      name: 'KNC Krishi Nutrition',
      feedTypes: 'Mash • Pellets • Mineral Mix',
      image: '/images/knc-cattle-feed.jpg',
    },
    {
      id: 'skm',
      name: 'SKM',
      feedTypes: 'Pellets • Mash • Calf Feed',
      image: '/images/skm-cattle-feed.png',
    },
    {
      id: 'ks',
      name: 'KS / KSE',
      feedTypes: 'Mash • Pellets • Mineral Mix',
      image: '/images/ks-cattle-feed.webp',
    },
    {
      id: 'santhi',
      name: 'Santhi',
      feedTypes: 'Mash • Pellets • High Yield Feed',
      image: '/images/santhi-cattle-feed-pkg.jpg',
    },
  ];

  const getBrandEnquiryUrl = (brandName: string) => {
    return buildWhatsAppUrl(
      siteConfig.contacts[0].whatsappNumber,
      `Hello Meenakshi Traders, I would like to enquire about ${brandName} cattle feed availability and current pricing.`
    );
  };

  return (
    <section id="brands" className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-forest">
            Branded Cattle Feeds
          </h2>
          <p className="text-sm text-brand-dark/75">
            Trusted cattle feed brands stocked and supplied by Meenakshi Traders for dairy farmers and retailers.
          </p>
        </div>

        {/* 4 Compact Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-forest/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Brand Visual Media */}
                <div className="h-36 bg-gray-50/70 border-b border-gray-100 flex items-center justify-center p-3 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={`${brand.name} cattle feed`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      if (brand.id === 'santhi') {
                        e.currentTarget.src = '/images/santhi-cattle-feed.jpg';
                      }
                    }}
                  />
                </div>

                <div className="p-4 space-y-1.5 text-center sm:text-left">
                  <h3 className="font-bold text-base text-brand-forest">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-brand-dark/70 font-medium">
                    {brand.feedTypes}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href={getBrandEnquiryUrl(brand.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5 text-brand-forest text-xs font-semibold transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>Enquire for Brand Products</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Distributor Disclaimer */}
        <p className="mt-8 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          Note: These branded cattle feeds are stocked and supplied for customer enquiries. Product packaging, weight, and formulations are subject to manufacturer specifications.
        </p>

      </div>
    </section>
  );
};
