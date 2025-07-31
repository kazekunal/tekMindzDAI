'use client'
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const UseCasesComponent = () => {
  const [openSections, setOpenSections] = React.useState({
    howAI: true,
    types: false,
    impact: false,
    frameworks: false,
    useCases: false,
    energy: false,
    healthcare: false,
    egovernance: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="max-w-6xl mx-32 p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-2 mt-12">
          Using AI And Generative AI For Conversational Assistants:
        </h1>
        <h2 className="text-2xl text-gray-700 mb-6">
          A Technical Overview With <span className="font-bold">Domain Use Cases</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Conversational AI has evolved significantly over the past decade, transforming how machines interact with humans in natural 
          language. The advent of Generative AI (GenAI) has further revolutionized this space, enabling more dynamic, context-aware, and 
          human-like conversations. This write-up explores how AI powers conversational assistants, the transformative impact of GenAI, key 
          frameworks, and practical use cases across Finance, Energy & Electrification, Healthcare, and eGovernance domains, tailored for 
          technical experts, government officials, and business analysts.
        </p>
      </div>

      <div className="space-y-4">
        {/* How AI Powers Conversational Assistants */}
        <Collapsible open={openSections.howAI} onOpenChange={() => toggleSection('howAI')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">How AI Powers Conversational Assistants</h3>
                {openSections.howAI ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <p className="text-gray-600 mb-4">
                  Conversational AI enables machines to understand, process, and respond to human language naturally and meaningfully. The 
                  core processes include:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">Consulting and Ideation:</span>
                      <span className="text-gray-600"> TekMindz works closely with clients to identify key conversational AI use cases, understand user personas, and define success metrics. This ensures solutions are grounded in real business needs and regulatory requirements.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">Rapid Prototyping and MVP Development:</span>
                      <span className="text-gray-600"> Using advanced GenAI frameworks and pre-trained large language models, TekMindz rapidly builds prototypes and minimum viable products. This iterative approach enables early validation, quick feedback incorporation, and risk mitigation.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">Custom Architecture and Integration:</span>
                      <span className="text-gray-600"> TekMindz architects modular conversational AI systems that integrate generative AI capabilities with natural language understanding (NLU), dialogue management, and backend enterprise systems. Cloud-native deployments on platforms like Azure, AWS, or Google Cloud ensure scalability and resilience.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">Agile Development and Multi-Point Engagement:</span>
                      <span className="text-gray-600"> Their agile delivery model promotes continuous collaboration between client teams and TekMindz experts, enabling transparent communication, faster decision-making, and adaptive development aligned with evolving requirements.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">Comprehensive Quality Assurance:</span>
                      <span className="text-gray-600"> TekMindz employs rigorous testing strategies including intent recognition accuracy, dialog flow validation, automated regression testing, and security compliance checks to ensure high-quality, reliable conversational assistants.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-900">Continuous Monitoring and Optimization:</span>
                      <span className="text-gray-600"> Post-deployment, TekMindz leverages analytics and user feedback to refine AI models, improve personalization, and enhance contextual understanding, ensuring the assistant evolves with user needs.</span>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* Types of Conversational AI */}
        <Collapsible open={openSections.types} onOpenChange={() => toggleSection('types')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Types of Conversational AI</h3>
                {openSections.types ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rule-Based Chatbots</h4>
                    <p className="text-gray-600">Traditional chatbots that follow predefined rules and decision trees. They work well for simple, structured interactions but lack flexibility for complex conversations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">AI-Powered Virtual Assistants</h4>
                    <p className="text-gray-600">Advanced systems using machine learning and NLP to understand context, intent, and provide more natural responses. Examples include Siri, Alexa, and Google Assistant.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Generative AI Assistants</h4>
                    <p className="text-gray-600">Latest generation using large language models (LLMs) like GPT, Claude, or PaLM to generate human-like responses, engage in complex reasoning, and handle diverse topics dynamically.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hybrid Systems</h4>
                    <p className="text-gray-600">Combine multiple approaches, using rule-based systems for structured tasks and AI for complex interactions, optimizing both reliability and flexibility.</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* The Impact of Generative AI on Conversational Assistants */}
        <Collapsible open={openSections.impact} onOpenChange={() => toggleSection('impact')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">The Impact of Generative AI on Conversational Assistants</h3>
                {openSections.impact ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Enhanced Natural Language Understanding</h4>
                    <p className="text-gray-600">GenAI models can comprehend nuanced language, context, and implicit meanings, enabling more sophisticated conversations that feel genuinely human-like.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Dynamic Content Generation</h4>
                    <p className="text-gray-600">Unlike template-based responses, GenAI can create unique, contextually appropriate content on-the-fly, making each interaction feel personalized and relevant.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Multi-Modal Capabilities</h4>
                    <p className="text-gray-600">Modern GenAI systems can process and generate text, images, audio, and even video, enabling richer, more interactive conversational experiences.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complex Reasoning and Problem Solving</h4>
                    <p className="text-gray-600">GenAI assistants can perform multi-step reasoning, analyze complex scenarios, and provide detailed explanations, making them valuable for professional and educational applications.</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* Frameworks and Platforms for Building Conversational AI */}
        <Collapsible open={openSections.frameworks} onOpenChange={() => toggleSection('frameworks')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Frameworks and Platforms for Building Conversational AI</h3>
                {openSections.frameworks ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Microsoft Bot Framework & Azure AI</h4>
                    <p className="text-gray-600">Comprehensive platform with pre-built cognitive services, seamless integration with Microsoft ecosystem, and enterprise-grade security and compliance features.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Google Dialogflow & Vertex AI</h4>
                    <p className="text-gray-600">Advanced NLP capabilities with built-in machine learning, multi-language support, and integration with Google Cloud services for scalable deployments.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Amazon Lex & AWS AI Services</h4>
                    <p className="text-gray-600">Leverages the same technology as Alexa, with automatic speech recognition, natural language understanding, and seamless AWS ecosystem integration.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Open Source Solutions</h4>
                    <p className="text-gray-600">Frameworks like Rasa, Botpress, and Hugging Face Transformers offer flexibility and customization for organizations requiring full control over their AI systems.</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* Use Cases Across Key Domains */}
        <Collapsible open={openSections.useCases} onOpenChange={() => toggleSection('useCases')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Use Cases Across Key Domains</h3>
                {openSections.useCases ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Finance Domain</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Automated customer service for banking inquiries and account management</li>
                      <li>• Investment advisory and portfolio management assistance</li>
                      <li>• Fraud detection and prevention through conversational interfaces</li>
                      <li>• Regulatory compliance support and reporting automation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Energy & Utilities</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Smart grid monitoring and energy consumption optimization</li>
                      <li>• Predictive maintenance for infrastructure components</li>
                      <li>• Customer billing inquiries and service requests</li>
                      <li>• Renewable energy planning and sustainability reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* Energy and Electrification Domain */}
        <Collapsible open={openSections.energy} onOpenChange={() => toggleSection('energy')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Energy and Electrification Domain</h3>
                {openSections.energy ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Smart Grid Management Assistant</h4>
                    <p className="text-gray-600">AI-powered systems that help utility operators monitor grid performance, predict demand fluctuations, and optimize energy distribution in real-time through natural language interfaces.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Renewable Energy Planning Advisor</h4>
                    <p className="text-gray-600">Conversational AI that assists energy planners in analyzing renewable energy potential, evaluating site feasibility, and generating comprehensive sustainability reports.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customer Energy Optimization</h4>
                    <p className="text-gray-600">Personalized assistants that help consumers understand their energy usage patterns, recommend efficiency improvements, and provide guidance on renewable energy adoption.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Infrastructure Maintenance Support</h4>
                    <p className="text-gray-600">AI systems that process maintenance reports, schedule repairs, and provide technical guidance to field technicians through conversational interfaces.</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* Healthcare Domain */}
        <Collapsible open={openSections.healthcare} onOpenChange={() => toggleSection('healthcare')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">Healthcare Domain</h3>
                {openSections.healthcare ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Patient Care Assistant</h4>
                    <p className="text-gray-600">AI-powered systems that help patients schedule appointments, access medical records, receive medication reminders, and get answers to common health questions while maintaining HIPAA compliance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Clinical Decision Support</h4>
                    <p className="text-gray-600">Conversational AI that assists healthcare providers with diagnosis suggestions, treatment recommendations, and access to latest medical research through natural language queries.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Medical Documentation Assistant</h4>
                    <p className="text-gray-600">AI systems that help physicians generate clinical notes, summarize patient encounters, and automate administrative tasks through voice and text interfaces.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mental Health Support Chatbot</h4>
                    <p className="text-gray-600">Conversational AI providing 24/7 mental health support, crisis intervention, therapeutic conversations, and connections to appropriate professional resources.</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>

        {/* eGovernance Domain */}
        <Collapsible open={openSections.egovernance} onOpenChange={() => toggleSection('egovernance')}>
          <div className="border border-gray-200 rounded-lg">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900">eGovernance Domain</h3>
                {openSections.egovernance ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-white">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Citizen Services Portal Assistant</h4>
                    <p className="text-gray-600">AI-powered chatbots that help citizens navigate government services, apply for permits and licenses, track application status, and get information about public programs and policies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Policy Information and Guidance</h4>
                    <p className="text-gray-600">Conversational AI that provides clear explanations of government policies, regulations, and procedures, making complex legal and administrative information accessible to the public.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Multi-Language Support System</h4>
                    <p className="text-gray-600">AI assistants capable of communicating in multiple regional languages, ensuring inclusive access to government services for diverse populations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Emergency Response Coordinator</h4>
                    <p className="text-gray-600">Conversational AI systems that help coordinate emergency responses, disseminate critical information during crises, and connect citizens with appropriate emergency services.</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default UseCasesComponent;