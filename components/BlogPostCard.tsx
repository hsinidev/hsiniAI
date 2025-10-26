import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  onReadMore: () => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onReadMore }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>
        <button 
          onClick={onReadMore}
          className="font-semibold text-primary hover:underline mt-auto self-start"
        >
          Read More &rarr;
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;