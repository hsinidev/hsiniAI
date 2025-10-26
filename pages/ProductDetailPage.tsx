import React from 'react';
import { Product, User } from '../types';
import { StarIcon } from '../components/icons/StarIcon';
import { PencilIcon } from '../components/icons/PencilIcon';

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: string, params?: any) => void;
  user: User | null;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onNavigate, user }) => {
  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <button onClick={() => onNavigate('home')} className="mt-4 text-primary hover:underline">
          &larr; Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => onNavigate('categories')}
            className="mb-8 text-primary hover:underline font-semibold"
          >
            &larr; Back to All Tools
          </button>
          
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/4 flex flex-col items-center text-center">
              <img src={product.logoUrl} alt={`${product.name} logo`} className="w-32 h-32 rounded-lg border p-2 bg-white shadow-md" />
              <div className="mt-4 flex items-center space-x-1">
                <span className="font-bold text-lg">{product.rating}</span>
                <div className="flex text-yellow-400">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <a 
                href={product.affiliateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Visit Website
              </a>
            </div>
            
            <div className="md:w-3/4">
              <div className="flex justify-between items-start">
                  <div className="flex-grow">
                      <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
                      <p className="mt-2 text-xl text-gray-500">{product.category}</p>
                  </div>
                  {user?.role === 'admin' && (
                    <button
                      onClick={() => onNavigate('admin', { tab: 'tools', editId: product.id })}
                      className="flex-shrink-0 ml-4 flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm transition-colors"
                      aria-label={`Edit ${product.name}`}
                    >
                      <PencilIcon />
                      <span>Edit</span>
                    </button>
                  )}
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="bg-purple-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>

              <div 
                className="mt-8 prose lg:prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.longDescription }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;