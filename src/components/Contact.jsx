import React, { useState } from 'react';
import { contact } from '../data/portfolioData';
import { FontAwesomeIcon as FontAwesome } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
      // const [formData, setFormData] = useState({
      //       name: '',
      //       email: '',
      //       subject: '',
      //       message: ''
      // });

      // const [isSubmitting, setIsSubmitting] = useState(false);
      // const [submitStatus, setSubmitStatus] = useState(null);

      // const handleInputChange = (e) => {
      //       const { name, value } = e.target;
      //       setFormData(prev => ({
      //             ...prev,
      //             [name]: value
      //       }));
      // };

      // const handleSubmit = async (e) => {
      //       e.preventDefault();
      //       setIsSubmitting(true);

      //       // Simulate form submission
      //       try {
      //             await new Promise(resolve => setTimeout(resolve, 2000));
      //             setSubmitStatus('success');

      //             //send email
      //             const response = await fetch('/api/contact', {
      //                   method: 'POST',
      //                   headers: {
      //                         'Content-Type': 'application/json'
      //                   },
      //                   body: JSON.stringify(formData)
      //             });

      //             if (response.ok) {
      //                   setFormData({ name: '', email: '', subject: '', message: '' });
      //             }
      //       } catch {
      //             setSubmitStatus('error');
      //       } finally {
      //             setIsSubmitting(false);
      //             setTimeout(() => setSubmitStatus(null), 5000);
      //       }
      // };

      return (
            <section id="contact" className="py-20 bg-light-surface dark:bg-dark-surface">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                    {contact.message}
                              </p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-12">
                              {/* Contact Form */}
                              {/* <div className="w-full max-w-lg">
                                    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                                          <form onSubmit={handleSubmit} className="space-y-6">
                                                <div>
                                                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
                                                      <p className="text-gray-600 dark:text-gray-300">Fill out the form below and I'll get back to you as soon as possible.</p>
                                                </div>

                                                <div>
                                                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                                                      <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="Your full name"
                                                            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-light-primary focus:border-transparent bg-white dark:bg-dark-background text-light-primary-text dark:text-dark-primary-text"
                                                      />
                                                </div>

                                                <div>
                                                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                                                      <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            required
                                                            placeholder="your.email@example.com"
                                                            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-light-primary focus:border-transparent bg-white dark:bg-dark-background text-light-primary-text dark:text-dark-primary-text"
                                                      />
                                                </div>

                                                <div>
                                                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                                                      <select
                                                            id="subject"
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleInputChange}
                                                            required
                                                            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-light-primary focus:border-transparent bg-white dark:bg-dark-background text-light-primary-text dark:text-dark-primary-text"
                                                      >
                                                            <option value="">Select a subject</option>
                                                            <option value="internship">Internship Opportunity</option>
                                                            <option value="project">Project Collaboration</option>
                                                            <option value="freelance">Freelance Work</option>
                                                            <option value="general">General Inquiry</option>
                                                            <option value="other">Other</option>
                                                      </select>
                                                </div>

                                                <div>
                                                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                                                      <textarea
                                                            id="message"
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                            required
                                                            rows="5"
                                                            placeholder="Tell me about your project, opportunity, or any questions you have..."
                                                            className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-light-primary focus:border-transparent bg-white dark:bg-dark-background text-light-primary-text dark:text-dark-primary-text resize-none"
                                                      ></textarea>
                                                </div>

                                                <button
                                                      type="submit"
                                                      className={`w-full flex items-center justify-center space-x-2 px-6 py-3 font-semibold rounded-lg transition-all ${isSubmitting
                                                            ? 'bg-gray-400 cursor-not-allowed'
                                                            : 'bg-light-primary hover:bg-light-primary-dark text-white shadow-lg hover:shadow-xl'
                                                            }`}
                                                      disabled={isSubmitting}
                                                >
                                                      {isSubmitting ? (
                                                            <>
                                                                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                                  <span>Sending...</span>
                                                            </>
                                                      ) : (
                                                            <>
                                                                  <span>Send Message</span>
                                                                  <span>📤</span>
                                                            </>
                                                      )}
                                                </button>

                                                {submitStatus === 'success' && (
                                                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg">
                                                            ✅ Message sent successfully! I'll get back to you soon.
                                                      </div>
                                                )}

                                                {submitStatus === 'error' && (
                                                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg">
                                                            ❌ Failed to send message. Please try again or contact me directly via email.
                                                      </div>
                                                )}
                                          </form>
                                    </div>
                              </div> */}

                              {/* Social Media & Contact Icons */}
                              <div className="text-center">
                                    <div className="flex justify-center items-center flex-wrap gap-7 px-20">
                                          <a href={contact.linkedin} target="_blank" className='size-13 rounded-full bg-light-surface dark:bg-dark-background shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-light-primary-hover dark:hover:bg-gray-700 transition-colors text-2xl'>
                                                <FontAwesome icon={faLinkedin} />
                                          </a>
                                          <a href={contact.github} target="_blank" className='size-15 rounded-full bg-light-surface dark:bg-dark-background shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-light-primary-hover dark:hover:bg-gray-700 transition-colors text-2xl'>
                                                <FontAwesome icon={faGithub} />
                                          </a>
                                          <a href={`mailto:${contact.email}`} target="_blank" className='size-15 rounded-full bg-light-surface dark:bg-dark-background shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-light-primary-hover dark:hover:bg-gray-700 transition-colors text-2xl'>
                                                <FontAwesome icon={faEnvelope} />
                                          </a>
                                          <a href={`tel:${contact.whatsapp}`} target="_blank" className='size-15 rounded-full bg-light-surface dark:bg-dark-background shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-light-primary-hover dark:hover:bg-gray-700 transition-colors text-2xl'>
                                                <FontAwesome icon={faWhatsapp} />
                                          </a>
                                          <a href={contact.instagram} target="_blank" className='size-15 rounded-full bg-light-surface dark:bg-dark-background shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-light-primary-hover dark:hover:bg-gray-700 transition-colors text-2xl'>
                                                <FontAwesome icon={faInstagram} />
                                          </a>
                                    </div>
                              </div>

                              <a href="https://drive.google.com/file/d/1xN8OCtjAJtwOwg0va8poClmiQzE-AUxo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <div className='px-6 py-3 bg-light-surface dark:bg-dark-background rounded-lg shadow-md text-center flex items-center justify-center gap-2 cursor-pointer hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover transition-colors'>
                                          <FontAwesome icon={faDownload} />
                                          <p>Download CV</p>
                                    </div>
                              </a>
                        </div>


                  </div>
            </section>
      );
};

export default Contact;
