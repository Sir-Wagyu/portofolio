import React, { useState, useEffect } from 'react';
import './index.css'; // Import global styles

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Import data
import { personalInfo } from './data/portfolioData';

function App() {
      const [darkMode, setDarkMode] = useState(false);
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
            // Check for saved theme preference
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                  setDarkMode(savedTheme === 'dark');
            }

            // Simulate loading
            setTimeout(() => setIsLoading(false), 1500);
      }, []);

      useEffect(() => {
            // Apply theme to document
            if (darkMode) {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
            } else {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', 'light');
            }
      }, [darkMode]);

      const toggleDarkMode = () => {
            setDarkMode(!darkMode);
      };

      const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
            }
      };

      if (isLoading) {
            return (
                  <div className="fixed inset-0 bg-gray-50 dark:bg-slate-900 flex items-center justify-center z-50 transition-all duration-500">
                        <div className="text-center space-y-6">
                              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 animate-pulse">Loading Portfolio...</h2>
                        </div>
                  </div>
            );
      }

      return (
            <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 font-jakarta">
                  <Header
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                        scrollToSection={scrollToSection}
                        personalInfo={personalInfo}
                  />

                  <main className="pt-16">
                        <Hero scrollToSection={scrollToSection} />
                        <About />
                        <Projects />
                        <Skills />
                        <Contact />
                  </main>

                  <Footer scrollToSection={scrollToSection} personalInfo={personalInfo} />
            </div>
      );
}

export default App;
