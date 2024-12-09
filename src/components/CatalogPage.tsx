import React, { useState } from 'react';
import { ProductGrid } from './ProductGrid';
import { products } from '../data/products';

export function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredProducts = products.filter(
    (product) =>
      product.type === 'perfume' &&
      (product.name.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif font-extrabold text-purple-800 mb-8">
        Catálogo de Perfumes
      </h1>
      <input
        type="text"
        placeholder="Buscar perfumes..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-6 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
