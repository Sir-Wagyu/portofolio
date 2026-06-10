import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCogs, faTools, faTrophy, faBook, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { skills, certifications } from '../data/portfolioData';
import AOS from 'aos';

const Skills = () => {
      const [activeTab, setActiveTab] = useState('technical');

      // Refresh AOS when tab changes
      useEffect(() => {
            AOS.refresh();
      }, [activeTab]);

      // Technology stacks with logos from CDN URLs
      const techStacks = {
            frontend: [
                  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                  { name: 'Tailwind CSS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s' }
            ],
            backend: [
                  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                  { name: 'Laravel', logo: 'https://mail.pn-blora.go.id/jdih/node_modules/laravel-mix/icons/laravel.png' },
                  { name: 'CodeIgniter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
                  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
            ],
            tools: [
                  { name: 'VSCode', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                  { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                  { name: 'Adobe Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
            ]
      };

      const skillCategories = {
            technical: {
                  title: 'Technical Skills',
                  categories: [
                        {
                              name: 'Frontend Development',
                              skills: skills.frontend,
                              icon: faPalette,
                              techStack: techStacks.frontend
                        },
                        {
                              name: 'Backend Development',
                              skills: skills.backend,
                              icon: faCogs,
                              techStack: techStacks.backend
                        },
                        {
                              name: 'Tools & Technologies',
                              skills: skills.tools,
                              icon: faTools,
                              techStack: techStacks.tools
                        }
                  ]
            }
      };

      const TechStackCard = ({ category, index }) => (
            <div
                  className="bg-custom-light p-6 rounded-xl transition-all duration-300 hover:border-custom-primary/40"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
            >
                  <div className="flex items-center space-x-3 mb-6">
                        <FontAwesomeIcon icon={category.icon} className="text-2xl text-custom-primary" />
                        <h3 className="text-lg font-bold text-custom-dark">{category.name}</h3>
                  </div>

                  {/* Technology Logos Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        {category.techStack.map((tech, techIndex) => (
                              <div
                                    key={techIndex}
                                    className="flex flex-col items-center space-y-2 p-3 rounded-lg group transition-colors"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100 + techIndex * 50}
                              >
                                    <img
                                          src={tech.logo}
                                          alt={tech.name}
                                          className="size-10 md:size-12 lg:size-14 object-contain filter lg:grayscale group-hover:grayscale-0 transition-all duration-300"
                                          onError={(e) => {
                                                e.target.style.display = 'none';
                                          }}
                                    />
                                    <span className="text-xs font-medium text-custom-dark text-center">{tech.name}</span>
                              </div>
                        ))}
                  </div>
            </div>
      );

      const CertificationCard = ({ cert, index }) => (
            <div
                  className="bg-custom-light border border-custom-primary/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  data-aos="flip-up"
                  data-aos-delay={index * 150}
            >
                  <div className="flex items-start space-x-4 mb-4">
                        <FontAwesomeIcon icon={faTrophy} className="text-3xl text-custom-primary" />
                        <div className="flex-1">
                              <h4 className="text-lg font-bold text-custom-dark">{cert.title}</h4>
                              <p className="text-custom-primary font-medium mb-1">{cert.issuer}</p>
                              <p className="text-sm text-custom-muted">{cert.period}</p>
                        </div>
                  </div>

                  <p className="text-custom-muted mb-4">{cert.description}</p>

                  <div className="space-y-3">
                        <h5 className="font-semibold text-custom-dark">Skills Gained:</h5>
                        <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, skillIndex) => (
                                    <span
                                          key={skillIndex}
                                          className="px-3 py-1 bg-custom-primary/10 text-custom-primary text-xs rounded-full"
                                          data-aos="fade-in"
                                          data-aos-delay={index * 150 + skillIndex * 100}
                                    >
                                          {skill}
                                    </span>
                              ))}
                        </div>
                  </div>

                  <a
                        href={cert.credential}
                        className="inline-flex items-center mt-7 text-light-primary hover:text-light-primary-hover dark:text-dark-primary hover:dark:text-dark-primary-hover font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-aos="fade-left"
                        data-aos-delay={index * 150 + 200}
                  >
                        View Credential &rarr;
                  </a>
            </div>
      );

      return (
            <section id="skills" className="py-20 bg-custom-background">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="text-center mb-16" data-aos="fade-down">
                              <h2 className="text-3xl md:text-4xl font-bold text-custom-dark mb-4">Skills & Expertise</h2>
                              <p className="text-xl text-custom-muted max-w-2xl mx-auto">Technologies and competencies I work with</p>
                        </div>

                        {/* Tab Navigation */}
                        <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up" data-aos-delay="200">
                              <button
                                    className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${activeTab === 'technical'
                                          ? 'bg-light-primary text-light-background dark:bg-dark-primary dark:text-light-background shadow-lg'
                                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                          }`}
                                    onClick={() => setActiveTab('technical')}
                              >
                                    <FontAwesomeIcon icon={faLaptopCode} />
                                    <span>Technical Skills</span>
                              </button>
                              <button
                                    className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${activeTab === 'certifications'
                                          ? 'bg-light-primary text-light-background dark:bg-dark-primary dark:text-light-background shadow-lg'
                                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                          }`}
                                    onClick={() => setActiveTab('certifications')}
                              >
                                    <FontAwesomeIcon icon={faTrophy} />
                                    <span>Certifications</span>
                              </button>
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[400px]">
                              {activeTab === 'technical' && (
                                    <div className="space-y-8 tab-content">
                                          <div className="space-y-6">
                                                {skillCategories[activeTab].categories.map((category, index) => (
                                                      <TechStackCard key={index} category={category} index={index} />
                                                ))}
                                          </div>
                                    </div>
                              )}

                              {activeTab === 'certifications' && (
                                    <div className="space-y-8 tab-content">
                                          <div className="grid md:grid-cols-2 gap-6">
                                                {certifications.map((cert, index) => (
                                                      <CertificationCard key={index} cert={cert} index={index} />
                                                ))}
                                          </div>

                                          <div
                                                className="bg-custom-light border border-custom-primary/20 p-6 rounded-xl"
                                                data-aos="slide-up"
                                                data-aos-delay="400"
                                          >
                                                <div className="flex items-start space-x-4">
                                                      <FontAwesomeIcon
                                                            icon={faBook}
                                                            className="text-3xl text-custom-primary pulse-on-hover"
                                                            data-aos="rotate-in"
                                                            data-aos-delay="600"
                                                      />
                                                      <div>
                                                            <h4
                                                                  className="text-lg font-bold text-custom-dark mb-2"
                                                                  data-aos="fade-right"
                                                                  data-aos-delay="500"
                                                            >
                                                                  Continuous Learning
                                                            </h4>
                                                            <p
                                                                  className="text-custom-muted"
                                                                  data-aos="fade-right"
                                                                  data-aos-delay="550"
                                                            >
                                                                  I'm constantly expanding my skillset and staying updated with the latest technologies and best practices in design and web development.
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              )}
                        </div>
                  </div>
            </section>
      );
};

export default Skills;
