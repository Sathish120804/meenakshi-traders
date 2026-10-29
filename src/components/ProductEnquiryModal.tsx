import React, { useState } from 'react';
import { X, MessageCircle, Phone, User, CheckCircle } from 'lucide-react';
import { ProductItem } from '../types';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

interface ProductEnquiryModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductEnquiryModal: React.FC<ProductEnquiryModalProps> = ({
  product,
  onClose,
}) => {
  const [selectedContactId, setSelectedContactId] = useState<string>(
    siteConfig.contacts[0].id
  );

  if (!product) return null;

  const selectedContact =
    siteConfig.contacts.find((c) => c.id === selectedContactId) ||
    siteConfig.contacts[0];

  const enquiryMessage = `Hello Meenakshi Traders, I am interested in ${product.nameEn} (${product.nameTa}). Please share the current price, available quantities, and packaging details.`;
  const whatsappUrl = buildWhatsAppUrl(
    selectedContact.whatsappNumber,
    enquiryMessage
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-200 animate-scaleUp">
        
        {/* Modal Header */}
        <div className="bg-brand-forest text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-brand-gold fill-current" />
            <h3 id="modal-title" className="font-bold text-base sm:text-lg">
              Product Enquiry — {product.nameEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Product Thumbnail Summary */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-gray-50 border border-gray-200">
            <img
              src={product.image}
              alt={product.nameEn}
              className="w-14 h-14 object-contain rounded-lg flex-shrink-0 bg-white border border-gray-200 p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <p className="font-bold text-brand-forest text-base leading-snug">
                {product.nameEn}
              </p>
              <p className="text-xs text-brand-earth font-tamil font-medium">
                {product.nameTa} {product.brand && `• ${product.brand}`}
              </p>
            </div>
          </div>

          {/* Contact Person Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-brand-forest uppercase tracking-wider">
              Select Contact Person:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {siteConfig.contacts.map((contact) => {
                const isSelected = contact.id === selectedContactId;
                return (
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => setSelectedContactId(contact.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-brand-forest bg-brand-forest/5 text-brand-forest ring-1 ring-brand-forest'
                        : 'border-gray-200 hover:border-gray-300 text-brand-dark'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 font-bold text-sm">
                        <User className="w-3.5 h-3.5 text-brand-leaf" />
                        <span>{contact.name}</span>
                      </div>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {contact.phone}
                      </p>
                    </div>
                    {isSelected && (
                      <CheckCircle className="w-4 h-4 text-brand-forest flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Message Preview */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-600">
              WhatsApp Message Preview:
            </label>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-700 leading-relaxed font-mono">
              "{enquiryMessage}"
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Open WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-sm transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
