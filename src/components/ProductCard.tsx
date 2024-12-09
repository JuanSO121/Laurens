import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform hover:scale-105 cursor-pointer"
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
        <p className="mt-2 text-sm text-gray-700 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}
