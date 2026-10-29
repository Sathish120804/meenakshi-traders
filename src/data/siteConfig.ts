import type { ContactPerson } from '../types/index.ts';

export interface SiteConfig {
  businessNameEn: string;
  businessNameTa: string;
  taglineTa: string;
  taglineEn: string;
  subTaglineTa: string;
  subTaglineEn: string;
  
  // Google Maps listing destination
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  
  // Central editable address configuration
  address: {
    displayLocationTa: string;
    displayLocationEn: string;
    streetAddress: string;
    cityRegion: string;
    state: string;
    country: string;
    postalCode: string;
  };

  contacts: ContactPerson[];
  
  // SEO & Social
  seoTitle: string;
  seoDescription: string;
}

export const siteConfig: SiteConfig = {
  businessNameEn: 'Meenakshi Traders',
  businessNameTa: 'மீனாட்சி டிரேடர்ஸ்',
  taglineTa: 'நம்பிக்கையான தரம். விவசாயத்திற்கு உறுதுணை.',
  taglineEn: 'Your Trusted Partner for Cattle Feed & Agricultural Products',
  subTaglineTa: 'மொத்தமாகவும் சில்லறையாகவும் மாட்டுத் தீவனங்கள், தானியங்கள், அரிசி வகைகள் மற்றும் விவசாயப் பொருட்களைப் பற்றி விசாரிக்க எங்களைத் தொடர்பு கொள்ளுங்கள்.',
  subTaglineEn: 'Explore branded cattle feeds, rice, grains, millets, bran, and agricultural feed ingredients. Contact our team for current availability, wholesale prices, and retail enquiries.',

  // Primary reference link for shop location
  googleMapsUrl: 'https://maps.app.goo.gl/SDEJYKWMjFhBpXrd8',
  // Verified embed URL from resolved coordinates
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=10.5267167,78.4769053(MEENAKSHI+TRADERS)&t=&z=16&ie=UTF8&iwloc=&output=embed',

  // Address details - Central and editable
  address: {
    displayLocationTa: 'கடை இருப்பிட விவரங்களுக்கு எங்களைத் தொடர்பு கொள்ளவும்',
    displayLocationEn: 'Contact our team for location details and directions to the shop.',
    streetAddress: 'Contact shop for precise store location',
    cityRegion: 'Tamil Nadu',
    state: 'Tamil Nadu',
    country: 'India',
    postalCode: '',
  },

  // Verified Contacts
  contacts: [
    {
      id: 'arunachalam',
      name: 'Arunachalam A',
      nameTa: 'அருணாச்சலம் A',
      role: 'Managing Director',
      roleTa: 'மேலாண்மை இயக்குநர்',
      phone: '+91 94438 88039',
      phoneRaw: '+919443888039',
      email: 'arunachalam1032@gmail.com',
      whatsappNumber: '919443888039',
      isPrimary: true,
    },
    {
      id: 'sathish',
      name: 'Sathish A',
      nameTa: 'சதீஷ் A',
      role: 'Sales Executive',
      roleTa: 'விற்பனை நிர்வாகி',
      phone: '+91 99408 16288',
      phoneRaw: '+919940816288',
      email: 'meenakshitraders1981@gmail.com',
      additionalEmail: 'sathisharunachalam1208@gmail.com',
      whatsappNumber: '919940816288',
      isPrimary: false,
    },
  ],

  seoTitle: 'Meenakshi Traders | Cattle Feed, Grains & Agricultural Products',
  seoDescription: 'Explore branded cattle feeds, rice, grains, millets, bran, and agricultural feed ingredients at Meenakshi Traders, Tamil Nadu. Direct contact via phone & WhatsApp.',
};
