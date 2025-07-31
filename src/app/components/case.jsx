// 'use client'
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const CaseStudies = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Multiple sets of case studies for carousel
//   const caseStudySets = [
//     [
//       {
//         id: 1,
//         category: "Generative AI",
//         title: "GenAI-Powered EV Charger Predictive Maintenance Revolution",
//         image: "/study1.png",
//         description: "Develop advanced POC using synthetic data for GenAI and Agentic AI predictive maintenance solutions with intelligent algorithms and conversational interfaces.",
//         solution: "Multi-agent GenAI system with conversational AI, RAG-powered diagnostics, and LLM-driven predictive maintenance optimization platform."
//       },
//       {
//         id: 2,
//         category: "Data Analytics",
//         title: "Behavioral Signal Engineering For Credit Risk Modeling In Retail Banking",
//         image: "/study2.png",
//         challenge: "A leading retail bank aimed to improve the accuracy of its credit risk scoring model to reduce default rates on unsecured personal loans. The existing model, based primarily on traditional demographic and transactional features, lacked the ability to distinguish subtle behavioral indicators of financial stress.",
//         solution: ""
//       },
//       {
//         id: 3,
//         category: "Data Analytics", 
//         title: "Embedded Analytics Deliver Real-Time Dealer Insights In Automotive Retail",
//         image: "/study3.png",
//         challenge: "A major automotive OEM with over 500 dealerships across multiple regions needed to provide real-time sales, service, & parts analytics directly within their dealer portal. The existing reporting was disjointed, delayed (weekly/monthly), & required dealers to switch between systems, resulting in poor adoption & missed business insights.",
//         solution: ""
//       }
//     ],
//     // Add more sets for additional slides
//     [
//       {
//         id: 3,
//         category: "Data Analytics", 
//         title: "Embedded Analytics Deliver Real-Time Dealer Insights In Automotive Retail",
//         image: "/study3.png",
//         challenge: "A major automotive OEM with over 500 dealerships across multiple regions needed to provide real-time sales, service, & parts analytics directly within their dealer portal. The existing reporting was disjointed, delayed (weekly/monthly), & required dealers to switch between systems, resulting in poor adoption & missed business insights.",
//         solution: ""
//       },
//       {
//         id: 1,
//         category: "Generative AI",
//         title: "GenAI-Powered EV Charger Predictive Maintenance Revolution",
//         image: "/study1.png",
//         description: "Develop advanced POC using synthetic data for GenAI and Agentic AI predictive maintenance solutions with intelligent algorithms and conversational interfaces.",
//         solution: "Multi-agent GenAI system with conversational AI, RAG-powered diagnostics, and LLM-driven predictive maintenance optimization platform."
//       },
//       {
//         id: 2,
//         category: "Data Analytics",
//         title: "Behavioral Signal Engineering For Credit Risk Modeling In Retail Banking",
//         image: "/study2.png",
//         challenge: "A leading retail bank aimed to improve the accuracy of its credit risk scoring model to reduce default rates on unsecured personal loans. The existing model, based primarily on traditional demographic and transactional features, lacked the ability to distinguish subtle behavioral indicators of financial stress.",
//         solution: ""
//       }
//     ]
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % caseStudySets.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + caseStudySets.length) % caseStudySets.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   const currentSet = caseStudySets[currentSlide];

//   return (
//     <>
//       {/* Font Import */}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
//       `}</style>

//       <div id='case-studies' className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-16 px-4 relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
//         <div className="absolute top-20 right-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
        
//         {/* Main container */}
//         <div className="max-w-7xl mx-auto relative">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
//               <span className='font-bold'> Case</span> <span className="font-light">Studies</span>
//             </h1>
//           </div>

//           {/* Navigation arrows */}
//           <button 
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors -ml-4"
//           >
//             <ChevronLeft size={48} />
//           </button>
          
//           <button 
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors -mr-4"
//           >
//             <ChevronRight size={48} />
//           </button>

