const getAllExteriors = async () => {
  const response = await fetch(`http://localhost:3000/customizations/exteriors`)
  if (response) {
    const data = response.json()
    return data
  }
}

const getExteriorById = async (id) => {
  const response = await fetch(
    `http://localhost:3000/customizations/exteriors/${id}`
  )
  if (response) {
    const data = response.json()
    return data
  }
}

const getAllRoofs = async () => {
  const response = await fetch(`http://localhost:3000/customizations/roofs`)
  if (response) {
    const data = response.json()
    return data
  }
}

const getRoofById = async (id) => {
  const response = await fetch(
    `http://localhost:3000/customizations/roofs/${id}`
  )
  if (response) {
    const data = response.json()
    return data
  }
}

const getAllWheels = async () => {
  const response = await fetch(`http://localhost:3000/customizations/wheels`)
  if (response) {
    const data = response.json()
    return data
  }
}

const getWheelById = async (id) => {
  const response = await fetch(
    `http://localhost:3000/customizations/wheels/${id}`
  )
  if (response) {
    const data = response.json()
    return data
  }
}

const getAllInteriors = async () => {
  const response = await fetch(`http://localhost:3000/customizations/interiors`)
  if (response) {
    const data = response.json()
    return data
  }
}

const getInteriorById = async (id) => {
  const response = await fetch(
    `http://localhost:3000/customizations/interiors/${id}`
  )
  if (response) {
    const data = response.json()
    return data
  }
}

export default {
  getAllExteriors,
  getExteriorById,
  getAllRoofs,
  getRoofById,
  getAllWheels,
  getWheelById,
  getAllInteriors,
  getInteriorById,
}
