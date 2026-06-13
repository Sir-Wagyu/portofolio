import React from 'react';
import { personalInfo, trainingsAndCertifications, experience } from '../data/portfolioData';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
      const navigate = useNavigate();

      const handleAboutClick = () => {
            navigate('/');
            window.scrollTo(0, 0);
      };
      return (
            <>
                  <section id="about" className="py-20 bg-light-background dark:bg-dark-background">
                        {/* breadcrumb */}
                        <nav
                              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
                              data-aos="fade-down"
                        >
                              <ol className="list-reset flex text-gray-700 dark:text-gray-300">
                                    <li>
                                          <button onClick={handleAboutClick} className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">Home</button>
                                    </li>
                                    <li className="mx-2">/</li>
                                    <li className="font-semibold">About</li>
                              </ol>
                        </nav>
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                              <div className=" mb-16">
                                    <h2
                                          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 w-max font-mono"
                                          data-aos="fade-right"
                                          data-aos-delay="200"
                                    >
                                          "Hello World"
                                    </h2>
                                    <p
                                          className="mt-10 text-lg lg:text-xl text-gray-600 dark:text-gray-300 "
                                          data-aos="fade-up"
                                          data-aos-delay="400"
                                    >
                                          {personalInfo.summary}
                                          <br />
                                          <br />
                                          {personalInfo.summary2}
                                    </p>
                              </div>

                              <div className="lg:col-span-2 text-lg lg:text-xl">
                                    <div className=" rounded-lg h-fit mb-16">
                                          <h3
                                                className="font-semibold text-gray-900 dark:text-white mb-6"
                                                data-aos="fade-right"
                                                data-aos-delay="600"
                                          >
                                                Skills & Expertise
                                          </h3>

                                          <div className="">
                                                {/* Technical Skills */}
                                                <div>
                                                      <div
                                                            className="space-y-3"
                                                            data-aos="fade-up"
                                                            data-aos-delay="800"
                                                      >
                                                            <ol className='list-disc pl-5 space-y-3 '>
                                                                  <li data-aos="fade-right" data-aos-delay="900">
                                                                        <span className='font-semibold'>Language :</span> HTML, CSS, JavaScript, PHP
                                                                  </li>
                                                                  <li data-aos="fade-right" data-aos-delay="1000">
                                                                        <span className='font-semibold'>Frameworks & Libraries :</span> React.js, TailwindCSS, Bootstrap, Laravel, CodeIgniter
                                                                  </li>
                                                                  <li data-aos="fade-right" data-aos-delay="1100">
                                                                        <span className='font-semibold'>Databases :</span> MySQL
                                                                  </li>
                                                                  <li data-aos="fade-right" data-aos-delay="1200">
                                                                        <span className='font-semibold'>Version Control :</span> Git, GitHub
                                                                  </li>
                                                                  <li data-aos="fade-right" data-aos-delay="1300">
                                                                        <span className='font-semibold'>Tools :</span> VS Code, Postman, Figma, Adobe Illustrator
                                                                  </li>
                                                            </ol>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="mb-16">
                                          <h3 className="font-semibold text-gray-900 dark:text-white mb-6">Work Experience</h3>

                                          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-4">
                                                {experience.map((exp, index) => (
                                                      <div key={index} className="mb-10 ml-6 md:ml-8">
                                                            <span className="absolute flex items-center justify-center w-3 h-3 bg-blue-600 rounded-full -left-[6.5px] ring-4 ring-white dark:ring-dark-background dark:bg-blue-500">
                                                            </span>
                                                            <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                                                  {exp.role}
                                                            </h4>
                                                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3">
                                                                  <p className="text-base font-medium text-blue-600 dark:text-blue-400">
                                                                        {exp.company}
                                                                  </p>
                                                                  <span className="hidden sm:inline text-gray-400 dark:text-gray-500">•</span>
                                                                  <span className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                                                                        {exp.period}
                                                                  </span>
                                                            </div>
                                                            {exp.responsibilities ? (
                                                                  <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
                                                                        {exp.responsibilities.map((resp, idx) => (
                                                                              <li key={idx}>{resp}</li>
                                                                        ))}
                                                                  </ul>
                                                            ) : (
                                                                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                                                        {exp.description}
                                                                  </p>
                                                            )}
                                                      </div>
                                                ))}
                                          </div>
                                    </div>

                                    <div className="mb-16">
                                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Training & Certifications</h3>

                                          <div className="grid lg:grid-cols-2 gap-6">
                                                {trainingsAndCertifications.map((cert, index) => (
                                                      <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                                                            {/* Header */}
                                                            <div className="flex items-start justify-between mb-4">
                                                                  <div className="flex-1">
                                                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{cert.title}</h4>
                                                                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{cert.issuer}</p>
                                                                  </div>
                                                                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                                                                        {cert.type}
                                                                  </span>
                                                            </div>

                                                            {/* Period & Details */}
                                                            <div className="mb-4">
                                                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                                        <span className="font-medium">Period:</span> {cert.period}
                                                                  </p>
                                                                  {cert.totalCourses && (
                                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                                              <span className="font-medium">Total Courses:</span> {cert.totalCourses}
                                                                        </p>
                                                                  )}
                                                                  {cert.certificateNumber && (
                                                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                                              <span className="font-medium">Certificate No:</span> {cert.certificateNumber}
                                                                        </p>
                                                                  )}
                                                            </div>

                                                            {/* Description */}
                                                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                                                  {cert.description}
                                                            </p>

                                                            {/* Skills Tags */}
                                                            <div className="mb-4">
                                                                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">Skills Gained:</p>
                                                                  <div className="flex flex-wrap gap-2">
                                                                        {cert.skills.map((skill, skillIndex) => (
                                                                              <span key={skillIndex} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                                                                                    {skill}
                                                                              </span>
                                                                        ))}
                                                                  </div>
                                                            </div>

                                                            {/* Footer */}
                                                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                                                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                                                        {cert.validUntil ? `Valid until ${cert.validUntil}` : `Completed ${cert.date}`}
                                                                  </span>
                                                                  <a
                                                                        href={cert.credential}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs font-medium transition-colors"
                                                                  >
                                                                        View Certificate →
                                                                  </a>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>


                              </div>



                        </div>
                  </section>
                  <Footer />
            </>
      );
};

export default About;
