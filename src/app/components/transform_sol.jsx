'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <div id='Services' className="bg-gray-50 min-h-screen px-6 py-16 relative overflow-hidden">
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      {/* Background decorative elements */}
      <div className="absolute top-6 left-20 w-3 h-3 bg-purple-500 transform rotate-45"></div>
      <div className="absolute top-6 right-20 w-3 h-3 bg-purple-500 transform rotate-45"></div>
      
      {/* Header section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className='font-bold'>Our AI-Driven</span> Services Include
          </h1>
          
          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white border border-gray-300 text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors flex items-center justify-center shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#98be2f] text-white hover:bg-[#98be2f] transition-colors flex items-center justify-center shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI Readiness Assessment Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/sol1.png" 
                alt="AI Readiness Assessment"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              AI Readiness Assessment
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              We evaluate your existing data and infrastructure to help you identify opportunities for AI adoption.
            </p>
          </div>

          {/* Custom AI Prototype Development Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/sol2.png" 
                alt="Custom AI Prototype Development"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Custom AI Prototype Development
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              From chatbots to predictive analytics, we co-create functional prototypes tailored to your business needs.
            </p>
          </div>

          {/* Data Engineering & Integration Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="sol3.png"
                alt="Data Engineering & Integration"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Data Engineering & Integration
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Clean, structured, and well-integrated data is key to successful AI projects—we help you get there.
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* Model Selection & Evaluation Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/sol4.png"
                alt="Model Selection & Evaluation"
                className="w-10 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Model Selection & Evaluation
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              We guide you through selecting the right machine learning or deep learning models—without the jargon.
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* AI-Enhanced Automation Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/sol5.png"
                alt="AI-Enhanced Automation"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              AI-Enhanced Automation
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Implement workflow automation and intelligent decision support using AI capabilities.
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* Responsible AI Advisory Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/sol6.png"
                alt="Responsible AI Advisory"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Responsible AI Advisory
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Ensure transparency, fairness, and security in your AI solutions with our best-practice frameworks.
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;