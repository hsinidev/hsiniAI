import React from 'react';
import { privacyPolicyContent } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </header>
          <div 
            className="prose lg:prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: privacyPolicyContent }}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;