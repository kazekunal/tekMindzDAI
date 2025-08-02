import React from 'react';

const AITransformPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-white">Tek</span>
          <span className="text-green-400">AI</span>
          <span className="text-white">Labs</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">From Ideation to Innovation</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Transforming business challenges into competitive advantages through research-driven AI solutions
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        {/* Column 1: Where do we even start with AI? */}
        <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">?</span>
            </div>
          </div>
          <h3 className="text-green-400 text-xl font-semibold text-center mb-6">
            Where do we even start with AI?
          </h3>
          
          <div className="bg-purple-500 rounded-xl p-4 mb-6">
            <h4 className="text-white font-semibold mb-3">Your AI Challenges</h4>
            <ul className="text-white text-sm space-y-2">
              <li>• How can AI solve our specific business problems?</li>
              <li>• Overwhelming technology choices and vendor claims</li>
              <li>• Limited internal AI expertise and resources</li>
              <li>• Pressure to innovate while managing costs</li>
            </ul>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-slate-600 hover:bg-slate-500 text-gray-300 py-2 px-4 rounded-lg text-sm transition-colors">
              Not sure what's possible?
            </button>
            <div className="flex gap-2">
              <button className="flex-1 bg-slate-600 hover:bg-slate-500 text-gray-300 py-2 px-3 rounded-lg text-sm transition-colors">
                How to build it?
              </button>
              <button className="flex-1 bg-slate-600 hover:bg-slate-500 text-gray-300 py-2 px-3 rounded-lg text-sm transition-colors">
                Will it work for us?
              </button>
            </div>
            <button className="w-full bg-slate-600 hover:bg-slate-500 text-gray-300 py-2 px-4 rounded-lg text-sm transition-colors">
              What's our ROI?
            </button>
          </div>
        </div>

        {/* Column 2: Let's explore this together! */}
        <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 text-2xl">💡</span>
            </div>
          </div>
          <h3 className="text-green-400 text-xl font-semibold text-center mb-6">
            Let's explore this together!
          </h3>
          
          <div className="bg-purple-500 rounded-xl p-4 mb-6">
            <h4 className="text-white font-semibold mb-3">Our Partnership Approach</h4>
            <ul className="text-white text-sm space-y-2">
              <li>• Research-first methodology</li>
              <li>• Transparent experimentation</li>
              <li>• Risk-free validation</li>
              <li>• Academic rigor meets business pragmatism</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-600 rounded-lg p-3">
              <h5 className="text-green-400 font-semibold text-sm mb-1">Co-Innovation Workshops</h5>
              <p className="text-gray-300 text-xs">
                Collaborative ideation sessions with your team and our researchers
              </p>
            </div>
            <div className="bg-slate-600 rounded-lg p-3">
              <h5 className="text-green-400 font-semibold text-sm mb-1">No-Risk Exploration</h5>
              <p className="text-gray-300 text-xs">
                Start small with minimal investment to prove value
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Art of the possible through research */}
        <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-green-400 text-2xl">🧪</span>
            </div>
          </div>
          <h3 className="text-green-400 text-xl font-semibold text-center mb-6">
            Art of the possible through research
          </h3>
          
          <div className="space-y-4">
            <div className="border border-green-400/30 rounded-lg p-3">
              <h5 className="text-green-400 font-semibold text-sm mb-1">Rapid Research Cycles</h5>
              <p className="text-gray-300 text-xs">
                2-week research sprints to validate concepts quickly
              </p>
            </div>
            
            <div className="border border-green-400/30 rounded-lg p-3">
              <h5 className="text-green-400 font-semibold text-sm mb-1">Academic Partnerships</h5>
              <p className="text-gray-300 text-xs">
                University collaborations for cutting-edge insights
              </p>
            </div>
            
            <div className="border border-green-400/30 rounded-lg p-3">
              <h5 className="text-green-400 font-semibold text-sm mb-1">Open Innovation</h5>
              <p className="text-gray-300 text-xs">
                Cross-industry learning and best practices
              </p>
            </div>
            
            <div className="border border-green-400/30 rounded-lg p-3">
              <h5 className="text-green-400 font-semibold text-sm mb-1">Fail-Fast Framework</h5>
              <p className="text-gray-300 text-xs">
                Quick validation before major investments
              </p>
            </div>
            
            <div className="border border-green-400/30 rounded-lg p-3">
              <h5 className="text-green-400 font-semibold text-sm mb-1">Live Prototyping</h5>
              <p className="text-gray-300 text-xs">
                See your ideas come to life in real-time
              </p>
            </div>
          </div>
        </div>

        {/* Column 4: We research, prototype, and prove what works */}
        <div className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 text-2xl">💡</span>
            </div>
          </div>
          <h3 className="text-green-400 text-xl font-semibold text-center mb-6">
            We research, prototype, and prove what works
          </h3>
          
          <div className="bg-green-500 rounded-xl p-4 mb-4">
            <h4 className="text-white font-semibold mb-3">What You Get</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-white font-semibold text-sm">Validated Concepts</h5>
                <p className="text-white text-xs">Research-backed solution designs with proven viability</p>
              </div>
              <div>
                <h5 className="text-white font-semibold text-sm">Working Prototypes</h5>
                <p className="text-white text-xs">Functional MVPs delivered in 4-6 weeks</p>
              </div>
              <div>
                <h5 className="text-white font-semibold text-sm">Framework Foundations</h5>
                <p className="text-white text-xs">Scalable architecture blueprints for enterprise deployment</p>
              </div>
              <div>
                <h5 className="text-white font-semibold text-sm">Knowledge Transfer</h5>
                <p className="text-white text-xs">Upskilled internal teams ready for AI adoption</p>
              </div>
            </div>
          </div>

          <div className="border border-green-400/30 rounded-lg p-3">
            <h5 className="text-green-400 font-semibold text-sm mb-1">Continuous Innovation Pipeline</h5>
            <p className="text-gray-300 text-xs">
              Ongoing research partnerships for future opportunities
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-green-400">Transform Uncertainty into </span>
          <span className="text-green-500">Opportunity</span>
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Partner with our AI Lab to accelerate innovation through research-driven AI solutions. From ideation to 
          implementation, we turn complex challenges into competitive advantages with proven methodologies 
          and academic rigor.
        </p>
      </div>
    </div>
  );
};

export default AITransformPage;