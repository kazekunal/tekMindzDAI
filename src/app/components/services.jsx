// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const ServicesSection = () => {
//   return (
//     <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900  px-6 py-16 relative overflow-hidden">
//       {/* Background decorative element */}
//       <div className="absolute top-28 right-1/2 w-20 h-20 bg-purple-500 rounded-full opacity-30 blur-2xl"></div>
      
//       {/* Header section */}
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-bold text-white">
//             Services
//           </h1>
          
//           {/* Navigation buttons */}
//           {/* <div className="flex gap-4">
//             <button className="w-12 h-12 rounded-full border border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors flex items-center justify-center">
//               <ChevronLeft size={20} />
//             </button>
//             <button className="w-12 h-12 rounded-full border-2 border-[#98be2f] text-[#98be2f] hover:bg-[#98be2f] hover:text-blue-900 transition-colors flex items-center justify-center">
//               <ChevronRight size={20} />
//             </button>
//           </div> */}
//         </div>

//         {/* Cards grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* AI & Machine Learning Services Card */}
//           <div className="group cursor-pointer">
//             <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
//               <img 
//                 src="tek2.png" 
//                 alt="AI & Machine Learning Services"
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>
            
//             <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning Services</h3>
            
//             <p className="text-gray-300 text-base leading-relaxed mb-8">
//               Build intelligent solutions with practical AI applications...
//             </p>
            
//             <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
//               Explore <ChevronRight size={16} />
//             </button>
//           </div>

//           {/* Data Engineering & Analytics Card */}
//           <div className="group cursor-pointer">
//             <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
//               <img 
//                 src="tek3.png" 
//                 alt="Data Engineering & Analytics"
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>
            
//             <h3 className="text-2xl font-bold text-white mb-4">Data Engineering & Analytics</h3>
            
//             <p className="text-gray-300 text-base leading-relaxed mb-8">
//               Transform your raw data into actionable intelligence with robust engineering...
//             </p>
            
//             <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
//               Explore <ChevronRight size={16} />
//             </button>
//           </div>

//           {/* Platform Development Card */}
//           <div className="group cursor-pointer">
//             <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
//               <img 
//                 src="tek4.png" 
//                 alt="Platform Development"
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>
            
//             <h3 className="text-2xl font-bold text-white mb-4">Platform Development</h3>
            
//             <p className="text-gray-300 text-base leading-relaxed mb-8">
//               Building scalable, intelligent, & AI-first platforms to power your digital future...
//             </p>
            
//             <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
//               Explore <ChevronRight size={16} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesSection;

import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = ({ title, services }) => {
  return (
    <div id="services" className="px-6 py-16 relative overflow-hidden font-sans" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
      {/* Background decorative element */}
      <div className="absolute top-28 right-1/2 w-20 h-20 bg-purple-500 rounded-full opacity-30 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {title}
          </h1>
        </div>

        {/* Cards grid - Mapped from props */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services && services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden mb-6 h-64">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                {service.description}
              </p>
              <Link href={service.link}>
              <button className="border border-[#98be2f] text-[#98be2f] px-6 py-3 rounded-full hover:bg-[#98be2f] hover:text-blue-900 transition-all duration-300 flex items-center gap-2 font-medium">
                Explore <ChevronRight size={16} />
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;