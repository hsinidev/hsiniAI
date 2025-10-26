import React, { useState } from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { LogoIcon } from './icons/LogoIcon';

interface LoginModalProps {
  onClose: () => void;
  onAdminLogin: (email: string, pass: string) => void;
  onVisitorLogin: (email: string, pass: string) => void;
  onRegister: (email: string, pass: string, age: number) => void;
}

type AuthTab = 'login' | 'register' | 'admin';

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onAdminLogin, onVisitorLogin, onRegister }) => {
  const [activeTab, setActiveTab] = useState<AuthTab>('login');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerRepeatPassword, setRegisterRepeatPassword] = useState('');
  const [registerAge, setRegisterAge] = useState('');

  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerPassword !== registerRepeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    const ageNum = parseInt(registerAge, 10);
    if (isNaN(ageNum) || ageNum <= 0) {
        alert("Please enter a valid age.");
        return;
    }
    onRegister(registerEmail, registerPassword, ageNum);
  };
  
  const handleVisitorLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVisitorLogin(loginEmail, loginPassword);
  };
  
  const handleAdminLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdminLogin(adminEmail, adminPassword);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'login':
        return (
          <form onSubmit={handleVisitorLoginSubmit} className="space-y-4">
             <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-purple-700">Login</button>
          </form>
        );
      case 'register':
        return (
           <form onSubmit={handleRegisterSubmit} className="space-y-4">
             <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700">Repeat Password</label>
                <input type="password" value={registerRepeatPassword} onChange={(e) => setRegisterRepeatPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input type="number" value={registerAge} onChange={(e) => setRegisterAge(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-purple-700">Register</button>
          </form>
        );
      case 'admin':
         return (
          <form onSubmit={handleAdminLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Admin User</label>
              <input type="text" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Admin Password</label>
              <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary" required />
            </div>
            <button type="submit" className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800">Admin Login</button>
          </form>
        );
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <CloseIcon />
        </button>
        <div className="p-8">
            <div className="text-center mb-6">
                <div className="inline-block mb-2">
                    <LogoIcon />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Welcome to hsini.ai</h2>
            </div>

            <div className="mb-6 border-b border-gray-200">
                <nav className="-mb-px flex space-x-4" aria-label="Tabs">
                    <button onClick={() => setActiveTab('login')} className={`${activeTab === 'login' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
                        Login
                    </button>
                    <button onClick={() => setActiveTab('register')} className={`${activeTab === 'register' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
                        Register
                    </button>
                    <button onClick={() => setActiveTab('admin')} className={`${activeTab === 'admin' ? 'border-gray-800 text-gray-800' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ml-auto`}>
                        Admin
                    </button>
                </nav>
            </div>
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;