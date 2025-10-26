
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoriesPage from './pages/CategoriesPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import FaqPage from './pages/FaqPage';
import AdminPanelPage from './pages/AdminPanelPage';
import Chatbot from './components/Chatbot';
import { products as initialProducts, blogPosts as initialBlogPosts } from './constants';
import { Product, BlogPost, User } from './types';
import { ChatIcon } from './components/icons/ChatIcon';
import LoginModal from './components/LoginModal';

type Page = 'home' | 'productDetail' | 'categories' | 'blogIndex' | 'blogPost' | 'privacy' | 'terms' | 'faq' | 'admin';

const App: React.FC = () => {
  // Page navigation state
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [pageParams, setPageParams] = useState<any>({});

  // Content state
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);

  // UI state
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Auth state
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [adminCredentials, setAdminCredentials] = useState({ email: 'admin', pass: '010203' });

  const handleNavigate = (page: Page, params: any = {}) => {
    // Prevent non-admins from accessing the admin panel
    if (page === 'admin' && currentUser?.role !== 'admin') {
      setCurrentPage('home');
      setPageParams({});
      return;
    }
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo(0, 0);
  };
  
  const handleAdminLogin = (email: string, pass: string) => {
    if (email.toLowerCase() === adminCredentials.email.toLowerCase() && pass === adminCredentials.pass) {
      const user: User = { email, role: 'admin' };
      setCurrentUser(user);
      setIsLoginModalOpen(false);
    } else {
      alert('Invalid admin credentials!');
    }
  };
  
  const handleVisitorLogin = (email: string, pass: string) => {
    const user = allUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);
    if (user) {
      setCurrentUser(user);
      setIsLoginModalOpen(false);
    } else {
      alert('Invalid visitor credentials!');
    }
  };

  const handleRegister = (email: string, pass: string, age: number) => {
    if (allUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        alert('An account with this email already exists.');
        return;
    }
    const newUser: User = { email, password: pass, age, role: 'visitor' };
    setAllUsers(prevUsers => [...prevUsers, newUser]);
    setCurrentUser(newUser); // Auto-login after registration
    setIsLoginModalOpen(false);
    alert('Registration successful! You are now logged in.');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    if (currentPage === 'admin') {
      handleNavigate('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage products={products} blogPosts={blogPosts} onNavigate={handleNavigate} />;
      case 'productDetail':
        const product = products.find(p => p.id === pageParams.id);
        if (!product) return <HomePage products={products} blogPosts={blogPosts} onNavigate={handleNavigate} />;
        return <ProductDetailPage product={product} onNavigate={handleNavigate} user={currentUser} />;
      case 'categories':
        return <CategoriesPage products={products} onNavigate={handleNavigate} />;
      case 'blogIndex':
        return <BlogIndexPage posts={blogPosts} onNavigate={handleNavigate} />;
      case 'blogPost':
        const post = blogPosts.find(p => p.slug === pageParams.slug);
        if (!post) return <BlogIndexPage posts={blogPosts} onNavigate={handleNavigate} />;
        return <BlogPostPage post={post} allPosts={blogPosts} onNavigate={handleNavigate} user={currentUser} />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfServicePage />;
      case 'faq':
        return <FaqPage />;
      case 'admin':
         if (currentUser?.role !== 'admin') return <HomePage products={products} blogPosts={blogPosts} onNavigate={handleNavigate} />;
        return <AdminPanelPage 
                  products={products}
                  setProducts={setProducts}
                  blogPosts={blogPosts}
                  setBlogPosts={setBlogPosts}
                  users={allUsers}
                  adminCredentials={adminCredentials}
                  setAdminCredentials={setAdminCredentials}
                  pageParams={pageParams}
               />;
      default:
        return <HomePage products={products} blogPosts={blogPosts} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-light text-dark">
      <Header 
        user={currentUser}
        onNavigate={handleNavigate} 
        onLoginClick={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <button 
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors z-40"
        aria-label="Open AI Assistant"
      >
        <ChatIcon />
      </button>
      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
      {isLoginModalOpen && <LoginModal onAdminLogin={handleAdminLogin} onVisitorLogin={handleVisitorLogin} onRegister={handleRegister} onClose={() => setIsLoginModalOpen(false)} />}
    </div>
  );
};

export default App;
