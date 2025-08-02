'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';


const CaseStudiesSection = ({ title, caseStudySets = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % caseStudySets.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + caseStudySets.length) % caseStudySets.length);
    };
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  
    const currentSet = caseStudySets[currentSlide] || [];
  
    return (
      <>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        `}</style>
        <div id='case-studies' className="min-h-screen py-16 px-4 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}} >
          <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
          <div className="absolute top-20 right-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className='font-bold'>{title}</span>
              </h1>
            </div>
  
            {caseStudySets.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors -ml-4"><ChevronLeft size={48} /></button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors -mr-4"><ChevronRight size={48} /></button>
              </>
            )}
  
            <div className="px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSet.map((study) => (
                  <div key={study.id} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found'; }}/>
                    </div>
                    <div className="p-6">
                      <div className="mb-3"><span className="text-sm font-medium text-purple-400" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.category}</span></div>
                      <h3 className="text-xl font-semibold text-white mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{study.title}</h3>
                      {study.challenge && (<div className="mb-4"><h4 className="text-sm font-medium text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>Challenge / Requirement:</h4><p className="text-gray-300 text-m leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.challenge}</p></div>)}
                      {study.description && (<div className="mb-4"><p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.description}</p></div>)}
                      {study.solution && (<div className="mb-6"><h4 className="text-sm font-medium text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>Our Solution:</h4><p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.solution}</p></div>)}
                      
                      <div className="pt-4">
                        <Link href="/case-study" className="inline-block">
                          <button className="group transform-button bg-transparent border-2 border-[#ffffff]/50 text-[#96BB2F] hover:bg-[#96BB2F] hover:text-slate-800 hover:border-[#96BB2F] px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 flex items-center space-x-2 Roboto hover:shadow-lg hover:shadow-[#96BB2F]/20 hover:scale-105 active:scale-95 hover:cursor-pointer" >
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {caseStudySets.length > 1 && (
              <div className="flex justify-center items-center space-x-3 mt-12">
                {caseStudySets.map((_, index) => (<button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full border-2 transition-all ${currentSlide === index ? 'bg-[#98be2f] border-[#98be2f]' : 'bg-transparent border-[#98be2f] hover:bg-[#98be2f]'}`} />))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
  

export default CaseStudiesSection;