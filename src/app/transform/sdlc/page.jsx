import Navbar from '@/app/components/navbar'
import React from 'react'
import SdlcBanner from '@/app/components/sdlcBanner'
import ContactForm from '@/app/components/connect'
import Footer from '@/app/components/footer'
import Sdlc from '@/app/components/sdlc'

function page() {
  return (
    <div>
        <Navbar/>
        <SdlcBanner/>
        <Sdlc/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page