import React from 'react'
import Navbar from '../components/transform_navbar'
import HeroSection from '../components/transform_hero'
import ContactForm from '../components/connect'
import Footer from '../components/footer'

function page() {
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
            <ContactForm/>
            <Footer/>
    </div>
  )
}

export default page