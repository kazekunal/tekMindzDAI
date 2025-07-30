'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// Import Space Grotesk font
const fontStyle = {
  fontFamily: '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

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
    <>
      {/* Font Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .space-grotesk {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
      
      <div className="min-h-screen relative overflow-hidden space-grotesk" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-purple-400 rounded-lg rotate-12"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-purple-600 rounded-lg rotate-45 opacity-20"></div>
          <div className="absolute bottom-32 left-40 w-24 h-24 border border-[#98be2f] rounded-full opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#" className="text-gray-400 hover:text-gray-300 Roboto">
                    Overview
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-gray-500" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white Roboto">
                    Offerings
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="grid lg:grid-cols-[7fr_3fr] gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white text-base font-medium text-lg" style={{fontFamily: 'Roboto, sans-serif'}}>Data Intelligence</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl text-white leading-tight space-grotesk">
                  <span className='font-bold'>Transforming Data</span> Into
                  <span className="block"> Strategic Advantage</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-m leading-relaxed max-w-xl space-grotesk">
                Unleash the power of your enterprise data through cutting-edge software 
                services that drive actionable insights and intelligent decision-making
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group bg-transparent border-2 border-[#ffffff]/50 text-[#96BB2F] hover:bg-[#96BB2F] hover:text-slate-800 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 Roboto">
                  <span className='font-bold'>Transform with Us</span>
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
                
                <div className="flex items-center space-x-2 text-gray-400 space-grotesk">
                  <span className="text-2xl font-light">0{currentSlide}</span>
                  <div className="w-8 h-px bg-gray-600"></div>
                  <span className="text-lg font-light">0{totalSlides}</span>
                </div>
              </div>
            </div>

            {/* Right Visual Elements - PNG Image */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src="/hero.png"
                  alt="Data Intelligence Visualization"
                  width={600}
                  height={384}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;