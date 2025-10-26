import React, { useState } from 'react';
import { LogoIcon } from './icons/LogoIcon';
import { SearchIcon } from './icons/SearchIcon';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  onNavigate: (page: string, params?: any) => void;
  onLoginClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onNavigate, onLoginClick, onLogout }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
              <LogoIcon />
              <span className="font-bold text-lg text-gray-800">hsini.ai</span>
            </button>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => onNavigate('home')} className="text-sm font-medium text-gray-500 hover:text-primary">Home</button>
              <button onClick={() => onNavigate('categories')} className="text-sm font-medium text-gray-500 hover:text-primary">Categories</button>
              <button onClick={() => onNavigate('blogIndex')} className="text-sm font-medium text-gray-500 hover:text-primary">Blog</button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="search"
                placeholder="Search tools..."
                className="bg-light border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="text-gray-400 h-5 w-5" />
              </div>
            </div>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-600 hidden md:block">{user.email}</span>
                 {user.role === 'admin' && (
                    <button 
                      onClick={() => onNavigate('admin')}
                      className="text-sm font-medium text-gray-500 hover:text-primary"
                    >
                      Admin Panel
                    </button>
                 )}
                <button 
                  onClick={onLogout}
                  className="text-sm font-medium bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;