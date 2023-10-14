import { exteriors, roofs, wheels, interiors } from "../data/carData.js"

const getExteriors = (req, res) => {
  res.status(200).json(exteriors)
}

const getExteriorById = (req, res) => {
  res.status(200).json(exteriors[req.params.id])
}

const getRoofs = (req, res) => {
  res.status(200).json(roofs)
}

const getRoofById = (req, res) => {
  res.status(200).json(roofs[req.params.id])
}

const getWheels = (req, res) => {
  res.status(200).json(wheels)
}

const getWheelById = (req, res) => {
  res.status(200).json(wheels[req.params.id])
}

const getInteriors = (req, res) => {
  res.status(200).json(interiors)
}

const getInteriorById = (req, res) => {
  res.status(200).json(interiors[req.params.id])
}

export default {
  getExteriors,
  getExteriorById,
  getRoofs,
  getRoofById,
  getWheels,
  getWheelById,
  getInteriors,
  getInteriorById,
}
