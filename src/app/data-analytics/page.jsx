

import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/transform_hero'
import FitSection from '@/app/components/transform_fit'
import ContactForm from '../components/connect'
import Footer from '../components/footer'
import DataAnalyticsService from '../components/dataAnalyticsServices'
import ReusableFeaturesSection from '../components/transform_why'
import CaseStudiesSection from '../components/case'
import InsightsSection from '../components/insights'
import AcceleratorsSection from '../components/accelerator'

function page() {

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
    
  return (
    <div>
        <div>
        <Navbar activeLink="Offerings"/>
        <HeroSection
            title={{
                main: "Transform Data into Decisions - ",
                highlight: " Empower Your Future with TekMindz Data Analytics"
            }}
            description="Tailored solutions powered by the latest technologies and industry best practices to transform your business insights into strategic advantage."
            image={{
                src: "/data1.png",
                alt: "Data Intelligence Visualization",
                width: 600,
                height: 384
            }}
            breadcrumb={{
                items: [
                { label: "Home", href: "/" },
                { label: "Data Analytics", href: "#", isActive: true }
                ]
            }}
            />
            <FitSection
            title={{
                main: "About Our",
                highlight: "Data Analytics Practice"
            }}
            description="At TekMindz, we specialize in crafting custom data analytics solutions that leverage cutting-edge AI, machine learning, and GenAI technologies. As we embark on our journey into AI and Data Analytics, we bring a fresh perspective combined with deep technological expertise to help you harness your data’s full potential.
            Our approach is grounded in industry best practices, ensuring data quality, security, and scalability while delivering actionable insights that drive real business outcomes."
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
    </div>
  )
}

export default page