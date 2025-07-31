import React from 'react'
import ContactForm from '../components/connect'
import Footer from '../components/footer'
import FitSection from '../components/transform_fit'
import HeroSection from '../components/transform_hero'
import Navbar from '../components/transform_navbar'
import SolutionsSection from '../components/transform_sol'
import TekMindzFeatures from '../components/transform_why'

function page() {
    
  return (
    <div>
        <Navbar/>
        {/* <HeroSection/>
         */}
         <HeroSection
            title={{
                main: "Empowering your digital future through",
                highlight: "intelligent software services"
            }}
            description="At TekMindz, we partner with organizations to turn data into strategic advantage. With the evolving landscape of Artificial Intelligence, we're taking confident steps forward—helping our clients explore, pilot, and adopt AI in practical, impactful ways."
            image={{
                src: "/transform1.png",
                alt: "Data Intelligence Visualization",
                width: 600,
                height: 384
            }}
            breadcrumb={{
                items: [
                { label: "Home", href: "/" },
                { label: "Transform With Us", href: "/transform", isActive: true }
                ]
            }}
            />
        <SolutionsSection/>
        <FitSection
            title={{
                main: "Where We",
                highlight: "Fit In"
            }}
            description="Whether you're exploring your first AI use case or looking to enhance existing software with smarter capabilities, we offer flexible engagement models – from consulting to full-stack implementation."
            image={{
                src: "/transform2.png",
                alt: "AI Transform Visualization"
            }}
            layout="left"
            showGlow={true}
            />
        <TekMindzFeatures/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page
