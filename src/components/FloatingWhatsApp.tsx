import React, { useState } from 'react';
import { MessageCircle, X, User } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [openSelector, setOpenSelector] = useState(false);

  const getContactUrl = (whatsappNumber: string, name: string) => {
    return buildWhatsAppUrl(
      whatsappNumber,
      `Hello ${name} (Meenakshi Traders), I would like to enquire about cattle feed and agricultural products.`
    );
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 select-none">
      
      {/* Contact Chooser Popup */}
      {openSelector && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-brand-leaf/20 p-4 w-72 sm:w-80 animate-scaleUp">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4 fill-white" />
              </div>
              <span className="font-bold text-sm text-brand-forest">
                WhatsApp Enquiry
              </span>
            </div>
            <button
              onClick={() => setOpenSelector(false)}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-lg"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-brand-dark/70 my-3">
            Select a contact person to start your enquiry on WhatsApp:
          </p>

          <div className="space-y-2">
            {siteConfig.contacts.map((contact) => (
              <a
                key={contact.id}
                href={getContactUrl(contact.whatsappNumber, contact.name)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenSelector(false)}
                className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 hover:border-brand-leaf/30 hover:bg-brand-cream/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-forest">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-brand-forest">
                      {contact.name}
                    </p>
                    <p className="text-[10px] text-brand-dark/60">
                      {contact.role} • {contact.phone}
                    </p>
                  </div>
                </div>
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setOpenSelector(!openSelector)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Enquire on WhatsApp"
        title="Enquire on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Ping Animation Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-gold border-2 border-white"></span>
        </span>
      </button>

    </div>
  );
};
