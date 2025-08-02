'use client'
import React from 'react'
import ReusableBanner from '../components/banner'
import ContactForm from '../components/connect'
import Footer from '../components/footer'
import CaseStudySection from '../components/caseStudy'
import Navbar from '../components/navbar'

function page() {
  return (
    <div>
        <Navbar/>
        <ReusableBanner
  firstBreadcrumb={{ label: "Home", href: "/" }}
  secondBreadcrumb={{ label: "Case Studies", href: null }}
  titleMain="Case"
  titleHighlight="Studies"
  description="From predictive healthcare to intelligent automation, our case studies showcase measurable impact. Explore practical applications that drive innovation and efficiency."
/>
<CaseStudySection
  title="Case Studies Of"
  titleHighlight="Generative AI"
  sectionId="generative-ai-cases"
  isDarkTheme={false}
  caseStudies={[
    {
      id: 1,
      title: "GenAI-Powered EV Charger Predictive Maintenance Revolution",
      image: "/case1.png",
      challenge: "Develop advanced POC using synthetic data for GenAI and Agentic AI predictive maintenance solutions with intelligent algorithms and conversational interfaces.",
      solution: "Multi-agent GenAI system with conversational AI, RAG-powered diagnostics, and LLM-driven predictive maintenance optimization platform.",
      solutionLabel: "Our Solution:",
      link: "/case-study/genai-ev-charger"
    },
    {
      id: 2,
      title: "Agentic AI Chatbot Framework for Governance",
      image: "/case2.png",
      challenge: "A chatbot using NLP and GenAI empowers government departments with multilingual voice/text search, real-time dashboards, citizen services like grievance redressal, and intelligent document automation and analytics.",
      solution: "LLM-Semantic Agentic AI framework with RAG, LangChain, LangGraph, and LLMOps supports Whisper PaLM GPT—powering multilingual voice chatbots, document intelligence, and government analytics automation.",
      solutionLabel: "Our Solution:",
      link: "/case-study/agentic-ai-chatbot"
    },
    {
      id: 3,
      title: "AI-Driven Investment Advisor for Retail Investors",
      image: "/case3.png",
      challenge: "An AI-powered platform offering retail investors real-time, personalized equity mutual fund analysis through specialized agents integrating market data, sentiment, and financial metrics.",
      solution: "Agentic AI platform delivers real-time investment analysis by integrating third-party sources like Yahoo Finance via an LLM-Agentic framework, automating PDF reports and advanced risk metrics through multi-agent collaboration.",
      solutionLabel: "Our Solution:",
      link: "/case-study/ai-investment-advisor"
    }
  ]}
/>
<CaseStudySection
  title="Use Cases of"
  titleHighlight="Agentic AI"
  sectionId="agentic-ai-usecases"
  isDarkTheme={true}
  caseStudies={[
    {
      id: 1,
      title: "Smart Recruitment Agent",
      image: "/case4.png",
      useCase: "Screen, rank, and schedule candidates autonomously.",
      solution: "AI agent matches resumes, communicates via email, and books interviews.",
      solutionLabel: "Solution:",
    },
    {
      id: 2,
      title: "Financial Compliance Bot",
      image: "/case5.png",
      useCase: "Audit public sector expenditures and detect anomalies.",
      solution: "Agent parses reports, identifies risks, and flags exceptions automatically.",
      solutionLabel: "Solution:",
    },
    {
      id: 3,
      title: "Legal Knowledge Assistant",
      image: "/case6.png",
      useCase: "Responds to case law queries and document summaries.",
      solution: "Agent with LLM and RAG retrieves and explains legal content instantly.",
      solutionLabel: "Solution:",
    }
  ]}
/>
<CaseStudySection
  title="Case Studies Of"
  titleHighlight="Data Analytics"
  sectionId="data-analytics-cases"
  isDarkTheme={false}
  caseStudies={[
    {
      id: 1,
      title: "Behavioral Signal Engineering For Credit Risk Modeling In Retail Banking",
      image: "/case7.png",
      challenge: "A leading retail bank aimed to improve the accuracy of its credit risk scoring model to reduce default rates on unsecured personal loans. The existing model, based primarily on traditional demographic and transactional features, lacked the ability to distinguish subtle behavioral indicators of financial stress.",
    },
    {
      id: 2,
      title: "Real-Time Analytics & Predictive Maintenance For EV Charging Infrastructure",
      image: "/case8.png",
      challenge: "A leading national EV infrastructure provider operating over 10,000 AC and DC Fast Chargers across urban, highway, and rural zones. The client manages real-time charger operations and ensures high uptime, safety, and customer satisfaction through digital services.",
    
    },
    {
      id: 3,
      title: "Embedded Analytics Deliver Real-Time Dealer Insights In Automotive Retail",
      image: "/case9.png",
      challenge: "A major automotive OEM with over 500 dealerships across multiple regions needed to provide real-time sales, service & parts analytics directly within their dealer portal. The existing reporting was disjointed, delayed (weekly/ monthly), & required dealers to switch between systems, resulting in poor adoption & missed business insights.",
    }
  ]}
/>
    <ContactForm/>
    <Footer/>
    </div>
  )
}

export default page