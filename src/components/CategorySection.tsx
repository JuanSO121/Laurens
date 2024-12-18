import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Product, ProductType } from '../types/product';
import { ProductCard } from './ProductCard';

interface CategorySectionProps {
  title: string;
  products: Product[];
  type: ProductType;
}

export function CategorySection({ title, products, type }: CategorySectionProps) {
  const filteredProducts = products.filter((product) => product.type === type).slice(0, 3);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-serif font-bold text-purple-800">{title}</h2>
        <Link
          to={`/catalog/${type}`}
          className="flex items-center text-pink-500 hover:text-pink-700 transition-colors font-medium"
        >
          Ver más
          <ChevronRight className="h-5 w-5 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
