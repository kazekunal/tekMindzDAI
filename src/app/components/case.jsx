'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop&auto=format",
      challenge: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      solution: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      id: 2,
      title: "Case Study 2",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop&auto=format",
      challenge: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      solution: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      id: 3,
      title: "Case Study 3",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop&auto=format",
      challenge: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      solution: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= caseStudies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? caseStudies.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id='case-studies' className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
      
      {/* Main container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-white">
            Case <span className="font-normal">Studies</span>
          </h1>
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors"
        >
          <ChevronRight size={48} />
        </button>

        {/* Case studies container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {caseStudies.map((study, index) => (
              <div key={study.id} className="w-full flex-shrink-0 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {/* Case Study Card */}
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={study.image} 
                            alt={study.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-2xl font-semibold text-white mb-4">{study.title}</h3>
                          <div className="mb-4">
                            <h4 className="text-lg font-medium text-white mb-2">Challenge:</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                          </div>
                          <div className="mb-6">
                            <h4 className="text-lg font-medium text-white mb-2">Our Solution:</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                          </div>
                          <button className="border border-[#98be2f] text-[#98be2f] inline-flex items-center gap-2 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-blue-900 cursor-pointer transition-all duration-300 font-medium">
                                Explore <ChevronRight size={16} />
                                </button>
                        </div>
                      </div>

                      {/* Second card for larger screens */}
                      {caseStudies[index + 1] && (
                        <div className="hidden lg:block bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={caseStudies[index + 1].image} 
                              alt={caseStudies[index + 1].title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">{caseStudies[index + 1].title}</h3>
                            <div className="mb-4">
                              <h4 className="text-lg font-medium text-white mb-2">Challenge:</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{caseStudies[index + 1].challenge}</p>
                            </div>
                            <div className="mb-6">
                              <h4 className="text-lg font-medium text-white mb-2">Our Solution:</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{caseStudies[index + 1].solution}</p>
                            </div>
                            <button className="border border-[#98be2f] text-[#98be2f] inline-flex items-center gap-2 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-blue-900 cursor-pointer transition-all duration-300 font-medium">
                                Explore <ChevronRight size={16} />
                                </button>
                          </div>
                        </div>
                      )}

                      {/* Third card for larger screens */}
                      {caseStudies[index + 2] && (
                        <div className="hidden lg:block bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={caseStudies[index + 2].image} 
                              alt={caseStudies[index + 2].title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">{caseStudies[index + 2].title}</h3>
                            <div className="mb-4">
                              <h4 className="text-lg font-medium text-white mb-2">Challenge:</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{caseStudies[index + 2].challenge}</p>
                            </div>
                            <div className="mb-6">
                              <h4 className="text-lg font-medium text-white mb-2">Our Solution:</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{caseStudies[index + 2].solution}</p>
                            </div>
                            <button className="border border-[#98be2f] text-[#98be2f] inline-flex items-center gap-2 px-6 py-2 rounded-full hover:bg-[#98be2f] hover:text-blue-900 cursor-pointer transition-all duration-300 font-medium">
                                Explore <ChevronRight size={16} />
                                </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all ${
                currentSlide === index 
                  ? 'bg-[#98be2f] border-[#98be2f]' 
                  : 'bg-transparent border-[#98be2f] hover:bg-[#98be2f]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;