import React from 'react';

const DemoPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          See the Magic of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            AI Writing
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
          Watch how our AI transforms your ideas into stunning content in minutes!
        </p>

        {/* Video Placeholder */}
        <div className="relative w-full max-w-4xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-96"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your demo video URL
            title="AI Writing Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="/create"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Try It Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </div>
  );
};

export default DemoPage;