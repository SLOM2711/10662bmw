import PropTypes from 'prop-types'

const FooterColumn = ({ title, links }) => {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired
}

const Footer = () => {
  const footerData = [
    {
      title: 'Contact & Info',
      links: ['Customer support', 'Online Genius (FAQ)', 'Accident Support', 'Request for Offer']
    },
    {
      title: 'Experience BMW',
      links: ['About us', 'BMW careers', 'BMW.com', 'BMW Group', 'BMW Chennai Plant']
    },
    {
      title: 'Assistance & Services',
      links: ['Book a Service Appointment', 'MY BMW App', 'Connected Drive', 'Warranties', 'Remote Software Upgrades']
    },
    {
      title: 'Choose & Buy',
      links: ['Build your Own', 'New Cars Search', 'BMW Financial Services', 'Finance & Leasing', 'BMW Offers', 'Book a Test Drive']
    },
    {
      title: 'Models',
      links: ['BMW X series', 'BMW 7 series', 'BMW 5 series', 'BMW 3 series', 'BMW 2 series', 'BMW M series']
    },
    {
      title: 'BMW Electric Cars',
      links: ['BMW Electric Vehicles']
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        {footerData.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
      </div>
      <div className="footer-bottom">
        <p>Copyright © BMW AG 2025</p>
        <div className="footer-links">
          <a href="#">Legal Disclaimer/Imprint</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
