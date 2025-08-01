'use client'
import ContactForm from '@/app/components/connect'
import GenerativeAIKnowledgeManagement from '@/app/components/knowledgeManagement'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/transform_navbar'
import React from 'react'
import GenAIUseCasesComponent from '@/app/components/ekmUseCase'
import ReusableBanner from '@/app/components/banner'
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
            titleMain="Enterprise Knowledge"
            titleHighlight="Management"
            description="Transform how your organization captures, organizes, and leverages knowledge with our AI-driven 
            knowledge management solutions that make information accessible and actionable."
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
        {activeTab === 'genai' ? <GenerativeAIKnowledgeManagement /> : <GenAIUseCasesComponent />}
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page