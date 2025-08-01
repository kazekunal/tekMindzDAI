'use client'
import Navbar from '@/app/components/navbar'
import React from 'react'
// import SdlcBanner from '@/app/components/sdlcBanner'
import ReusableBanner from '@/app/components/banner'
import ContactForm from '@/app/components/connect'
import Footer from '@/app/components/footer'
import Sdlc from '@/app/components/sdlc'

function page() {
  return (
    <div>
        <Navbar/>
        {/* <SdlcBanner/> */}
        <ReusableBanner
            breadcrumb="Generative AI / Services"
            titleMain="Software Development"
            titleHighlight="Life Cycle Optimization"
            description="Accelerate your development processes with AI tools that streamline coding, testing, and deployment while improving quality and reducing time-to-market."
        />
        <Sdlc/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page