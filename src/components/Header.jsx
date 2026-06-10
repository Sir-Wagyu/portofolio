import React, { useState } from 'react';

import { FontAwesomeIcon as FontAwesome } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ darkMode, toggleDarkMode, scrollToSection }) => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
      };

      const handleScrollToSection = (sectionId) => {
            scrollToSection(sectionId);
            setIsMenuOpen(false);
      };

      return (
            <header
                  className="fixed w-max mx-auto top-4 md:left-0 md:right-0 right-5 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-2 border-gray-200 dark:border-gray-700 rounded-full"
                  data-aos="fade-down"
                  data-aos-duration="1000"
            >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-end lg:justify-center h-16">
                              <div className='hidden lg:block'></div>

                              <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-18 md:top-0 left-0 right-0 bg-white dark:bg-gray-900 md:bg-transparent rounded-lg `}>
                                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
                                          <li><button onClick={() => handleScrollToSection('home')} className="block w-full text-left md:w-auto py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</button></li>
                                          <li><button onClick={() => handleScrollToSection('skills')} className="block w-full text-left md:w-auto py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</button></li>
                                          <li><button onClick={() => handleScrollToSection('projects')} className="block w-full text-left md:w-auto py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</button></li>
                                          <li><button onClick={() => handleScrollToSection('contact')} className="block w-full text-left md:w-auto py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</button></li>
                                    </ul>
                              </nav>

                              <div className="flex items-center space-x-4 lg:ml-8  ">
                                    <button
                                          className="size-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                          onClick={toggleDarkMode}
                                    >
                                          <span className="text-lg">{darkMode ? <FontAwesome icon={faSun} /> : <FontAwesome icon={faMoon} />}</span>
                                    </button>

                                    <button
                                          className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 ${isMenuOpen ? 'rotate-90' : ''} transition-transform`}
                                          onClick={toggleMenu}
                                          aria-label="Toggle menu"
                                    >
                                          <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                          <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                          <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                    </button>
                              </div>
                        </div>
                  </div>
            </header>
      );
};

export default Header;
