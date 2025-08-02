'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '77857d85-8d56-4e25-9c13-7247134d2421',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission from TekMindz Website'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Get In Touch */}
      <div className="w-full lg:w-1/2 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-blue-600 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 md:w-32 md:h-32 bg-purple-500 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-8 h-8 md:w-16 md:h-16 bg-purple-400 rounded-full opacity-40"></div>
        
        <div className="relative z-10 p-6 md:p-12 lg:p-16 h-full flex flex-col justify-center min-h-[50vh] lg:min-h-screen">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              Get In <span className="font-bold">Touch</span>
            </h1>
            <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-500 transform rotate-45 ml-2 md:ml-4"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Call Us */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-700 bg-opacity-30 rounded-xl flex items-center justify-center border border-blue-600 border-opacity-30 flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#98be2f]" />
              </div>
              <div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Call Us</h3>
                <p className="text-blue-200 text-sm md:text-base">+91 120 4010085</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-700 bg-opacity-30 rounded-xl flex items-center justify-center border border-blue-600 border-opacity-30 flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#98be2f]" />
              </div>
              <div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-1">Email Address</h3>
                <p className="text-blue-200 text-sm md:text-base">talk@tekailabs.ai</p>
              </div>
            </div>

            {/* India Operations */}
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-700 bg-opacity-30 rounded-xl flex items-center justify-center border border-blue-600 border-opacity-30 flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#98be2f]" />
              </div>
              <div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-1">India Operations</h3>
                <p className="text-blue-200 text-xs md:text-sm leading-relaxed">
                  Samin TekMindz India Pvt. Ltd.<br />
                  Unit No. 2, Second Floor, NPX Tower, Sector 153,<br />
                  Noida – 201310 (U.P.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Send Us A Message */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-8 md:mb-10 lg:mb-12">
            Send Us A <span className="font-bold text-gray-900">Message</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            {/* First Name & Last Name - Side by side on larger screens */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 md:px-4 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm md:text-base"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-3 md:px-4 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm md:text-base"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm md:text-base"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm md:text-base"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-3 md:px-4 md:py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 resize-none text-sm md:text-base"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 md:pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`border-2 px-6 py-2.5 md:px-8 md:py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ml-auto font-medium text-sm md:text-base ${
                  isSubmitting 
                    ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                {!isSubmitting && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
                {isSubmitting && (
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}