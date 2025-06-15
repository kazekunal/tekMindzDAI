import Image from "next/image";
import AILearning from "./components/ai_learn";
import CaseStudies from "./components/case";
import ContactForm from "./components/connect";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import InsightsSection from "./components/insights";
import Leadership from "./components/leader";
import Navbar from "./components/navbar";
import OfferingsSection from "./components/offering";
import VisionSection from "./components/overview";
import ServicesSection from "./components/services";
import SolutionsSection from "./components/solutions";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <VisionSection/>
      <OfferingsSection/>
      <SolutionsSection/>
      <ServicesSection/>
      <InsightsSection/>
      <CaseStudies/>
      <Leadership/>
      <AILearning/>
      <ContactForm/>
      <Footer/>
    </>
  );
}
