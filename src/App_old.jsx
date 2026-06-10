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

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-50 dark:bg-slate-900 flex items-center justify-center z-50 transition-all duration-500">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto"></div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 animate-pulse">Loading Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300" style={{ fontFamily: 'Plus Jakarta Sans, system-ui, sans-serif' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">💻</span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">{personalInfo.name.split(' ')[0]}</h2>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium">Contact</button>
            </nav>
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
              onClick={toggleDarkMode}
            >
              <span className="text-lg">{darkMode ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slideLeft">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl animate-bounce">👋</span>
                  <span className="text-lg text-gray-600 dark:text-gray-300 font-medium">Hello, I'm</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {personalInfo.name.split(' ').map((word, index) => (
                    <span key={index} className={`inline-block ${index === 0 ? 'text-blue-600 dark:text-blue-400' : ''} animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>{word} </span>
                  ))}
                </h1>
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                    <span className="border-r-2 border-blue-500 animate-pulse pr-1">{personalInfo.title}</span>
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                  Passionate about creating modern web experiences. Ready for internship opportunities!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    onClick={() => scrollToSection('projects')}
                  >
                    <span>View My Work</span>
                    <span className="group-hover:animate-bounce">🚀</span>
                  </button>
                  <button
                    className="group px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    onClick={() => scrollToSection('contact')}
                  >
                    <span>Let's Talk</span>
                    <span className="group-hover:animate-bounce">💬</span>
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">2+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Certifications</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">3.77</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">GPA</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slideRight">
                <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-green-400">
                      <span className="text-blue-400">const</span>
                      <span className="text-yellow-300"> developer</span>
                      <span className="text-white"> = </span>
                      <span className="text-green-400">"{personalInfo.name}"</span>
                    </div>
                    <div className="text-green-400">
                      <span className="text-blue-400">const</span>
                      <span className="text-yellow-300"> skills</span>
                      <span className="text-white"> = </span>
                      <span className="text-purple-400">[</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      <span className="text-green-400">"React.js"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      <span className="text-green-400">"Laravel"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4 text-green-400">
                      <span className="text-green-400">"JavaScript"</span>
                    </div>
                    <div className="text-purple-400">]</div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>⚛️</div>
                  <div className="absolute bottom-8 left-4 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🔥</div>
                  <div className="absolute top-1/2 -right-4 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>💡</div>
                  <div className="absolute bottom-4 right-8 text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>🎯</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="flex items-center justify-center space-x-2 mb-8">
                <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="group">
                <div className="relative w-full h-80 transition-transform duration-700 group-hover:rotateY-180">
                  {/* Card Front */}
                  <div className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center text-center border border-gray-200 dark:border-gray-600">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                        W
                      </div>
                      <div className="absolute inset-0 w-24 h-24 border-4 border-blue-500/30 rounded-full animate-spin"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Who Am I?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Click to learn more about me</p>
                    <div className="text-2xl text-blue-500 animate-bounce">↻</div>
                  </div>

                  {/* Card Back */}
                  <div className="absolute inset-0 w-full h-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-600">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-2xl">📧</span>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                          <div className="text-gray-600 dark:text-gray-300 text-sm">{personalInfo.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-2xl">📍</span>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                          <div className="text-gray-600 dark:text-gray-300 text-sm">{personalInfo.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-2xl">🎯</span>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Status</div>
                          <div className="text-gray-600 dark:text-gray-300 text-sm">Available for Internship</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education Journey</h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <div key={index} className="relative flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                          <span className="text-white text-sm">🎓</span>
                        </div>
                        <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                          <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-2">
                            {edu.period}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h4>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.degree}</p>
                          {edu.gpa && (
                            <div className="inline-block px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full">
                              GPA: {edu.gpa}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <button
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={prevProject}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentProjectIndex
                        ? 'bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-500/50'
                        }`}
                      onClick={() => setCurrentProjectIndex(index)}
                    />
                  ))}
                </div>
                <button
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={nextProject}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="max-w-4xl mx-auto">
                      <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                        <div className="relative h-64 bg-gradient-to-br from-blue-500/10 to-green-500/10 flex items-center justify-center overflow-hidden">
                          <div className="text-8xl opacity-20">💻</div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-4">
                              <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105">
                                View Demo
                              </button>
                              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 hover:scale-105">
                                View Code
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Completed'
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              }`}>
                              {project.status}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <details className="group/details">
                            <summary className="flex items-center justify-between cursor-pointer text-gray-600 dark:text-gray-300 font-medium list-none">
                              <span>Key Features ({project.features.length})</span>
                              <svg className="w-5 h-5 transform group-open/details:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </summary>
                            <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                              {project.features.slice(0, 3).map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-2">
                                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Skills & Expertise</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Frontend Skills */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 group hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">🎨</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend</h3>
                </div>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{skill}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-blue-600 h-2 rounded-full transition-all duration-1000 group-hover/skill:opacity-80"
                          style={{ width: '85%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 group hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">⚙️</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Backend</h3>
                </div>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="group/skill">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{skill}</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-600 to-green-600 h-2 rounded-full transition-all duration-1000 group-hover/skill:opacity-80"
                          style={{ width: '75%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 group hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">🛠️</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-600 group hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">🤝</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Soft Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {skills.soft.map((skill, index) => (
                    <div
                      key={index}
                      className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-800 dark:text-purple-200 rounded-lg text-sm font-medium hover:shadow-md transition-shadow duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                        🏆
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{cert.period}</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 text-xs font-medium rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Let's Connect</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-600/10 to-green-600/10 rounded-2xl p-8 border border-blue-600/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">{contact.message}</p>

                  <div className="space-y-6">
                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">📧</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                        <div className="text-gray-600 dark:text-gray-300">{contact.email}</div>
                      </div>
                    </a>

                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Location</div>
                        <div className="text-gray-600 dark:text-gray-300">{contact.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <span className="text-xl">💼</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">Status</div>
                        <div className={`font-medium ${contact.available ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                          {contact.available ? 'Available for Internship' : 'Currently Busy'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-600">
                <form className="space-y-6">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white placeholder-transparent peer"
                      placeholder="Your Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white dark:peer-focus:bg-gray-800"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white placeholder-transparent peer"
                      placeholder="Your Email"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white dark:peer-focus:bg-gray-800"
                    >
                      Your Email
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      id="subject"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white"
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="internship">Internship Opportunity</option>
                      <option value="project">Project Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white placeholder-transparent peer resize-none"
                      placeholder="Your Message"
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white dark:peer-focus:bg-gray-800"
                    >
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <span className="group-hover:animate-bounce">📤</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg">&copy; 2025 {personalInfo.name}. All rights reserved.</p>
              <p className="text-gray-400 mt-1">Built with React.js & ❤️</p>
            </div>
            <button
              className="group w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              onClick={() => scrollToSection('home')}
            >
              <svg className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
