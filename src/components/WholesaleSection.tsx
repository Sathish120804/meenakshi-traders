import React from 'react';
import { Tractor, Store, Building2, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const WholesaleSection: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contacts[1].whatsappNumber,
    'Hello Meenakshi Traders, I would like to enquire about wholesale bulk order pricing, available quantities, and supply details.'
  );

  const categories = [
    {
      icon: Tractor,
      title: 'Farmers & Cattle Owners',
      description: 'Reliable feeds, bran, and oil cakes for daily dairy maintenance and herd nourishment.',
    },
    {
      icon: Store,
      title: 'Retailers & Resellers',
      description: 'Dependable supplies of packaged feeds and bagged grains for local shop distribution.',
    },
    {
      icon: Building2,
      title: 'Bulk Buyers',
      description: 'Bulk procurement and direct quotes for commercial dairy farms and wholesale purchasers.',
    },
  ];

  return (
    <section id="wholesale" className="py-14 sm:py-20 bg-brand-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Wholesale & Retail Enquiries
          </h2>
          <p className="text-brand-cream/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Looking for cattle feed, rice, grains, or agricultural feed ingredients? Contact our team to enquire about current prices, available quantities, and packaging.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-brand-deep rounded-xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-leaf/20 text-brand-gold flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single WhatsApp CTA */}
        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-base shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
