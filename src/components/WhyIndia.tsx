import React from 'react';
import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';

const WhyIndia = () => {
  return (
    <section id="why-india" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose AI.Write for Your Business in India?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Empowering Indian businesses with affordable AI-powered content solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80"
              alt="Modern office in India"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
          </div>

          <div className="space-y-8">
            <Reason
              icon={<TrendingUp />}
              title="Growing Digital Presence"
              description="India's digital transformation is creating unprecedented demand for quality content"
            />
            <Reason
              icon={<Users />}
              title="Massive Market Potential"
              description="Access to over 50 million SMEs and a rapidly growing startup ecosystem"
            />
            <Reason
              icon={<DollarSign />}
              title="Cost-Effective Solution"
              description="Affordable pricing tailored for the Indian market, saving up to 70% on content creation costs"
            />
            <Reason
              icon={<Globe />}
              title="Local Understanding"
              description="AI trained on Indian context and multiple regional languages"
            />
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <Stat number="500M+" text="Internet Users" />
            <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
            <Stat number="50M+" text="SMEs" />
            <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
            <Stat number="71%" text="Digital Adoption" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Reason: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const Stat: React.FC<{ number: string; text: string }> = ({ number, text }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{number}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{text}</div>
  </div>
);

export default WhyIndia;