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
        <HeroSection/>
        <SolutionsSection/>
        <FitSection/>
        <TekMindzFeatures/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page