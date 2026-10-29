import React from 'react';
import { Phone, MessageCircle, Package, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const MobileActionBar: React.FC = () => {
  const primaryContact = siteConfig.contacts[0];

  const whatsappUrl = buildWhatsAppUrl(
    primaryContact.whatsappNumber,
    'Hello Meenakshi Traders, I would like to enquire about your cattle feed and agricultural products.'
  );

  const scrollToCatalogue = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#catalogue');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-brand-leaf/20 shadow-2xl px-2 py-1.5 select-none pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-4 gap-1 text-center">
        
        {/* Action 1: Call */}
        <a
          href={`tel:${primaryContact.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-brand-forest hover:bg-brand-cream/60 transition-colors"
          aria-label="Call Meenakshi Traders"
        >
          <Phone className="w-5 h-5 text-brand-forest mb-0.5" />
          <span className="text-[11px] font-bold">Call</span>
        </a>

        {/* Action 2: WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-[#1EBE5D] hover:bg-brand-cream/60 transition-colors"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Action 3: Products */}
        <a
          href="#catalogue"
          onClick={scrollToCatalogue}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-brand-forest hover:bg-brand-cream/60 transition-colors"
          aria-label="Browse product catalogue"
        >
          <Package className="w-5 h-5 text-brand-forest mb-0.5" />
          <span className="text-[11px] font-bold">Products</span>
        </a>

        {/* Action 4: Location */}
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg text-brand-forest hover:bg-brand-cream/60 transition-colors"
          aria-label="Open shop location in Google Maps"
        >
          <MapPin className="w-5 h-5 text-brand-forest mb-0.5" />
          <span className="text-[11px] font-bold">Location</span>
        </a>

      </div>
    </div>
  );
};
