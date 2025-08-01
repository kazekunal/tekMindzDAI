'use client'
import React from 'react'
import Navbar from '../components/transform_navbar'
import ReusableBanner from '@/app/components/banner'
import FitSection from '@/app/components/transform_fit'
import TrendsSection from '../components/trendsRag'
import ContactForm from '../components/connect'
import AcceleratorsSection from '../components/accelerator'
import Footer from '../components/footer'


function page() {

    const ragTrends = [
        {
          title: "Agentic RAG:",
          description: "Multi-step planning with agents for complex tasks"
        },
        {
          title: "Streaming RAG:",
          description: "Real-time ingestion and updates"
        },
        {
          title: "Multi-Hop Retrieval:",
          description: "Decomposes questions for layered answers"
        },
        {
          title: "Multimodal RAG:",
          description: "Includes PDFs, images, voice"
        },
        {
          title: "Structured Data Integration:",
          description: "Uses graphs and tables"
        },
        {
          title: "Secure RAG:",
          description: "PII masking and access controls"
        }
      ];

      const offeringsData = [
        {
          title: "Rapid Prototyping:",
          description: "Functional RAG in 2-4 weeks"
        },
        {
          title: "Agentic Integration:",
          description: "Task-focused planning agents"
        },
        {
          title: "POC Delivery:",
          description: "Validated on your data"
        },
        {
          title: "Knowledge Pipeline:",
          description: "Ingest → Embed → Index"
        },
        {
          title: "MVP Development:",
          description: "Production-ready & scalable"
        },
        {
          title: "Evaluation:",
          description: "Relevance & performance tuning"
        }
      ];

      const lifecycleData = [
        {
          title: "",
          description: "User Query Received"
        },
        {
          title: "",
          description: "Agent Planning and Decomposition"
        },
        {
          title: "",
          description: "RAG-based Retrieval per Subtask"
        },
        {
          title: "",
          description: "Memory & Tool Use"
        },
        {
          title: "",
          description: "Final Reasoned Answer"
        },
        {
          title: "",
          description: "Reflection and Revision Loop"
        },
        {
          title: "",
          description: "Output Delivered"
        }
      ];

      const ragAcceleratorsData = [
        {
          image: '/gai5.png', // replace with actual path
          title: 'DocMentor',
          subtitle: 'Internal document-based knowledge bot.',
          description: '',
        },
        {
          image: '/gai6.png', // replace with actual path
          title: 'GovPolicy Navigator',
          subtitle: 'Discover & compare policies',
          description: '',
        },
        {
          image: '/gai7.png', // replace with actual path
          title: 'HealthRAG',
          subtitle: 'Medical history-based diagnostics',
          description: '',
        },
      ];

      const useCaseCards = [
        {
          image: '/gai8.png', // Replace with actual image path
          title: 'Legal Insight Assistant',
          subtitle: 'Use Case: Rapid case law and policy discovery',
          description: 'Solution\nRAG retrieves legal references; agent summarizes rulings',
        },
        {
          image: '/gai9.png', // Replace with actual image path
          title: 'Enterprise Knowledge Bot',
          subtitle: 'Use Case: SOP & FAQ-based question answering.',
          description: 'Solution\nMulti-vector RAG with re-ranking and filtering',
        },
        {
          image: '/gai10.png', // Replace with actual image path
          title: 'Product Intelligence Scout',
          subtitle: 'Use Case: Real-time product analysis across sites.',
          description: 'Solution\nStreaming RAG retrieves competitor data, user feedback.',
        },
      ];
    
    
  return (
    <div>
        <div>
        <Navbar/>
        <ReusableBanner
            breadcrumb="Generative AI / RAG"
            titleMain="RAG: Retrieval Meets Generation "
            titleHighlight="A smarter Approach"
            description="Bridge the gap between static LLMs and dynamic enterprise knowledge"
        />
        <FitSection
            title={{
                main: "What is RAG ",
                highlight: "(Retrieval-Augmented Generation)?"
            }}
            description = "RAG enhances LLMs by grounding their responses with real-time, external knowledge.This delivers enterprise-relevant and context-aware intelligence."
            bulletPoints={[
                "Reduces hallucinations with verified data",
                "Integrates real-time enterprise content",
                "Improves contextual relevance",
                "Increases explainability and traceability",
                "Flexible across industries and domains"
            ]}
            image={{
                src: "/genai3.png",
                alt: "AI Transform Visualization"
            }}
            backgroundColor="white"
            layout="right"
            showGlow={true}
            />
            <TrendsSection
        mainTitle="Latest Trends in"
        highlightText="RAG"
        bulletPoints={ragTrends}
      />
        <FitSection
            title={{
                main: "Frameworks,",
                highlight: "Tools, and Technologies"
            }}
            bulletPoints={[
                "Frameworks: LangChain, Haystack, LlamaIndex",
                "LLMs: GPT-4, Claude, LLaMA 3",
                "Vector DBs: FAISS, Pinecone, Weaviate",
                "Orchestration: FastAPI, Streamlit, Kubernetes"
            ]}
            image={{
                src: "/rag1.png",
                alt: "AI Transform Visualization"
            }}
            backgroundColor="white"
            layout="left"
            showGlow={true}
            />
             <AcceleratorsSection
                title="RAG Accelerators"
                cards={ragAcceleratorsData}
                backgroundColor="bg-gradient-to-br from-[#00386C] to-[#020C15]"
                cardBackgroundColor="bg-white"
                titleColor="text-black"
                subtitleColor="text-gray-800"
                descriptionColor="text-gray-600"
                buttonTextColor="text-blue-600"
                buttonHoverColor="hover:text-blue-800"
                gridCols="lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
                />
                 <AcceleratorsSection
      title="Use Cases"
      showDecorative={false}
      cards={useCaseCards}
      backgroundColor="bg-gradient-to-b from-white to-purple-50"
      cardBackgroundColor="bg-white"
      titleColor="text-gray-900" // Section heading: "Use Cases"
      subtitleColor="text-gray-700"
      descriptionColor="text-gray-600"
      buttonTextColor="text-blue-600"
      buttonHoverColor="hover:text-blue-800"
      gridCols="lg:grid-cols-3 md:grid-cols-2 grid-cols-1"
      containerClass="max-w-7xl"
    />
            <TrendsSection
      mainTitle="Our"
      highlightText="Offerings"
      bulletPoints={offeringsData}
      bulletIcon="gai1.png"
    />
    <FitSection
  title={{
    main: "Agentic",
    highlight: "RAG"
  }}
  description="Agentic RAG merges intelligent task planning with retrieval-augmented reasoning. It allows agents to break queries into sub-steps, retrieve data iteratively, and generate coherent, grounded outputs."
  bulletPoints={[]} // No bullet points in this section
  image={{
    src: "/gai3.png", // Replace with actual image path
    alt: "Agentic RAG Illustration"
  }}
  backgroundColor="white"
  layout="right"
  showGlow={true}
/>
    <TrendsSection
      mainTitle="Agentic"
      highlightText="RAG Lifecycle"
      bulletPoints={lifecycleData}
      bulletIcon="gai1.png"
    />
    <FitSection
  title={{
    main: "Decision Tree:",
    highlight: "Choosing Your RAG Model"
  }}
  description="Select the right RAG architecture based on your specific use case or operational needs."
  bulletPoints={[
    "Need static Q&A? → Classic or Chunked RAG",
    "Multi-topic or complex tasks? → Hierarchical or Agentic RAG",
    "Real-time need? → Streaming RAG",
    "Compliance critical? → RAG with Re-ranking",
    "Step-wise planning? → Agentic RAG with memory/tool use"
  ]}
  image={{
    src: "/gai2.png", // Replace with actual image path
    alt: "RAG Decision Tree"
  }}
  backgroundColor="white"
  layout="left"
  showGlow={true}
/>

            <ContactForm/>
            <Footer/>
    </div>
        
    </div>
  )
}

export default page

