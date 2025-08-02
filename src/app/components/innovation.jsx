import React from 'react';

const AIInnovationPartners = () => {
  const services = [
    {
      icon: "🔄",
      title: "AI Strategy & Transformation Consulting",
      description: "Strategic AI adoption roadmaps with executive alignment, organizational change management, and phased implementation plans that deliver measurable business value and competitive advantage."
    },
    {
      icon: "⚡",
      title: "Innovation Lab",
      description: "Rapid AI prototyping and validation from concept to deployment in weeks, not months. Validate AI solutions with real-world testing and immediate ROI measurement frameworks."
    },
    {
      icon: "📊",
      title: "Synthetic Intelligence Lab",
      description: "Bespoke synthetic data generation tailored to your industry and business requirements, with AI simulation environments designed for your specific use cases and testing needs."
    },
    {
      icon: "⚙️",
      title: "MLOps & LLMOps Solutions",
      description: "End-to-end model lifecycle management from development to production. We handle deployment, monitoring, and optimization so your AI models perform reliably at scale."
    },
    {
      icon: "🚀",
      title: "Enterprise AI Training & Transformation",
      description: "Complete organizational AI adoption with change management, upskilling programs, and continuous innovation frameworks for sustained competitive advantage."
    },
    {
      icon: "🤖",
      title: "Intelligent AI Solutions and Workflow Development",
      description: "Custom generative AI applications with conversational interfaces and autonomous agents. Seamless integration into existing workflows for enhanced productivity and intelligent automation."
    }
  ];

  return (
    <div id="innovation" className="min-h-screen  to-slate-900 py-16 px-8 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-slate-600/30 rounded-full"></div>
      <div className="absolute top-40 right-32 w-16 h-16 border border-slate-600/20 rounded-lg rotate-45"></div>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-8">
            <span className="text-white">Tek</span>
            <span className="text-green-400">AI</span>
            <span className="text-white">Labs</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 tracking-wide">
            AI INNOVATION PARTNERS
          </h2>
          <p className="text-xl text-gray-300 font-medium">
            Transforming Business Through Intelligent Automation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-[1.02] group"
            >
              <div className="flex flex-col items-center text-center h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-400/20 transition-colors duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-white text-xl font-bold mb-4 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInnovationPartners;