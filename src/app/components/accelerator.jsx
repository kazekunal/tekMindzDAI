import React from 'react';
import { ArrowRight } from 'lucide-react';

// Reusable Accelerators Component
const AcceleratorsSection = ({
  // Header props
  title = "Accelerators",
  showDecorative = true,
  
  // Cards data
  cards = [],
  
  // Styling props
  backgroundColor = "bg-gray-100",
  cardBackgroundColor = "bg-white",
  titleColor = "text-gray-800",
  subtitleColor = "text-gray-600",
  descriptionColor = "text-gray-500",
  buttonTextColor = "text-blue-600",
  buttonHoverColor = "hover:text-blue-800",
  
  // Layout props
  containerClass = "max-w-6xl",
  gridCols = "lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
}) => {
  return (
    <div className={`w-full ${backgroundColor} py-16 px-6`}>
      <div className={`${containerClass} mx-auto`}>
        {/* Header with decorative elements */}
        <div className="text-center mb-12 relative">
          {showDecorative && (
            <>
              {/* Left decorative circle */}
              <div className="absolute left-4 md:left-20 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 bg-purple-300 rounded-full opacity-60"></div>
              </div>
              {/* Right decorative diamond */}
              <div className="absolute right-4 md:right-20 top-1/2 transform -translate-y-1/2">
                <div className="w-6 h-6 bg-purple-400 transform rotate-45 opacity-70"></div>
              </div>
            </>
          )}
          
          <h1 className={`text-4xl md:text-5xl font-semibold ${titleColor}`}>
            {title}
          </h1>
        </div>

        {/* Cards Grid */}
        <div className={`grid ${gridCols} gap-6`}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${cardBackgroundColor} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="w-full h-40 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className={`text-lg font-semibold ${titleColor} mb-2 leading-tight`}>
                  {card.title}
                </h3>
                
                <p className={`${subtitleColor} text-sm font-medium mb-3`}>
                  {card.subtitle}
                </p>
                
                <p className={`${descriptionColor} text-sm leading-relaxed mb-6`}>
                  {card.description}
                </p>
                
                {/* Explore button */}
                {/* <button className={`${buttonTextColor} ${buttonHoverColor} text-sm font-medium flex items-center gap-2 transition-colors duration-200 border border-gray-300 px-4 py-2 rounded-full hover:border-gray-400`}>
                  Explore
                  <ArrowRight size={14} />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcceleratorsSection;