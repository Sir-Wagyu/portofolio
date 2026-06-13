import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css'; // Import global styles
import AOS from 'aos';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ProjectDetail from './components/ProjectDetail';

// Import data
import { personalInfo } from './data/portfolioData';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }

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

    AOS.refresh();
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
      <LoadingSpinner></LoadingSpinner>
    );
  }

  // Home Page Component
  const HomePage = () => (
    <>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
        personalInfo={personalInfo}
      />

      <main className="pt-16">
        <Hero scrollToSection={scrollToSection} />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} personalInfo={personalInfo} />
    </>
  );

  const Layout = () => (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 font-jakarta">
      <Outlet />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: "project/:id",
          element: <ProjectDetail />
        },
        {
          path: "about",
          element: <About />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
