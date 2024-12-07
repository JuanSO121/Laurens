import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-purple-800 hover:text-purple-600">
              Lauren's
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-800">Inicio</Link>
            <Link to="/catalog/perfume" className="text-gray-700 hover:text-purple-800">Perfumes</Link>
            <Link to="/catalog/handbag" className="text-gray-700 hover:text-purple-800">Bolsos</Link>
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
