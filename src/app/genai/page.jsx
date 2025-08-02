'use client'
import React from 'react'
import HeroSection from '@/app/components/transform_hero'
import Navbar from '../components/navbar'
import FitSection from '@/app/components/transform_fit'
import ServicesSection from '@/app/components/services'
import CaseStudiesSection from '@/app/components/case'
import ContactForm from '@/app/components/connect'
import Footer from '@/app/components/footer'

function page() {

    const servicesData = [
        {
          image: "/genai4.png",
          title: "Customer Experience",
          description: "Enhance your customer interactions with AI-powered solutions that personalize experiences, improve support efficiency, and drive deeper customer engagement and satisfaction.",
          link: "/genai/customer-experiences"
        },
        {
          image: "/genai5.png",
          title: "Enterprise Knowledge Management",
          description: "Transform how your organization captures, organizes, and leverages knowledge with our AI-driven knowledge management solutions that make information accessible and actionable.",
          link: "/genai/ekm"
        },
        {
          image: "/genai6.png",
          title: "Software Development Life Cycle Optimization",
          description: "Accelerate your development processes with AI tools that streamline coding, testing, and deployment while improving quality and reducing time-to-market.",
          link: "/genai/sdlc"
        }
      ];

      const caseStudiesData = [
        [ // First slide
          { id: 1, category: "Generative AI", title: "GenAI-Powered EV Charger Predictive Maintenance Revolution", image: "/study1.png", description: "Develop advanced POC using synthetic data for GenAI and Agentic AI predictive maintenance solutions with intelligent algorithms and conversational interfaces.", solution: "Multi-agent GenAI system with conversational AI, RAG-powered diagnostics, and LLM-driven predictive maintenance optimization platform." },
          { id: 2, category: "Data Analytics", title: "Behavioral Signal Engineering For Credit Risk Modeling", image: "/study2.png", challenge: "A leading retail bank aimed to improve the accuracy of its credit risk scoring model to reduce default rates on unsecured personal loans.", solution: "Engineered behavioral signals from transactional data to predict financial stress with 15% higher accuracy." },
          { id: 3, category: "Data Analytics", title: "Embedded Analytics for Real-Time Dealer Insights", image: "/study3.png", challenge: "A major automotive OEM needed to provide real-time sales, service, & parts analytics directly within their dealer portal.", solution: "Developed an embedded analytics module providing real-time dashboards, leading to a 30% increase in parts sales." }
        ],
        [ // Second slide
          { id: 4, category: "Platform Development", title: "Scalable E-Commerce Platform for a Fashion Retailer", image: "/study1.png", challenge: "A fast-growing fashion brand needed a platform that could handle rapidly increasing traffic and complex inventory management.", solution: "Built a microservices-based, cloud-native platform that handles 10x traffic and automates 80% of inventory tasks." },
          { id: 1, category: "Generative AI", title: "GenAI-Powered EV Charger Predictive Maintenance Revolution", image: "/study2.png", description: "Develop advanced POC using synthetic data for GenAI and Agentic AI predictive maintenance solutions with intelligent algorithms and conversational interfaces.", solution: "Multi-agent GenAI system with conversational AI, RAG-powered diagnostics, and LLM-driven predictive maintenance optimization platform." },
          { id: 2, category: "Data Analytics", title: "Behavioral Signal Engineering For Credit Risk Modeling", image: "/study3.png", challenge: "A leading retail bank aimed to improve the accuracy of its credit risk scoring model to reduce default rates on unsecured personal loans.", solution: "Engineered behavioral signals from transactional data to predict financial stress with 15% higher accuracy." },
        ]
      ];

  return (
    <div>
        <Navbar activeLink="Offerings"/>
        <HeroSection
            title={{
                main: "Transform Your",
                highlight: "Business with Generative AI"
            }}
            description="Discover how our cutting-edge generative AI services can revolutionize your operations, enhance customer experiences, and drive innovation across your organization."
            image={{
                src: "/genai1.png",
                alt: "Data Intelligence Visualization",
                width: 600,
                height: 384
            }}
            breadcrumb={{
                items: [
                { label: "home", href: "/" },
                { label: "genai", href: "/genai", isActive: true }
                ]
            }}
            
            />
        <FitSection
            title={{
                main: "What is",
                highlight: "Generative AI?"
            }}
            description="Generative AI refers to artificial intelligence systems that can create new content, including text, images, code, and more. Unlike traditional AI that focuses on analysis and prediction, generative AI can produce entirely new outputs based on patterns learned from training data.

            Our comprehensive generative AI solutions help enterprises implement these technologies effectively, securely, and at scale."
            image={{
                src: "/genai2.png",
                alt: "AI Transform Visualization"
            }}
            layout="left"
            backgroundColor="white"
            showGlow={true}

            />
            <ServicesSection title="Services" services={servicesData} />
            <FitSection
            title={{
                highlight: "Accelerators"
            }}
            description="Our pre-built accelerators help you implement generative AI solutions faster, with proven frameworks and components that reduce 
            time-to-value."
            bulletPoints={[
                "Smart Document Intelligence Suite",
                "Intelligent Customer Support Chatbot",
                "Code Review & Generation Assistant",
                "Marketing Content Generator"
            ]}
            image={{
                src: "/learn1.png",
                alt: "AI Transform Visualization"
            }}
            layout="right"
            backgroundColor="white"
            showGlow={true}
            />
            <CaseStudiesSection title="Case Studies" caseStudySets={caseStudiesData} />
            
            <ContactForm/>
            <Footer/>
    </div>
  )
}

export default page