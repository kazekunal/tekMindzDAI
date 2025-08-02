'use client'
import React from 'react'
import ContactForm from '../components/connect'
import Footer from '../components/footer'
import FitSection from '../components/transform_fit'
import HeroSection from '../components/transform_hero'
import Navbar from '../components/navbar'
import SolutionsSection from '../components/transform_sol'
import ReusableFeaturesSection from '../components/transform_why'

function page() {
    const tekMindzData = {
        title: (
          <>
            Why Choose <span className="font-bold text-gray-900">TekMindz</span>?
          </>
        ),
        features: [
            {
                image: "transform3.png",
                title: "Focused On Practical AI Adoption"
              },
              {
                image: "transform4.png",
                title: "Transparent, Consultative Approach"
              },
              {
                image: "transform5.png",
                title: "Strong Foundation In Custom Software Development"
              },
              {
                image: "transform6.png",
                title: "Commitment To Ethical And Sustainable AI"
              }
        ],
        cta: {
          title: (
            <>
              Ready To Explore <span className="font-bold">Possibilities?</span>
            </>
          ),
          description: "Transform with Us — and let's build the future, step by step.",
          buttonText: "Explore Our Services →",
          buttonLink: "/transform/services" // Changed to '#' for example purposes
        }
      };
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
