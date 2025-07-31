import React from 'react';
import Image from 'next/image';

const DigitalTransformation = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          {/* Left Column - Title and Description */}
          <div>
            <p className="text-5xl font-bold mb-2 mt-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Digital Transformation
            </p>
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              And Strategy
            </h2>
            
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Reimagining legacy systems and products with AI driven innovation, cloud, and modern engineering
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              At TekMata, we don't just digitize—we intelligently transform. In today's fast-moving landscape, businesses need enhanced computational capacity, the digital transformation services are designed with AI-first mindset, integrating AI-native thinking into legacy systems and enabling products to unlock new value, improve customer experience, and enable intelligent automation.
            </p>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              We specialize in transforming traditional applications into AI-enhanced platforms by embracing machine learning, GenAI, and automation at key touchpoints.
            </p>
            
            <h4 className="text-4xl font-semibold text-white mt-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              What We Help You Achieve:
            </h4>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex items-start">
            <div className="relative">
              <Image 
                src="/services7.png" 
                alt="Digital Transformation Services"
                width={640}
                height={640}
                className="object-cover rounded-2xl"
              />
              {/* Decorative diamond */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 transform rotate-45 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Services Grid - 2 Rows Layout */}
        <div className="space-y-8">
          
          {/* First Row - 6 items in 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            
            {/* AI Strategy & Roadmap Development */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> AI Strategy & Roadmap Development
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Identify high-impact AI use cases tailored to your business model and goals. Strategic planning that aligns with your mapping
              </p>
            </div>

            {/* Intelligent Workflow Automation */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> Intelligent Workflow Automation
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Use LLMs and AI agents to optimize decision flows, approvals, and exception handling in business processes
              </p>
            </div>

            {/* AI-First Product Strategy */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> AI-First Product Strategy
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Rethink your product design to center around AI-driven decision-making, personalization, and dynamic user interactions from the ground up
              </p>
            </div>

            {/* Data Strategy for AI Enablement */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> Data Strategy for AI Enablement
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Redesign your data ecosystems to support AI—data lakes, unified schemas, and pipelines that enable ML, GenAI, and analytics use cases
              </p>
            </div>

            {/* AI-Augmented Product Modernization */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> AI-Augmented Product Modernization
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Enhance your existing applications with features like recommendation engines, predictive analytics, natural language interfaces, and smart search using LLMs
              </p>
            </div>

            {/* Embedding AI, GenAI Features Into Legacy Systems */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> Embedding AI, GenAI Features Into Legacy Systems
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Wrap and extend older platforms with GenAI-based copilots, summarization tools, or chatbots using LangChain, LangGraph or Semantic Kernel without full reengineering
              </p>
            </div>

          </div>

          {/* Second Row - 6 items in 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            
            {/* Legacy Modernization to AI-Ready Architecture */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> Legacy Modernization to AI-Ready Architecture
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Refactor or re-architect legacy apps into cloud-native, microservices-based platforms ready for AI integrations (LLMs, ML models, data pipelines)
              </p>
            </div>

            {/* Responsible AI, Ethics & Explainable AI Practices */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> Responsible AI, Ethics & Explainable AI Practices
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Ensure AI decisions are transparent, ethical, and compliant using explainability frameworks and governance that is AI-first and fits your digital journey
              </p>
            </div>

            {/* AI-Enablement of Existing Products */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> AI-Enablement of Existing Products
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Transform traditional business with specialized smart search, predictive insights, conversational recommendations, and smart assistants
              </p>
            </div>

            {/* Conversational Interfaces & Voice AI */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> Conversational Interfaces & Voice AI
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Turn static user experiences into conversational ones with intelligent user interfaces using RAG (Retrieval Augmented Generation) and multimodal models
              </p>
            </div>

            {/* Domain-Specific AI Transformation */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> Domain-Specific AI Transformation
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Vertical specific AI solutions - customized around industry domain-trained models for smarter decision-making, process optimization, and automation
              </p>
            </div>

            {/* AI-Driven UX/Design Thinking */}
            <div className="space-y-2">
              <h5 className="font-semibold text-white flex items-start text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="text-green-400 mr-2 mt-1">■</span> AI-Driven UX/Design Thinking
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed ml-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Rethink user experience by combining human-centered design with intelligent UX elements—like adaptive UI, context-aware interfaces, and personalization engines
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DigitalTransformation;