import { useState } from 'react'
import PropTypes from 'prop-types'

const ModelCard = ({ model, index }) => {
  const isReversed = index % 2 !== 0

  return (
    <section className="banner-section" style={{ background: index % 2 === 0 ? '#fef5e7' : '#fff' }}>
      <div className={`banner-container ${isReversed ? 'reversed' : ''}`}>
        {!isReversed && (
          <div className="banner-image" style={{ backgroundImage: `url(${model.image})` }}></div>
        )}
        <div className="banner-content">
          <div className="subtitle">{model.subtitle}</div>
          <h2>{model.title}</h2>
          <div className="tagline">{model.tagline}</div>
          {model.description && <p>{model.description}</p>}
          <button className="banner-button" onClick={() => alert(`Explore ${model.title} - Coming Soon!`)}>
            {model.buttonText}
          </button>
        </div>
        {isReversed && (
          <div className="banner-image" style={{ backgroundImage: `url(${model.image})` }}></div>
        )}
      </div>
    </section>
  )
}

ModelCard.propTypes = {
  model: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}

const ModelShowcase = () => {
  const [showAllModels, setShowAllModels] = useState(true)

  const models = [
    {
      id: 1,
      subtitle: 'THE NEW',
      title: '2 Series',
      tagline: 'LEAVE BORING BEHIND.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop&q=80',
      buttonText: 'Skip Boring'
    },
    {
      id: 2,
      subtitle: 'LUXURY. FAST. FORWARD.',
      title: 'THE BMW 7 RANGE.',
      tagline: '',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&h=500&fit=crop&q=80',
      buttonText: 'Discover Now'
    },
    {
      id: 3,
      subtitle: 'THE ALL-NEW',
      title: 'X3',
      tagline: 'MASTER EVERY MOMENT.',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=500&fit=crop&q=80',
      buttonText: 'Discover Now'
    },
    {
      id: 4,
      subtitle: 'THE',
      title: 'iX1',
      tagline: 'LONG WHEELBASE',
      description: 'DOMINATE EVERYDAY. YOUR WAY.',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&q=80',
      buttonText: 'Discover Now'
    }
  ]

  return (
    <div id="models">
      <div className="section-controls">
        <button 
          className={`filter-btn ${showAllModels ? 'active' : ''}`}
          onClick={() => setShowAllModels(true)}
        >
          Show All Models
        </button>
        <button 
          className={`filter-btn ${!showAllModels ? 'active' : ''}`}
          onClick={() => setShowAllModels(false)}
        >
          Show Electric Only
        </button>
      </div>

      {showAllModels ? (
        models.map((model, index) => (
          <ModelCard key={model.id} model={model} index={index} />
        ))
      ) : (
        <ModelCard model={models[3]} index={0} />
      )}
    </div>
  )
}

export default ModelShowcase
