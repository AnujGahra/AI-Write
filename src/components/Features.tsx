import React from 'react';
import { PenTool, Target, BarChart3, MessageSquare, Zap, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful AI Features for Modern Content Creation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to create engaging content at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<PenTool />}
            title="AI Content Generator"
            description="Generate high-quality content for blogs, social media, and ads in seconds"
          />
          <FeatureCard
            icon={<Target />}
            title="SEO Optimization"
            description="Built-in SEO tools to help your content rank higher in search results"
          />
          <FeatureCard
            icon={<BarChart3 />}
            title="Analytics Dashboard"
            description="Track your content performance with detailed analytics and insights"
          />
          <FeatureCard
            icon={<MessageSquare />}
            title="Smart Chat Support"
            description="24/7 AI-powered chat support to help you with any questions"
          />
          <FeatureCard
            icon={<Zap />}
            title="Fast Generation"
            description="Generate multiple pieces of content simultaneously"
          />
          <FeatureCard
            icon={<Shield />}
            title="Plagiarism Free"
            description="100% original content guaranteed with our advanced AI"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all transform hover:-translate-y-1">
    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

export default Features;