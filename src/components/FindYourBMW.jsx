import PropTypes from 'prop-types'

const ActionCard = ({ icon, title, buttonText, onAction }) => {
  return (
    <div className="action-card">
      <div className="action-icon">{icon}</div>
      <h3>{title}</h3>
      <button className="action-button" onClick={onAction}>
        {buttonText}
      </button>
    </div>
  )
}

ActionCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired
}

const FindYourBMW = () => {
  const actionCards = [
    {
      id: 1,
      icon: '🚗',
      title: 'Find a new car.',
      buttonText: 'Search Now',
      action: () => alert('Search feature coming soon! Browse our latest BMW models.')
    },
    {
      id: 2,
      icon: '🔍',
      title: 'Book a test drive.',
      buttonText: 'Request a Test Drive',
      action: () => {
        const name = prompt('Enter your name for test drive booking:')
        if (name) {
          alert(`Thank you ${name}! We'll contact you soon to schedule your BMW test drive.`)
        }
      }
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Build your own.',
      buttonText: 'Configure & Price',
      action: () => alert('Configure your dream BMW! Feature coming soon.')
    }
  ]

  return (
    <section className="find-section" id="find">
      <h2>Find your BMW.</h2>
      <div className="action-cards">
        {actionCards.map((card) => (
          <ActionCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            buttonText={card.buttonText}
            onAction={card.action}
          />
        ))}
      </div>
    </section>
  )
}

export default FindYourBMW
