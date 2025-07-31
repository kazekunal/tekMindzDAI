'use client'
import React from "react";

const GenAIUseCasesComponent = () => {
  return (
    <>
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
      `}</style>

      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* First Section - Knowledge Management */}
          <div className="mb-16">
            <h2 className="text-4xl font-normal text-gray-800 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <span className="font-bold">General Use Cases of GenAI</span> <span className="font-light">in Knowledge Management</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Automated Content Creation and Updating:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI models generate and continuously update documentation, FAQs, training materials, and reports from evolving organizational data, ensuring knowledge bases remain current without manual effort.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Simplification of Complex Information:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI can transform technical or complex content into simplified, easy-to-understand formats, aiding learning and accessibility across diverse user groups.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Personalized Knowledge Delivery:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI tailors content recommendations and learning pathways based on user roles, preferences, and past interactions, fostering engagement and effective knowledge sharing.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Conversational Interfaces and Virtual Assistants:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    AI chatbots provide instant, conversational access to knowledge repositories, assisting employees or customers with accurate, context-specific answers.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Content Repurposing:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI can convert existing knowledge assets into multiple formats such as summaries, infographics, or interactive tutorials, making knowledge more versatile and consumable.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Proactive Insights and Gap Identification:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    AI analyzes usage patterns and content to detect knowledge gaps, outdated information, or emerging trends, enabling continuous improvement of KM systems.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Support for Software Development Teams:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI assists in capturing knowledge from code, project artifacts, and discussions, accelerating onboarding and reducing repetitive queries.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Section - eGovernance */}
          <div>
            <h2 className="text-3xl font-normal text-gray-800 mb-8" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <span className="font-bold">GenAI Use Cases</span> <span className="font-light">in eGovernance</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Citizen Service Chatbots:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Governments deploy GenAI-powered virtual assistants to provide citizens with 24/7 access to information about services, policies, and procedures, improving transparency and responsiveness.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Policy and Document Generation:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI automates drafting of government reports, policy briefs, and regulatory documents, speeding up workflows while maintaining consistency and compliance.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Data Analysis for Emergency Management:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    For example, the Colombian Security Council uses GenAI chatbots to analyze complex data and improve chemical emergency response processes.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Knowledge Sharing Across Departments:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI facilitates cross-agency knowledge exchange by integrating fragmented data sources, enhancing collaboration and informed decision-making within government.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Simplifying Legal and Regulatory Language:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    GenAI translates complex legal jargon into plain language for better citizen understanding and engagement.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Personalized Citizen Engagement:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    AI tailors communication and service recommendations based on individual citizen profiles, improving satisfaction and trust.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Governance and Compliance Monitoring:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    AI helps monitor the accuracy and fairness of automated decisions, ensuring ethical AI use in public services.
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 transform rotate-45 mt-1 mr-4"></div>
                <div>
                  <span className="font-semibold text-gray-800" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Training and Capacity Building:
                  </span>
                  <span className="text-gray-700 ml-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                    Governments use GenAI to create personalized training materials for public servants, enhancing skills and knowledge retention.
                  </span>
                </div>
              </div>
            </div>

            {/* Closing paragraphs */}
            <div className="mt-12 space-y-4 text-gray-700" style={{ fontFamily: 'Roboto, sans-serif' }}>
              <p>
                These use cases demonstrate how GenAI transforms knowledge management by automating content creation, enhancing search and retrieval, enabling personalized and conversational interfaces, and supporting governance objectives such as transparency, efficiency, and citizen-centric services.
              </p>
              <p>
                TekMindz's expertise in deploying tailored GenAI solutions can help organizations and governments implement these use cases securely and effectively, leveraging on-premise LLMs, retrieval-augmented generation, and AI governance best practices to maximize impact and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GenAIUseCasesComponent;