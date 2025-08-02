import React from 'react';

const AgenticAITrends = () => {
  const trends = [
    {
      title: "LLMs as Agent Cores:",
      description: "OpenAI GPT-4o, Claude 3, Gemini 1.5, & Mistral are enabling rich cognition and multi-modal interaction within agents."
    },
    {
      title: "Real-Time Orchestration:",
      description: "Agents built using LangChain, CrewAI, and AutoGen respond to live inputs and trigger chained workflows."
    },
    {
      title: "Agent Teams & Swarms:",
      description: "Multi-agent architectures enable teams of specialized agents to solve complex workflows collaboratively."
    },
    {
      title: "Enterprise Alignment:",
      description: "Agents are being aligned with compliance, auditability, & explainability—key for sectors like government & healthcare."
    },
    {
      title: "Auto-Reflex & ReAct Models:",
      description: "Self-reflective agents using ReAct, Reflection, and Thought Loops for performance tuning."
    },
    {
      title: "Open Source Momentum:",
      description: "Tools like OpenDevin, AI Town, and BabyAGI are democratizing agent development."
    },
    {
      title: "Toolformer-Enabled Agents:",
      description: "Seamlessly invoke APIs, databases, and plugins without external scripts."
    }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-8 relative" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
      {/* Decorative purple diamonds */}
      <div className="absolute top-16 left-16 w-3 h-3 bg-purple-400 transform rotate-45"></div>
      <div className="absolute top-16 right-16 w-3 h-3 bg-purple-400 transform rotate-45"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8">
            Latest Trends in <span className="font-bold">Agentic AI</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Agentic AI is at the frontier of enterprise AI transformation. Today's agents go far beyond one-shot tools—
            they continuously plan, execute, learn, and collaborate.
          </p>
        </div>

        {/* Key Trends Header */}
        <div className="text-center mb-12">
          <div className="inline-block border border-gray-400 rounded-lg px-8 py-3">
            <h2 className="text-xl text-white font-medium">
              Key Trends:
            </h2>
          </div>
        </div>

        {/* Trends Grid */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-8 mb-16">
          {trends.map((trend, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <img 
                  src="icon3.png" 
                  alt="Trend icon" 
                  className="w-5 h-5"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <span className="text-white font-semibold text-base">
                  {trend.title}
                </span>
                <span className="text-gray-300 ml-1 text-base leading-relaxed">
                  {trend.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
            These trends signal a paradigm shift toward digital autonomy—with AI agents becoming key digital co-workers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgenticAITrends;