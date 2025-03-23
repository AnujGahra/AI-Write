import React, { useState } from 'react';
import { Sparkles, Video } from 'lucide-react';
import axios from 'axios';

const Create: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loadingText, setLoadingText] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(false);

  // Mock AI text generation (replace with real API)
  const handleGenerateText = async () => {
    if (!prompt.trim()) return;
    setLoadingText(true);
    try {
      // Simulated API response (replace with real API call)
      const mockResponse = `Generated content for: "${prompt}". Our AI has crafted this engaging text for your blogs, social media, or ads!`;
      
      // Uncomment below for real OpenAI API integration (requires API key)
      /*
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 150,
        },
        {
          headers: {
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
            'Content-Type': 'application/json',
          },
        }
      );
      setGeneratedContent(response.data.choices[0].text);
      */
      
      setGeneratedContent(mockResponse);
    } catch (error) {
      console.error('Error generating text:', error);
      setGeneratedContent('Oops! Something went wrong. Try again.');
    } finally {
      setLoadingText(false);
    }
  };

  // Mock video generation (replace with real API)
  const handleGenerateVideo = async () => {
    if (!prompt.trim()) return;
    setLoadingVideo(true);
    try {
      // Simulated video generation (replace with real API like Synthesia)
      const mockVideoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder video
      setTimeout(() => {
        setVideoUrl(mockVideoUrl);
        setLoadingVideo(false);
      }, 2000); // Simulate processing time

      // Example with Synthesia API (requires API key and setup):
      /*
      const response = await axios.post(
        'https://api.synthesia.io/v1/videos',
        {
          script: prompt,
          template: 'default',
        },
        {
          headers: {
            'Authorization': `Bearer YOUR_SYNTHESIA_API_KEY`,
            'Content-Type': 'application/json',
          },
        }
      );
      setVideoUrl(response.data.videoUrl);
      */
    } catch (error) {
      console.error('Error generating video:', error);
      setVideoUrl('');
      alert('Video generation failed. Please try again.');
    } finally {
      setLoadingVideo(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Create Content{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Instantly
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prompt Input */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Your Prompt
            </h2>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your content idea (e.g., 'Write a blog post about AI tools' or 'Create a video about travel')"
              className="w-full h-40 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleGenerateText}
                disabled={loadingText}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center disabled:opacity-50"
              >
                <Sparkles className="mr-2" size={20} />
                {loadingText ? 'Generating...' : 'Generate Text'}
              </button>
              <button
                onClick={handleGenerateVideo}
                disabled={loadingVideo}
                className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center disabled:opacity-50"
              >
                <Video className="mr-2" size={20} />
                {loadingVideo ? 'Generating...' : 'Generate Video'}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Generated Output
            </h2>
            <div className="w-full space-y-4">
              {/* Generated Text */}
              <div className="h-40 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white overflow-y-auto">
                {generatedContent || 'Your AI-generated text will appear here...'}
              </div>
              {/* Generated Video */}
              {videoUrl ? (
                <iframe
                  className="w-full h-40 rounded-lg"
                  src={videoUrl}
                  title="Generated Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="h-40 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center">
                  Your AI-generated video will appear here...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;