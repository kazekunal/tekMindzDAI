import react from "react";

const CustomerExperienceBanner = ({ activeTab, setActiveTab }) => {
    return (
      <>
        {/* Font Import */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        `}</style>
  
        <div className=" relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #00386C, #020C15)'}}>
          {/* Background pattern/texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
  
          {/* Breadcrumb */}
          <div className="relative z-10 pt-6 px-6 max-w-7xl mx-auto">
            <div className="text-gray-300 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Generative AI / Services
            </div>
          </div>
  
          {/* Main content */}
          <div className="relative z-10 text-center py-16 px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <span className="font-bold">Customer</span> <span className="font-light">Experience</span>
              </h1>
              <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Enhance your customer interactions with AI-powered solutions that personalize experiences, 
                improve support efficiency, and drive deeper customer engagement and satisfaction.
              </p>
            </div>
          </div>
  
          {/* Tab buttons */}
          <div className="relative z-10 flex justify-center pb-8">
            <div className="flex bg-transparent border-0">
              <button
                onClick={() => setActiveTab('genai')}
                className={`px-8 py-3 text-lg font-medium transition-all duration-300 rounded-l-full ${
                  activeTab === 'genai'
                    ? 'bg-[#96BB2F] text-blue-900 font-semibold'
                    : 'bg-transparent text-white border border-gray-400 hover:border-white hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                GenAI Services
              </button>
              <button
                onClick={() => setActiveTab('usecases')}
                className={`px-8 py-3 text-lg font-medium transition-all duration-300 rounded-r-full ${
                  activeTab === 'usecases'
                    ? 'bg-[#96BB2F] text-blue-900 font-semibold'
                    : 'bg-transparent text-white border border-gray-400 hover:border-white hover:bg-white/10'
                }`}
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Use Cases
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

export default CustomerExperienceBanner;