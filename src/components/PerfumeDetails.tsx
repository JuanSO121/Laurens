import { MessageCircle } from 'lucide-react';
import { Product } from '../types/product';
import { openWhatsApp } from '../utils/whatsapp';

interface PerfumeDetailsProps {
  perfume: Product;
}

export function PerfumeDetails({ perfume }: PerfumeDetailsProps) {
  const handleWhatsAppClick = () => {
    openWhatsApp(perfume);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Imagen del producto */}
        <div className="relative">
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles del producto */}
        <div className="space-y-6">
          <div>
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-purple-100 text-purple-800">
              {perfume.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-gray-900">{perfume.name}</h1>
            <p className="mt-2 text-xl text-gray-600">{perfume.brand}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Descripción</h2>
            <p className="text-gray-600">{perfume.description}</p>
          </div>

          {/* Características adicionales si las hay */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Características</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Familia olfativa: {perfume.fragranceFamily}</li>
              <li>Contenido: {perfume.volume}</li>
              <li>Género: {perfume.gender}</li>
            </ul>
          </div>

          {/* Botón de WhatsApp */}
          <div className="pt-6">
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
              Consultar Precio y Disponibilidad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 