//           {/* Case studies container */}
//           <div className="px-12">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {currentSet.map((study) => (
//                 <div key={study.id} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
//                   <div className="h-48 overflow-hidden">
//                     <img 
//                       src={study.image} 
//                       alt={study.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="mb-3">
//                       <span className="text-sm font-medium text-purple-400" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                         {study.category}
//                       </span>
//                     </div>
//                     <h3 className="text-xl font-semibold text-white mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
//                       {study.title}
//                     </h3>
                    
//                     {study.challenge && (
//                       <div className="mb-4">
//                         <h4 className="text-sm font-medium text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                           Challenge / Requirement:
//                         </h4>
//                         <p className="text-gray-300 text-m leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                           {study.challenge}
//                         </p>
//                       </div>
//                     )}
                    
//                     {study.description && (
//                       <div className="mb-4">
//                         <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                           {study.description}
//                         </p>
//                       </div>
//                     )}
                    
//                     {study.solution && (
//                       <div className="mb-6">
//                         <h4 className="text-sm font-medium text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                           Our Solution:
//                         </h4>
//                         <p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                           {study.solution}
//                         </p>
//                       </div>
//                     )}
                    
//                     <div className="mt-auto">
//                       <button className="border border-[#98be2f] text-[#98be2f] inline-flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#98be2f] hover:text-slate-900 cursor-pointer transition-all duration-300 text-sm font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>
//                         Explore <ChevronRight size={14} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pagination dots */}
//           <div className="flex justify-center items-center space-x-3 mt-12">
//             {caseStudySets.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`w-3 h-3 rounded-full border-2 transition-all ${
//                   currentSlide === index 
//                     ? 'bg-[#98be2f] border-[#98be2f]' 
//                     : 'bg-transparent border-[#98be2f] hover:bg-[#98be2f]'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CaseStudies;


'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const CaseStudiesSection = ({ title, caseStudySets = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % caseStudySets.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + caseStudySets.length) % caseStudySets.length);
    };
  
    const goToSlide = (index) => {
      setCurrentSlide(index);
    };
  
    const currentSet = caseStudySets[currentSlide] || [];
  
    return (
      <>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        `}</style>
        <div id='case-studies' className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 min-h-screen py-16 px-4 relative overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
          <div className="absolute top-20 right-20 w-4 h-4 bg-purple-500 rotate-45 opacity-60"></div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className='font-bold'>{title}</span>
              </h1>
            </div>
  
            {caseStudySets.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors -ml-4"><ChevronLeft size={48} /></button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-purple-400 transition-colors -mr-4"><ChevronRight size={48} /></button>
              </>
            )}
  
            <div className="px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSet.map((study) => (
                  <div key={study.id} className="bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found'; }}/>
                    </div>
                    <div className="p-6">
                      <div className="mb-3"><span className="text-sm font-medium text-purple-400" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.category}</span></div>
                      <h3 className="text-xl font-semibold text-white mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{study.title}</h3>
                      {study.challenge && (<div className="mb-4"><h4 className="text-sm font-medium text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>Challenge / Requirement:</h4><p className="text-gray-300 text-m leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.challenge}</p></div>)}
                      {study.description && (<div className="mb-4"><p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.description}</p></div>)}
                      {study.solution && (<div className="mb-6"><h4 className="text-sm font-medium text-white mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>Our Solution:</h4><p className="text-gray-300 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{study.solution}</p></div>)}
                      <div className="mt-auto"><button className="border border-[#98be2f] text-[#98be2f] inline-flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#98be2f] hover:text-slate-900 cursor-pointer transition-all duration-300 text-sm font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>Explore <ChevronRight size={14} /></button></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {caseStudySets.length > 1 && (
              <div className="flex justify-center items-center space-x-3 mt-12">
                {caseStudySets.map((_, index) => (<button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full border-2 transition-all ${currentSlide === index ? 'bg-[#98be2f] border-[#98be2f]' : 'bg-transparent border-[#98be2f] hover:bg-[#98be2f]'}`} />))}
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
  

export default CaseStudiesSection;