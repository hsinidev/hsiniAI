
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { runChat } from '../services/geminiService';
import type { ChatMessage } from '../types';
import { SendIcon } from './icons/SendIcon';
import { CloseIcon } from './icons/CloseIcon';
import { BrainIcon } from './icons/BrainIcon';

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hello! How can I help you find the right digital tool today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isThinkingMode, setIsThinkingMode] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500); // Match animation duration
  };

  const handleSend = useCallback(async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const botResponseText = await runChat(inputValue, isThinkingMode);
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting. Please try again.",
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [inputValue, isLoading, isThinkingMode]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end items-end z-50 animate-fade-in">
      <div 
        className={`bg-white rounded-t-lg md:rounded-lg shadow-2xl w-full max-w-md h-[80vh] md:h-[70vh] flex flex-col m-0 md:m-6 ${isClosing ? 'animate-slide-out-down' : 'animate-slide-in-up'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="chatbot-title"
      >
        <header className="flex items-center justify-between p-4 border-b bg-light rounded-t-lg">
          <h2 id="chatbot-title" className="text-lg font-bold text-primary">AI Assistant</h2>
          <button onClick={handleClose} aria-label="Close chat" className="text-secondary hover:text-dark">
            <CloseIcon />
          </button>
        </header>

        <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex my-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-xl px-4 py-2 max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 text-dark'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-xl px-4 py-2 bg-gray-200 text-dark">
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <footer className="p-4 border-t bg-light">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-grow border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <button
              onClick={() => setIsThinkingMode(!isThinkingMode)}
              className={`p-2 rounded-full transition-colors ${isThinkingMode ? 'bg-purple-200 text-purple-700' : 'bg-gray-200 text-secondary hover:bg-gray-300'}`}
              title={`Thinking Mode: ${isThinkingMode ? 'ON' : 'OFF'}. For more complex questions.`}
            >
              <BrainIcon />
            </button>
            <button onClick={handleSend} disabled={isLoading} className="bg-primary text-white p-2 rounded-full hover:bg-blue-600 disabled:bg-secondary">
              <SendIcon />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Chatbot;
