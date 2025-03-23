import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sun, Moon, Sparkles, MessageSquare, BarChart3, PenTool, Target, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import WhyIndia from './components/WhyIndia';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Create from './pages/create';
import Demo from './pages/demo';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                {/* Hero Section */}
                <Hero /> 
                <Features />
                <Pricing />
                <WhyIndia />
              </main>
            }
          />
          <Route path="/create" element={<Create />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <ChatBot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;