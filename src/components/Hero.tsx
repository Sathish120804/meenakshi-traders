import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Truck, Headphones } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contacts[0].whatsappNumber,
    'Hello Meenakshi Traders, I am interested in your cattle feed and agricultural products. Please share current availability and pricing.'
  );

  const scrollToCatalogue = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#catalogue');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-brand-cream/60 py-12 md:py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Headlines and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-leaf"></span>
              <span>MEENAKSHI TRADERS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest leading-[1.2] tracking-tight">
              Your Trusted Partner for Cattle Feed & Agricultural Products
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-brand-dark/85 leading-relaxed max-w-2xl">
              Explore branded cattle feeds, rice, grains, millets, bran, and agricultural feed ingredients. Contact our team for current availability, wholesale prices, and retail enquiries.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#catalogue"
                onClick={scrollToCatalogue}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-forest hover:bg-brand-deep text-white font-semibold text-base shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-base shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Three-Item Trust Row */}
            <div className="pt-6 border-t border-brand-forest/10 grid grid-cols-3 gap-3 text-xs sm:text-sm text-brand-dark/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-forest flex-shrink-0" />
                <span className="font-semibold text-brand-forest">Branded Cattle Feeds</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-forest flex-shrink-0" />
                <span className="font-semibold text-brand-forest">Wholesale & Retail</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-brand-forest flex-shrink-0" />
                <span className="font-semibold text-brand-forest">Direct Customer Enquiries</span>
              </div>
            </div>

          </div>

          {/* Right Side: Large Cattle and Livestock Feed Photograph */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="/images/hero-cattle-feed.jpg"
                  alt="Healthy dairy cattle feeding on agricultural farm"
                  className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = '/images/cattle-feed-category.jpg';
                  }}
                />
              </div>
              <div className="mt-2.5 text-center">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[11px] font-medium text-brand-forest shadow-sm border border-brand-forest/10">
                  Nutritious Dairy Cattle Nutrition & Farm Feeds
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
