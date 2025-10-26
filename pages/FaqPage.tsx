import React from 'react';
import FaqItem from '../components/FaqItem';
import { faqData } from '../constants';

const FaqPage: React.FC = () => {
  return (
    <div className="bg-light py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Have questions? We've got answers.
            </p>
          </header>
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;