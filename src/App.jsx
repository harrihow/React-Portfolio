import React from 'react'
import Navbar from './components/Nav/Navbar.jsx'
import HeroSection from './components/HeroSection/HeroSection.jsx'
import ProjectSection from './components/ProjectSection/ProjectSection.jsx'
import ContactSection from './components/ContactSection/ContactSection.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}

