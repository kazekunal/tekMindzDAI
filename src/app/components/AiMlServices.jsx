import React from 'react';

const AIMLServicesPage = () => {
  const services = [
    {
      title: "AI/ML Strategy & Consulting Services",
      description: "TekAiLabs provides AI consulting and machine learning strategy services through comprehensive AI assessments, ML roadmaps, and data science consulting that deliver measurable AI transformation ROI."
    },
    {
      title: "Custom AI Model Development & ML Solutions",
      description: "Our AI development team builds custom machine learning models and deep learning solutions using advanced AI algorithms for exceptional accuracy, performance, and business-specific AI applications."
    },
    {
      title: "AI Integration & Implementation Services",
      description: "TekAiLabs provides enterprise AI integration and ML implementation services, seamlessly deploying artificial intelligence solutions into existing systems for automated workflow optimization."
    },
    {
      title: "MLOps Services & AI Operations Management",
      description: "We deliver MLOps solutions and AI operations services through automated ML pipelines, model deployment, AI governance, and continuous machine learning model monitoring and optimization."
    },
    {
      title: "AI-Powered Business & Predictive Analytics",
      description: "TekAiLabs delivers AI analytics and predictive business intelligence through machine learning forecasting, data-driven insights, and real-time AI dashboard solutions for strategic decisions."
    },
    {
      title: "Edge AI Solutions & IoT Machine Learning",
      description: "We provide edge AI development and IoT machine learning services, deploying real-time AI processing, industrial IoT analytics, and smart device automation at the edge computing level."
    },
    {
      title: "AI Platform Development & ML Tool Creation",
      description: "Leveraging platforms like Qntrim, TekAiLabs builds AI software platforms, machine learning tools, and AI SaaS solutions for scalable artificial intelligence application deployment."
    },
    {
      title: "Natural Language Processing & ML Services",
      description: "TekAiLabs provides NLP services and natural language processing solutions with machine learning-powered text analysis, language AI, and automated content processing capabilities."
    },
    {
      title: "Computer Vision Services & Image Recognition AI",
      description: "We deliver computer vision solutions and image recognition services using AI-powered visual analysis, machine learning image processing, and automated quality inspection systems."
    },
    {
      title: "Deep Learning & Neural Network Development",
      description: "TekAiLabs offers deep learning solutions and neural network services, automating complex AI tasks through advanced machine learning architectures and data science methodologies."
    },
    {
      title: "Data Visualization & AI Analytics Dashboard",
      description: "We create AI-powered data visualization and machine learning dashboards with automated analytics, business intelligence reporting, and real-time data insights for informed decision-making."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-32 w-6 h-6 bg-purple-400 rotate-45"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-white">AI/ML Service</span> Offerings
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <img 
                  src="/union.png" 
                  alt="Service icon" 
                  className="w-6 h-6"
                  onError={(e) => {
                    // Fallback to a green circle if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div 
                  className="w-6 h-6 bg-green-400 rounded-full hidden"
                  style={{ display: 'none' }}
                ></div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIMLServicesPage;