import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { products } from './data/products';
import { ProductDetails } from './components/ProductDetails';
import { CatalogPage } from './components/CatalogPage';
import { HandbagCatalogPage } from './components/HandbagCatalogPage'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <CategorySection
                    title="Perfumes Destacados"
                    products={products}
                    type="perfume"
                  />
                  <CategorySection
                    title="Bolsos Exclusivos"
                    products={products}
                    type="handbag"
                  />
                </main>
              </>
            }
          />
          {/* Página de detalles del producto */}
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          {/* Página de catálogo de perfumes */}
          <Route path="/catalog/perfume" element={<CatalogPage />} />
          {/* Página de catálogo de bolsos */}
          <Route path="/catalog/handbag" element={<HandbagCatalogPage />} />
        </Routes>
        {/* Footer */}
        <footer className="bg-purple-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-serif">Perfumería Lauren's</p>
            <p className="mt-2 text-purple-200">© 2024 All rights reserved</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
