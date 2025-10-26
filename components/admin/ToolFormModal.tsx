import React, { useState } from 'react';
import { Product } from '../../types';
import { CloseIcon } from '../icons/CloseIcon';
import HtmlEditor from './HtmlEditor';

interface ToolFormModalProps {
  tool: Product | null;
  onClose: () => void;
  onSave: (tool: Product) => void;
}

const ToolFormModal: React.FC<ToolFormModalProps> = ({ tool, onClose, onSave }) => {
  const isEditing = !!tool;
  const [formData, setFormData] = useState({
    name: tool?.name || '',
    category: tool?.category || '',
    description: tool?.description || '',
    logoUrl: tool?.logoUrl || '',
    affiliateUrl: tool?.affiliateUrl || '',
    rating: tool?.rating || 0,
    tags: tool?.tags?.join(', ') || '',
    sponsored: tool?.sponsored || false,
    longDescription: tool?.longDescription || '<p>Start writing here...</p>',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleDescriptionChange = (html: string) => {
    setFormData(prev => ({ ...prev, longDescription: html }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, logoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalTool: Product = {
      id: tool?.id || 0, // ID is handled in ManageTools
      name: formData.name,
      category: formData.category,
      description: formData.description,
      longDescription: formData.longDescription,
      logoUrl: formData.logoUrl,
      affiliateUrl: formData.affiliateUrl,
      rating: Number(formData.rating),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      sponsored: formData.sponsored,
    };
    onSave(finalTool);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">{isEditing ? 'Edit Tool' : 'Add New Tool'}</h2>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <CloseIcon />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <input type="text" name="category" value={formData.category} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Short Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" rows={2} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Long Description (HTML)</label>
            <HtmlEditor value={formData.longDescription} onChange={handleDescriptionChange} height="350px" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Logo URL or Upload</label>
              <div className="flex items-center space-x-2 mt-1">
                  <input
                      type="text"
                      name="logoUrl"
                      value={formData.logoUrl}
                      onChange={handleChange}
                      placeholder="Paste URL or upload"
                      className="block w-full border border-gray-300 rounded-md p-2"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 whitespace-nowrap">
                      Upload
                  </label>
                  <input
                      id="logo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                  />
              </div>
              {formData.logoUrl && (
                  <div className="mt-2">
                      <p className="text-xs text-gray-500 mb-1">Preview:</p>
                      <img src={formData.logoUrl} alt="Logo Preview" className="h-16 w-16 object-contain border rounded-md p-1 bg-gray-50" />
                  </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Affiliate URL</label>
              <input type="text" name="affiliateUrl" value={formData.affiliateUrl} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Rating (0-5)</label>
              <input type="number" name="rating" value={formData.rating} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" step="0.1" min="0" max="5" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Tags (comma-separated)</label>
              <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="sponsored" checked={formData.sponsored} onChange={handleChange} className="rounded border-gray-300" />
              <span className="text-sm font-medium">Sponsored</span>
            </label>
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

export default ToolFormModal;