import React from "react"
import "../App.css"
import "../css/CreateCar.css"

const CreateCar = () => {
  return (
    <div className="create-car">
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
      <div className="create-car-price">💰$10,000,000</div>
      <div className="create-car-name">
        <input type="text" id="name" name="name" placeholder="My New Car" />
        <input type="submit" className="create-car-button" value="Create" />
      </div>
    </div>
  )
}

export default CreateCar
