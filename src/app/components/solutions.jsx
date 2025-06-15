import React from 'react';
import { ChevronLeft, ChevronRight, FileText, DollarSign, Users, Truck, Activity, Shield } from 'lucide-react';

const SolutionsSection = () => {
  return (
    <div id='solutions' className="bg-gray-50 min-h-screen px-6 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-6 left-20 w-3 h-3 bg-purple-500 transform rotate-45"></div>
      <div className="absolute top-6 right-20 w-3 h-3 bg-purple-500 transform rotate-45"></div>
      
      {/* Header section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            Solutions
          </h1>
          
          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-white border border-gray-300 text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors flex items-center justify-center shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#98be2f] text-white hover:bg-[#98be2f] transition-colors flex items-center justify-center shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Intelligent Document Processing Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <FileText className="text-blue-600" size={28} />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Intelligent Document Processing</h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              AI-powered solution for automated extraction, classification, and processing of information...
            </p>
            
            <button className="border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium">
              Explore <ChevronRight size={14} />
            </button>
          </div>

          {/* Predictive Maintenance Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="text-blue-600" size={28} />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Predictive Maintenance</h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Machine learning solution that analyzes equipment data to predict failures before...
            </p>
            
            <button className="border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium">
              Explore <ChevronRight size={14} />
            </button>
          </div>

          {/* Customer Intelligence Platform Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Users className="text-blue-600" size={28} />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Intelligence Platform</h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Integrated platform that leverages AI to understand customer behavior, predict...
            </p>
            
            <button className="border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium">
              Explore <ChevronRight size={14} />
            </button>
          </div>

          {/* Supply Chain Optimization Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Truck className="text-blue-600" size={28} />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Supply Chain Optimization</h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Advanced analytics solution that optimizes inventory levels, logistics operations...
            </p>
            
            <button className="border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium">
              Explore <ChevronRight size={14} />
            </button>
          </div>

          {/* Healthcare Analytics Suite Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Activity className="text-blue-600" size={28} />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Healthcare Analytics Suite</h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Specialized suite of analytics tools designed for healthcare providers to improve patient...
            </p>
            
            <button className="border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium">
              Explore <ChevronRight size={14} />
            </button>
          </div>

          {/* Financial Risk Intelligence Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Shield className="text-blue-600" size={28} />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Financial Risk Intelligence</h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              AI-driven solution that analyzes financial data to identify risks, detect fraud patterns...
            </p>
            
            <button className="border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-[#98be2f] transition-all duration-300 flex items-center gap-2 text-sm font-medium">
              Explore <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;