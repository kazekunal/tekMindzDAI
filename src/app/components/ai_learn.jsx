'use client'
import React from 'react';
import { Users, BookOpen, Download, MessageCircle } from 'lucide-react';

const AILearning = () => {
  const features = [
    {
      icon: Users,
      title: "AI Webinars",
      description: "Join live sessions with AI experts"
    },
    {
      icon: BookOpen,
      title: "Training Programs",
      description: "Comprehensive AI courses and certifications"
    },
    {
      icon: Download,
      title: "Free Resources",
      description: "Access tools, guides, and templates"
    },
    {
      icon: MessageCircle,
      title: "Community",
      description: "Connect with AI enthusiasts worldwide"
    }
  ];

  return (
    <div id='ai-learning' className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-12 h-12 bg-purple-500 rounded-full opacity-20 blur-sm"></div>
      <div className="absolute top-32 right-32 w-8 h-8 bg-purple-400 rotate-45 opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-10 blur-lg"></div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
            <span className="font-semibold">AI</span> Learning
          </h1>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Expand Your AI Knowledge
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis 
                venenatis risus. Donec arcu dolor, faucibus et interdum quis, efficitur vel odio. 
                Nunc felis turpis, porta eu imperdiet et, gravida eget erat. Duis id auctor enim, vel 
                blandit libero. Cras et augue placerat, congue tellus ac, cursus sapien.
              </p>
            </div>

            {/* Feature grid */}
            <div className="sm:w-[40rem] h-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image instead of canvas */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/tek5.png" 
                  alt="AI visualization" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILearning;
