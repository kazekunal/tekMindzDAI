import React from 'react';

const PlatformDevelopment = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Decorative stars */}
          <div className="relative">
            <div className="absolute -top-4 left-1/4 w-2 h-2 bg-[#96BB2F] transform rotate-45"></div>
            <div className="absolute -top-2 right-1/4 w-2 h-2 bg-[#96BB2F] transform rotate-45"></div>
            
            <h1 className="text-5xl font-light mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Platform <span className="font-bold">Development</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Building scalable, intelligent, & AI-first platforms to power your digital future
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-300 max-w-5xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            At TekMata, we specialize in developing business-critical platforms tailored to your needs—with a focus on modular design, AI readiness, and future-proof architecture. 
            Our engineering approach comprises reusable components, automation, and cutting-edge frameworks to help businesses move faster and smarter.
          </p>
        </div>

        {/* Key Capabilities Title */}
        <div className="text-center mb-8">
          <div className="inline-block bg-slate-800 border border-slate-600 rounded-2xl px-6 py-2">
            <h2 className="text-xl font-semibold text-white-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Key Capabilities
            </h2>
          </div>
        </div>

        {/* Capabilities Grid - 2 Rows Layout */}
        <div className="space-y-8">
          
          {/* First Row - 6 items in 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6">
            
            {/* Custom Platform Engineering */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Custom Platform Engineering
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  for web, mobile, and enterprise-grade applications
                </p>
              </div>
            </div>

            {/* GenAI-Powered Root Cause Analysis */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  GenAI-Powered Root Cause Analysis
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — integrating LLMs into development for issue triaging and diagnostics
                </p>
              </div>
            </div>

            {/* Reusable Component Libraries & Design */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Reusable Component Libraries & Design
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Systems to accelerate development and ensure consistency
                </p>
              </div>
            </div>

            {/* AI-Driven Software Testing */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  AI-Driven Software Testing
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — incorporating AI for automated test case generation, defect prediction, and exploratory testing
                </p>
              </div>
            </div>

            {/* DevOps Integration */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  DevOps Integration
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  with CI/CD pipelines, containerization (Docker, Kubernetes), and testing frameworks
                </p>
              </div>
            </div>

            {/* Synthetic Test Data Generation */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Synthetic Test Data Generation
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  for privacy-safe, scalable test environments
                </p>
              </div>
            </div>

          </div>

          {/* Second Row - 6 items in 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6">
            
            {/* MLOps Enablement */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  MLOps Enablement
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — automating ML model lifecycle, deployment, monitoring, and scaling platforms
                </p>
              </div>
            </div>

            {/* LangChain, LangGraph, LangSmith Integration */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  LangChain, LangGraph, LangSmith Integration
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — building autonomous agents and complex AI-native platforms
                </p>
              </div>
            </div>

            {/* Cloud-Native Architecture */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Cloud-Native Architecture
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  using serverless, microservices, and event-driven patterns
                </p>
              </div>
            </div>

            {/* API-First & Headless Platforms */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  API-First & Headless Platforms
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — enabling flexibility and omnichannel delivery
                </p>
              </div>
            </div>

            {/* AI-First Development */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  AI-First Development
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — embedding intelligence into core functionality right from the design phase
                </p>
              </div>
            </div>

            {/* Rapid Prototyping & MVP Delivery */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Rapid Prototyping & MVP Delivery
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — lean approach for validating ideas quickly with working solutions
                </p>
              </div>
            </div>

          </div>

          {/* Third Row - 2 items centered */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6">
            
            {/* AI-Augmented Development */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  AI-Augmented Development
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  — building composable apps with integrated workflows and AI adaptability with tools like Windsurf
                </p>
              </div>
            </div>

            {/* Cross-Platform App Development */}
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#96BB2F] transform rotate-45 mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  Cross-Platform App Development
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  using React Native, Flutter, and modern web frameworks
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PlatformDevelopment;