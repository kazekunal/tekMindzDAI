'use client'
import Image from "next/image";
import AILearning from "./components/ai_learn";
import CaseStudiesSection from "./components/case";
import ContactForm from "./components/connect";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import InsightsSection from "./components/insights";
import Leadership from "./components/leader";
import Navbar from "./components/navbar";
import OfferingsSection from "./components/offering";
import VisionSection from "./components/overview";
import ServicesSection from "./components/services";
import SolutionsSection from "./components/solutions";

export default function Home() {

  const servicesData = [
    {
      image: "/tek1.png",
      title: "AI & Machine Learning Services",
      description: "Build intelligent solutions with practical AI applications, driving innovation and efficiency across your business operations.",
      link: "/transform/services"
    },
    {
      image: "/tek2.png",
      title: "Data Engineering & Analytics",
      description: "Transform your raw data into actionable intelligence with robust data engineering and advanced analytics.",
      link: "/transform/services"
    },
    {
      image: "/tek3.png",
      title: "Platform Development",
      description: "Building scalable, intelligent, & AI-first platforms to power your digital future and accelerate growth.",
      link: "/transform/services"
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
    <>
      <Navbar/>
      <HeroSection/>
      <VisionSection/>
      <OfferingsSection/>
      <SolutionsSection/>
      <ServicesSection title="Services" services={servicesData} />
      {/* <InsightsSection/> */}
      <CaseStudiesSection title="Case Studies" caseStudySets={caseStudiesData} />
      <Leadership/>
      <AILearning/>
      <ContactForm/>
      <Footer/>
    </>
  );
}
