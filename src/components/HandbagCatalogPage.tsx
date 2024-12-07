import React from 'react';
import { ProductGrid } from './ProductGrid';
import { products } from '../data/products';

export function HandbagCatalogPage() {
  const handbags = products.filter((product) => product.type === 'handbag');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">
        Catálogo de Bolsos
      </h1>
      <ProductGrid products={handbags} />
    </div>
  );
}
