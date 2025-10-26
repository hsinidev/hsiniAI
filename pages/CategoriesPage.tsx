import React, { useState, useMemo } from 'react';
import { categories } from '../constants';
import ProductCard from '../components/ProductCard';
import { SearchIcon } from '../components/icons/SearchIcon';
import { Product } from '../types';

interface CategoriesPageProps {
  products: Product[];
  onNavigate: (page: string, params?: any) => void;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ products, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.tags.includes(selectedCategory) || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory, products]);

  const allCategories = [{ name: 'All', filterTag: 'All', Icon: () => <></> }, ...categories];

  return (
    <div className="bg-light min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Explore All AI Tools
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Find the perfect tool by searching or filtering by category.
          </p>
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <input 
                type="search"
                placeholder="Search for a tool..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-2 border-gray-300 bg-white h-12 pl-12 pr-4 rounded-full text-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon className="text-gray-400 h-6 w-6" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4 xl:w-1/5">
            <div className="sticky top-24 bg-white p-4 rounded-lg border border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
              <ul className="space-y-1">
                {allCategories.map(cat => (
                  <li key={cat.name}>
                    <button 
                      onClick={() => setSelectedCategory(cat.filterTag)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${selectedCategory === cat.filterTag ? 'bg-purple-100 text-primary' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="lg:w-3/4 xl:w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewDetails={() => onNavigate('productDetail', { id: product.id })}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
                <div className="text-center py-16 bg-white rounded-lg border">
                    <p className="text-gray-500">No tools found. Try adjusting your search or filters.</p>
                </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
