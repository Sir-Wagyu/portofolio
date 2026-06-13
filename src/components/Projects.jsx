import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';

const Projects = () => {
      const [activeFilter, setActiveFilter] = useState('All');
      const [filteredProjects, setFilteredProjects] = useState(projects);
      const navigate = useNavigate();

      const categories = ['All', ...new Set(projects.map(project => project.category))];

      const filterProjects = (category) => {
            setActiveFilter(category);
            if (category === 'All') {
                  setFilteredProjects(projects);
            } else {
                  setFilteredProjects(projects.filter(project => project.category === category));
            }
      };

      const handleProjectClick = (projectId) => {
            navigate(`/project/${projectId}`);
            window.scrollTo(0, 0);
      };

      const ProjectCard = ({ project, index }) => (
            <article
                  className='group relative aspect-video w-full  overflow-hidden rounded-xl shadow-md hover:shadow-2xl focus-within:shadow-2xl transition-all'
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  tabIndex={0}
            >
                  <img
                        className='absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 group-hover:transition-opacity group-hover:duration-300 group-hover:blur-xs group-focus-within:blur-xs group'
                        src={project.tumbnail}
                        alt={project.title}
                  />
                  <div
                        className='absolute inset-0 bg-gradient-to-t from-black/0 to-transparent to-90% text-white transition-all duration-300 group-hover:bg-gradient-to-t group-focus-within:bg-gradient-to-t group-hover:from-black/60 group-focus-within:from-black/60 group-hover:transition-all group-focus-within:transition-all group-hover:duration-500 group-focus-within:duration-500 '
                  >
                        <h2
                              className='absolute bottom-8 left-4 mr-4 m-0 font-extrabold uppercase transition-all delay-300 duration-100 ease-out group-hover:bottom-1/2 group-focus-within:bottom-1/2 group-hover:delay-0 group-focus-within:delay-0 group-hover:duration-300 group-focus-within:duration-300 px-2 py-1 backdrop-blur-sm group-hover:backdrop-blur-none group-focus-within:backdrop-blur-none bg-black/10 group-hover:bg-none group-focus-within:bg-none rounded-lg'
                        >
                              {project.title}
                        </h2>
                        <p
                              className='absolute left-6 top-1/2 line-clamp-3 max-w-[80%] pt-4 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 group-hover:delay-500 group-focus-within:delay-500 group-hover:duration-300 group-focus-within:duration-300'
                        >
                              {project.description}
                        </p>

                        <button
                              onClick={() => handleProjectClick(project.id)}
                              className='absolute bottom-5 left-6 max-w-[80%] rounded-lg border px-4 py-2 uppercase opacity-0 transition-opacity ease-out group-hover:opacity-100 group-focus-within:opacity-100 group-hover:transition-opacity group-focus-within:transition-opacity group-hover:delay-500 group-focus-within:delay-500 group-hover:duration-300 group-focus-within:duration-300 cursor-pointer'
                        >
                              find out more
                        </button>
                  </div>

            </article>
      );

      return (
            <section id="projects" className="py-12 sm:py-16 md:py-20 bg-light-background dark:bg-dark-background">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 sm:mb-16">
                              <h2
                                    className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                                    data-aos="fade-down"
                              >
                                    Some stuff that i've built
                              </h2>
                              <p
                                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                              >
                                    A showcase of my work and technical expertise
                              </p>
                        </div>

                        <div
                              className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12"
                              data-aos="fade-up"
                              data-aos-delay="300"
                        >
                              {categories.map((category, index) => (
                                    <button
                                          key={category}
                                          className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${activeFilter === category
                                                ? 'bg-light-primary text-light-background dark:bg-dark-primary dark:text-light-background  shadow-lg'
                                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                                                }`}
                                          onClick={() => filterProjects(category)}
                                          data-aos="zoom-in"
                                          data-aos-delay={400 + index * 100}
                                    >
                                          {category}
                                    </button>
                              ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                              {filteredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                              ))}
                        </div>

                        {filteredProjects.length === 0 && (
                              <div
                                    className="text-center py-12"
                                    data-aos="fade-in"
                              >
                                    <p className="text-gray-600 dark:text-gray-300 text-lg">No projects found for this category.</p>
                              </div>
                        )}
                  </div>
            </section>
      );
};

export default Projects;
