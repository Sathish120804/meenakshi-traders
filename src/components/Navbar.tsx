import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '../data/siteConfig';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.contacts[0].whatsappNumber,
    'Hello Meenakshi Traders, I would like to enquire about your cattle feed and agricultural products.'
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 bg-white border-b ${
        scrolled ? 'border-gray-200 shadow-sm' : 'border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* LEFT: Official Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center flex-shrink-0 focus:outline-none"
            aria-label="Meenakshi Traders Home"
          >
            <Logo className="h-10 sm:h-12 md:h-14" />
          </a>

          {/* CENTER: Clean Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-sm font-semibold text-brand-dark hover:text-brand-forest transition-colors"
            >
              Home
            </a>
            <a
              href="#catalogue"
              onClick={(e) => handleNavClick(e, '#catalogue')}
              className="text-sm font-semibold text-brand-dark hover:text-brand-forest transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-sm font-semibold text-brand-dark hover:text-brand-forest transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-sm font-semibold text-brand-dark hover:text-brand-forest transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* RIGHT: Single Prominent WhatsApp CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: Hamburger Only */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-forest"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-5 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-brand-dark hover:bg-gray-50 hover:text-brand-forest transition-colors"
            >
              Home
            </a>
            <a
              href="#catalogue"
              onClick={(e) => handleNavClick(e, '#catalogue')}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-brand-dark hover:bg-gray-50 hover:text-brand-forest transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-brand-dark hover:bg-gray-50 hover:text-brand-forest transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-brand-dark hover:bg-gray-50 hover:text-brand-forest transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] text-white font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
