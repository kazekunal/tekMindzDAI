'use client'
import ContactForm from '@/app/components/connect'
import TekMindzGenAIServices from '@/app/components/customerExp'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/transform_navbar'
import React from 'react'
import UseCasesComponent from '@/app/components/customerExpUseCase'
import { useState } from 'react'

function page() {
    const [activeTab, setActiveTab] = useState('genai');
    const tabs = [
        { key: 'genai', label: 'GenAI Services' },
        { key: 'usecases', label: 'Use Cases' }
      ];
  return (
    <div>
        <Navbar/>
        <ReusableBanner
            breadcrumb="Generative AI / Services"
            titleMain="Customer"
            titleHighlight="Experience"
            description="Enhance your customer interactions with AI-powered solutions that personalize experiences, improve support efficiency, and drive deeper customer engagement and satisfaction."
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        {activeTab === 'genai' ? <TekMindzGenAIServices /> : <UseCasesComponent />}
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page