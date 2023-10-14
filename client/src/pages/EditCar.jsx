import CarSelection from "../components/CarSelection"
import "../css/EditCar.css"
import "../App.css"

const EditCar = () => {
  return (
    <article className="car-full-details">
      <header>
        <h2>[Car Name]</h2>
        <div className="create-car-options">
          <div id="customization-options" className="car-options">
            <div id="car-options">
              <button>Exterior</button>
            </div>
            <div id="car-options">
              <button>Roof</button>
            </div>
            <div id="car-options">
              <button>Wheels</button>
            </div>
            <div id="car-options">
              <button>Interior</button>
            </div>
          </div>
        </div>
      </header>
      <div className="details-content">
        <div class="car-details-price">
          <p>💰 [Price]</p>
        </div>
        <CarSelection attributeName={"Exterior"} />
        <CarSelection attributeName={"Roof"} />
        <div className="car-modify">
          <a href="/" role="button">
            Update
          </a>
          <button>Delete</button>
        </div>
        <CarSelection attributeName={"Wheels"} />
        <CarSelection attributeName={"Interior"} />
      </div>
    </article>
  )
}

export default EditCar
