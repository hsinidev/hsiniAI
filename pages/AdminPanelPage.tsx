
import React, { useState, useEffect } from 'react';
import ManageTools from '../components/admin/ManageTools';
import ManageBlogPosts from '../components/admin/ManageBlogPosts';
import ManageUsers from '../components/admin/ManageUsers';
import ManageSettings from '../components/admin/ManageSettings';
import { Product, BlogPost, User } from '../types';

interface AdminPanelPageProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  users: User[];
  adminCredentials: { email: string; pass: string };
  setAdminCredentials: React.Dispatch<React.SetStateAction<{ email: string; pass: string }>>;
  pageParams?: {
    tab?: string;
    editId?: number;
    editSlug?: string;
  };
}

type AdminTab = 'tools' | 'posts' | 'users' | 'settings';

const AdminPanelPage: React.FC<AdminPanelPageProps> = ({ products, setProducts, blogPosts, setBlogPosts, users, adminCredentials, setAdminCredentials, pageParams }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('tools');

  useEffect(() => {
    if (pageParams?.tab) {
      setActiveTab(pageParams.tab as AdminTab);
    }
  }, [pageParams]);

  const renderContent = () => {
    switch (activeTab) {
      case 'tools':
        return <ManageTools products={products} setProducts={setProducts} editIdOnLoad={pageParams?.editId} />;
      case 'posts':
        return <ManageBlogPosts blogPosts={blogPosts} setBlogPosts={setBlogPosts} editSlugOnLoad={pageParams?.editSlug} />;
      case 'users':
        return <ManageUsers users={users} />;
      case 'settings':
        return <ManageSettings adminCredentials={adminCredentials} setAdminCredentials={setAdminCredentials} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-light min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Admin Panel
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Manage your website's content and users.
          </p>
        </header>
        
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4 lg:w-1/5">
            <nav className="sticky top-24 bg-white p-4 rounded-lg border border-gray-200">
              <ul className="space-y-2">
                <li>
                  <button onClick={() => setActiveTab('tools')} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${activeTab === 'tools' ? 'bg-purple-100 text-primary' : 'text-gray-600 hover:bg-gray-100'}`}>
                    Manage Tools
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('posts')} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${activeTab === 'posts' ? 'bg-purple-100 text-primary' : 'text-gray-600 hover:bg-gray-100'}`}>
                    Manage Blog Posts
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('users')} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${activeTab === 'users' ? 'bg-purple-100 text-primary' : 'text-gray-600 hover:bg-gray-100'}`}>
                    Manage Users
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('settings')} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm font-medium ${activeTab === 'settings' ? 'bg-purple-100 text-primary' : 'text-gray-600 hover:bg-gray-100'}`}>
                    Settings
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          
          <main className="md:w-3/4 lg:w-4/5 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;
