export type ProductType = 'perfume' | 'handbag';

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
  category: string;
  type: 'perfume' | 'handbag';
  fragranceFamily?: string;
  volume?: string;
  gender?: string;
}