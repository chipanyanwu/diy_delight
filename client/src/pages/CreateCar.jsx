import { useState } from "react"
import ReactModal from "react-modal"
import "../App.css"
import "../css/CreateCar.css"

const CreateCar = () => {
  const [modalStates, setModalStates] = useState({
    exterior: false,
    roof: false,
    wheels: false,
    interior: false,
  })

  const setModalState = (modalName, state) => {
    const newModalStates = modalStates
    if (modalName in newModalStates) {
      newModalStates[modalName] = state
      setModalStates(newModalStates)
    }
  }

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
