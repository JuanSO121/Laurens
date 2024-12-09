import { Hero } from './Hero';
import { CategorySection } from './CategorySection';
import { products } from '../data/products';

export function Home() {
  return (
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
      <footer className="bg-purple-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-serif">Perfumería Lauren's</p>
          <p className="mt-2 text-purple-200">© 2024 Todos los derechos reservados</p>
        </div>
      </footer>

    </>
  );
} 