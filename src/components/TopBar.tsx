import React from 'react';
import { Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

export const TopBar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [primaryContact, secondaryContact] = siteConfig.contacts;

  return (
    <div className="bg-brand-deep text-brand-cream/90 text-xs py-2 px-4 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Contact numbers */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span className="font-tamil">{t.topBarLocation}</span>
          </div>

          <span className="hidden sm:inline text-white/20">|</span>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${primaryContact.phoneRaw}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
              title={`Call ${primaryContact.name}`}
            >
              <Phone className="w-3 h-3 text-brand-leaf flex-shrink-0" />
              <span>{primaryContact.phone}</span>
              <span className="text-[10px] text-brand-gold/90 font-tamil">({primaryContact.name.split(' ')[0]})</span>
            </a>

            <a
              href={`tel:${secondaryContact.phoneRaw}`}
              className="hidden md:flex items-center gap-1 hover:text-white transition-colors"
              title={`Call ${secondaryContact.name}`}
            >
              <Phone className="w-3 h-3 text-brand-leaf flex-shrink-0" />
              <span>{secondaryContact.phone}</span>
              <span className="text-[10px] text-brand-gold/90 font-tamil">({secondaryContact.name.split(' ')[0]})</span>
            </a>
          </div>
        </div>

        {/* Language switch button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
            aria-label={`Switch to ${language === 'ta' ? 'English' : 'Tamil'}`}
          >
            <Globe className="w-3 h-3 text-brand-gold" />
            <span className="font-tamil">{t.langToggle}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
