import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [showForm, setShowForm] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Store in localStorage
      localStorage.setItem('bmw_newsletter_email', email)
      localStorage.setItem('bmw_newsletter_name', name)
      
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setShowForm(false)
        setEmail('')
        setName('')
      }, 3000)
    }
  }

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-content">
        <div className="bmw-icon">BMW</div>
        <div className="newsletter-text">
          Stay up to date with the latest news from BMW
        </div>
        
        {!showForm ? (
          <button className="signup-button" onClick={() => setShowForm(true)}>
            Sign up →
          </button>
        ) : (
          <button className="signup-button secondary" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        )}
      </div>

      {showForm && !isSubmitted && (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <button type="submit" className="submit-button">
            Subscribe Now
          </button>
        </form>
      )}

      {isSubmitted && (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <p>Thank you {name}! You've successfully subscribed to BMW updates.</p>
        </div>
      )}
    </section>
  )
}

export default Newsletter
