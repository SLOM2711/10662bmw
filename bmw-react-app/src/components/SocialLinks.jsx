import PropTypes from 'prop-types'

const SocialIcon = ({ name, icon, url }) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="social-icon" onClick={handleClick} title={name}>
      {icon}
    </div>
  )
}

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const SocialLinks = () => {
  const socialData = [
    {
      name: 'Facebook',
      icon: 'f',
      url: 'https://www.facebook.com/bmwindia'
    },
    {
      name: 'Instagram',
      icon: 'ig',
      url: 'https://www.instagram.com/bmwindia_official/'
    },
    {
      name: 'YouTube',
      icon: 'yt',
      url: 'https://www.youtube.com/user/bmwindia'
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      url: 'https://www.linkedin.com/company/bmw-india'
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: 'https://twitter.com/bmwindia'
    }
  ]

  return (
    <section className="social-section">
      {socialData.map((social) => (
        <SocialIcon
          key={social.name}
          name={social.name}
          icon={social.icon}
          url={social.url}
        />
      ))}
    </section>
  )
}

export default SocialLinks
