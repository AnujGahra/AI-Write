import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the perfect plan for your content needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="₹999"
            description="Perfect for individuals and small teams"
            features={[
              "50,000 words per month",
              "10 team members",
              "Basic templates",
              "Email support",
              "API access"
            ]}
            buttonText="Start Free Trial"
            popular={false}
          />
          <PricingCard
            title="Professional"
            price="₹2,499"
            description="Ideal for growing businesses"
            features={[
              "150,000 words per month",
              "25 team members",
              "Advanced templates",
              "Priority support",
              "API access",
              "Custom templates",
              "Analytics dashboard"
            ]}
            buttonText="Get Started"
            popular={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For large organizations"
            features={[
              "Unlimited words",
              "Unlimited team members",
              "Custom templates",
              "24/7 support",
              "API access",
              "Custom integration",
              "Advanced analytics",
              "Dedicated account manager"
            ]}
            buttonText="Contact Sales"
            popular={false}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}> = ({ title, price, description, features, buttonText, popular }) => (
  <div className={`relative rounded-2xl p-8 ${
    popular 
      ? 'bg-blue-600 text-white shadow-xl scale-105' 
      : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
  }`}>
    {popular && (
      <span className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-semibold rounded-full">
        Most Popular
      </span>
    )}
    
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-sm opacity-80">/month</span>
    </div>
    <p className={`mb-6 ${popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>
      {description}
    </p>
    
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check size={20} className={`mr-2 ${popular ? 'text-blue-200' : 'text-blue-600 dark:text-blue-400'}`} />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
      popular
        ? 'bg-white text-blue-600 hover:bg-blue-50'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}>
      {buttonText}
    </button>
  </div>
);

export default Pricing;