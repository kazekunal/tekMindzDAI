import React from "react";
import Link from "next/link";

const ReusableBanner = ({ 
  firstBreadcrumb = { label: "Home", href: "/" },
  secondBreadcrumb = { label: "Current Page", href: null }, // null href means it's the active page
  titleMain, 
  titleHighlight, 
  description, 
  tabs = [], 
  activeTab, 
  setActiveTab,
  backgroundGradient = 'linear-gradient(to bottom right, #00386C, #020C15)'
}) => {
  return (
    <>
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `}</style>

      <div className="relative overflow-hidden" style={{background: backgroundGradient}}>
        {/* Background pattern/texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-50 pt-6 px-6 max-w-7xl mx-auto">
          <div className="text-gray-300 text-sm flex items-center space-x-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {/* First Breadcrumb Link */}
            {firstBreadcrumb.href ? (
              <Link 
                href={firstBreadcrumb.href} 
                className="text-gray-300 hover:text-white transition-colors duration-200 relative z-50"
              >
                {firstBreadcrumb.label}
              </Link>
            ) : (
              <span className="text-gray-300">{firstBreadcrumb.label}</span>
            )}
            
            {/* Separator */}
            <span className="text-gray-500">{'>'}</span>
            
            {/* Second Breadcrumb Link or Active Page */}
            {secondBreadcrumb.href ? (
              <Link 
                href={secondBreadcrumb.href} 
                className="text-gray-300 hover:text-white transition-colors duration-200 relative z-50"
              >
                {secondBreadcrumb.label}
              </Link>
            ) : (
              <span className="text-white font-medium">{secondBreadcrumb.label}</span>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <span className="font-bold">{titleMain}</span> 
              {titleHighlight && <span className="font-light"> {titleHighlight}</span>}
            </h1>
            {description && (
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Tab buttons - only render if tabs are provided */}
        {tabs.length > 0 && (
          <div className="relative z-10 flex justify-center pb-8">
            <div className="flex bg-transparent border-0">
              {tabs.map((tab, index) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-8 py-3 text-lg font-medium transition-all duration-300 ${
                    index === 0 ? 'rounded-l-full' : ''
                  } ${
                    index === tabs.length - 1 ? 'rounded-r-full' : ''
                  } ${
                    activeTab === tab.key
                      ? 'bg-[#96BB2F] text-blue-900 font-semibold'
                      : 'bg-transparent text-white border border-gray-400 hover:border-white hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReusableBanner;