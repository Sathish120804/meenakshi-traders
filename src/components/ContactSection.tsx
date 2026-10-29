import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [arunachalam, sathish] = siteConfig.contacts;

  const arunachalamWhatsApp = buildWhatsAppUrl(
    arunachalam.whatsappNumber,
    'Hello Arunachalam A (Meenakshi Traders), I would like to enquire about your cattle feed and agricultural products.'
  );

  const sathishWhatsApp = buildWhatsAppUrl(
    sathish.whatsappNumber,
    'Hello Sathish A (Meenakshi Traders), I would like to enquire about your cattle feed and agricultural products.'
  );

  return (
    <section id="contact" className="py-14 sm:py-20 bg-brand-cream/40 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-bold uppercase tracking-wider">
            <span>Our Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-forest">
            Contact Our Team
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/75">
            Reach out directly to our management and sales team for current product availability, wholesale pricing, and retail enquiries.
          </p>
        </div>

        {/* Contact Cards: Arunachalam & Sathish */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Arunachalam A */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-brand-forest text-brand-gold flex items-center justify-center font-bold text-base shadow-sm">
                  AA
                </div>
                <span className="px-3 py-1 rounded-full bg-brand-forest/10 text-brand-forest font-semibold text-xs">
                  {arunachalam.role}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-forest">
                  {arunachalam.name}
                </h3>
                <p className="text-xs text-brand-dark/70 font-medium mt-0.5">
                  {arunachalam.role}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-sm">
                <a
                  href={`tel:${arunachalam.phoneRaw}`}
                  className="flex items-center gap-3 text-brand-dark hover:text-brand-forest transition-colors font-medium"
                >
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-brand-forest">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{arunachalam.phone}</span>
                </a>

                <a
                  href={`mailto:${arunachalam.email}`}
                  className="flex items-center gap-3 text-brand-dark hover:text-brand-forest transition-colors font-medium break-all"
                >
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-brand-forest">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{arunachalam.email}</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
              <a
                href={`tel:${arunachalam.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-brand-forest text-white hover:bg-brand-deep text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>

              <a
                href={arunachalamWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${arunachalam.email}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-brand-dark text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Card 2: Sathish A */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-gray-200 shadow-sm flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-brand-earth text-white flex items-center justify-center font-bold text-base shadow-sm">
                  SA
                </div>
                <span className="px-3 py-1 rounded-full bg-brand-earth/10 text-brand-earth font-semibold text-xs">
                  {sathish.role}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-forest">
                  {sathish.name}
                </h3>
                <p className="text-xs text-brand-dark/70 font-medium mt-0.5">
                  {sathish.role}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-sm">
                <a
                  href={`tel:${sathish.phoneRaw}`}
                  className="flex items-center gap-3 text-brand-dark hover:text-brand-forest transition-colors font-medium"
                >
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-brand-forest">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{sathish.phone}</span>
                </a>

                <a
                  href={`mailto:${sathish.email}`}
                  className="flex items-center gap-3 text-brand-dark hover:text-brand-forest transition-colors font-medium break-all"
                >
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-brand-forest">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{sathish.email}</span>
                </a>

                {sathish.additionalEmail && (
                  <div className="pl-11 text-xs text-gray-500">
                    Alt:{' '}
                    <a
                      href={`mailto:${sathish.additionalEmail}`}
                      className="underline hover:text-brand-forest"
                    >
                      {sathish.additionalEmail}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
              <a
                href={`tel:${sathish.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-brand-forest text-white hover:bg-brand-deep text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>

              <a
                href={sathishWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${sathish.email}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-brand-dark text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
