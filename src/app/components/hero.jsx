'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, Settings, Eye, Network } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 1 ? totalSlides : prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-purple-600 rounded-lg rotate-45 opacity-20"></div>
        <div className="absolute bottom-32 left-40 w-24 h-24 border border-[#98be2f] rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm">
            <span className="text-gray-400">Overview</span>
            <span className="text-gray-500 mx-2">/</span>
            <span className="text-white">Offerings</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-full px-4 py-2">
              <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-white text-sm font-medium">Data Intelligence</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Transforming Data{' '}
                <span className="block">Into Strategic Advantage</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Unleash the power of your enterprise data through cutting-edge software 
              services that drive actionable insights and intelligent decision-making
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-transparent border-2 border-[#98be2f] text-[#98be2f] hover:bg-[#98be2f] hover:text-slate-800 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2">
                <span>Transform with Us</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Navigation */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={prevSlide}
                  className="p-2 text-gray-400 hover:text-[#98be2f] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 text-gray-400 hover:text-[#98be2f] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-2xl font-light">0{currentSlide}</span>
                <div className="w-8 h-px bg-gray-600"></div>
                <span className="text-lg font-light">0{totalSlides}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Central AI Badge */}
            <div className="relative z-10">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-white text-6xl font-bold">AI</span>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-12 -right-12 w-20 h-20 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl flex items-center justify-center animate-pulse">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl flex items-center justify-center animate-bounce">
                <Network className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute top-20 -left-16 w-18 h-18 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl flex items-center justify-center">
                <Settings className="w-7 h-7 text-white animate-spin" style={{animationDuration: '3s'}} />
              </div>
              
              <div className="absolute -bottom-12 right-8 w-16 h-16 bg-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute bottom-32 -right-20 w-14 h-14 bg-purple-600 rounded-xl opacity-80"></div>
              
              {/* Purple Orb */}
              <div className="absolute -bottom-16 left-16 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-lg animate-pulse"></div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                </linearGradient>
              </defs>
              
              <path 
                d="M100 200 Q200 150 300 200" 
                stroke="url(#lineGradient)" 
                strokeWidth="1" 
                fill="none"
                className="animate-pulse"
              />
              <path 
                d="M150 100 Q200 150 250 100" 
                stroke="url(#lineGradient)" 
                strokeWidth="1" 
                fill="none"
                className="animate-pulse"
                style={{animationDelay: '1s'}}
              />
              <path 
                d="M100 300 Q200 250 300 300" 
                stroke="url(#lineGradient)" 
                strokeWidth="1" 
                fill="none"
                className="animate-pulse"
                style={{animationDelay: '2s'}}
              />
            </svg>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-12 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-4 w-3 h-3 bg-[#98be2f] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;