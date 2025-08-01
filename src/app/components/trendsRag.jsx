import React from 'react';

// Reusable Trends Section Component
const TrendsSection = ({
  // Header props
  mainTitle = "Latest Trends in",
  highlightText = "RAG",
  
  // Bullet points data
  bulletPoints = [],
  
  // Styling props
  backgroundColor = "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900",
  titleColor = "text-white",
  bulletTextColor = "text-gray-300",
  bulletHighlightColor = "text-white",
  cardBorderColor = "border-blue-700/30",
  cardBackgroundColor = "bg-blue-800/20",
  
  // Icon props
  bulletIcon = "gai1.png",
  
  // Layout props
  containerClass = "max-w-6xl",
  gridCols = "lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
}) => {
  return (
    <div className={`w-full py-16 px-6 relative overflow-hidden`} style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
      {/* Decorative stars */}
      <div className="absolute top-8 left-8 w-2 h-2 bg-purple-400 transform rotate-45"></div>
      <div className="absolute top-8 right-8 w-2 h-2 bg-purple-400 transform rotate-45"></div>
      
      <div className={`${containerClass} mx-auto`}>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-light ${titleColor}`}>
            {mainTitle} <span className="font-semibold">{highlightText}</span>
          </h1>
        </div>

        {/* Bullet Points Grid */}
        <div className={`grid ${gridCols} gap-6`}>
          {bulletPoints.map((point, index) => (
            <div 
              key={index} 
              className={`${cardBackgroundColor} border ${cardBorderColor} rounded-lg p-6 backdrop-blur-sm hover:bg-blue-800/30 transition-colors duration-300`}
            >
              <div className="flex items-start gap-4">
                {/* Bullet Icon */}
                <div className="flex-shrink-0 mt-1">
                  <img 
                    src={bulletIcon}
                    alt="Bullet point"
                    className="w-5 h-5"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <span className={`${bulletHighlightColor} font-semibold`}>
                    {point.title}
                  </span>
                  <span className={`${bulletTextColor} ml-1`}>
                    {point.description}
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

export default TrendsSection;