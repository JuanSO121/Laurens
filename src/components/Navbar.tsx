import React from 'react';
import { Search, Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-serif font-bold text-purple-800 hover:text-purple-600">
              Lauren's
            </a>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-800">Inicio</a>
            <a href="/catalog/perfume" className="text-gray-700 hover:text-purple-800">Perfumes</a>
            <a href="/catalog/handbag" className="text-gray-700 hover:text-purple-800">Bolsos</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-800">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-700 hover:text-purple-800">
              <Sparkles className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
