import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-3xl font-serif font-bold text-white hover:text-pink-300 transition-colors"
          >
            Lauren's
          </Link>

          <div className="hidden sm:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white text-lg font-medium hover:underline transition-all"
            >
              Inicio
            </Link>
            <Link
              to="/catalog/perfume"
              className="text-white text-lg font-medium hover:underline transition-all"
            >
              Perfumes
            </Link>
            {/* <Link
              to="/catalog/handbag"
              className="text-white text-lg font-medium hover:underline transition-all"
            >
              Bolsos
            </Link> */}
          </div>


        </div>
      </div>
    </nav>
  );
}
