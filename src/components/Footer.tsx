import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../data/siteConfig';
import { categories } from '../data/categories';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [arunachalam, sathish] = siteConfig.contacts;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-deep text-brand-cream/80 pt-14 pb-24 lg:pb-14 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white rounded-xl p-2.5 shadow-md border border-brand-leaf/20">
              <Logo variant="light" className="h-12 w-auto" />
            </div>
            <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed max-w-sm">
              Meenakshi Traders is an agricultural trading shop offering branded cattle feed, grains, millets, and livestock feed ingredients.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:text-white transition-colors font-medium"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Contact us for the shop location</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, '#hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#catalogue"
                  onClick={(e) => scrollToSection(e, '#catalogue')}
                  className="hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#brands"
                  onClick={(e) => scrollToSection(e, '#brands')}
                  className="hover:text-white transition-colors"
                >
                  Cattle Feed
                </a>
              </li>
              <li>
                <a
                  href="#wholesale"
                  onClick={(e) => scrollToSection(e, '#wholesale')}
                  className="hover:text-white transition-colors"
                >
                  Wholesale
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#catalogue"
                    onClick={(e) => scrollToSection(e, '#catalogue')}
                    className="hover:text-white transition-colors"
                  >
                    {cat.nameEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts & Enquiry (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Contact Us
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <p className="font-bold text-brand-gold">{arunachalam.name}</p>
                <p className="text-[11px] text-brand-cream/60">{arunachalam.role}</p>
                <a
                  href={`tel:${arunachalam.phoneRaw}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-brand-leaf" />
                  <span>{arunachalam.phone}</span>
                </a>
                <a
                  href={`mailto:${arunachalam.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors text-xs break-all"
                >
                  <Mail className="w-3 h-3 text-brand-leaf" />
                  <span>{arunachalam.email}</span>
                </a>
              </div>

              <div className="space-y-1 pt-1">
                <p className="font-bold text-brand-gold">{sathish.name}</p>
                <p className="text-[11px] text-brand-cream/60">{sathish.role}</p>
                <a
                  href={`tel:${sathish.phoneRaw}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-brand-leaf" />
                  <span>{sathish.phone}</span>
                </a>
                <a
                  href={`mailto:${sathish.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors text-xs break-all"
                >
                  <Mail className="w-3 h-3 text-brand-leaf" />
                  <span>{sathish.email}</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-brand-cream/70">
                <p>GSTIN: 33DDGPM9207P1Z1</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/60">
          <p>
            © {currentYear} Meenakshi Traders. All rights reserved.
          </p>
          <p className="text-brand-gold/90 font-medium text-center sm:text-right">
            Trusted agricultural supply for farmers and businesses.
          </p>
        </div>

      </div>
    </footer>
  );
};
