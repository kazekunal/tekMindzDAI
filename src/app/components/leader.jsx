'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Leadership = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Aalekh Tripathi",
      position: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format"
    },
    {
      id: 2,
      name: "Ankur Devpura",
      position: "Head of Ecommerce",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&auto=format"
    },
    {
      id: 3,
      name: "Aarushi Aharma",
      position: "Senior VP Sales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?w=300&h=400&fit=crop&auto=format"
    },
    {
      id: 4,
      name: "Atul Mehta",
      position: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&auto=format"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      position: "VP Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&auto=format"
    },
    {
      id: 6,
      name: "Michael Chen",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&auto=format"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(teamMembers.length / 4)) % Math.ceil(teamMembers.length / 4));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleMembers = () => {
    const membersPerSlide = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
    const startIndex = currentSlide * membersPerSlide;
    return teamMembers.slice(startIndex, startIndex + membersPerSlide);
  };

  return (
    <div id='leadership' className="bg-gray-50 min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-purple-300 rotate-45 opacity-40"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-purple-300 rotate-45 opacity-40"></div>
      
      {/* Main container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Leadership
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis venenatis risus. Donec arcu dolor, 
            faucibus et interdum quis, efficitur vel odio. Nunc felis turpis, porta eu imperdiet et, gravida eget erat.
          </p>
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronRight size={48} />
        </button>

        {/* Team members grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.slice(currentSlide * 4, currentSlide * 4 + 4).map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          {Array.from({ length: Math.ceil(teamMembers.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-[#98be2f]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;