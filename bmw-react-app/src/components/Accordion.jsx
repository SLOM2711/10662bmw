import { useState } from 'react'
import PropTypes from 'prop-types'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`} onClick={onToggle}>
      <h3>{title}</h3>
      <span className="accordion-icon">{isOpen ? '−' : '›'}</span>
      
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {content.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const accordionData = [
    {
      title: 'Contact & Info',
      content: ['Customer support', 'Online Genius (FAQ)', 'Accident Support', 'Request for Offer']
    },
    {
      title: 'Experience BMW',
      content: ['About us', 'BMW careers', 'BMW.com', 'BMW Group', 'BMW Chennai Plant']
    },
    {
      title: 'Assistance & Services',
      content: ['Book a Service Appointment', 'MY BMW App', 'Connected Drive', 'Warranties', 'Remote Software Upgrades']
    },
    {
      title: 'Choose & Buy',
      content: ['Build your Own', 'New Cars Search', 'BMW Financial Services', 'Finance & Leasing', 'BMW Offers', 'Book a Test Drive']
    },
    {
      title: 'Models',
      content: ['BMW X series', 'BMW 7 series', 'BMW 5 series', 'BMW 3 series', 'BMW 2 series', 'BMW M series']
    },
    {
      title: 'BMW Electric Cars',
      content: ['BMW Electric Vehicles', 'Charging Solutions', 'Electric Range', 'Sustainability']
    }
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="accordion-section" id="more">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </section>
  )
}

export default Accordion
