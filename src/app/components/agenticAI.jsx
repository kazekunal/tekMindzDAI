import React from 'react';

const AgenticAIComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8">
      {/* Background decorative elements */}
      <div className="absolute top-12 left-12 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
      <div className="absolute top-12 right-12 w-12 h-12 bg-purple-300 rounded-full opacity-50"></div>
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-gray-900 mb-6">
            What is <span className="font-bold">Agentic AI</span>?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Agentic AI marks a fundamental shift in artificial intelligence—where systems no longer passively respond to prompts but take initiative, 
            reason through complex goals, and operate autonomously. These intelligent agents think and act independently, make decisions, and 
            adapt to dynamic environments with minimal human involvement.
          </p>
        </div>

        {/* Key Characteristics Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Key Characteristics:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Goal-Directed */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <img src="icon1.png" alt="Check" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Goal-Directed:</h3>
                <p className="text-gray-600">Agents are designed to achieve specific business objectives autonomously.</p>
              </div>
            </div>

            {/* Environment-Aware */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <img src="icon1.png" alt="Check" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Environment-Aware:</h3>
                <p className="text-gray-600">Monitors changes, receives feedback, and recalibrates actions.</p>
              </div>
            </div>

            {/* Multi-Step Reasoning */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <img src="icon1.png" alt="Check" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Step Reasoning:</h3>
                <p className="text-gray-600">Handles complex tasks involving dependencies, loops, and decision forks.</p>
              </div>
            </div>

            {/* Continuously Learning */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12  flex items-center justify-center">
                <img src="icon1.png" alt="Check" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuously Learning:</h3>
                <p className="text-gray-600">Learns from interactions, user feedback, and performance outcomes.</p>
              </div>
            </div>

            {/* Autonomous Execution */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8  flex items-center justify-center">
                <img src="icon1.png" alt="Check" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Autonomous Execution:</h3>
                <p className="text-gray-600">Executes tasks, adapts to real-time input, and self-corrects.</p>
              </div>
            </div>

            {/* Composable with APIs & Tools */}
            <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8  flex items-center justify-center">
                <img src="icon1.png" alt="Check" className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Composable with APIs & Tools:</h3>
                <p className="text-gray-600">Seamlessly integrates into enterprise systems, LLMs, RAG, and cloud ecosystems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <div className="text-center">
          <p className="text-gray-600 text-base">
            Agentic AI is ideal for industries that require intelligent automation, such as HR, finance, government, legal, and customer support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgenticAIComponent;