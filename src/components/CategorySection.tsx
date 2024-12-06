import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Product, ProductType } from '../types/product';
import { ProductCard } from './ProductCard';

interface CategorySectionProps {
  title: string;
  products: Product[];
  type: ProductType;
}

export function CategorySection({ title, products, type }: CategorySectionProps) {
  const filteredProducts = products
    .filter(product => product.type === type)
    .slice(0, 3);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-gray-900">{title}</h2>
        <a
          href={`/catalog/${type}`}
          className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          Ver más
          <ChevronRight className="h-5 w-5 ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}