import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch: (searchTerm: string) => void;
  onFilter: (filterKey: string, filterValue: string) => void;
}

export function SearchFilter({ onSearch, onFilter }: SearchFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilter(name, value);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar..."
        className="px-4 py-2 border rounded-lg shadow-sm"
      />
      <select
        name="gender"
        onChange={handleFilterChange}
        className="px-4 py-2 border rounded-lg shadow-sm"
      >
        <option value="">Todos los géneros</option>
        <option value="Dama">Dama</option>
        <option value="Caballero">Caballero</option>
      </select>
      <select
        name="fragranceFamily"
        onChange={handleFilterChange}
        className="px-4 py-2 border rounded-lg shadow-sm"
      >
        <option value="">Todas las familias</option>
        <option value="Floral">Floral</option>
        <option value="Frutal">Frutal</option>
        {/* Agrega más opciones según tus datos */}
      </select>
    </div>
  );
}
