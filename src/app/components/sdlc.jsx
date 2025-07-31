'use client'
import React from "react";

const Sdlc = () => {
  return (
    <>
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `}</style>

      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl font-normal text-gray-800 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
            TekMindz AI & GenAI Services Across The <span className="font-bold">Software Development Life Cycle</span>
          </h1>

          {/* Phase 1 - Idea Generation */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              1. Idea Generation
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Collaborative Innovation
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Harness the power of AI to gather and synthesize suggestions from employees, users, and operational metrics, unveiling new avenues for process and product improvement.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Current State Analysis
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Engage in intelligent, conversational reviews of your organization's existing systems, performance metrics, and codebase. Our AI tools provide actionable insights to inform your next steps.
              </p>
            </div>
          </div>

          {/* Phase 2 - Concept Development */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              2. Concept Development
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                AI-Driven Concept Visualization
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Quickly turn ideas into visual prototypes and interactive models. Our GenAI solutions help teams and stakeholders see potential solutions before development begins.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Automated User Feedback Analysis
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Streamline user testing with AI that records, transcribes, and summarizes feedback from test sessions. Receive clear, prioritized recommendations for enhancements.
              </p>
            </div>
          </div>

          {/* Phase 3 - Software Implementation */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              3. Software Implementation
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Smart Code Generation
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Accelerate development with GenAI-powered code suggestions and automation. Developers can focus on complex logic while routine coding is handled efficiently by AI.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Intelligent Project Planning
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Utilize AI to organize features, prioritize tasks, and optimize sprint planning. Our solutions assign work to teams based on capacity and project goals.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Requirements Detailing
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Transform initial concepts into detailed user stories, epics, and acceptance criteria. AI ensures requirements are comprehensive and aligned with business objectives.
              </p>
            </div>
          </div>

          {/* Phase 4 - Quality Assurance & Release */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
              4. Quality Assurance & Release
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Automated Testing & Validation
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                AI generates test scenarios, creates test data, and manages automated testing to ensure software quality and reliability.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Release Readiness Assessment
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Our AI tools review project deliverables and code to confirm all release criteria are met, supporting confident, on-time launches.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Change Impact Analysis
              </h3>
              <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Identify which systems and users will be affected by upcoming changes. TekMindz AI helps you plan communications and support for a smooth transition.
              </p>
            </div>
          </div>

          {/* Why TekMindz Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Why TekMindz?
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    AI-Powered Efficiency:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Speed up every stage of your SDLC with intelligent automation.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Actionable Insights:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Make informed decisions with data-driven recommendations.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Seamless Integration:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Our solutions fit into your existing workflows and tools.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <p className="font-semibold">Ready to accelerate your software development?</p>
              <p>Contact TekMindz today to see how our AI and GenAI services can transform your SDLC.</p>
              <p>Let me know if you'd like this in an HTML format or need further customization!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sdlc;