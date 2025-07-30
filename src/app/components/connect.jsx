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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Get In Touch */}
      <div className="w-1/2 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-purple-400 rounded-full opacity-40"></div>
        
        <div className="relative z-10 p-16 h-full flex flex-col justify-center">
          <div className="mb-16">
            <h1 className="text-5xl font-light text-white mb-4">
              Get In <span className="font-bold">Touch</span>
            </h1>
            <div className="w-8 h-8 bg-purple-500 transform rotate-45 ml-4"></div>
          </div>

          <div className="space-y-8">
            {/* Call Us */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-700 bg-opacity-30 rounded-xl flex items-center justify-center border border-blue-600 border-opacity-30">
                <Phone className="w-6 h-6 text-[#98be2f]" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Call Us</h3>
                <p className="text-blue-200">+91 120 4010085</p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-700 bg-opacity-30 rounded-xl flex items-center justify-center border border-blue-600 border-opacity-30">
                <Mail className="w-6 h-6 text-[#98be2f]" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">Email Address</h3>
                <p className="text-blue-200">talk@tekmindz.com</p>
              </div>
            </div>

            {/* India Operations */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-blue-700 bg-opacity-30 rounded-xl flex items-center justify-center border border-blue-600 border-opacity-30">
                <MapPin className="w-6 h-6 text-[#98be2f]" />
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold mb-1">India Operations</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
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
      <div className="w-1/2 bg-gray-50 p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-4xl font-light text-gray-800 mb-12">
            Send Us A <span className="font-bold text-gray-900">Message</span>
          </h2>

          <div className="space-y-6">
            {/* First Name */}
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
              />
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
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
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
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
                className="w-full px-4 py-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center space-x-2 ml-auto font-medium"
              >
                <span>Submit</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}