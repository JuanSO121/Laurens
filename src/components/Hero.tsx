import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1583467875263-d0dec2c34847?auto=format&fit=crop&w=2000&q=80')`
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Descubre Tu Fragancia Ideal
          </h1>
          <p className="text-xl text-white mb-8">
            Explora nuestra colección exclusiva de perfumes
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-lg">
              <MessageCircle className="h-6 w-6" />
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}