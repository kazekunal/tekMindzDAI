'use client'
import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/transform_hero'
import ContactForm from '../components/connect'
import FitSection from '../components/transform_fit'
import Footer from '../components/footer'
import ReusableFeaturesSection from '../components/transform_why'
import CaseStudiesSection from '../components/case'
import InsightsSection from '../components/insights'
import AcceleratorsSection from '../components/accelerator'
import DataAnalyticsService from '../components/dataAnalyticsServices'



function page() {

    const acceleratorsData = [
        {
          image: "data13.png",
          title: "Exploratory Data Analysis",
          subtitle: "Unveiling Hidden Patterns: The Art and Science of Exploratory Data Analysis.",
          description: "Discover insights through systematic data exploration and pattern recognition techniques."
        },
        {
          image: "data14.png",
          title: "Data Visualized, Intelligence Amplified",
          subtitle: "Transforming Complex Data into Actionable Business Insights",
          description: "Convert raw data into compelling visual stories that drive strategic decisions."
        },
        {
          image: "data15.png",
          title: "Data Cleaning Techniques",
          subtitle: "Clean Data, Smarter Business Decisions.",
          description: "Ensure data quality and reliability through proven cleaning methodologies."
        },
        {
          image: "data16.png",
          title: "Data Storytelling That Drives Decisions",
          subtitle: "Where Data Meets Storytelling — Clarity, Insight, and Impact.",
          description: "Craft compelling narratives from complex data to influence business outcomes."
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

      const tekMindzData = {
        title: (
          <p className='text-4xl'>
          Why Choose <span className="font-bold text-gray-900">TekMindz</span> for Your <br/> <span className="font-bold text-gray-900">Data Analytics  </span>Journey?
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
                main: "Transforming AI Innovation Into Enterprise Value",
                highlight: " Operationalize Machine Learning at Scale with Speed, Trust, and Precision"
            }}
            description="Deliver real-world impact with production-ready AI/ML solutions — from model development to deployment and lifecycle management — powered by robust MLOps, responsible AI, and domain-centric intelligence."
            image={{
                src: "/data1.png",
                alt: "Data Intelligence Visualization",
                width: 600,
                height: 384
            }}
            breadcrumb={{
                items: [
                { label: "Home", href: "/" },
                { label: "AI-ML", href: "#", isActive: true }
                ]
            }}
            />
            <FitSection
            title={{
                main: "About Our",
                highlight: "AI-ML Labs"
            }}
            description="At TekMinds AI-ML Labs, we're pioneering the future of intelligent automation through our comprehensive machine learning platform. Our labs focus on developing tailored ML solutions that empower both data scientists and business professionals to build sophisticated models without writing a single line of code."
            image={{
                src: "/data2.png",
                alt: "AI Transform Visualization"
            }}
            layout="left"
            backgroundColor="white"
            showGlow={true}

            />
            <DataAnalyticsService/>
            <AcceleratorsSection title="Accelerators" cards={acceleratorsData}/>
            <CaseStudiesSection title="Case Studies" caseStudySets={caseStudiesData} />
            <InsightsSection/>
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