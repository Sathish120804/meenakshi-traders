import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const LocationSection: React.FC = () => {
  const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=10.5267167,78.4769053';

  return (
    <section id="location" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-brand-leaf" />
            <span>Store Location</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-forest">
            Find Meenakshi Traders
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/75">
            Contact our team for location details and directions to the shop.
          </p>
        </div>

        {/* Location Content: Details Card + Map Frame */}
        <div className="max-w-5xl mx-auto bg-brand-cream/30 rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: Shop Info & Actions */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-brand-forest">
                      Meenakshi Traders
                    </h3>
                    <p className="text-xs text-brand-dark/60 font-medium">
                      Agricultural Feed & Grain Trading Shop
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-brand-dark/80 space-y-2">
                  <p className="font-semibold text-brand-forest">Shop Location & Inquiries</p>
                  <p className="text-xs text-brand-dark/70 leading-relaxed">
                    Tamil Nadu, India. For local navigation, exact store directions, or stock pickups, please contact our team directly.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-forest hover:bg-brand-deep text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-brand-forest/20 bg-white hover:bg-gray-50 text-brand-forest text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-brand-leaf" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Right Col: Genuine Embedded Google Map */}
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto min-h-[300px] bg-gray-100 relative border-t lg:border-t-0 lg:border-l border-gray-200">
              <iframe
                title="Meenakshi Traders Store Location"
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
