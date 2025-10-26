import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  return (
    <button 
      onClick={onViewDetails}
      className="flex items-start space-x-4 p-3 border border-gray-200 rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white text-left w-full"
    >
      <img 
        src={product.logoUrl} 
        alt={`${product.name} logo`} 
        className="w-12 h-12 object-contain rounded-md flex-shrink-0 mt-1 border border-gray-100 bg-white p-1" 
      />
      <div>
        <h3 className="font-semibold text-gray-800 leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
      </div>
    </button>
  );
};

export default ProductCard;