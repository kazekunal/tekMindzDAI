import React from 'react'
import Navbar from '../components/transform_navbar'
import HeroSection from '../components/transform_hero'
import ContactForm from '../components/connect'
import FitSection from '../components/transform_fit'
import AcceleratorsSection from '../components/accelerator'
import Footer from '../components/footer'
import ReusableFeaturesSection from '../components/transform_why'
import AgenticAIComponent from '../components/agenticAI'
import OfferingsPage from '../components/offerings'
import AgenticAITrends from '../components/genaiTrends'

function page() {

    const ragAcceleratorsData = [
        {
          image: '/ai5.png', // replace with actual path
          title: 'Agentic ATS for HR:',
          subtitle: 'AI agent screens resumes, ranks talent, and automates interview scheduling.',
          description: '',
        },
        {
          image: '/ai6.png', // replace with actual path
          title: 'GovFinance Assistant:',
          subtitle: 'An agent automates reconciliation, budget analysis, and anomaly detection in public finance.',
          description: '',
        },
        {
          image: '/ai7.png', // replace with actual path
          title: 'Knowledge Navigator:',
          subtitle: 'Enterprise agent with RAG + vector memory for cross-departmental document search and Q & A.',
          description: '',
        },
      ];

      const offeringsData = [
        {
          title: "Rapid Prototyping:",
          description: "Build functional agents in 5 days."
        },
        {
          title: "Custom LLM Agents:",
          description: "Train models on your data & goals."
        },
        {
          title: "Proof of Concept (POC):",
          description: "Test agent feasibility in live settings."
        },
        {
          title: "Monitoring & Audits:",
          description: "Track decisions and ensure transparency."
        },
        {
          title: "MVP Development:",
          description: "Deliver full-featured agent systems fast."
        },
        {
          title: "Enterprise Rollout:",
          description: "Scale agents across business functions."
        },
        {
          title: "Agent Integrations:",
          description: "Connect to APIs, ERP, CRM systems."
        }
      ];

      const tekMindzData = {
        title: (
          <p className='text-4xl'>
          Why Choose <span className="font-bold text-gray-900">TekMindz</span>
            </p>
        ),
        features: [
            {
                image: "data9.png",
                title: "Focused On Practical AI Adoption"
              },
              {
                image: "data10.png",
                title: "Transparent, Consultative Approach"
              },
              {
                image: "data11.png",
                title: "Strong Foundation In Custom Software Development"
              },
              {
                image: "data12.png",
                title: "Commitment To Ethical And Sustainable AI"
              }
        ]
      };
  return (
    <div>
        <Navbar/>
        <HeroSection
            title={{
                main: "Empowering Autonomy: ",
                highlight: "The Future of AI is Agentic"
            }}
            description="Tailored solutions powered by the latest technologies and industry best practices to transform your business insights into strategic advantage."
            image={{
                src: "/agentic1.png",
                alt: "Data Intelligence Visualization",
                width: 600,
                height: 384
            }}
            breadcrumb={{
                items: [
                { label: "Home", href: "/" },
                { label: "agentic Ai", href: "#", isActive: true }
                ]
            }}
            />
            <AgenticAIComponent/>
            <AgenticAITrends/>
            <FitSection
            title={{
                main: "Agentic AI",
                highlight: "Design Patterns"
            }}
            description = "Agentic AI relies on reusable design patterns to solve business problems with modularity and scalability."
            bulletPoints={[
                "ReAct (Reasoning + Acting): Allows agents to decide, act, observe, and refine actions in loops.",
                "Chain of Thought (CoT): Encourages step-wise reasoning in complex tasks.",
                "Reflexion Loops: Agents reflect on outcomes to self-correct and improve.",
                "Planning & Memory: Long-term task planning with vector memory & persistent state.",
                "Tool Use Agents: Trigger tools or APIs based on the agent's real-time needs.",
                "Planner-Executor: Planner generates subtasks; executor agents fulfill them iteratively."
            ]}
            image={{
                src: "/ai1.png",
                alt: "AI Transform Visualization"
            }}
            backgroundColor="white"
            layout="left"
            showGlow={true}
            />
            <FitSection
            title={{
                main: "MCP ",
                highlight: "(Modular Cognitive Pipelines)"
            }}
            description = "Model Context Protocol (MCP) is a foundational framework for building interoperable, context-aware AI agents. It enables structured communication between models, tools, memory, and environments, allowing agents to reason, plan, and act more effectively across diverse tasks."
            bulletPoints={[
                "Standardized Context Handling: Ensures agents consistently manage and exchange memory, goals, and observations.",
                "Interoperability by Design: Plug into any LLM, tool, or framework that supports MCP with minimal effort.",
                "Composable Agents: Define agents as dynamic systems of modular, context-aware components.",
            ]}
            image={{
                src: "/ai2.png",
                alt: "AI Transform Visualization"
            }}
            layout="right"
            showGlow={true}
            />

<FitSection
            title={{
                main: "A2A ",
                highlight: "(Agent-to-Agent Collaboration)"
            }}
            description = "Agent-to-Agent (A2A) collaboration is the next leap in enterprise automation—where multiple agents interact to achieve higher-order tasks."
            bulletPoints={[
                "Role Specialization: Each agent is assigned a role (e.g., planner, researcher, communicator).",
                "Inter-Agent Dialogue: Agents communicate, debate, and delegate based on predefined protocols.",
                "Distributed Task Handling: Complex business processes are split across cooperating agents.",
                "Self-Governing Ecosystems: Agents dynamically form or dissolve teams based on context.",
            ]}
            image={{
                src: "/ai3.png",
                alt: "AI Transform Visualization"
            }}
            backgroundColor="white"
            layout="left"
            showGlow={true}
            />

<FitSection
            title={{
                main: "Frameworks, Tools, and",
                highlight: "Technologies"
            }}
            description = "Our tech stack ensures you get the most advanced agentic solutions:"
            bulletPoints={[
                "Frameworks: LangChain, AutoGen, CrewAI, Haystack",
                "LLMs: OpenAI GPT-4o, Claude 3, Mistral 7B, Gemini",
                "Memory/Context: Pinecone, Weaviate, FAISS",
                "Integration: FastAPI, Kafka, GraphQL, REST",
                "Agent Logic: ReAct, Reflexion, AutoGPT, BabyAGI"
            ]}
            image={{
                src: "/ai4.png",
                alt: "AI Transform Visualization"
            }}
            layout="right"
            showGlow={true}
            />
            <AcceleratorsSection
                title="Accelerators for Agentic AI "
                cards={ragAcceleratorsData}
                // backgroundColor="bg-white"
                cardBackgroundColor="bg-white"
                mainTitleColor="text-black"    // Main title color
                cardTitleColor="text-black"    // Individual card titles color
                subtitleColor="text-gray-800"
                descriptionColor="text-gray-600"
                buttonTextColor="text-blue-600"
                buttonHoverColor="hover:text-blue-800"
                gridCols="lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
                />
                <OfferingsPage/>
                <ReusableFeaturesSection
        title={tekMindzData.title}
        features={tekMindzData.features}
        cta={tekMindzData.cta}
      />
            <ContactForm/>
            <Footer/>
    </div>
  )
}

export default page