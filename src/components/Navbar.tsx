import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-serif font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Lauren's
          </Link>

          {/* Links para pantallas grandes */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 text-lg font-medium hover:underline underline-offset-4 transition-all"
            >
              Inicio
            </Link>
            <Link
              to="/catalog/perfume"
              className="text-gray-700 text-lg font-medium hover:underline underline-offset-4 transition-all"
            >
              Perfumes
            </Link>
            <Link
              to="/catalog/handbag"
              className="text-gray-700 text-lg font-medium hover:underline underline-offset-4 transition-all"
            >
              Bolsos
            </Link>
          </div>

          {/* Botón de menú para pantallas pequeñas */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white shadow-md rounded-md mt-2 p-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 text-lg font-medium hover:underline underline-offset-4 transition-all mb-2"
            >
              Inicio
            </Link>
            <Link
              to="/catalog/perfume"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 text-lg font-medium hover:underline underline-offset-4 transition-all mb-2"
            >
              Perfumes
            </Link>
            <Link
              to="/catalog/handbag"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 text-lg font-medium hover:underline underline-offset-4 transition-all"
            >
              Bolsos
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
