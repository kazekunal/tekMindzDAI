'use client'
import React from 'react'
import Navbar from '../components/transform_navbar'
import ReusableBanner from '@/app/components/banner'
import ContactForm from '../components/connect'
import Footer from '../components/footer'


function page() {
  return (
    <div>
        <div>
        <Navbar/>
        <ReusableBanner
            breadcrumb="Generative AI / RAG"
            titleMain="RAG: Retrieval Meets Generation "
            titleHighlight="A smarter Approach"
            description="Bridge the gap between static LLMs and dynamic enterprise knowledge"
        />
            <ContactForm/>
            <Footer/>
    </div>
        
    </div>
  )
}

export default page

