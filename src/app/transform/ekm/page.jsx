'use client'
import ContactForm from '@/app/components/connect'
import GenerativeAIKnowledgeManagement from '@/app/components/knowledgeManagement'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/transform_navbar'
import React from 'react'
import GenAIUseCasesComponent from '@/app/components/ekmUseCase'
import EnterpriseKnowledgeBanner from '@/app/components/ekmBanner'
import { useState } from 'react'

function page() {
    const [activeTab, setActiveTab] = useState('genai');
  return (
    <div>
        <Navbar/>
        <EnterpriseKnowledgeBanner activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'genai' ? <GenerativeAIKnowledgeManagement /> : <GenAIUseCasesComponent />}
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page