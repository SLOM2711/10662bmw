import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FindYourBMW from './components/FindYourBMW'
import ModelShowcase from './components/ModelShowcase'
import SpecialOffers from './components/SpecialOffers'
import Newsletter from './components/Newsletter'
import Accordion from './components/Accordion'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ThemeToggle from './components/ThemeToggle'
import './styles/App.css'

function App() {
  // STATE 1: Theme Toggle (Dark/Light Mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  // STATE 2: Visit Counter using localStorage
  const [visitCount, setVisitCount] = useState(0)

  // STATE 3: Show/Hide Mobile Menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // STATE 4: Active Navigation Section
  const [activeSection, setActiveSection] = useState('home')

  // useEffect for theme persistence
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-mode')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  // useEffect for visit counter
  useEffect(() => {
    const count = parseInt(localStorage.getItem('visitCount') || '0')
    const newCount = count + 1
    setVisitCount(newCount)
    localStorage.setItem('visitCount', newCount.toString())
  }, [])

  // useEffect for scroll-based active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'find', 'models', 'offers', 'newsletter']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="App">
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <Header 
        activeSection={activeSection}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        visitCount={visitCount}
      />

      <main>
        <Hero />
        <FindYourBMW />
        <ModelShowcase />
        <SpecialOffers />
        <Newsletter />
        <Accordion />
        <SocialLinks />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App
