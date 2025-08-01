'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <div id='solutions' className="bg-gray-50 min-h-screen px-6 py-16 relative overflow-hidden">
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
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Solutions
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
          {/* Intelligent Document Processing Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              {/* Replace this img src with your actual PNG icon path */}
              <img 
                src="/sol1.png" 
                alt="Document Processing"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Intelligent Document Processing
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              AI-powered solution for automated extraction, classification, and processing of information...
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* Predictive Maintenance Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              {/* Replace this img src with your actual PNG icon path */}
              <img 
                src="/sol2.png" 
                alt="Predictive Maintenance"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Predictive Maintenance
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Machine learning solution that analyzes equipment data to predict failures before...
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* Customer Intelligence Platform Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              {/* Replace this img src with your actual PNG icon path */}
              <img 
                src="sol3.png"
                alt="Customer Intelligence"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Customer Intelligence Platform
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Integrated platform that leverages AI to understand customer behavior, predict...
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* Supply Chain Optimization Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              {/* Replace this img src with your actual PNG icon path */}
              <img 
                src="/sol4.png"
                alt="Supply Chain"
                className="w-10 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Supply Chain Optimization
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Advanced analytics solution that optimizes inventory levels, logistics operations...
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* Healthcare Analytics Suite Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              {/* Replace this img src with your actual PNG icon path */}
              <img 
                src="/sol5.png"
                alt="Healthcare Analytics"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Healthcare Analytics Suite
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Specialized suite of analytics tools designed for healthcare providers to improve patient...
            </p>
            
            {/* <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-white hover:border-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Explore <ChevronRight size={14} />
            </button> */}
          </div>

          {/* Financial Risk Intelligence Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              {/* Replace this img src with your actual PNG icon path */}
              <img 
                src="/sol6.png"
                alt="Financial Risk"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Financial Risk Intelligence
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              AI-driven solution that analyzes financial data to identify risks, detect fraud patterns...
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