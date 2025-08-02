'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CaseStudySection = ({ 
  title, 
  titleHighlight, 
  caseStudies = [], 
  isDarkTheme = false,
  sectionId 
}) => {
  const backgroundStyle = isDarkTheme 
    ? { background: 'linear-gradient(to bottom right, #00386C, #020C15)' }
    : { backgroundColor: 'white' };

  const textColorClass = isDarkTheme ? 'text-white' : 'text-gray-800';
  const cardBgClass = isDarkTheme ? 'bg-slate-800/80 border-slate-700/50' : 'bg-white border-gray-200';
  const descriptionColorClass = isDarkTheme ? 'text-gray-300' : 'text-gray-600';

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      <div id={sectionId} className="py-16 px-4 relative" style={backgroundStyle}>
        {/* Decorative elements */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-purple-500 rotate-45 opacity-60"></div>
        <div className="absolute top-8 right-8 w-2 h-2 bg-purple-500 rotate-45 opacity-60"></div>
        
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-light ${textColorClass}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="font-normal">{title}</span>{' '}
              <span className="font-bold">{titleHighlight}</span>
            </h2>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                className={`${cardBgClass} rounded-xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-xl`}
              >
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src='https://placehold.co/400x192/cccccc/666666?text=Image+Not+Found'; 
                    }}
                  />
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-semibold ${textColorClass} mb-3 leading-tight`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {study.title}
                  </h3>
                  
                  {study.challenge && (
                    <div className="mb-4">
                      <h4 className={`text-sm font-medium ${textColorClass} mb-2`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Challenge / Requirement:
                      </h4>
                      <p className={`${descriptionColorClass} text-sm leading-relaxed`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {study.challenge}
                      </p>
                    </div>
                  )}
                  
                  {study.useCase && (
                    <div className="mb-4">
                      <h4 className={`text-sm font-medium ${textColorClass} mb-2`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Use Case:
                      </h4>
                      <p className={`${descriptionColorClass} text-sm leading-relaxed`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {study.useCase}
                      </p>
                    </div>
                  )}
                  
                  {study.solution && (
                    <div className="mb-6">
                      <h4 className={`text-sm font-medium ${textColorClass} mb-2`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {study.solutionLabel || 'Our Solution:'}
                      </h4>
                      <p className={`${descriptionColorClass} text-sm leading-relaxed`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                        {study.solution}
                      </p>
                    </div>
                  )}
                  
                  {/* <div className="pt-4">
                    <Link href={study.link || "/case-study"} className="inline-block">
                      <button className="group transform-button bg-transparent border-2 border-[#ffffff]/50 text-[#96BB2F] hover:bg-[#96BB2F] hover:text-slate-800 hover:border-[#96BB2F] px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 flex items-center space-x-2 hover:shadow-lg hover:shadow-[#96BB2F]/20 hover:scale-105 active:scale-95 hover:cursor-pointer" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        <span className='font-bold transition-all duration-300'>Explore</span>
                        <svg 
                          className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudySection;