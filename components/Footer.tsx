import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}


const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-50 text-gray-500 mt-auto w-full border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} hsini.ai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="text-sm hover:text-primary transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="text-sm hover:text-primary transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate('faq')} className="text-sm hover:text-primary transition-colors">FAQ</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;