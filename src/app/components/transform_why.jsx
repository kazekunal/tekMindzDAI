'use client'
import React from 'react'

function ReusableFeaturesSection({ title, features, cta }) {
  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4 font-sans">
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
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-4">
              {/* Image Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                    // Added a fallback placeholder image
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/E9D5FF/333333?text=Icon'; }}
                  />
                </div>
              </div>
              {/* Title */}
              <h3 className="text-base font-medium text-gray-700 leading-relaxed px-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        {cta && (
            <div className="mt-16 bg-slate-800 rounded-2xl py-12 px-8 text-center">
                <h3 className="text-3xl md:text-5xl font-light text-white mb-8">
                    {cta.title}
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    {cta.description}
                </p>
                <a className="bg-[#96BB2F] hover:bg-[#82a329] text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 inline-block" href={cta.buttonLink}>
                    {cta.buttonText}
                </a>
            </div>
        )}
      </div>
    </div>
  );
}

export default ReusableFeaturesSection;

