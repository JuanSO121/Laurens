import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';

export function ProductDetails({ products }: { products: Product[] }) {
  const { id } = useParams();
  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <span className="text-purple-800 font-semibold">{product.category}</span>
        </div>
      </div>
    </div>
  );
}
