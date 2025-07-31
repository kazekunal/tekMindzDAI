'use client'
import React from "react";

const SdlcBanner = ({ activeTab, setActiveTab }) => {
    return (
      <>
        {/* Font Import */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        `}</style>
  
        <div className=" relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
          {/* Background pattern/texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
  
          {/* Breadcrumb */}
          <div className="relative z-10 pt-6 px-6 max-w-7xl mx-auto">
            <div className="text-gray-300 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Generative AI / Services
            </div>
          </div>
  
          {/* Main content */}
          <div className="relative z-10 text-center py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="font-bold">Software Development</span> <span className="font-light">Life Cycle Optimization</span>
              </h1>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Accelerate your development processes with AI tools that streamline coding, testing, and deployment while improving quality and reducing time-to-market.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

export default SdlcBanner;