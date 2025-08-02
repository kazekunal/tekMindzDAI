import React from 'react'
import AITransformPage from '../components/aiLearnPage'
import ContactForm from '../components/connect'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function page() {
  return (
    <div>
        <Navbar activeLink="AI-Learning" />
        <AITransformPage/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page