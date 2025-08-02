'use client'
import React from 'react';
import Link from 'next/link';

const AILearning = () => {
  const features = [
    {
      icon: "/learn2.png", // Replace with your actual PNG path
      title: "AI Webinars",
    },
    {
      icon: "/learn3.png", // Replace with your actual PNG path
      title: "Training Programs",
    },
    {
      icon: "/learn4.png", // Replace with your actual PNG path
      title: "Free Resources",
    },
    {
      icon: "/learn5.png", // Replace with your actual PNG path
      title: "Community",
    }
  ];



  return (
    <>
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div id='ai-learning' className="min-h-screen py-16 px-4 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-purple-500 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute top-32 right-32 w-8 h-8 bg-purple-400 rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>

        {/* Main container */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="font-semibold">AI</span> Learning
            </h1>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Expand Your AI Knowledge
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Empower your teams to use AI in everyday work. TekAILabs offers hands-on training, webinars, and guided programs to help employees—including in govt departments—automate tasks, enhance workflows, and apply AI confidently using LLMs, RAG, and agent-based systems.
                </p>
                
                {/* Call to Action Button */}
                <div className="pt-4">
                  <Link href="/AI-Learn" className="inline-block">
                    <button className="group transform-button bg-transparent border-2 border-[#ffffff]/50 text-[#96BB2F] hover:bg-[#96BB2F] hover:text-slate-800 hover:border-[#96BB2F] px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 flex items-center space-x-2 Roboto hover:shadow-lg hover:shadow-[#96BB2F]/20 hover:scale-105 active:scale-95 hover:cursor-pointer" >
                      <span className='font-bold transition-all duration-300'>AI Labs</span>
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

              {/* Feature grid */}
              <div className="sm:w-[40rem] h-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="p-6"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <img 
                          src={feature.icon}
                          alt={feature.title}
                          className="w-16 h-16"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content - Image instead of canvas */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="">
                  <img 
                    src="/learn1.png" 
                    alt="AI visualization" 
                    className="w-full h-100 object-cover rounded-2xl"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AILearning;