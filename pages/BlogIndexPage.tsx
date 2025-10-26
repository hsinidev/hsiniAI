import React from 'react';
import { BlogPost } from '../types';
import BlogPostCard from '../components/BlogPostCard';

interface BlogIndexPageProps {
  posts: BlogPost[];
  onNavigate: (page: string, params: { slug: string }) => void;
}

const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ posts, onNavigate }) => {
  return (
    <div className="bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            The hsini.ai Blog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            In-depth reviews, tutorials, and insights into the world of AI tools.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map(post => (
            <BlogPostCard 
              key={post.slug} 
              post={post} 
              onReadMore={() => onNavigate('blogPost', { slug: post.slug })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndexPage;
