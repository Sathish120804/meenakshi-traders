import type { Language, ProductItem } from '../types/index.ts';

/**
 * Builds a direct, clean WhatsApp URL with URL-encoded query parameters.
 * Destination number contains digits only (+91 prefix without plus or spaces).
 */
export function buildWhatsAppUrl(
  phoneNumberDigits: string,
  message: string
): string {
  // Ensure digits only
  const cleanNumber = phoneNumberDigits.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

/**
 * Generates dynamic enquiry message for a specific product
 */
export function getProductEnquiryMessage(
  product: ProductItem,
  language: Language
): string {
  if (language === 'ta') {
    return `வணக்கம் Meenakshi Traders. எனக்கு ${product.nameTa} (${product.nameEn}) தேவை. தற்போதைய விலை, கிடைக்கும் அளவு மற்றும் பேக்கிங் விவரங்களைத் தெரிவிக்கவும்.`;
  }
  return `Hello Meenakshi Traders, I am interested in ${product.nameEn} (${product.nameTa}). Please share the current price, available quantities, and packaging details.`;
}

/**
 * Generates general business enquiry message
 */
export function getGeneralEnquiryMessage(language: Language): string {
  if (language === 'ta') {
    return `வணக்கம் Meenakshi Traders. மாட்டுத் தீவனங்கள், தானியங்கள் மற்றும் விவசாயப் பொருட்கள் பற்றிய விலை மற்றும் இருப்பு விவரங்களை அறிய விரும்புகிறேன்.`;
  }
  return `Hello Meenakshi Traders, I would like to enquire about your cattle feed, grains, and agricultural products availability and pricing.`;
}

/**
 * Generates wholesale bulk enquiry message
 */
export function getWholesaleEnquiryMessage(language: Language): string {
  if (language === 'ta') {
    return `வணக்கம் Meenakshi Traders. எனக்கு மொத்த கொள்முதல் (Wholesale) விலை மற்றும் கிடைக்கும் அளவு விவரங்களைத் தெரிவிக்கவும்.`;
  }
  return `Hello Meenakshi Traders, I would like to enquire about wholesale bulk order pricing, minimum order quantities, and supply availability.`;
}
