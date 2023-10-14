import "../css/CarCard.css"

const CarCard = () => {
  return (
    <article>
      <header>
        <h3>[Car Name]</h3>
      </header>
      <div className="car-card">
        <div className="car-summary">
          <p>
            <strong>🖌️ Exterior:</strong> [Exterior]
          </p>
          <p>
            <strong>😎 Roof:</strong> [Roof]
          </p>
        </div>
        <div className="car-summary">
          <p>
            <strong>🛴 Wheels:</strong> [Wheels]
          </p>
          <p>
            <strong>💺 Interior:</strong> [Interior] Seat
          </p>
        </div>
        <div className="car-price">
          <p>
            💰 <strong>$[Price]</strong>
          </p>
          <a href="/" role="button">
            Details
          </a>
        </div>
      </div>
    </article>
  )
}

export default CarCard
