import React from 'react';
import { useParams } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types/product';
import { openWhatsApp } from '../utils/whatsapp';

export function ProductDetails({ products }: { products: Product[] }) {
  const { id } = useParams();
  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold text-gray-700">Producto no encontrado.</h1>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    openWhatsApp(product);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>

          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-all shadow-md"
          >
            <MessageCircle className="h-6 w-6" />
            Consultar Precio
          </button>
        </div>
      </div>
    </div>
  );
}
