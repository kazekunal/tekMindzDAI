import React from 'react';

export default function TekMindzFeatures() {
  const features = [
    {
      image: "transform3.png",
      title: "Focused On Practical AI Adoption"
    },
    {
      image: "transform4.png",
      title: "Transparent, Consultative Approach"
    },
    {
      image: "transform5.png",
      title: "Strong Foundation In Custom Software Development"
    },
    {
      image: "transform6.png",
      title: "Commitment To Ethical And Sustainable AI"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-gray-800">
            Why Choose <span className="font-bold text-gray-900">TekMindz</span>?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Image Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-m font-medium text-gray-700 leading-relaxed px-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-slate-800 rounded-2xl py-12 px-8 text-center">
          <h3 className="text-3xl md:text-5xl font-light text-white mb-8">
            Ready To Explore <span className="font-bold">Possibilities?</span>
          </h3>
          <p className="text-gray-300 text-lg mb-8  mx-auto">
            Transform with Us — and let's build the future, step by step.
          </p>
          <a className="bg-[#96BB2F] hover:cursor-pointer text-white font-medium px-8 py-3 rounded-full transition-colors duration-200" href='/transform/services'>
            Explore Our Services →
          </a>
        </div>
      </div>
    </div>
  );
}