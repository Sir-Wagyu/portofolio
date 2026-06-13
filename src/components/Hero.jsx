import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FontAwesomeIcon as FontAwesome } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
      const scrollToSection = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
            }
      };

      const navigate = useNavigate();

      const handleAboutClick = () => {
            navigate('/about');
            window.scrollTo(0, 0);
      };

      return (
            <section id="home" className="min-h-screen flex items-center justify-center bg-light-background dark:bg-dark-background">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                              <div className="order-2 lg:order-1 w-full lg:w-[60%] text-center lg:text-left space-y-8">
                                    <div className='space-y-4'>
                                          <p
                                                className="mx-auto lg:mx-0 lg:text-lg text-medium block py-2 px-6 bg-light-surface dark:bg-dark-surface shadow-md rounded-full w-max font-medium"
                                                data-aos="fade-down"
                                                data-aos-delay="100"
                                          >
                                                Wahyu Nur
                                          </p>
                                          <h1
                                                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                                                data-aos="fade-right"
                                                data-aos-delay="300"
                                          >
                                                A{' '}
                                                <span className="text-light-primary dark:text-dark-primary">
                                                      <ReactTyped
                                                            strings={[
                                                                  'Frontend Developer',
                                                                  'Fullstack Developer',
                                                                  'UI/UX Designer',
                                                                  'Graphic Designer'
                                                            ]}
                                                            typeSpeed={50}
                                                            backSpeed={30}
                                                            backDelay={2000}
                                                            loop
                                                            showCursor={true}
                                                            cursorChar="|"
                                                      />
                                                </span>
                                          </h1>
                                    </div>
                                    <p
                                          className="text-justify text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
                                          data-aos="fade-up"
                                          data-aos-delay="500"
                                    >
                                          This is my personal space on the web where I document my journey in technology and showcase the projects I've built through real experiences, collaborative learning, and passion for design and development.
                                    </p>

                                    <div
                                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                                          data-aos="fade-up"
                                          data-aos-delay="700"
                                    >
                                          <button
                                                className="px-8 py-3 border-2 border-light-primary  text-light-primary hover:bg-light-primary-hover hover:text-light-background dark:text-dark-primary dark:border-dark-primary dark:hover:bg-dark-primary-hover font-semibold rounded-full transition-colors"
                                                onClick={handleAboutClick}
                                          >
                                                Get to know me
                                          </button>
                                    </div>

                                    <div
                                          className="flex gap-6 justify-center lg:justify-start"
                                          data-aos="fade-up"
                                          data-aos-delay="900"
                                    >
                                          <a
                                                href={`mailto:${personalInfo.email}`}
                                                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full shadow-md hover:shadow-lg transition-all text-xl"
                                                aria-label="Email"
                                          >
                                                <FontAwesome icon={faEnvelope} />
                                          </a>
                                          <a
                                                href={personalInfo.github}
                                                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full shadow-md hover:shadow-lg transition-all text-xl"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub"
                                          >
                                                <FontAwesome icon={faGithub} />
                                          </a>
                                          <a
                                                href={personalInfo.linkedin}
                                                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full shadow-md hover:shadow-lg transition-all text-xl"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                          >
                                                <FontAwesome icon={faLinkedin} />
                                          </a>
                                    </div>
                              </div>

                              <div
                                    className="order-1 lg:order-2 w-full lg:w-[40%] relative flex justify-center lg:justify-end"
                                    data-aos="fade-left"
                                    data-aos-delay="400"
                              >
                                    <div className="relative">
                                          <div className="size-42 md:size-56 lg:size-74 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                                                <img src="/me.jpg" alt="wahyu" className='w-full h-full object-cover rounded-full' />
                                          </div>
                                          <div
                                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-primary-text rounded-full flex items-center justify-center  text-lg animate-pulse"
                                                data-aos="zoom-in"
                                                data-aos-delay="800"
                                          >
                                                <FontAwesome icon={faLaptopCode} />
                                          </div>
                                          <div
                                                className="absolute top-1/2 -right-8 w-14 h-14 bg-light-primary dark:bg-dark-primary text-light-background dark:text-dark-primary-text  rounded-full flex items-center justify-center text-lg animate-bounce delay-200"
                                                data-aos="zoom-in"
                                                data-aos-delay="1000"
                                          >
                                                <FontAwesome icon={faRocket} />
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div
                              className="mt-16 flex justify-center"
                              data-aos="fade-up"
                              data-aos-delay="1100"
                        >
                              <button
                                    onClick={() => scrollToSection('about')}
                                    className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label="Scroll to about section"
                              >
                                    <span className="text-sm font-medium">Scroll Down</span>
                                    <div className="text-2xl group-hover:translate-y-1 transition-transform">↓</div>
                              </button>
                        </div>
                  </div>
            </section>
      );
};

export default Hero;
