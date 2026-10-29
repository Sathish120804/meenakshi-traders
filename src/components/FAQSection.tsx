import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-brand-cream/30 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-forest/10 text-brand-forest text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-leaf" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-forest">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-brand-dark/75">
            Quick answers about product enquiries, stock availability, and wholesale orders.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-brand-cream/20 hover:bg-brand-cream/10 transition-colors"
                >
                  <div>
                    <span className="font-bold text-sm sm:text-base text-brand-forest leading-snug block">
                      {faq.questionEn}
                    </span>
                    <span className="font-tamil text-xs text-brand-dark/60 block mt-0.5">
                      {faq.questionTa}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-brand-forest/5 flex items-center justify-center text-brand-forest flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-forest/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-brand-dark/85 leading-relaxed border-t border-gray-100 bg-brand-cream/10">
                    <p className="font-medium text-brand-dark">{faq.answerEn}</p>
                    <p className="font-tamil text-xs text-brand-dark/70 mt-1.5">{faq.answerTa}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
