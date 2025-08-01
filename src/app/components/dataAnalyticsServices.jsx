'use client'
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DataAnalyticsService = () => {
  return (
    <div id='DataAnalyticsService' className="min-h-screen px-6 py-16 relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
      `}</style>
      
      {/* Background decorative elements */}
      <div className="absolute top-6 left-20 w-3 h-3 bg-cyan-400 transform rotate-45"></div>
      <div className="absolute top-6 right-20 w-3 h-3 bg-cyan-400 transform rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-2 h-2 bg-blue-300 rounded-full"></div>
      <div className="absolute bottom-40 right-16 w-4 h-4 bg-blue-400 transform rotate-45"></div>
      
      {/* Header section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Our <span className='font-bold'>Data Analytics Service</span> Offerings
          </h1>
          
          {/* Navigation buttons */}
          
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* AI-Driven Analytics Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/data3.png" 
                alt="AI-Driven Analytics"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              AI-Driven Analytics
            </h3>
            
            <p className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Forecast with Confidence, Powered by AI
            </p>
            
            <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Leverage advanced machine learning and generative AI models to anticipate market trends, customer behavior, and operational shifts. Our predictive analytics solutions enable proactive decision-making, helping you stay ahead in a rapidly evolving landscape.
            </p>
          </div>

          {/* Embedded Analytics Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/data4.png" 
                alt="Embedded Analytics"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Embedded Analytics
            </h3>
            
            <p className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Seamless Workflow Insights
            </p>
            
            <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Integrate powerful analytics dashboards and reports directly into your business applications. This embedded approach enhances collaboration and decision-making by providing real-time, contextual insights without disrupting existing workflows.
            </p>
          </div>

          {/* Real-Time Edge Analytics Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/data5.png"
                alt="Real-Time Edge Analytics"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Real-Time Edge Analytics
            </h3>
            
            <p className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Data at the Speed of Business
            </p>
            
            <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Process and analyze data at its source with edge computing solutions that minimize latency. Ideal for IoT, manufacturing, and time-sensitive environments, our real-time analytics empower you to detect anomalies and optimize operations instantly.
            </p>
          </div>

          {/* Natural Language Processing Analytics Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/data6.png"
                alt="Natural Language Processing Analytics"
                className="w-10 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Natural Language Processing (NLP) Analytics
            </h3>
            
            <p className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Understand the Voice Behind the Data
            </p>
            
            <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Utilize NLP to analyze unstructured data such as customer feedback, social media, and documents. Gain deeper understanding through sentiment analysis, content classification, and summarization, enriching your strategic insights.
            </p>
          </div>

          {/* Data Visualization and Reporting Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/data3.png"
                alt="Data Visualization and Reporting"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Data Visualization and Reporting
            </h3>
            
            <p className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Clear Visuals, Powerful Narratives
            </p>
            
            <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Transform complex datasets into intuitive, interactive dashboards and reports. Our visualization tools enable stakeholders at all levels to understand trends and make data-driven decisions with clarity and confidence.
            </p>
          </div>

          {/* Data Storytelling Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <img 
                src="/data4.png"
                alt="Data Storytelling"
                className="w-12 h-12"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Data Storytelling
            </h3>
            
            <p className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              See Your Data, Tell Your Story
            </p>
            
            <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
              We help you manage and analyze massive data volumes using scalable cloud infrastructure and efficient data pipelines. Our solutions prioritize data quality, security, and real-time processing to ensure your analytics are accurate and actionable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsService;