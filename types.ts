import React from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  logoUrl: string;
  affiliateUrl: string;
  rating: number;
  tags: string[];
  sponsored?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

export interface User {
  email: string;
  password?: string; // For mock authentication
  age?: number;
  role: 'admin' | 'visitor';
}