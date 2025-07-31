'use client'
import ContactForm from '@/app/components/connect'
import TekMindzGenAIServices from '@/app/components/customerExp'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/transform_navbar'
import React from 'react'
import UseCasesComponent from '@/app/components/customerExpUseCase'
import CustomerExperienceBanner from '@/app/components/customerExpBanner'
import { useState } from 'react'

function page() {
    const [activeTab, setActiveTab] = useState('genai');
  return (
    <div>
        <Navbar/>
        <CustomerExperienceBanner activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'genai' ? <TekMindzGenAIServices /> : <UseCasesComponent />}
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page