'use client'
import React from 'react';

const FitSection = ({
  title,
  description,
  image,
  bulletPoints = [], // Array of bullet point strings
  layout = 'left', // 'left' or 'right' - determines image position
  showGlow = true,
  backgroundColor = 'linear-gradient(to bottom right, #00386C, #020C15)',
  imageBackdrop = null, // Object with backdrop styling options
  highlightWords = [] // Array of words to highlight in description
}) => {
  // Determine if background is light (white or light colors)
  const isLightBackground = backgroundColor === 'white' || 
                           backgroundColor.toLowerCase().includes('white') ||
                           backgroundColor.toLowerCase().includes('#fff') ||
                           backgroundColor.toLowerCase().includes('rgb(255');

  // Set text colors based on background
  const titleColor = isLightBackground ? 'text-gray-800' : 'text-white';
  const descriptionColor = isLightBackground ? 'text-gray-700' : 'text-gray-300';
  const highlightColor = isLightBackground ? 'text-gray-900' : 'text-white';
  const bulletColor = isLightBackground ? 'text-gray-700' : 'text-gray-300';
  return (
    <>
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>

      <div 
        className="min-h-max py-16 px-4 relative overflow-hidden"
        style={{background: backgroundColor}}
      >
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-12 h-12 bg-purple-500 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute top-32 right-32 w-8 h-8 bg-purple-400 rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>

        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${layout === 'right' ? 'lg:grid-flow-col-dense' : ''}`}>
            
            {/* Image side */}
            <div className={`flex justify-center lg:justify-start ${layout === 'right' ? 'lg:col-start-2' : ''}`}>
              <div className="relative">
                {/* Image container with optional backdrop */}
                <div className={`relative ${imageBackdrop ? 'p-8 rounded-3xl' : ''}`} 
                     style={imageBackdrop ? { backgroundColor: imageBackdrop.color } : {}}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className={`w-full h-auto object-contain ${imageBackdrop ? 'rounded-2xl' : 'rounded-2xl'}`}
                  />
                </div>
                {/* Optional glow effect */}
                {showGlow && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl -z-10"></div>
                )}
              </div>
            </div>

            {/* Content side */}
            <div className={`space-y-8 ${layout === 'right' ? 'lg:col-start-1' : ''}`}>
              <div>
                <h2 className={`text-4xl lg:text-5xl font-light ${titleColor} mb-6`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {title.main} <span className="font-bold">{title.highlight}</span>
                </h2>
                
                <p className={`${descriptionColor} text-lg leading-relaxed mb-8`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {highlightWords.length > 0 ? (
                    // Render description with highlighted words
                    description.split(' ').map((word, index) => {
                      const cleanWord = word.replace(/[.,!?;]/g, '');
                      const isHighlighted = highlightWords.some(hw => 
                        cleanWord.toLowerCase().includes(hw.toLowerCase())
                      );
                      return (
                        <span key={index}>
                          {isHighlighted ? (
                            <span className={`font-bold ${highlightColor}`}>{word}</span>
                          ) : (
                            word
                          )}
                          {index < description.split(' ').length - 1 ? ' ' : ''}
                        </span>
                      );
                    })
                  ) : (
                    description
                  )}
                </p>

                {/* Bullet Points */}
                {bulletPoints.length > 0 && (
                  <div className="space-y-4">
                    {bulletPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <p className={`${bulletColor} leading-relaxed`} style={{ fontFamily: 'Roboto, sans-serif' }}>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitSection;