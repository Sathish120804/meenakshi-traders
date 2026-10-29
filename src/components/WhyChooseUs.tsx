import React from 'react';
import { Award, HelpingHand, Zap, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Award,
      title: t.whyReason1Title,
      description: t.whyReason1Desc,
    },
    {
      icon: HelpingHand,
      title: t.whyReason2Title,
      description: t.whyReason2Desc,
    },
    {
      icon: Zap,
      title: t.whyReason3Title,
      description: t.whyReason3Desc,
    },
    {
      icon: Scale,
      title: t.whyReason4Title,
      description: t.whyReason4Desc,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-brand-cream/50 border-b border-brand-leaf/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-tamil text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-forest">
            {t.whyChooseTitle}
          </h2>
          <p className="font-tamil text-sm sm:text-base text-brand-dark/80">
            விவசாயிகள் மற்றும் வர்த்தகர்கள் மீனாட்சி டிரேடர்ஸை நாடுவதற்கான காரணங்கள்
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-brand-leaf/15 hover:border-brand-leaf/40 shadow-sm hover:shadow-soft transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-tamil font-bold text-base text-brand-forest leading-snug">
                  {reason.title}
                </h3>
                <p className="font-tamil text-xs sm:text-sm text-brand-dark/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
