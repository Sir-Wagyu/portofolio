import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faCalendar, faTag } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = () => {
      const { id } = useParams();
      const navigate = useNavigate();

      const project = projects.find(p => p.id === parseInt(id));

      if (!project) {
            return (
                  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                        <div className="text-center">
                              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
                              <button
                                    onClick={() => navigate('/')}
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                              >
                                    Back to Home
                              </button>
                        </div>
                  </div>
            );
      }

      return (
            <div className="min-h-screen bg-white dark:bg-gray-900">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {/* Breadcrumb Navigation */}
                        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                              <button
                                    onClick={() => navigate('/')}
                                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                              >
                                    Home
                              </button>
                              <span>/</span>
                              <button
                                    onClick={() => {
                                          navigate('/');
                                          setTimeout(() => {
                                                const projectsSection = document.getElementById('projects');
                                                if (projectsSection) {
                                                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                                                }
                                          }, 100);
                                    }}
                                    className="hover:text-gray-900 dark:hover:text-white transition-colors"
                              >
                                    Projects
                              </button>
                              <span>/</span>
                              <span className="text-gray-900 dark:text-white font-medium line-clamp-1">{project.title}</span>
                        </nav>

                        {/* Project Header */}
                        <div className="mb-12">
                              <div className="mb-6">
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h1>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">{project.category}</p>
                              </div>

                              {/* Project Meta */}
                              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center space-x-2">
                                          <FontAwesomeIcon icon={faCalendar} className="text-xs" />
                                          <span>{project.period}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                          <FontAwesomeIcon icon={faTag} className="text-xs" />
                                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status.toLowerCase() === 'completed'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
                                                }`}>
                                                {project.status}
                                          </span>
                                    </div>
                              </div>
                        </div>

                        {/* Project Content */}
                        <div className="space-y-12">
                              {/* Description */}
                              <section>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                          {project.overview}
                                    </p>
                              </section>

                              {/* Project Screenshots */}
                              <section>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Project Screenshots</h2>
                                    {project.screenshots && project.screenshots.length > 0 ? (
                                          <div className="space-y-8">
                                                {/* Main Screenshot */}
                                                {project.screenshots[0] && (
                                                      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                                                            <img
                                                                  src={project.screenshots[0].image}
                                                                  alt={project.screenshots[0].caption || `${project.title} - Main Screenshot`}
                                                                  className="w-full h-auto object-cover"
                                                            />
                                                            {project.screenshots[0].caption && (
                                                                  <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                                                                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{project.screenshots[0].caption}</p>
                                                                  </div>
                                                            )}
                                                      </div>
                                                )}

                                                {/* Additional Screenshots Grid */}
                                                {project.screenshots.length > 1 && (
                                                      <div className="grid md:grid-cols-2 gap-6">
                                                            {project.screenshots.slice(1).map((screenshot, index) => (
                                                                  <div key={index} className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                                                                        <img
                                                                              src={screenshot.image}
                                                                              alt={screenshot.caption || `${project.title} - Screenshot ${index + 2}`}
                                                                              className="w-full h-auto object-cover"
                                                                        />
                                                                        {screenshot.caption && (
                                                                              <div className="p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                                                                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{screenshot.caption}</p>
                                                                              </div>
                                                                        )}
                                                                  </div>
                                                            ))}
                                                      </div>
                                                )}
                                          </div>
                                    ) : (
                                          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-12 text-center">
                                                <div className="text-gray-400 dark:text-gray-500">
                                                      <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                      </svg>
                                                      <p className="text-sm">Screenshots coming soon</p>
                                                </div>
                                          </div>
                                    )}
                              </section>

                              {/* Technologies */}
                              <section>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies</h2>
                                    <div className="flex flex-wrap gap-2">
                                          {project.technologies.map((tech, index) => (
                                                <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium">
                                                      {tech}
                                                </span>
                                          ))}
                                    </div>
                              </section>

                              {/* Features */}
                              <section>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Features</h2>
                                    <div className="space-y-8">
                                          {project.features.map((feature, index) => {
                                                // Handle both old format (string) and new format (object with title and features)
                                                if (typeof feature === 'string') {
                                                      return (
                                                            <div key={index} className="flex items-start space-x-3">
                                                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                                                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                                                            </div>
                                                      );
                                                } else if (feature.title && feature.features) {
                                                      return (
                                                            <div key={index} className="space-y-4">
                                                                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                                                                  <ul className="space-y-3 ml-4">
                                                                        {feature.features.map((subFeature, subIndex) => (
                                                                              <li key={subIndex} className="flex items-start space-x-3">
                                                                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                                                                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{subFeature}</span>
                                                                              </li>
                                                                        ))}
                                                                  </ul>
                                                            </div>
                                                      );
                                                }
                                                return null;
                                          })}
                                    </div>
                              </section>

                              {/* Action Buttons */}
                              <section>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                          {project.demo && (
                                                <a
                                                      href={project.demo}
                                                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-light-primary hover:bg-light-primary-hover dark:bg-dark-primary dark:hover:bg-dark-primary-hover text-white font-medium rounded-lg transition-colors"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                >
                                                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
                                                      <span>View Web</span>
                                                </a>
                                          )}

                                          {project.repository && (
                                                <a
                                                      href={project.repository}
                                                      className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg transition-colors"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                >
                                                      <FontAwesomeIcon icon={faCode} className="text-sm" />
                                                      <span>View Code</span>
                                                </a>
                                          )}

                                    </div>
                              </section>
                        </div>
                  </div>
            </div>
      );
};

export default ProjectDetail;
