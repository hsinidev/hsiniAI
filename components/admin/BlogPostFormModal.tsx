import React, { useState } from 'react';
import { BlogPost } from '../../types';
import { CloseIcon } from '../icons/CloseIcon';
import HtmlEditor from './HtmlEditor';

interface BlogPostFormModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSave: (post: BlogPost) => void;
}

const BlogPostFormModal: React.FC<BlogPostFormModalProps> = ({ post, onClose, onSave }) => {
  const isEditing = !!post;
  const [formData, setFormData] = useState({
      slug: post?.slug || '',
      title: post?.title || '',
      excerpt: post?.excerpt || '',
      imageUrl: post?.imageUrl || '',
      content: post?.content || '<h2>Blog Post Title</h2><p>Start writing your blog post content here. You can use HTML tags.</p>',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (html: string) => {
    setFormData(prev => ({ ...prev, content: html }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalPost: BlogPost = {
        slug: formData.slug,
        title: formData.title,
        excerpt: formData.excerpt,
        imageUrl: formData.imageUrl,
        content: formData.content,
    };
    onSave(finalPost);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">{isEditing ? 'Edit Post' : 'Add New Post'}</h2>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <CloseIcon />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Slug</label>
            <input type="text" name="slug" value={formData.slug} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-50" required disabled={isEditing} />
            {isEditing && <p className="text-xs text-gray-500 mt-1">Slug cannot be changed after creation.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Excerpt</label>
            <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows={3} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Image URL or Upload</label>
            <div className="flex items-center space-x-2 mt-1">
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="Paste URL or upload"
                    className="block w-full border border-gray-300 rounded-md p-2"
                    required
                />
                <label htmlFor="image-upload" className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 whitespace-nowrap">
                    Upload
                </label>
                <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
            {formData.imageUrl && (
                <div className="mt-2">
                    <p className="text-xs text-gray-500 mb-1">Preview:</p>
                    <img src={formData.imageUrl} alt="Image Preview" className="max-h-48 w-auto object-contain border rounded-md p-1 bg-gray-50" />
                </div>
            )}
          </div>
           <div>
            <label className="block text-sm font-medium">Blog Content (HTML)</label>
            <HtmlEditor 
                value={formData.content} 
                onChange={handleContentChange}
                height="350px" 
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPostFormModal;