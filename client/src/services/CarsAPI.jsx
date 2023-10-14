const getCars = async () => {
  const response = await fetch(`http://localhost:3000/cars`)
  if (response) {
    const data = response.json()
    return data
  }
}

const getCarById = async (id) => {
  const response = await fetch(`http://localhost:3000/cars/${id}`)
  if (response) {
    const data = response.json()
    return data
  }
}

const createCar = async (car) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  }

  const response = await fetch(`http://localhost:3000/cars`, options)
  if (response) {
    const data = response.json()
    return data
  }
}

const updateCar = async (id, car) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  }

  const response = await fetch(`http://localhost:3000/cars/${id}`, options)
  if (response) {
    const data = response.json()
    return data
  }
}

const deleteCar = async (id) => {
  const options = {
    method: "DELETE",
  }

  const response = await fetch(`http://localhost:3000/cars/${id}`, options)
  if (response) {
    const data = response.json()
    return data
  }
}

export default {
  getCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
}
