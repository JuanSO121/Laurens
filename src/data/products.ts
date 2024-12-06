import { Product } from '../types/product';

export const products: Product[] = [
  // Perfumes
  {
    id: "1",
    name: "Floral Dreams",
    brand: "Lauren's Signature",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    description: "A delicate blend of jasmine and rose with subtle vanilla notes.",
    category: "women",
    type: "perfume"
  },
  {
    id: "2",
    name: "Ocean Breeze",
    brand: "Lauren's Collection",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    description: "Fresh aquatic scent with hints of citrus and woody undertones.",
    category: "men",
    type: "perfume"
  },
  {
    id: "3",
    name: "Pure Essence",
    brand: "Lauren's Signature",
    image: "https://images.unsplash.com/photo-1592945403244-b3faa7b3a4e1?auto=format&fit=crop&w=800&q=80",
    description: "A sophisticated blend of amber and musk.",
    category: "unisex",
    type: "perfume"
  },
  // Handbags
  {
    id: "4",
    name: "Elegance Tote",
    brand: "Lauren's Accessories",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    description: "Spacious leather tote bag perfect for everyday use.",
    category: "women",
    type: "handbag"
  },
  {
    id: "5",
    name: "Classic Shoulder Bag",
    brand: "Lauren's Accessories",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
    description: "Timeless shoulder bag with gold hardware details.",
    category: "women",
    type: "handbag"
  },
  {
    id: "6",
    name: "Mini Crossbody",
    brand: "Lauren's Collection",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=800&q=80",
    description: "Compact crossbody bag for essential items.",
    category: "unisex",
    type: "handbag"
  }
];