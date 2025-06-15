import React from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Zap, TrendingUp } from 'lucide-react';

const OfferingsSection = () => {
  return (
    <div id='offerings' className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-16 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute top-20 right-1/3 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Header section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-white">Offerings</span>
          </h1>
          
          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Generative AI Card */}
          <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 hover:bg-blue-800/60 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-700/50 rounded-xl flex items-center justify-center mb-6">
              <RotateCcw className="text-[#98be2f]" size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Generative AI</h3>
            
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Cutting-edge generative AI solutions that create new content, designs, and insights from existing data. Our generative AI offerings include large language models, content generation platforms, synthetic data creation, creative design tools, and powered innovation frameworks.
            </p>
            
            <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
              Learn More <ChevronRight size={16} />
            </button>
          </div>

          {/* Agentic AI Card */}
          <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 hover:bg-blue-800/60 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-700/50 rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-yellow-400" size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Agentic AI</h3>
            
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Enterprise-grade artificial intelligence solutions that automate complex processes, enhance decision-making, and drive business growth. We offer custom AI model development, AI integration services, computer vision systems, natural language processing, and AI strategy consulting.
            </p>
            
            <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
              Learn More <ChevronRight size={16} />
            </button>
          </div>

          {/* Data Analytics Card */}
          <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-8 hover:bg-blue-800/60 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-700/50 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-blue-400" size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Data Analytics</h3>
            
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Comprehensive data analytics solutions that help organizations extract valuable insights from complex datasets. Our offerings include predictive analytics, data visualization, business intelligence, and custom analytics dashboards tailored to your specific industry needs.
            </p>
            
            <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
              Learn More <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;