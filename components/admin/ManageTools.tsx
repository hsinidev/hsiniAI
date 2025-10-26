import React, { useState, useEffect } from 'react';
import ToolFormModal from './ToolFormModal';
import { Product } from '../../types';

interface ManageToolsProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  editIdOnLoad?: number;
}

const ManageTools: React.FC<ManageToolsProps> = ({ products, setProducts, editIdOnLoad }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTool, setEditingTool] = useState<Product | null>(null);

  useEffect(() => {
    if (editIdOnLoad) {
      const toolToEdit = products.find(p => p.id === editIdOnLoad);
      if (toolToEdit) {
        handleEdit(toolToEdit);
      }
    }
  }, [editIdOnLoad, products]);

  const handleEdit = (product: Product) => {
    setEditingTool(product);
    setIsModalOpen(true);
  };
  
  const handleAddNew = () => {
    setEditingTool(null);
    setIsModalOpen(true);
  }
  
  const handleDelete = (id: number) => {
    if(window.confirm('Are you sure you want to delete this tool?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  }

  const handleSave = (toolData: Product) => {
    if (editingTool) {
      // Edit
      setProducts(products.map(p => p.id === toolData.id ? toolData : p));
    } else {
      // Add - create a new ID
      const newTool = { ...toolData, id: Date.now() };
      setProducts([...products, newTool]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Tools / Products</h2>
        <button onClick={handleAddNew} className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700">
          Add New Tool
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map(product => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.rating}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleEdit(product)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                  <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && <ToolFormModal tool={editingTool} onSave={handleSave} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default ManageTools;
