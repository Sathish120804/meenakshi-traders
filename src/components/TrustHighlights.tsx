import React from 'react';
import { Package, Users, PhoneCall, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TrustHighlights: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Package,
      title: t.trust1Title,
      description: t.trust1Desc,
    },
    {
      icon: Users,
      title: t.trust2Title,
      description: t.trust2Desc,
    },
    {
      icon: PhoneCall,
      title: t.trust3Title,
      description: t.trust3Desc,
    },
    {
      icon: Languages,
      title: t.trust4Title,
      description: t.trust4Desc,
    },
  ];

  return (
    <section className="bg-brand-rice py-10 sm:py-12 border-b border-brand-leaf/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-brand-cream/60 rounded-xl p-5 border border-brand-leaf/15 hover:border-brand-leaf/30 transition-all hover:shadow-soft"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-forest/10 text-brand-forest flex items-center justify-center mb-3.5">
                  <Icon className="w-5 h-5 text-brand-forest" />
                </div>
                <h3 className="font-tamil font-bold text-base text-brand-forest mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="font-tamil text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
