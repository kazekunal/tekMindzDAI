'use client'
import React from 'react';
import Image from 'next/image';

const DataEngineeringAnalytics = () => {
  const services = [
    {
      title: "Exploratory Data Analysis (EDA)",
      description: "to identify trends, outliers, and business opportunities"
    },
    {
      title: "Centralized Logging & Monitoring",
      description: "with the ELK Stack (Elasticsearch, Logstash, Kibana)"
    },
    {
      title: "Feature Engineering",
      description: "to improve model performance and extract meaningful patterns"
    },
    {
      title: "ETL/ELT Development & Automation",
      description: "for structured and semi-structured data"
    },
    {
      title: "Custom Dashboards & Visualizations",
      description: "using open-source tools like Grafana"
    },
    {
      title: "Data Quality, Governance & Lineage",
      description: "to ensure trust and traceability"
    },
    {
      title: "Real-Time Data Processing",
      description: "with tools like Kafka"
    },
    {
      title: "Cloud-Native Data Architecture",
      description: "leveraging AWS, Azure, or GCP"
    }
  ];

  return (
    <>
      {/* Font Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .space-grotesk {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>

      <div className="py-20 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-lg rotate-45 opacity-40"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-purple-400 rounded-full opacity-25"></div>
          <div className="absolute top-60 right-40 w-8 h-8 bg-purple-500 rounded-lg rotate-12 opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-800 mb-4 space-grotesk">
              <span className='font-bold'>Data Engineering</span>  & Analytics
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto space-grotesk">
              Transform your raw data into actionable intelligence with robust engineering and insightful analytics.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                {/* Service Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <Image
                    src="/services2.png"
                    alt="Service Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                {/* Service Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 space-grotesk">
                    <span className="font-bold"> {service.title} </span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed space-grotesk">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </>
  );
};

export default DataEngineeringAnalytics;