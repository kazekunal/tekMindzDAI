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

const HeroSection = ({
  title,
  description,
  image,
  breadcrumb,
  totalSlides = 3,
  autoAdvance = true,
  autoAdvanceInterval = 5000
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Auto-advance slides
  useEffect(() => {
    if (!autoAdvance) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => prev === totalSlides ? 1 : prev + 1);
    }, autoAdvanceInterval);
    return () => clearInterval(timer);
  }, [autoAdvance, autoAdvanceInterval, totalSlides]);

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
          {/* Dynamic Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumb.items.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {item.isActive ? (
                        <BreadcrumbPage className="text-white Roboto">
                          {item.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink 
                          href={item.href || '#'} 
                          className="text-gray-400 hover:text-gray-300 Roboto"
                        >
                          {item.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumb.items.length - 1 && (
                      <BreadcrumbSeparator className="text-gray-500" />
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="grid lg:grid-cols-[7fr_3fr] gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Dynamic Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl text-white leading-tight space-grotesk">
                  <span className="block">{title.main}</span>
                  <span className='font-bold'>{title.highlight}</span>
                </h1>
              </div>

              {/* Dynamic Description */}
              <p className="text-gray-300 text-m leading-relaxed max-w-xl space-grotesk">
                {description}
              </p>

              {/* Slide Navigation */}
             
            </div>

            {/* Right Visual Elements - Dynamic PNG Image */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-96 h-96">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width || 600}
                  height={image.height || 384}
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