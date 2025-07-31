'use client'
import React from 'react';

const FitSection = () => {
  return (
    <>
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div 
        className="min-h-max py-16 px-4 relative overflow-hidden"
        style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}
      >
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-purple-500 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute top-32 right-32 w-8 h-8 bg-purple-400 rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Transform visualization */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="">
                  <img 
                    src="/transform2.png" 
                    alt="AI Transform Visualization"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Where We <span className="font-bold">Fit In</span>
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Whether you're exploring your first AI use case or looking to enhance existing 
                  software with smarter capabilities, we offer flexible engagement models – from 
                  consulting to full-stack implementation.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitSection;