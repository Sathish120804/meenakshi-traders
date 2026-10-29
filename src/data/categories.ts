import type { ProductCategory } from '../types/index.ts';

export const categories: ProductCategory[] = [
  {
    id: 'cattle-feed',
    nameTa: 'மாட்டுத் தீவனங்கள்',
    nameEn: 'Cattle Feed',
    shortDescTa: 'KNC Krishi Nutrition, SKM, KS, சாந்தி உள்ளிட்ட முன்னணி நிறுவனங்களின் மாட்டுத் தீவனங்கள்.',
    shortDescEn: 'Branded cattle-feed products from KNC Krishi Nutrition, SKM, KS and Santhi.',
    iconName: 'ShieldCheck',
    image: '/images/cattle-feed-category.jpg',
  },
  {
    id: 'bran-byproducts',
    nameTa: 'தவிடு மற்றும் தீவன உபபொருட்கள்',
    nameEn: 'Bran & By-products',
    shortDescTa: 'கோதுமை தவிடு மற்றும் கால்நடைகளுக்கான தீவன தவிடு உபபொருட்கள்.',
    shortDescEn: 'Wheat bran and other locally stocked bran/feed by-products.',
    iconName: 'Wheat',
    image: '/images/wheat-bran.jpg',
  },
  {
    id: 'rice-varieties',
    nameTa: 'அரிசி வகைகள்',
    nameEn: 'Rice Varieties',
    shortDescTa: 'அம்மன் பொன்னி அரிசி மற்றும் தேர்ந்தெடுக்கப்பட்ட அரிசி வகைகள்.',
    shortDescEn: 'Amman Ponni Rice and other rice varieties only when confirmed as available.',
    iconName: 'Package',
    image: '/images/rice-category.jpg',
  },
  {
    id: 'grains-millets',
    nameTa: 'தானியங்கள் மற்றும் சிறுதானியங்கள்',
    nameEn: 'Grains & Millets',
    shortDescTa: 'சோளம், கம்பு, கேழ்வரகு மற்றும் காய்ந்த மிளகாய் போன்ற தரமான தானியங்கள்.',
    shortDescEn: 'Cholam, Kambu, Keppai/Ragi, chilli, and other stocked grain products.',
    iconName: 'Sprout',
    image: '/images/grains-millets-assortment.jpg',
  },
  {
    id: 'oil-cakes',
    nameTa: 'புண்ணாக்கு வகைகள்',
    nameEn: 'Oil Cakes & Feed Ingredients',
    shortDescTa: 'நிலக்கடலை புண்ணாக்கு, பருத்தி விதை மற்றும் எள் புண்ணாக்கு தீவன வகைகள்.',
    shortDescEn: 'Groundnut oil cake, sesame oil cake, and cottonseed/cottonseed cake where stocked.',
    iconName: 'Layers',
    image: '/images/oilcake-feed-ingredient.jpg',
  },
];
