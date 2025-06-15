'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InsightsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const insights = [
    {
      title: "Insight Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis venenatis risus. Donec arcu dolor, faucibus.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop"
    },
    {
      title: "Insight Title 2", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis venenatis risus. Donec arcu dolor, faucibus.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face"
    },
    {
      title: "Insight Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis venenatis risus. Donec arcu dolor, faucibus.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % insights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <div id='insights' className="bg-gradient-to-br from-purple-100 via-purple-50 to-white min-h-screen px-6 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-20 right-32 w-24 h-24 bg-purple-400 rounded-full opacity-40"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl"></div>
      
      {/* Main container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between min-h-[70vh]">
          
          {/* Left Navigation Arrow */}
          <button 
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Content Area */}
          <div className="flex-1 flex items-center gap-12 max-w-6xl mx-8">
            
            {/* Image Section */}
            <div className="flex-shrink-0">
              <div className="w-96 h-80 rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={insights[currentSlide].image}
                  alt={insights[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12">
                Insights
              </h1>
              
              <div className="space-y-8">
                {insights.map((insight, index) => (
                  <div key={index} className={`transition-opacity duration-300 ${index === currentSlide ? 'opacity-100' : 'opacity-40'}`}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      {insight.description}
                    </p>
                    <button className="text-[#98be2f] font-medium hover:text-[#98be2f] transition-colors flex items-center gap-2">
                      Read More <ChevronRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {insights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#98be2f] ring-2 ring-[#98be2f] ring-opacity-30' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;