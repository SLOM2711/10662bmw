const SpecialOffers = () => {
  const handleViewOffers = () => {
    alert('Special Offers:\n\n✅ 0% Interest Rate\n✅ Extended Warranty\n✅ Free Service Package\n✅ Exchange Bonus\n\nVisit your nearest BMW showroom for details!')
  }

  return (
    <section className="offers-section" id="offers">
      <div className="offers-card">
        <div 
          className="offers-image"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1200&h=400&fit=crop&q=80)' 
          }}
        ></div>
        <div className="offers-content">
          <h2>BMW Special Offers.</h2>
          <p>
            Monthly EMI starting from Rs.32,222*/Month. Check Out similar BMW finance 
            offers available across the BMW range.
          </p>
          <button className="offers-link" onClick={handleViewOffers}>
            View Offers
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
