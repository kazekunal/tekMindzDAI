import React from 'react';
 // Adjust path as needed

const OfferingsPage = () => {
  const offeringsData = [
    {
      title: "Rapid Prototyping:",
      description: "Build functional agents in 5 days."
    },
    {
      title: "Custom LLM Agents:",
      description: "Train models on your data & goals."
    },
    {
      title: "Proof of Concept (POC):",
      description: "Test agent feasibility in live settings."
    },
    {
      title: "Monitoring & Audits:",
      description: "Track decisions and ensure transparency."
    },
    {
      title: "MVP Development:",
      description: "Deliver full-featured agent systems fast."
    },
    {
      title: "Enterprise Rollout:",
      description: "Scale agents across business functions."
    },
    {
      title: "Agent Integrations:",
      description: "Connect to APIs, ERP, CRM systems."
    }
  ];

  return (
    <div className="w-full py-16 px-6 bg-white relative overflow-hidden">
      {/* Decorative purple diamonds */}
      <div className="absolute top-8 left-8 w-3 h-3 bg-purple-400 transform rotate-45 opacity-60"></div>
      <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 transform rotate-45 opacity-60"></div>
      
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-800">
            Our <span className="font-bold">Offerings</span>
          </h1>
        </div>

        {/* Offerings Grid */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 max-w-4xl mx-auto">
          {offeringsData.map((offering, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-300/50 rounded-xl"
            >
              <div className="flex items-start gap-4">
                {/* Checkmark Icon */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <img src="icon1.png" alt="Check" className="w-5 h-5" />
              </div>
                
                {/* Content */}
                <div className="flex-1">
                  <span className="text-gray-800 font-semibold text-base">
                    {offering.title}
                  </span>
                  <span className="text-gray-600 ml-1 text-base">
                    {offering.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferingsPage;