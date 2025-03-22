import React from 'react';
import { Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Transform Your Content with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {' '}AI-Powered Writing
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-12">
            Create engaging content for blogs, social media, and ads in minutes with our advanced AI technology.
            Perfect for businesses of all sizes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink to="/create">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center">
                <Sparkles className="mr-2" size={20} />
                Start Creating for Free
              </button>
            </NavLink>
            <NavLink to="/demo">
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all">
                Watch Demo
              </button>
            </NavLink>
          </div>
          
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <Stat number="10x" text="Faster Content Creation" />
            <Stat number="50+" text="Content Types" />
            <Stat number="100k+" text="Active Users" />
            <Stat number="99%" text="Satisfaction Rate" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </div>
  );
};

const Stat: React.FC<{ number: string; text: string }> = ({ number, text }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{number}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{text}</div>
  </div>
);

export default Hero;