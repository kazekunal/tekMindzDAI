import ContactForm from '@/app/components/connect'
import HeroSection from '@/app/components/transform_hero'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/transform_navbar'
import FitSection from '@/app/components/transform_fit'
import React from 'react'
import DataEngineeringAnalytics from '@/app/components/services_data'
import HowWeDoIt from '@/app/components/doit'
import DigitalTransformation from '@/app/components/digitalTransform'
import PlatformDevelopment from '@/app/components/platformDev'

function page() {
  return (
    <div>
        <Navbar/>
        <HeroSection
            title={{
                main: "Your Strategic Partner for",
                highlight: "AI/ML, Generative AI, & Platform Development"
            }}
            description="Partner with us to build custom, scalable, and intelligent platforms powered by AI/ML, Generative AI, Analytics, and modern software engineering."
            image={{
                src: "/services1.png",
                alt: "Data Intelligence Visualization",
                width: 600,
                height: 384
            }}
            breadcrumb={{
                items: [
                { label: "transform", href: "/transform" },
                { label: "Services", href: "/services", isActive: true }
                ]
            }}
            />
            <DataEngineeringAnalytics/>
            <FitSection
            title={{
                main: "AI & Machine",
                highlight: "Learning Services"
            }}
            description="Build intelligent solutions with practical AI applications."
            bulletPoints={[
                "AI readiness assessment",
                "Predictive analytics & anomaly detection",
                "Intelligent process automation",
                "Machine learning model development",
                "Domain-specific AI use cases (e.g., healthcare, logistics, finance)"
            ]}
            image={{
                src: "/services3.png",
                alt: "AI Transform Visualization"
            }}
            layout="left"
            showGlow={true}
            />

            <FitSection
            title={{
                main: "Generative",
                highlight: "AI Solutions"
            }}
            description="Innovate and automate with the power of GenAI."
            bulletPoints={[
                "Text summarization, content generation",
                "AI-powered knowledge management",
                "Custom GPT-based assistants",
                "GenAI for document automation and chatbots",
                "Prompt engineering & fine-tuning open-source models"
            ]}
            image={{
                src: "/services3.png",
                alt: "AI Transform Visualization"
            }}
            backgroundColor="white"
            layout="right"
            showGlow={true}
            />
            <PlatformDevelopment/>
            <FitSection
            title={{
                main: "Our",
                highlight: "Approach"
            }}
            description="We believe in building platforms, not just applications—with intelligence, automation, and extensibility at the core. Whether you're launching a new AI-powered product or modernizing a legacy system, we bring together product thinking, deep engineering, and responsible AI to drive meaningful results."
            image={{
                src: "/services4.png", // Replace with your actual image
                alt: "Our Approach Visualization"
            }}
            layout="left"
            showGlow={false}
            backgroundColor="white" // Light background
            imageBackdrop={{
                color: "white" // Light blue backdrop color
            }}
            highlightWords={[
                "platforms",
                "applications",
                "intelligence",
                "automation",
                "extensibility",
                "product",
                "thinking",
                "deep",
                "engineering",
                "responsible",
                "AI"
            ]}
            />
            <DigitalTransformation/>
            <HowWeDoIt/>
            <FitSection
            title={{
                main: "The",
                highlight: "Outcome"
            }}
            description="A smarter, faster, AI-infused business that delivers better outcomes, improves customer experience, and prepares you for the next decade of innovation."
            image={{
                src: "/services6.png",
                alt: "AI Transform Visualization"
            }}
            bulletPoints={[
                "In today's hyper-competitive market, AI isn't just an enhancement—it's a differentiator. Whether you're trying to stay relevant, drive efficiency, or launch new revenue models, TekMindz empowers you to make that leap intelligently and confidently."
            ]}
            layout="left"
            showGlow={true}
            />
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page