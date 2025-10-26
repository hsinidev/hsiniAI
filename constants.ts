
import React from 'react';
import { Product, BlogPost } from './types';

import { WritingIcon } from './components/icons/WritingIcon';
import { ImageEditingIcon } from './components/icons/ImageEditingIcon';
import { VideoIcon } from './components/icons/VideoIcon';
import { CodingIcon } from './components/icons/CodingIcon';
import { CreativeDesignIcon } from './components/icons/CreativeDesignIcon';
import { ProductivityIcon } from './components/icons/ProductivityIcon';
import { ChatbotsIcon } from './components/icons/ChatbotsIcon';
import { EducationIcon } from './components/icons/EducationIcon';
import { VoiceIcon } from './components/icons/VoiceIcon';
import { BusinessIcon } from './components/icons/BusinessIcon';
import { DetectionIcon } from './components/icons/DetectionIcon';
import { MusicIcon } from './components/icons/MusicIcon';

export const products: Product[] = [
  {
    id: 1,
    name: 'Jasper AI',
    category: 'AI Writing',
    description: 'AI-powered content creation for blogs, social media, and marketing copy.',
    longDescription: `
      <h2>Unleash Your Creative Potential with Jasper</h2>
      <p>Jasper is the generative AI platform for business that helps your team create content tailored for your brand 10X faster, wherever you work online.</p>
      <p>Whether you're writing blog posts, social media updates, or marketing emails, Jasper helps you break through creative blocks and produce high-quality content in minutes.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Generate blog posts, stories, and even books with ease.</li>
        <li>Write and refine marketing copy for ads, emails, and websites that converts.</li>
        <li>Improve your existing content with AI-powered rewriting and rephrasing.</li>
        <li>Integrates with your favorite tools like Google Docs, WordPress, and more.</li>
      </ul>`,
    logoUrl: 'https://placehold.co/64x64/F472B6/FFFFFF/png?text=J',
    affiliateUrl: 'https://www.jasper.ai/',
    rating: 4.8,
    tags: ['AI Writing', 'Marketing', 'Productivity', 'Featured'],
    sponsored: true,
  },
  {
    id: 2,
    name: 'Midjourney',
    category: 'AI Image Generation',
    description: 'Generate stunning AI art and images from simple text prompts.',
    longDescription: `
      <h2>Visualize Your Imagination with Midjourney</h2>
      <p>Midjourney is an independent research lab that produces an artificial intelligence program that creates images from textual descriptions, similar to OpenAI's DALL-E and Stable Diffusion.</p>
      <p>It's known for creating highly artistic and coherent images, making it a favorite among artists and designers. All you need is your imagination and a Discord account to get started turning your words into beautiful pictures.</p>`,
    logoUrl: 'https://placehold.co/64x64/818CF8/FFFFFF/png?text=M',
    affiliateUrl: 'https://www.midjourney.com/',
    rating: 4.9,
    tags: ['AI Image Generation', 'Creative Design', 'Featured'],
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    category: 'AI Coding',
    description: 'Your AI pair programmer that helps you write better code, faster.',
    longDescription: `
      <h2>Your AI Pair Programmer</h2>
      <p>GitHub Copilot uses the OpenAI Codex to suggest code and entire functions in real-time, right from your editor. Get suggestions for whole lines or entire functions right inside your editor.</p>
      <p>Spend less time creating boilerplate and repetitive code patterns and more time on what matters: building great software.</p>`,
    logoUrl: 'https://placehold.co/64x64/10B981/FFFFFF/png?text=GC',
    affiliateUrl: 'https://github.com/features/copilot',
    rating: 4.7,
    tags: ['AI Coding', 'Development', 'Productivity'],
  },
  {
    id: 4,
    name: 'Synthesia',
    category: 'AI Video Generation',
    description: 'Create professional AI-powered videos from text in minutes.',
    longDescription: "<p>Synthesia is an AI video creation platform that enables you to create professional videos without microphones, cameras, or actors. Simply type in your text, and our AI avatars will narrate it for you in over 120 languages.</p>",
    logoUrl: 'https://placehold.co/64x64/3B82F6/FFFFFF/png?text=S',
    affiliateUrl: 'https://www.synthesia.io/',
    rating: 4.6,
    tags: ['AI Video Generation', 'Marketing', 'Education'],
  },
  {
    id: 5,
    name: 'Canva',
    category: 'Creative Design',
    description: 'A user-friendly design tool for creating social media graphics, presentations, and more.',
    longDescription: "<p>Canva makes design simple for everyone. Create designs for Web or print: blog graphics, presentations, Facebook covers, flyers, posters, invitations and so much more.</p>",
    logoUrl: 'https://placehold.co/64x64/A78BFA/FFFFFF/png?text=C',
    affiliateUrl: 'https://www.canva.com/',
    rating: 4.9,
    tags: ['Creative Design', 'Marketing', 'Business'],
  },
  {
    id: 6,
    name: 'Notion AI',
    category: 'Productivity',
    description: 'AI features integrated into your Notion workspace for summarization, writing, and brainstorming.',
    longDescription: "<p>Leverage the power of AI in your connected workspace. Work faster. Write better. Think bigger. Notion AI can summarize your notes, brainstorm ideas, translate text, and much more, all without leaving Notion.</p>",
    logoUrl: 'https://placehold.co/64x64/374151/FFFFFF/png?text=N',
    affiliateUrl: 'https://www.notion.so/product/ai',
    rating: 4.7,
    tags: ['Productivity', 'AI Writing', 'Business'],
  },
  {
    id: 7,
    name: 'Chatbot.com',
    category: 'AI Chatbots',
    description: 'Build and launch chatbots for your website to engage customers and automate support.',
    longDescription: "<p>Create a customer service chatbot to automate your communication. Engage visitors, capture leads and grow your business with our all-in-one platform for website chatbots.</p>",
    logoUrl: 'https://placehold.co/64x64/F59E0B/FFFFFF/png?text=CB',
    affiliateUrl: 'https://www.chatbot.com/',
    rating: 4.5,
    tags: ['AI Chatbots', 'Customer Support', 'Marketing'],
  },
  {
    id: 8,
    name: 'Coursera',
    category: 'Education',
    description: 'Online learning platform with courses from top universities and companies.',
    longDescription: "<p>Coursera partners with more than 275 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>",
    logoUrl: 'https://placehold.co/64x64/2563EB/FFFFFF/png?text=C',
    affiliateUrl: 'https://www.coursera.org/',
    rating: 4.8,
    tags: ['Education', 'E-Learning', 'Business'],
  },
  {
    id: 9,
    name: 'Murf AI',
    category: 'AI Voice Generation',
    description: 'Generate realistic text-to-speech voiceovers with a versatile AI voice generator.',
    longDescription: "<p>Go from text to speech with a versatile AI voice generator. Murf offers a selection of 120+ text to speech voices in 20+ languages. Create studio-quality voice overs in minutes.</p>",
    logoUrl: 'https://placehold.co/64x64/EC4899/FFFFFF/png?text=M',
    affiliateUrl: 'https://murf.ai/',
    rating: 4.6,
    tags: ['AI Voice Generation', 'Video', 'Content Creation'],
  },
  {
    id: 10,
    name: 'Originality.AI',
    category: 'AI Detection',
    description: 'The most accurate AI and plagiarism checker for serious content publishers.',
    longDescription: "<p>Originality.AI is built to help web publishers know what content was written by a human and what was created by an AI tool. It accurately detects content from GPT-3, GPT-4, and other language models.</p>",
    logoUrl: 'https://placehold.co/64x64/EF4444/FFFFFF/png?text=O',
    affiliateUrl: 'https://originality.ai/',
    rating: 4.4,
    tags: ['AI Detection', 'SEO', 'AI Writing'],
  },
  {
    id: 11,
    name: 'Suno AI',
    category: 'AI Music Generation',
    description: 'Create original music and songs from text prompts, regardless of musical ability.',
    longDescription: "<p>Suno is building a future where anyone can make great music. Whether you're a shower singer or a charting artist, we break down the barriers between you and the song you dream of making.</p>",
    logoUrl: 'https://placehold.co/64x64/14B8A6/FFFFFF/png?text=SA',
    affiliateUrl: 'https://suno.com/',
    rating: 4.7,
    tags: ['AI Music Generation', 'Creative', 'Fun'],
  },
  {
    id: 12,
    name: 'Looka',
    category: 'Creative Design',
    description: 'Use AI to design a custom logo and build a brand you love.',
    longDescription: "<p>Looka is an AI-powered platform that provides business owners with a quick and affordable way to create a beautiful brand identity. From logo design to branding kits, Looka has you covered.</p>",
    logoUrl: 'https://placehold.co/64x64/F97316/FFFFFF/png?text=L',
    affiliateUrl: 'https://looka.com/',
    rating: 4.5,
    tags: ['Creative Design', 'Branding', 'Business', 'Featured'],
  },
  {
    id: 13,
    name: 'Copy.ai',
    category: 'AI Writing',
    description: 'Generate marketing copy and content with AI. From blog posts to social media captions.',
    longDescription: `<p>Copy.ai is a suite of copywriting tools for busy marketers. It can help you write everything from social media posts to full-length blog articles.</p>`,
    logoUrl: 'https://placehold.co/64x64/E879F9/FFFFFF/png?text=Ca',
    affiliateUrl: 'https://www.copy.ai/',
    rating: 4.6,
    tags: ['AI Writing', 'Marketing', 'Featured'],
  },
  {
    id: 14,
    name: 'Writesonic',
    category: 'AI Writing',
    description: 'AI writer that creates SEO-friendly content for blogs, ads, emails, and websites.',
    longDescription: `<p>Writesonic is an AI writing and image generation platform with a mission to empower everyone to create anything they can imagine.</p>`,
    logoUrl: 'https://placehold.co/64x64/F0ABFC/FFFFFF/png?text=W',
    affiliateUrl: 'https://writesonic.com/',
    rating: 4.7,
    tags: ['AI Writing', 'SEO', 'Marketing'],
  },
  {
    id: 15,
    name: 'RunwayML',
    category: 'AI Video Generation',
    description: 'A suite of AI magic tools for video editing and generation. Text to video, image to video, and more.',
    longDescription: `<p>Runway is an applied AI research company shaping the next era of art, entertainment and human creativity. Their tools allow for video generation, editing, and much more.</p>`,
    logoUrl: 'https://placehold.co/64x64/9333EA/FFFFFF/png?text=R',
    affiliateUrl: 'https://runwayml.com/',
    rating: 4.8,
    tags: ['AI Video Generation', 'Creative Design', 'Featured'],
  },
  {
    id: 16,
    name: 'Descript',
    category: 'AI Video Generation',
    description: 'All-in-one audio and video editor that makes editing as easy as a word doc.',
    longDescription: `<p>Descript is a collaborative audio/video editor that works like a doc. It includes transcription, a screen recorder, publishing, and some mind-bendingly useful AI tools.</p>`,
    logoUrl: 'https://placehold.co/64x64/8B5CF6/FFFFFF/png?text=D',
    affiliateUrl: 'https://www.descript.com/',
    rating: 4.7,
    tags: ['AI Video Generation', 'Podcasting', 'Productivity'],
  },
  {
    id: 17,
    name: 'ElevenLabs',
    category: 'AI Voice Generation',
    description: 'Generate high-quality spoken audio in any voice, style and language with the most powerful text to speech tool.',
    longDescription: `<p>ElevenLabs is a voice technology research company, developing the most compelling AI speech software for publishers and creators.</p>`,
    logoUrl: 'https://placehold.co/64x64/2DD4BF/FFFFFF/png?text=EL',
    affiliateUrl: 'https://elevenlabs.io/',
    rating: 4.9,
    tags: ['AI Voice Generation', 'Audio', 'Featured'],
  },
  {
    id: 18,
    name: 'SurferSEO',
    category: 'SEO',
    description: 'A content intelligence tool that helps you write perfectly optimized articles for search engines.',
    longDescription: `<p>Surfer analyzes over 500 on-page signals, compares your content against top-ranking pages, and provides a data-driven SEO blueprint.</p>`,
    logoUrl: 'https://placehold.co/64x64/34D399/FFFFFF/png?text=SS',
    affiliateUrl: 'https://surferseo.com/',
    rating: 4.8,
    tags: ['SEO', 'AI Writing', 'Marketing'],
  },
  {
    id: 19,
    name: 'Perplexity AI',
    category: 'Productivity',
    description: 'An AI-powered answer engine that provides direct answers to questions with cited sources.',
    longDescription: `<p>Perplexity AI is a conversational search engine that uses large language models to deliver accurate and sourced answers. It's a powerful tool for research and learning.</p>`,
    logoUrl: 'https://placehold.co/64x64/60A5FA/FFFFFF/png?text=P',
    affiliateUrl: 'https://www.perplexity.ai/',
    rating: 4.7,
    tags: ['Productivity', 'Research', 'Education', 'Featured'],
  },
  {
    id: 20,
    name: 'Claude',
    category: 'AI Chatbots',
    description: 'A next-generation AI assistant for your tasks, no matter the scale. From Anthropic.',
    longDescription: `<p>Claude is a family of large language models developed by Anthropic. It's designed to be helpful, harmless, and honest, making it a great partner for brainstorming and writing.</p>`,
    logoUrl: 'https://placehold.co/64x64/FBBF24/FFFFFF/png?text=C',
    affiliateUrl: 'https://claude.ai/',
    rating: 4.8,
    tags: ['AI Chatbots', 'AI Writing', 'Productivity'],
  },
  {
    id: 21,
    name: 'Gamma.app',
    category: 'Creative Design',
    description: 'A new medium for presenting ideas. Create beautiful and engaging presentations with AI.',
    longDescription: `<p>Tired of slide decks? Gamma helps you create beautiful presentations, documents, and webpages in minutes using AI. Just start writing.</p>`,
    logoUrl: 'https://placehold.co/64x64/FB923C/FFFFFF/png?text=G',
    affiliateUrl: 'https://gamma.app/',
    rating: 4.6,
    tags: ['Creative Design', 'Presentations', 'Business', 'Featured'],
  },
  {
    id: 22,
    name: 'DALL-E 3',
    category: 'AI Image Generation',
    description: 'An AI system by OpenAI that can create realistic images and art from a description in natural language.',
    longDescription: `<p>DALL-E 3, integrated with ChatGPT, can generate highly detailed and nuanced images from your text prompts, understanding more context than ever before.</p>`,
    logoUrl: 'https://placehold.co/64x64/4ADE80/FFFFFF/png?text=D3',
    affiliateUrl: 'https://openai.com/dall-e-3',
    rating: 4.8,
    tags: ['AI Image Generation', 'Creative Design'],
  },
  {
    id: 23,
    name: 'Fireflies.ai',
    category: 'Productivity',
    description: 'AI assistant for your meetings. Records, transcribes, and summarizes your voice conversations.',
    longDescription: `<p>Fireflies.ai joins your meetings to automatically take notes and create transcripts. Search, share, and collaborate on meeting notes effortlessly.</p>`,
    logoUrl: 'https://placehold.co/64x64/F87171/FFFFFF/png?text=F',
    affiliateUrl: 'https://fireflies.ai/',
    rating: 4.7,
    tags: ['Productivity', 'Business', 'Meetings'],
  },
  {
    id: 24,
    name: 'QuillBot',
    category: 'AI Writing',
    description: 'An AI-powered paraphrasing tool that enhances your writing.',
    longDescription: `<p>QuillBot's paraphraser can rewrite any sentence, paragraph, or article using state-of-the-art AI. It also has a grammar checker, summarizer, and citation generator.</p>`,
    logoUrl: 'https://placehold.co/64x64/4ADE80/FFFFFF/png?text=QB',
    affiliateUrl: 'https://quillbot.com/',
    rating: 4.5,
    tags: ['AI Writing', 'Education', 'Productivity'],
  },
  {
    id: 25,
    name: 'Zapier',
    category: 'Productivity',
    description: 'Automate your work by connecting your apps and services. Easy automation for busy people.',
    longDescription: `<p>Zapier moves info between your web apps automatically, so you can focus on your most important work. Connect over 5,000 apps without writing any code.</p>`,
    logoUrl: 'https://placehold.co/64x64/FB923C/FFFFFF/png?text=Z',
    affiliateUrl: 'https://zapier.com/',
    rating: 4.9,
    tags: ['Productivity', 'Automation', 'Business', 'Featured'],
  },
  {
    id: 26,
    name: 'Tome',
    category: 'Creative Design',
    description: 'Shape & share ideas with AI. The future of storytelling for work.',
    longDescription: `<p>Tome is the AI-powered storytelling format for work. It helps you build powerful stories with any type of content: video, live data, prototypes, and more.</p>`,
    logoUrl: 'https://placehold.co/64x64/6B7280/FFFFFF/png?text=T',
    affiliateUrl: 'https://tome.app/',
    rating: 4.6,
    tags: ['Creative Design', 'Presentations', 'Business'],
  },
  {
    id: 27,
    name: 'Luma AI',
    category: 'Creative Design',
    description: 'Capture the world in lifelike 3D with your phone. A new era of 3D capture and creation.',
    longDescription: `<p>Luma AI allows you to create incredible, photorealistic 3D models and scenes using your iPhone. It's a revolutionary tool for artists, designers, and creators.</p>`,
    logoUrl: 'https://placehold.co/64x64/A5B4FC/FFFFFF/png?text=LA',
    affiliateUrl: 'https://lumalabs.ai/',
    rating: 4.8,
    tags: ['Creative Design', '3D', 'Mobile'],
  },
  {
    id: 28,
    name: 'Otter.ai',
    category: 'Productivity',
    description: 'Generate real-time notes for meetings, interviews, lectures, and other important voice conversations.',
    longDescription: `<p>Otter.ai uses AI to write automatic meeting notes with real-time transcription, recorded audio, and automated summaries. It helps teams stay aligned and productive.</p>`,
    logoUrl: 'https://placehold.co/64x64/3B82F6/FFFFFF/png?text=Oa',
    affiliateUrl: 'https://otter.ai/',
    rating: 4.6,
    tags: ['Productivity', 'Business', 'Transcription'],
  },
  {
    id: 29,
    name: 'Semrush',
    category: 'SEO',
    description: 'All-in-one marketing toolkit for digital marketing professionals.',
    longDescription: `<p>Semrush is a leading online visibility management SaaS platform that enables businesses to run SEO, PPC, content, social media and competitive research campaigns.</p>`,
    logoUrl: 'https://placehold.co/64x64/F97316/FFFFFF/png?text=Se',
    affiliateUrl: 'https://www.semrush.com/',
    rating: 4.8,
    tags: ['SEO', 'Marketing', 'Business'],
  },
  {
    id: 30,
    name: 'Ahrefs',
    category: 'SEO',
    description: 'An all-in-one SEO toolset for growing your search traffic, researching your competitors and monitoring your niche.',
    longDescription: `<p>Ahrefs helps you to rank higher and get more traffic. From keyword research to backlink analysis, Ahrefs has the tools you need to succeed at SEO.</p>`,
    logoUrl: 'https://placehold.co/64x64/2563EB/FFFFFF/png?text=A',
    affiliateUrl: 'https://ahrefs.com/',
    rating: 4.9,
    tags: ['SEO', 'Marketing', 'Business'],
  },
  {
    id: 31,
    name: 'Stable Diffusion',
    category: 'AI Image Generation',
    description: 'A deep learning, text-to-image model released by Stability AI. It is primarily used to generate detailed images.',
    longDescription: `<p>Stable Diffusion is a powerful open-source image generation model that can be run locally or via various online services. It's known for its flexibility and strong community.</p>`,
    logoUrl: 'https://placehold.co/64x64/7E22CE/FFFFFF/png?text=SD',
    affiliateUrl: 'https://stability.ai/',
    rating: 4.7,
    tags: ['AI Image Generation', 'Open Source', 'Creative Design'],
  },
  {
    id: 32,
    name: 'Make',
    category: 'Productivity',
    description: 'A visual platform that lets you design, build, and automate anything — from tasks and workflows to apps and systems.',
    longDescription: `<p>Make (formerly Integromat) is a powerful integration platform that allows you to connect apps and automate workflows using a beautiful, no-code visual builder.</p>`,
    logoUrl: 'https://placehold.co/64x64/000000/FFFFFF/png?text=M',
    affiliateUrl: 'https://www.make.com/',
    rating: 4.8,
    tags: ['Productivity', 'Automation', 'Business'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-5-ai-writing-tools',
    title: 'The Top 5 AI Writing Assistants to Boost Your Productivity in 2024',
    excerpt: 'Discover the best AI writing tools that can help you create content faster, overcome writer\'s block, and improve the quality of your work. We review Jasper, Copy.ai, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1677756229131-627346ac4348?q=80&w=800&auto=format&fit=crop',
    content: `
      <p>In the age of digital content, speed and quality are paramount. AI writing assistants have emerged as game-changers for marketers, bloggers, and business owners. This post breaks down the top 5 tools that are revolutionizing content creation.</p>
      <p>From generating blog post ideas to writing entire articles, these tools leverage powerful AI to streamline your workflow. We'll explore the key features, pricing, and ideal use cases for each, so you can choose the perfect assistant for your needs.</p>`,
  },
  {
    slug: 'ai-image-generation-beginners-guide',
    title: 'A Beginner\'s Guide to AI Image Generation with Midjourney',
    excerpt: 'Ever wanted to turn your words into stunning works of art? This guide will walk you through the basics of using Midjourney, one of the most popular AI image generators available today.',
    imageUrl: 'https://images.unsplash.com/photo-1677756229252-b0870b20665b?q=80&w=800&auto=format&fit=crop',
    content: "<p>AI image generation can seem intimidating, but tools like Midjourney make it surprisingly accessible. This tutorial will cover everything you need to know to get started, from setting up your Discord account to crafting effective prompts that bring your vision to life.</p>",
  },
  {
    slug: 'how-ai-is-changing-seo',
    title: 'How AI is Changing the Game for SEO and Digital Marketing',
    excerpt: 'Artificial intelligence is no longer a futuristic concept—it\'s a tool that top marketers are using right now to get ahead. Learn how AI is impacting keyword research, content strategy, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=800&auto=format&fit=crop',
    content: "<p>From automated content optimization to predictive analytics, AI is transforming the landscape of Search Engine Optimization. We'll delve into the practical applications of AI in SEO and show you how to leverage these technologies for a competitive edge.</p>",
  },
   {
    slug: 'automate-your-workflow-with-ai',
    title: '5 Ways to Automate Your Workflow Using AI Productivity Tools',
    excerpt: 'Feeling overwhelmed with repetitive tasks? Discover how AI can help you automate your to-do list, manage your time more effectively, and focus on what truly matters in your business.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    content: "<p>This article explores five practical ways you can integrate AI productivity tools like Notion AI and others into your daily routine. From summarizing long documents to drafting emails, learn how to reclaim your time and boost your efficiency.</p>",
  },
];

export const myTools = [
  { name: 'Jasper AI', logoUrl: 'https://placehold.co/64x64/F472B6/FFFFFF/png?text=J' },
  { name: 'Midjourney', logoUrl: 'https://placehold.co/64x64/818CF8/FFFFFF/png?text=M' },
  { name: 'Synthesia', logoUrl: 'https://placehold.co/64x64/3B82F6/FFFFFF/png?text=S' },
  { name: 'GitHub Copilot', logoUrl: 'https://placehold.co/64x64/10B981/FFFFFF/png?text=GC' },
  { name: 'Notion AI', logoUrl: 'https://placehold.co/64x64/374151/FFFFFF/png?text=N' },
  { name: 'Canva', logoUrl: 'https://placehold.co/64x64/A78BFA/FFFFFF/png?text=C' },
];

export const myToolsFilters = ['All', 'Popular', 'Free', 'Writing', 'Design'];

export const categories = [
  { name: 'Writing', count: 3, Icon: WritingIcon, filterTag: 'AI Writing' },
  { name: 'Image Generation', count: 1, Icon: ImageEditingIcon, filterTag: 'AI Image Generation' },
  { name: 'Video Generation', count: 1, Icon: VideoIcon, filterTag: 'AI Video Generation' },
  { name: 'Coding', count: 1, Icon: CodingIcon, filterTag: 'AI Coding' },
  { name: 'Creative Design', count: 3, Icon: CreativeDesignIcon, filterTag: 'Creative Design' },
  { name: 'Productivity', count: 3, Icon: ProductivityIcon, filterTag: 'Productivity' },
  { name: 'Chatbots', count: 1, Icon: ChatbotsIcon, filterTag: 'AI Chatbots' },
  { name: 'Education', count: 1, Icon: EducationIcon, filterTag: 'Education' },
  { name: 'Voice Generation', count: 1, Icon: VoiceIcon, filterTag: 'AI Voice Generation' },
  { name: 'Business', count: 4, Icon: BusinessIcon, filterTag: 'Business' },
  { name: 'AI Detection', count: 1, Icon: DetectionIcon, filterTag: 'AI Detection' },
  { name: 'Music Generation', count: 1, Icon: MusicIcon, filterTag: 'AI Music Generation' },
];

export const faqData = [
  {
    question: 'What is hsini.ai?',
    answer: 'hsini.ai is an affiliate website dedicated to showcasing the best AI tools and digital products. We provide reviews, tutorials, and guides to help you find the right tools for your needs.',
  },
  {
    question: 'How do you choose the products to feature?',
    answer: 'Our team of experts carefully researches and tests each product. We select tools based on their quality, features, user experience, and overall value. We aim to feature products that we believe can genuinely help our audience.',
  },
  {
    question: 'Are the tools listed here free?',
    answer: 'We feature a mix of free, freemium, and paid tools. Each product listing and review will provide details about its pricing model so you can make an informed decision.',
  },
  {
    question: 'How does this site make money?',
    answer: 'hsini.ai is an affiliate marketing website. This means if you click on a link to a product and make a purchase, we may earn a small commission at no extra cost to you. This helps us keep the site running and continue providing valuable content.',
  },
  {
    question: 'Can I submit a tool to be featured on your site?',
    answer: 'Yes! We are always on the lookout for new and innovative tools. Please use the "Submit" link in our navigation to provide details about your product, and our team will review it for potential inclusion.',
  },
];

export const privacyPolicyContent = `
  <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
  <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
  <h2>Collecting and Using Your Personal Data</h2>
  <h3>Types of Data Collected</h3>
  <h4>Personal Data</h4>
  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Usage Data.</p>
  <h4>Usage Data</h4>
  <p>Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
  <h2>Contact Us</h2>
  <p>If you have any questions about this Privacy Policy, You can contact us by email: privacy@hsini.ai</p>
`;

export const termsOfServiceContent = `
  <p>Please read these terms and conditions carefully before using Our Service.</p>
  <h2>Acknowledgment</h2>
  <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
  <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
  <h2>Intellectual Property</h2>
  <p>The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the country and foreign countries.</p>
  <h2>Links to Other Websites</h2>
  <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
  <h2>Contact Us</h2>
  <p>If you have any questions about these Terms, You can contact us by email: terms@hsini.ai</p>
`;
