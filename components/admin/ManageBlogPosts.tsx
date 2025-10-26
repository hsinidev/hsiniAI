import React, { useState, useEffect } from 'react';
import BlogPostFormModal from './BlogPostFormModal';
import { BlogPost } from '../../types';

interface ManageBlogPostsProps {
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  editSlugOnLoad?: string;
}

const ManageBlogPosts: React.FC<ManageBlogPostsProps> = ({ blogPosts, setBlogPosts, editSlugOnLoad }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  useEffect(() => {
    if (editSlugOnLoad) {
      const postToEdit = blogPosts.find(p => p.slug === editSlugOnLoad);
      if (postToEdit) {
        handleEdit(postToEdit);
      }
    }
  }, [editSlugOnLoad, blogPosts]);

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };
  
  const handleAddNew = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  }
  
  const handleDelete = (slug: string) => {
    if(window.confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(blogPosts.filter(p => p.slug !== slug));
    }
  }

  const handleSave = (postData: BlogPost) => {
    if (editingPost) {
      // Edit
      setBlogPosts(blogPosts.map(p => p.slug === postData.slug ? postData : p));
    } else {
      // Add
      setBlogPosts([...blogPosts, postData]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Blog Posts</h2>
        <button onClick={handleAddNew} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
          Add New Post
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {blogPosts.map(post => (
              <tr key={post.slug}>
                <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.slug}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleEdit(post)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                  <button onClick={() => handleDelete(post.slug)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <BlogPostFormModal post={editingPost} onSave={handleSave} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ManageBlogPosts;
