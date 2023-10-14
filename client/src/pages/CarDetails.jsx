import CarSelection from "../components/CarSelection"

import "../css/CarDetails.css"
import "../App.css"

const CarDetails = () => {
  return (
    <article className="car-full-details">
      <header>
        <h2>[Car Name]</h2>
      </header>
      <div className="details-content">
        <div className="car-details-price">
          <p>💰 [Price]</p>
        </div>
        <CarSelection attributeName={"Exterior"} />
        <CarSelection attributeName={"Roof"} />
        <div className="car-modify">
          <a href="/" role="button">
            Edit
          </a>
          <button>Delete</button>
        </div>
        <CarSelection attributeName={"Wheels"} />
        <CarSelection attributeName={"Interior"} />
      </div>
    </article>
  )
}

export default CarDetails
