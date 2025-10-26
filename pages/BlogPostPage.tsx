import React from 'react';
import { BlogPost, User } from '../types';
import { SearchIcon } from '../components/icons/SearchIcon';
import { PencilIcon } from '../components/icons/PencilIcon';

interface BlogPostPageProps {
  post: BlogPost;
  allPosts: BlogPost[];
  onNavigate: (page: string, params?: any) => void;
  user: User | null;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, allPosts, onNavigate, user }) => {
  const recentPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 3);
  const categories = ['AI Tools', 'Marketing', 'Productivity', 'SEO', 'Tutorials'];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <button 
              onClick={() => onNavigate('blogIndex')}
              className="mb-8 text-primary hover:underline font-semibold"
          >
              &larr; Back to Blog
          </button>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <main className="lg:col-span-8">
              <article className="prose lg:prose-xl max-w-none text-gray-700">
                  <div className="mb-8">
                    <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-lg object-cover aspect-video" />
                  </div>
                  <div className="flex justify-between items-start">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">{post.title}</h1>
                     {user?.role === 'admin' && (
                        <button
                          onClick={() => onNavigate('admin', { tab: 'posts', editSlug: post.slug })}
                          className="flex-shrink-0 ml-4 flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm transition-colors"
                          aria-label={`Edit ${post.title}`}
                        >
                          <PencilIcon />
                          <span>Edit</span>
                        </button>
                    )}
                  </div>
                  <div 
                    className="lead text-xl text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
              </article>
            </main>
            <aside className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="sticky top-24 space-y-8">
                {/* Search Bar */}
                <div className="relative">
                  <input type="text" placeholder="Search blog..." className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"/>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <SearchIcon className="text-gray-400"/>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(cat => (
                      <li key={cat}>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors">{cat}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {recentPosts.map(p => (
                      <li key={p.slug}>
                        <button onClick={() => onNavigate('blogPost', { slug: p.slug })} className="text-left group">
                           <p className="font-semibold text-gray-800 group-hover:text-primary transition-colors">{p.title}</p>
                           <p className="text-sm text-gray-500">{p.excerpt.substring(0, 50)}...</p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;