'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OfferingsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const offerings = [
    {
      icon: "/offer1.png",
      title: "Generative AI",
      description: "Cutting-edge generative AI solutions that create new content, designs, and insights from existing data. Our generative AI offerings include large language models, content generation platforms, synthetic data creation, creative design tools, and powered innovation frameworks.",
      link: "/genai"
    },
    {
      icon: "/offer2.png",
      title: "Agentic AI",
      description: "Enterprise-grade artificial intelligence solutions that automate complex processes, enhance decision-making, and drive business growth. We offer custom AI model development, AI integration services, computer vision systems, natural language processing, and AI strategy consulting.",
      link: "/agentic-ai"
    },
    {
      icon: "/offer3.png",
      title: "Data Analytics",
      description: "Comprehensive data analytics solutions that help organizations extract valuable insights from complex datasets. Our offerings include predictive analytics, data visualization, business intelligence, and custom analytics dashboards tailored to your specific industry needs.",
      link: "/data-analytics"
    },
    {
      icon: "/offer1.png",
      title: "RAG",
      description: "Transform your AI's capabilities with Retrieval-Augmented Generation (RAG). This advanced technique empowers Large Language Models by fetching real-time, factual information from your specific knowledge bases before answering a query.",
      link: "/RAG"
    }
  ];

  const nextSlide = () => {
    if (currentIndex < offerings.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getVisibleCards = () => {
    return offerings.slice(currentIndex, currentIndex + 3);
  };

  return (
    <>
      {/* Font Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap');
        .space-grotesk {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .roboto {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .carousel-transition {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>

      <div id='offerings' className="px-6 py-16 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
        {/* Background decorative element */}
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        
        {/* Header section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-grotesk text-white">
              Our <span className="text-white font-bold">Offerings</span>
            </h1>
            
            {/* Navigation buttons */}
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full border transition-colors flex items-center justify-center ${
                  currentIndex === 0 
                    ? 'border-gray-600 text-gray-600 cursor-not-allowed' 
                    : 'border-gray-400 text-gray-400 hover:text-white hover:border-white'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex >= offerings.length - 3}
                className={`w-12 h-12 rounded-full border transition-colors flex items-center justify-center ${
                  currentIndex >= offerings.length - 3
                    ? 'border-gray-600 text-gray-600 cursor-not-allowed' 
                    : 'border-gray-400 text-gray-400 hover:text-white hover:border-white'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getVisibleCards().map((offering, index) => (
                <div key={currentIndex + index} className="rounded-2xl p-8 transform transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 flex items-center justify-center mb-6">
                    <img 
                      src={offering.icon} 
                      alt={`${offering.title} icon`}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        // Fallback to hide broken images
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 space-grotesk">{offering.title}</h3>
                  
                  <p className="text-gray-300 text-base leading-relaxed mb-8 roboto">
                    {offering.description}
                  </p>
                  
                  <a href={offering.link}>
                    <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
                      Learn More →
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: offerings.length - 2 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-[#98be2f]' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferingsSection;