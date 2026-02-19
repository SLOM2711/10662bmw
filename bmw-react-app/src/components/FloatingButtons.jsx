import { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCall = () => {
    alert('📞 Call BMW India Customer Care:\n\n1800-102-2269\n\nAvailable Mon-Sat: 9:00 AM - 6:00 PM')
  }

  return (
    <>
      <div className="call-button" onClick={handleCall} title="Call Us">
        <div className="call-icon">📞</div>
      </div>

      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop} title="Back to Top">
          ↑
        </div>
      )}
    </>
  )
}

export default FloatingButtons
