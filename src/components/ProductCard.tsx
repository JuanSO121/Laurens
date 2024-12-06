import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types/product';
import { openWhatsApp } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleWhatsAppClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Evita que el clic en el botón active la navegación
    openWhatsApp(product.name);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 cursor-pointer"
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-sm font-medium text-purple-600">
            {product.type === 'perfume' ? 'Perfume' : 'Bolso'}
          </span>
        </div>
        <p className="text-sm text-gray-600">{product.brand}</p>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Consultar Precio
          </button>
        </div>
      </div>
    </div>
  );
}
