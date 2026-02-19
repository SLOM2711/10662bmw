import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      subtitle: '50 YEARS OF',
      title: 'COMFORTING',
      tagline: 'THRILL SEEKERS.',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&h=1080&fit=crop&q=80'
    },
    {
      id: 2,
      subtitle: 'THE FUTURE IS',
      title: 'ELECTRIC',
      tagline: 'DRIVE INTO TOMORROW.',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1920&h=1080&fit=crop&q=80'
    },
    {
      id: 3,
      subtitle: 'ULTIMATE',
      title: 'PERFORMANCE',
      tagline: 'FEEL THE POWER.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop&q=80'
    }
  ]

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const handleScrollDown = () => {
    document.getElementById('find')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-banner" id="home">
      <div 
        className="hero-image"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>
      
      <div className="hero-content">
        <div className="subtitle">{slides[currentSlide].subtitle}</div>
        <h1>{slides[currentSlide].title}</h1>
        <div className="tagline">{slides[currentSlide].tagline}</div>
        <button className="hero-button" onClick={handleScrollDown}>
          Discover Now
        </button>
      </div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator" onClick={handleScrollDown}>↓</div>
    </section>
  )
}

export default Hero
