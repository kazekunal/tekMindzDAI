import React from 'react';

const VisionSection = () => {
  return (
    <div id='overview' className="bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large background circle */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-30"></div>
        {/* Small decorative circles */}
        <div className="absolute top-20 right-20 w-8 h-8 bg-purple-200 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-40 w-12 h-12 bg-purple-150 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-32 w-4 h-4 bg-purple-200 rounded-full opacity-50"></div>
        {/* Purple circle on the right */}
        <div className="absolute top-20 right-12 w-24 h-24 bg-purple-400 rounded-full opacity-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image Placeholder */}
          <div className="relative">
            <div className="relative bg-gray-200 rounded-3xl overflow-hidden shadow-2xl" style={{width: '445px', height: '320px'}}>
              {/* Image placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img src="tek1.png" alt="AI Brain Visualization" className="w-[28rem] h-full object-contain sm:h-full sm:object-cover" />
            </div>
              
              {/* Replace this div with your actual image */}
             
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl text-gray-900 leading-tight">
                Overview Of{' '}
                <span className="block">
                  <span className="font-bold text-gray-900">TekMindzDAI Vision</span>
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                At TekMindzDAI, we envision a future where data and artificial intelligence 
                seamlessly integrate into business operations, driving innovation and value. Our 
                mission is to empower organizations with cutting-edge AI solutions that 
                transform raw data into actionable intelligence. Through a combination of 
                advanced analytics, machine learning, and human expertise, we help businesses 
                navigate the complexities of digital transformation while maintaining a focus on 
                ethical AI practices and sustainable outcomes.
              </p>
            </div>

            <div className="pt-4">
              <button className="group bg-white border-2 border-gray-300 text-gray-700 hover:border-purple-400 hover:text-purple-600 px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 shadow-sm hover:shadow-md">
                <span>Know More</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;