import "../css/CarSelection.css"

const CarSelection = ({ attributeName }) => {
  return (
    <div className="car-selection">
      <div className="car-selection-overlay">
        <div className="car-selection-details">
          <p>
            <strong>🖌️ {attributeName}:</strong> {attributeName}
          </p>
          <p className="option-price">💵 $[Price]</p>
        </div>
      </div>
    </div>
  )
}

export default CarSelection
