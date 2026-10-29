export type Language = 'ta' | 'en';

export interface ContactPerson {
  id: string;
  name: string;
  nameTa: string;
  role: string;
  roleTa: string;
  phone: string;
  phoneRaw: string;
  email: string;
  additionalEmail?: string;
  whatsappNumber: string;
  isPrimary?: boolean;
}

export interface ProductCategory {
  id: string;
  nameTa: string;
  nameEn: string;
  shortDescTa: string;
  shortDescEn: string;
  iconName: string;
  image: string;
}

export interface ProductItem {
  id: string;
  nameTa: string;
  nameEn: string;
  category: string;
  brand?: string;
  shortDescTa: string;
  shortDescEn: string;
  image: string;
  imageAltTa: string;
  imageAltEn: string;
  imageSourceNote: string;
  featured?: boolean;
  isFeedGrade?: boolean;
  imageFit?: 'cover' | 'contain';
}

export interface FAQItem {
  id: string;
  questionTa: string;
  questionEn: string;
  answerTa: string;
  answerEn: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  descriptionTa: string;
  descriptionEn: string;
  tagline: string;
  image?: string;
  imageFit?: 'cover' | 'contain';
}
