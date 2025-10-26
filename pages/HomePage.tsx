
import React from 'react';
import { categories, myTools, faqData } from '../constants';
import ProductCard from '../components/ProductCard';
import BlogPostCard from '../components/BlogPostCard';
import FaqItem from '../components/FaqItem';
import { SearchIcon } from '../components/icons/SearchIcon';
import { StarIcon } from '../components/icons/StarIcon';
import { Product, BlogPost } from '../types';

interface HomePageProps {
  products: Product[];
  blogPosts: BlogPost[];
  onNavigate: (page: string, params?: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, blogPosts, onNavigate }) => {
  const featuredProducts = products.filter(p => p.tags?.includes('Featured'));

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Find the Perfect <span className="text-primary">AI Tool</span> for You
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
            Discover, compare, and choose from the best AI-powered tools for writing, design, coding, and more.
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input 
                type="search"
                placeholder="e.g., 'AI image generator'"
                className="w-full border-2 border-gray-300 bg-white h-14 pl-12 pr-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon className="text-gray-400 h-6 w-6" />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
                Used by 1,000+ creators every month.
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Featured AI Tools</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={() => onNavigate('productDetail', { id: product.id })}
            />
          ))}
        </div>
      </section>
      
      {/* Categories */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">Explore by Category</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(0, 12).map(cat => (
            <button key={cat.name} onClick={() => onNavigate('categories', { filter: cat.filterTag })} className="group flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <cat.Icon />
              <span className="mt-2 text-sm font-medium text-gray-700 group-hover:text-primary">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* My Favorite Tools Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">My Personal Toolkit</h2>
              <p className="mt-4 text-gray-600">
                As a content creator and developer, these are the AI tools I use every single day to stay productive and creative. They're tested, trusted, and highly recommended.
              </p>
              <div className="mt-6 flex items-center space-x-1 text-yellow-500">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  <span className="ml-2 text-gray-500 text-sm">Based on personal daily use</span>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-3 gap-4">
              {myTools.map(tool => {
                const product = products.find(p => p.name === tool.name);
                if (!product) return null;
                return (
                  <button
                    key={tool.name}
                    onClick={() => onNavigate('productDetail', { id: product.id })}
                    className="group flex flex-col items-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-200 text-center"
                  >
                    <img src={tool.logoUrl} alt={tool.name} className="w-14 h-14 rounded-md" />
                    <span className="mt-2 text-xs font-semibold text-gray-600 group-hover:text-primary transition-colors">{tool.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900">From the Blog</h2>
        <p className="mt-2 text-center text-gray-500">Tips, tutorials, and deep dives into the world of AI.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.slice(0, 4).map(post => (
            <BlogPostCard 
              key={post.slug} 
              post={post} 
              onReadMore={() => onNavigate('blogPost', { slug: post.slug })}
            />
          ))}
        </div>
        <div className="text-center mt-8">
            <button onClick={() => onNavigate('blogIndex')} className="font-semibold text-primary hover:underline">
                View All Posts &rarr;
            </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
         <h2 className="text-3xl font-bold text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
            <div className="space-y-2">
              {faqData.slice(0, 4).map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
            <div className="text-center mt-6">
                <button onClick={() => onNavigate('faq')} className="font-semibold text-primary hover:underline">
                    See All Questions &rarr;
                </button>
            </div>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
