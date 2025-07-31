import React from 'react';

const HowWeDoIt = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        How We <span className="font-bold">Do It</span>
      </h1>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* AI Opportunity Assessment */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-purple-400 rounded-sm transform rotate-45"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <span className="text-green-600">■</span> AI Opportunity Assessment
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            — Identify where GenAI and ML can provide tangible business value
          </p>
        </div>

        {/* Incremental Modernization */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-purple-400 rounded-sm transform rotate-45"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <span className="text-green-600">■</span> Incremental Modernization
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            — Wrap, refactor or replace components iteratively without disrupting operations
          </p>
        </div>

        {/* Proof of Value Pilots */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-purple-400 rounded-sm transform rotate-45"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <span className="text-green-600">■</span> Proof of Value Pilots
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            — Test AI enhancements with low-risk MVPs before full-scale transformation
          </p>
        </div>

        {/* Toolchain Integration */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-2 lg:col-span-1">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-purple-400 rounded-sm transform rotate-45"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <span className="text-green-600">■</span> Toolchain Integration
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            — Use tools like LangSmith, OpenAI Function Calling, Vector DBs (Pinecone, FAISS), and MLflow for AI observability and lifecycle management
          </p>
        </div>

        {/* Cross-Functional Teams */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-2">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-purple-400 rounded-sm transform rotate-45"></div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <span className="text-blue-500">■</span> Cross-Functional Teams
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
            — Business, design, AI and engineering teams work in an agile model for faster feedback and iteration
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowWeDoIt;